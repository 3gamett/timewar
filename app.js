const STORAGE = {
  heroes: 'timewar.v2.heroes',
  skills: 'timewar.v2.skills',
  teams: 'timewar.v2.teams'
};

const DEFAULT_SKILLS = [
  { id: "flame_dance", name: "流焔乱舞", category: "active", trigger: "action", chance: 50, description: "敵に強力なダメージを与える。" },
  { id: "still_prayer", name: "静止の祈り", category: "active", trigger: "action", chance: 40, description: "敵をスタンさせ、味方を回復する。" },
  { id: "slash", name: "斬撃", category: "active", trigger: "action", chance: 40, description: "敵単体に物理ダメージ。" },
  { id: "heal", name: "治癒の光", category: "active", trigger: "action", chance: 35, description: "味方の兵力を回復する。" }
];

const DEFAULT_HEROES = [
  { id: "nobunaga", name: "織田信長", stats: { atk: 250, def: 150, int: 180, agi: 220 }, uniqueSkill: "流焔乱舞" },
  { id: "galileo", name: "ガリレオ・ガリレイ", stats: { atk: 120, def: 180, int: 280, agi: 150 }, uniqueSkill: "静止の祈り" },
  { id: "zenobia", name: "ゼノビア", stats: { atk: 180, def: 200, int: 150, agi: 120 }, uniqueSkill: "パルメラの抵抗" }
];

let state = {
  heroes: [],
  skills: [],
  teams: { left: Array(3).fill(null).map(() => ({id:'', troops: 10000, subSkills:['','']})), 
           right: Array(3).fill(null).map(() => ({id:'', troops: 10000, subSkills:['','']})) },
  battle: null,
  viewTurn: 0,
  autoTimer: null
};

// --- 初期化 ---
function init() {
  loadData();
  renderAll();
  bindEvents();
}

function loadData() {
  state.heroes = JSON.parse(localStorage.getItem(STORAGE.heroes)) || DEFAULT_HEROES;
  state.skills = JSON.parse(localStorage.getItem(STORAGE.skills)) || DEFAULT_SKILLS;
  const savedTeams = JSON.parse(localStorage.getItem(STORAGE.teams));
  if (savedTeams) state.teams = savedTeams;
}

function saveData() {
  localStorage.setItem(STORAGE.heroes, JSON.stringify(state.heroes));
  localStorage.setItem(STORAGE.skills, JSON.stringify(state.skills));
  localStorage.setItem(STORAGE.teams, JSON.stringify(state.teams));
}

// --- 戦闘ロジック ---
class Battle {
  constructor(left, right) {
    this.sides = { left: this.initTeam(left, 'left'), right: this.initTeam(right, 'right') };
    this.turn = 0;
    this.phase = 'opening'; // opening, start, action, end
    this.logs = { 0: [] };
    this.finished = false;
    this.order = [];
    this.currentActorIdx = 0;
  }

  initTeam(teamData, side) {
    return teamData.map((slot, idx) => {
      const hero = state.heroes.find(h => h.id === slot.id);
      if (!hero) return null;
      return {
        ...JSON.parse(JSON.stringify(hero)),
        side,
        pos: idx,
        currentTroops: slot.troops,
        maxTroops: slot.troops,
        subSkills: slot.subSkills.map(sid => state.skills.find(s => s.id === sid)).filter(Boolean),
        buffs: [],
        status: []
      };
    }).filter(Boolean);
  }

  addLog(msg) {
    if (!this.logs[this.turn]) this.logs[this.turn] = [];
    this.logs[this.turn].push(msg);
  }

  nextChunk() {
    if (this.finished) return;

    switch (this.phase) {
      case 'opening':
        this.processOpening();
        this.phase = 'start';
        break;
      case 'start':
        this.addLog(`--- ターン ${this.turn} 開始 ---`);
        this.prepareOrder();
        this.phase = 'action';
        this.currentActorIdx = 0;
        break;
      case 'action':
        this.processAction();
        break;
      case 'end':
        this.turn++;
        this.phase = 'start';
        if (this.turn > 10) this.finished = true;
        break;
    }
    if (this.checkWinLoss()) this.finished = true;
  }

  processOpening() {
    this.addLog("【0ターン目：準備フェーズ】");
    [...this.sides.left, ...this.sides.right].forEach(unit => {
      this.addLog(`${unit.name} のパッシブ・固有スキルが発動準備...`);
    });
  }

  prepareOrder() {
    this.order = [...this.sides.left, ...this.sides.right]
      .filter(u => u.currentTroops > 0)
      .sort((a, b) => b.stats.agi - a.stats.agi);
  }

  processAction() {
    const actor = this.order[this.currentActorIdx];
    if (actor && actor.currentTroops > 0) {
      this.executeNormalAttack(actor);
    }
    this.currentActorIdx++;
    if (this.currentActorIdx >= this.order.length) {
      this.phase = 'end';
    }
  }

  executeNormalAttack(actor) {
    const targetSide = actor.side === 'left' ? 'right' : 'left';
    const targets = this.sides[targetSide].filter(u => u.currentTroops > 0);
    if (targets.length === 0) return;
    const target = targets[0];

    // ダメージ計算式の実装
    const atk = actor.stats.atk;
    const def = target.stats.def;
    const troops = actor.currentTroops;
    const random = 0.95 + Math.random() * 0.1;
    
    let dmg = ((atk - def) * 1.5 + ((-0.05 / 10000 * troops) + 0.1) * troops) * random;
    dmg = Math.max(1, Math.round(dmg));

    target.currentTroops -= dmg;
    this.addLog(`${actor.name} の攻撃！ ${target.name} に ${dmg} のダメージ。(残り兵力: ${Math.max(0, target.currentTroops)})`);
  }

  checkWinLoss() {
    const leftAlive = this.sides.left.some(u => u.currentTroops > 0);
    const rightAlive = this.sides.right.some(u => u.currentTroops > 0);
    if (!leftAlive) { this.addLog("左軍が全滅しました。右軍の勝利！"); return true; }
    if (!rightAlive) { this.addLog("右軍が全滅しました。左軍の勝利！"); return true; }
    return false;
  }
}

// --- UI制御 ---
function renderAll() {
  renderFormation();
  renderLog();
  updateStatus();
}

function renderFormation() {
  const sides = ['left', 'right'];
  sides.forEach(side => {
    const container = document.getElementById(`team${side.charAt(0).toUpperCase() + side.slice(1)}Slots`);
    container.innerHTML = state.teams[side].map((slot, i) => `
      <div class="slot">
        <select onchange="updateSlot('${side}', ${i}, 'id', this.value)">
          <option value="">-- 偉人選択 --</option>
          ${state.heroes.map(h => `<option value="${h.id}" ${slot.id === h.id ? 'selected' : ''}>${h.name}</option>`).join('')}
        </select>
        <input type="number" step="1000" value="${slot.troops}" onchange="updateSlot('${side}', ${i}, 'troops', this.value)" placeholder="兵力">
        <select onchange="updateSlot('${side}', ${i}, 'sub1', this.value)">
          <option value="">-- スキル1 --</option>
          ${state.skills.map(s => `<option value="${s.id}" ${slot.subSkills[0] === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
        </select>
        <select onchange="updateSlot('${side}', ${i}, 'sub2', this.value)">
          <option value="">-- スキル2 --</option>
          ${state.skills.map(s => `<option value="${s.id}" ${slot.subSkills[1] === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
        </select>
      </div>
    `).join('');
  });
}

window.updateSlot = (side, idx, field, value) => {
  if (field === 'id') state.teams[side][idx].id = value;
  if (field === 'troops') state.teams[side][idx].troops = parseInt(value);
  if (field === 'sub1') state.teams[side][idx].subSkills[0] = value;
  if (field === 'sub2') state.teams[side][idx].subSkills[1] = value;
  saveData();
};

function renderLog() {
  const logView = document.getElementById('logView');
  const turnLabel = document.getElementById('currentTurnLabel');
  if (!state.battle) {
    logView.textContent = "戦闘を開始してください。";
    return;
  }
  turnLabel.textContent = `Turn ${state.viewTurn}`;
  logView.textContent = (state.battle.logs[state.viewTurn] || []).join('\n');
  document.getElementById('logScrollArea').scrollTop = 0;
}

function updateStatus() {
  if (!state.battle) return;
  document.getElementById('battleStatus').textContent = state.battle.finished ? "終了" : "進行中";
  document.getElementById('turnStatus').textContent = `Turn: ${state.battle.turn}`;
  document.getElementById('chunkStatus').textContent = `Phase: ${state.battle.phase}`;
}

// --- イベント ---
function bindEvents() {
  document.getElementById('btnStartBattle').onclick = () => {
    state.battle = new Battle(state.teams.left, state.teams.right);
    state.viewTurn = 0;
    renderAll();
  };
  document.getElementById('btnNextChunk').onclick = () => {
    if (state.battle) {
      state.battle.nextChunk();
      state.viewTurn = state.battle.turn;
      renderAll();
    }
  };
  document.getElementById('btnAutoRun').onclick = () => {
    if (state.autoTimer) return;
    state.autoTimer = setInterval(() => {
      if (!state.battle || state.battle.finished) {
        clearInterval(state.autoTimer);
        state.autoTimer = null;
        return;
      }
      state.battle.nextChunk();
      state.viewTurn = state.battle.turn;
      renderAll();
    }, 800); // 0.8秒ごとに進行（じっくり見られる速度）
  };
  document.getElementById('btnStopAuto').onclick = () => {
    clearInterval(state.autoTimer);
    state.autoTimer = null;
  };
  document.getElementById('btnPrevTurn').onclick = () => {
    if (state.viewTurn > 0) { state.viewTurn--; renderLog(); }
  };
  document.getElementById('btnNextTurn').onclick = () => {
    if (state.battle && state.viewTurn < state.battle.turn) { state.viewTurn++; renderLog(); }
  };
}

document.addEventListener('DOMContentLoaded', init);
