
const STORAGE = {
  heroes: 'timewar.complete.heroes.v1',
  skills: 'timewar.complete.skills.v1',
  teams: 'timewar.complete.teams.v1',
  battle: 'timewar.complete.battle.v1',
  log: 'timewar.complete.log.v1',
};

const DEFAULT_HEROES = [
  {
    "id": "zenobia",
    "name": "ゼノビア",
    "stats": {
      "atk": 79,
      "def": 187,
      "int": 134,
      "agi": 93,
      "rng": 2
    },
    "skills": [
      "パルメラの抵抗"
    ],
    "faction": "reference"
  },
  {
    "id": "lincoln",
    "name": "リンカーン",
    "stats": {
      "atk": 128,
      "def": 136,
      "int": 214,
      "agi": 128,
      "rng": 4
    },
    "skills": [
      "自由の宣言"
    ],
    "faction": "reference"
  },
  {
    "id": "kublai",
    "name": "フビライ・ハン",
    "stats": {
      "atk": 128,
      "def": 137,
      "int": 165,
      "agi": 221,
      "rng": 3
    },
    "skills": [
      "モンゴルの拡張"
    ],
    "faction": "reference"
  },
  {
    "id": "rin",
    "name": "リン",
    "stats": {
      "atk": 150,
      "def": 125,
      "int": 250,
      "agi": 200,
      "rng": 5
    },
    "skills": [
      "赤眼の眼光"
    ],
    "faction": "reference"
  },
  {
    "id": "monet",
    "name": "モネ",
    "stats": {
      "atk": 25,
      "def": 175,
      "int": 275,
      "agi": 35,
      "rng": 2
    },
    "skills": [
      "幻影の芸術"
    ],
    "faction": "reference"
  },
  {
    "id": "carl",
    "name": "カール",
    "stats": {
      "atk": 100,
      "def": 200,
      "int": 150,
      "agi": 50,
      "rng": 3
    },
    "skills": [
      "岩壁の鉄槌"
    ],
    "faction": "reference"
  },
  {
    "id": "mark",
    "name": "マーク",
    "stats": {
      "atk": 175,
      "def": 175,
      "int": 175,
      "agi": 175,
      "rng": 2
    },
    "skills": [
      "正義の心"
    ],
    "faction": "reference"
  },
  {
    "id": "zono",
    "name": "ゾノ",
    "stats": {
      "atk": 300,
      "def": 75,
      "int": 75,
      "agi": 300,
      "rng": 14
    },
    "skills": [
      "狂気のバーサーカー"
    ],
    "faction": "reference"
  },
  {
    "id": "george",
    "name": "ジョージ",
    "stats": {
      "atk": 75,
      "def": 150,
      "int": 200,
      "agi": 170,
      "rng": 5
    },
    "skills": [
      "鉄砲王"
    ],
    "faction": "reference"
  },
  {
    "id": "chrono",
    "name": "クロノス",
    "stats": {
      "atk": 132,
      "def": 165,
      "int": 285,
      "agi": 190,
      "rng": 5
    },
    "skills": [
      "時環の指揮",
      "時律の逆行"
    ],
    "faction": "original"
  },
  {
    "id": "ryuka",
    "name": "リュウカ",
    "stats": {
      "atk": 248,
      "def": 120,
      "int": 180,
      "agi": 262,
      "rng": 3
    },
    "skills": [
      "流焔乱舞",
      "灼熱の残響"
    ],
    "faction": "original"
  },
  {
    "id": "noa",
    "name": "ノア",
    "stats": {
      "atk": 140,
      "def": 190,
      "int": 240,
      "agi": 145,
      "rng": 4
    },
    "skills": [
      "時律の庇護",
      "静止の祈り"
    ],
    "faction": "original"
  }
];
const DEFAULT_SKILLS = [
  {
    "id": "palmera",
    "name": "パルメラの抵抗",
    "category": "passive",
    "trigger": "damageTaken",
    "chance": 100,
    "target": "self",
    "special": "palmera_counter",
    "description": "被ダメージ時に反撃し、1ターンの眩暈または消耗を付与する。"
  },
  {
    "id": "freedom",
    "name": "自由の宣言",
    "category": "engage",
    "trigger": "battleStart",
    "chance": 100,
    "target": "enemyRandom",
    "special": "freedom_declaration",
    "description": "味方がアクティブを発動しようとすると追撃し、条件で追加発動と回復を行う。"
  },
  {
    "id": "mongol",
    "name": "モンゴルの拡張",
    "category": "engage",
    "trigger": "battleStart",
    "chance": 100,
    "target": "allyTwo",
    "special": "mongol_expansion",
    "description": "指揮官の与ダメージ上昇と被ダメージ減少、行動終了時にデバフ解除を試みる。"
  },
  {
    "id": "red_eye",
    "name": "赤眼の眼光",
    "category": "passive",
    "trigger": "turnStart",
    "chance": 100,
    "target": "enemyAll",
    "special": "red_eye",
    "description": "毎ターン敵軍全体のATK/INTを減少し、自身のATK/INT/DEFを上昇。"
  },
  {
    "id": "phantom",
    "name": "幻影の芸術",
    "category": "engage",
    "trigger": "battleStart",
    "chance": 100,
    "target": "allyAll",
    "special": "phantom_art",
    "description": "戦闘前に自軍全体へシールドを与え、制御反応を持つ。"
  },
  {
    "id": "stone_hammer",
    "name": "岩壁の鉄槌",
    "category": "active",
    "trigger": "action",
    "chance": 45,
    "target": "enemyAll",
    "prepTurns": 1,
    "special": "stone_hammer",
    "description": "1ターンの準備後、敵軍全体に大ダメージ。"
  },
  {
    "id": "justice",
    "name": "正義の心",
    "category": "passive",
    "trigger": "battleStart",
    "chance": 100,
    "target": "self",
    "special": "justice_heart",
    "description": "開幕無敵、アクティブ発動率上昇、アクティブ使用ごとに自己強化。"
  },
  {
    "id": "berserker",
    "name": "狂気のバーサーカー",
    "category": "engage",
    "trigger": "battleStart",
    "chance": 100,
    "target": "self",
    "special": "berserker",
    "description": "毎ターンRNGが減少し、3ターン目以降は狂乱攻撃。"
  },
  {
    "id": "gunmaster",
    "name": "鉄砲王",
    "category": "engage",
    "trigger": "battleStart",
    "chance": 100,
    "target": "self",
    "special": "gunmaster",
    "description": "連撃を獲得し、通常攻撃のたびに奇襲を獲得することがある。"
  },
  {
    "id": "heal_def",
    "name": "修復防御",
    "category": "active",
    "trigger": "action",
    "chance": 55,
    "target": "selfAndLowestAlly",
    "special": "repair_defense",
    "description": "自身と兵力が最も低い友軍を回復し、防御を上げる。"
  },
  {
    "id": "budo",
    "name": "文武両道",
    "category": "active",
    "trigger": "action",
    "chance": 50,
    "target": "enemyTwo",
    "special": "budo",
    "description": "敵2人に知力ダメージと与ダメージ低下。"
  },
  {
    "id": "sage_plot",
    "name": "賢者の謀",
    "category": "active",
    "trigger": "action",
    "chance": 40,
    "target": "enemyTwoRandom",
    "special": "sage_plot",
    "description": "敵2人に回復禁止と知力ダメージ。"
  },
  {
    "id": "eloquence",
    "name": "巧みな弁舌",
    "category": "active",
    "trigger": "action",
    "chance": 40,
    "target": "enemyTwo",
    "special": "eloquence",
    "description": "回避と挑発、攻撃低下。"
  },
  {
    "id": "final_battle",
    "name": "最終決戦",
    "category": "passive",
    "trigger": "battleStart",
    "chance": 100,
    "target": "self",
    "special": "final_battle",
    "description": "アクティブ発動率とアクティブ与ダメージが伸びる。"
  },
  {
    "id": "purge",
    "name": "祓いの加護",
    "category": "active",
    "trigger": "action",
    "chance": 35,
    "target": "allyThree",
    "special": "purge",
    "description": "味方3人のデバフ解除と攻撃/知力上昇。"
  },
  {
    "id": "slash",
    "name": "斬撃",
    "category": "active",
    "trigger": "action",
    "chance": 35,
    "target": "enemyRandom",
    "special": "slash",
    "description": "ランダム敵に2回攻撃。"
  },
  {
    "id": "mental_heal",
    "name": "念力の治癒",
    "category": "active",
    "trigger": "action",
    "chance": 35,
    "target": "allyTwoRandom",
    "special": "mental_heal",
    "description": "味方2人を回復し、制御効果を1つ解除。"
  },
  {
    "id": "vampire",
    "name": "吸血",
    "category": "passive",
    "trigger": "damageDealt",
    "chance": 100,
    "target": "self",
    "special": "vampire",
    "description": "与えた総ダメージ量の一部を回復。"
  },
  {
    "id": "bullet",
    "name": "追撃の銃弾",
    "category": "combo",
    "trigger": "afterNormalAttack",
    "chance": 35,
    "target": "attackTarget",
    "special": "bullet",
    "description": "通常攻撃後に知力ダメージを2回。"
  },
  {
    "id": "supply",
    "name": "継戦補給",
    "category": "combo",
    "trigger": "afterNormalAttack",
    "chance": 40,
    "target": "attackTarget",
    "special": "supply",
    "description": "通常攻撃後に攻撃し、回復を行う。"
  },
  {
    "id": "full_heal",
    "name": "全面治癒",
    "category": "engage",
    "trigger": "turnStart",
    "chance": 40,
    "target": "allyAll",
    "special": "full_heal",
    "description": "毎ターン開始時に自軍全体を回復。"
  },
  {
    "id": "dragon_roar",
    "name": "龍の咆哮",
    "category": "active",
    "trigger": "action",
    "chance": 50,
    "target": "enemyAll",
    "special": "dragon_roar",
    "description": "味方のダメージを上げつつ敵全体へ知力ダメージ。"
  },
  {
    "id": "sniper",
    "name": "狙撃者の心得",
    "category": "passive",
    "trigger": "battleStart",
    "chance": 100,
    "target": "self",
    "special": "sniper",
    "description": "必中とクリティカル率上昇。"
  },
  {
    "id": "rainbow_view",
    "name": "虹の景色",
    "category": "engage",
    "trigger": "battleStart",
    "chance": 100,
    "target": "enemyRandom",
    "special": "rainbow_view",
    "description": "開幕沈黙、4ターン目以降に破陣と回復。"
  },
  {
    "id": "shield_guard",
    "name": "鉄壁の守護",
    "category": "engage",
    "trigger": "battleStart",
    "chance": 100,
    "target": "allyTwoRandom",
    "special": "shield_guard",
    "description": "2人に被ダメージ減少を付与。"
  },
  {
    "id": "stockpile",
    "name": "機を蓄える",
    "category": "passive",
    "trigger": "turnStart",
    "chance": 100,
    "target": "self",
    "special": "stockpile",
    "description": "毎ターン自分を回復し、防御を上げる。"
  },
  {
    "id": "time_command",
    "name": "時環の指揮",
    "category": "engage",
    "trigger": "battleStart",
    "chance": 100,
    "target": "allyAll",
    "special": "time_command",
    "description": "時の流れを整え、自軍全体のAGIを上げる。"
  },
  {
    "id": "time_reversal",
    "name": "時律の逆行",
    "category": "active",
    "trigger": "action",
    "chance": 45,
    "target": "enemyTwo",
    "special": "time_reversal",
    "description": "敵2人に知力ダメージとAGI低下。"
  },
  {
    "id": "flame_dance",
    "name": "流焔乱舞",
    "category": "active",
    "trigger": "action",
    "chance": 55,
    "target": "enemyRandom",
    "special": "flame_dance",
    "description": "ランダム敵に2回攻撃し、持続ダメージを付与。"
  },
  {
    "id": "ember_echo",
    "name": "灼熱の残響",
    "category": "combo",
    "trigger": "afterNormalAttack",
    "chance": 30,
    "target": "attackTarget",
    "special": "ember_echo",
    "description": "通常攻撃後に追加攻撃し、燃焼を付与。"
  },
  {
    "id": "time_shield",
    "name": "時律の庇護",
    "category": "engage",
    "trigger": "battleStart",
    "chance": 100,
    "target": "allyAll",
    "special": "time_shield",
    "description": "味方全体にシールドと一時的な無敵を与える。"
  },
  {
    "id": "still_prayer",
    "name": "静止の祈り",
    "category": "active",
    "trigger": "action",
    "chance": 40,
    "target": "enemyTwo",
    "special": "still_prayer",
    "description": "敵2人に眩暈、味方2人を回復。"
  }
];
const DEFAULT_TEAMS = {
  "left": [
    "chrono",
    "ryuka",
    "noa"
  ],
  "right": [
    "zenobia",
    "lincoln",
    "kublai"
  ]
};

const POSITION_ORDER = ['commander', 'middle', 'front'];
const POSITION_LABELS = ['指揮官', '中軍', '前衛'];
const SIDE_LABEL = { left: '左軍', right: '右軍' };
const COMBAT_DEBUFFS = new Set(['silence','stun','disarm','confusion','frenzy','weaken','healBlock','fatigue','capture','feign','taunt']);
const CONTROL_DEBUFFS = new Set(['silence','stun','disarm','confusion','frenzy','capture','taunt']);
const BUFF_KINDS = new Set(['statFlat','statMult','damageBonusPct','damageTakenReductionPct','healBonusPct','critChancePct','evadeChancePct','hitChancePct','extraAttack','invincible','preempt','assault','shieldBoost']);

const state = {
  heroes: clone(DEFAULT_HEROES),
  skills: clone(DEFAULT_SKILLS),
  teams: clone(DEFAULT_TEAMS),
  battle: null,
  log: [],
  autoTimer: null,
};

const els = {};

document.addEventListener('DOMContentLoaded', init);

function init() {
  cacheElements();
  ensureBootState();
  bindEvents();
  renderAll();
}

function cacheElements() {
  [
    'btnLoadDefaults','btnLoadSaved','btnSaveAll','btnResetAll',
    'battleStatus','turnStatus','chunkStatus','orderStatus',
    'timeSide','btnStartBattle','btnNextChunk','btnAutoRun','btnStopAuto',
    'btnReverse','btnRewind','btnProtect','btnLoadSample',
    'teamLeftSlots','teamRightSlots','btnRefreshSlots',
    'heroesJson','skillsJson','btnHeroesTemplate','btnHeroesSave','btnHeroesExport','heroesFile',
    'btnSkillsTemplate','btnSkillsSave','btnSkillsExport','skillsFile',
    'savedHeroesList','savedSkillsList','btnReloadLists',
    'logView','btnCopyLog','btnClearLog',
  ].forEach(id => els[id] = document.getElementById(id));
}

function bindEvents() {
  els.btnLoadDefaults.addEventListener('click', () => {
    stopAuto();
    loadDefaults(true);
    renderAll();
    toast('初期データに戻しました。');
  });

  els.btnLoadSaved.addEventListener('click', () => {
    stopAuto();
    loadFromStorage();
    renderAll();
    toast('保存済みデータを読み込みました。');
  });

  els.btnSaveAll.addEventListener('click', () => {
    saveToStorage();
    toast('今の状態を保存しました。');
  });

  els.btnResetAll.addEventListener('click', () => {
    if (!confirm('保存データをすべて消して初期状態に戻しますか？')) return;
    localStorage.removeItem(STORAGE.heroes);
    localStorage.removeItem(STORAGE.skills);
    localStorage.removeItem(STORAGE.teams);
    localStorage.removeItem(STORAGE.battle);
    localStorage.removeItem(STORAGE.log);
    stopAuto();
    loadDefaults(true);
    renderAll();
    toast('全消去しました。');
  });

  els.btnStartBattle.addEventListener('click', startBattle);
  els.btnNextChunk.addEventListener('click', advanceChunk);
  els.btnAutoRun.addEventListener('click', startAuto);
  els.btnStopAuto.addEventListener('click', stopAuto);
  els.btnReverse.addEventListener('click', toggleReverse);
  els.btnRewind.addEventListener('click', rewindChunk);
  els.btnProtect.addEventListener('click', useProtect);
  els.btnLoadSample.addEventListener('click', () => {
    state.teams = clone(DEFAULT_TEAMS);
    renderSlots();
    saveToStorage();
    toast('サンプル編成を入れました。');
  });

  els.btnRefreshSlots.addEventListener('click', renderSlots);
  els.btnReloadLists.addEventListener('click', renderSavedLists);

  els.btnHeroesTemplate.addEventListener('click', () => {
    els.heroesJson.value = JSON.stringify({ heroes: state.heroes }, null, 2);
  });
  els.btnSkillsTemplate.addEventListener('click', () => {
    els.skillsJson.value = JSON.stringify({ skills: state.skills }, null, 2);
  });
  els.btnHeroesSave.addEventListener('click', saveHeroesFromEditor);
  els.btnSkillsSave.addEventListener('click', saveSkillsFromEditor);
  els.btnHeroesExport.addEventListener('click', () => downloadJson({ heroes: state.heroes }, 'heroes_all.json'));
  els.btnSkillsExport.addEventListener('click', () => downloadJson({ skills: state.skills }, 'skills_all.json'));
  els.heroesFile.addEventListener('change', evt => importJsonFile(evt, 'heroes'));
  els.skillsFile.addEventListener('change', evt => importJsonFile(evt, 'skills'));

  els.btnCopyLog.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(els.logView.textContent || '');
      toast('ログをコピーしました。');
    } catch (err) {
      toast('コピーに失敗しました。');
    }
  });
  els.btnClearLog.addEventListener('click', () => {
    state.log = [];
    renderLog();
    saveToStorage();
    toast('ログを消去しました。');
  });
}

function ensureBootState() {
  const hasSaved = !!localStorage.getItem(STORAGE.heroes) || !!localStorage.getItem(STORAGE.skills) || !!localStorage.getItem(STORAGE.teams);
  if (hasSaved) {
    loadFromStorage();
    return;
  }
  loadDefaults(true);
  saveToStorage();
}

function loadDefaults(clearBattle = true) {
  state.heroes = clone(DEFAULT_HEROES);
  state.skills = clone(DEFAULT_SKILLS);
  state.teams = clone(DEFAULT_TEAMS);
  if (clearBattle) state.battle = null;
  state.log = [];
  els.heroesJson.value = JSON.stringify({ heroes: state.heroes }, null, 2);
  els.skillsJson.value = JSON.stringify({ skills: state.skills }, null, 2);
}

function loadFromStorage() {
  const savedHeroes = parseJson(localStorage.getItem(STORAGE.heroes));
  const savedSkills = parseJson(localStorage.getItem(STORAGE.skills));
  const savedTeams = parseJson(localStorage.getItem(STORAGE.teams));
  const savedBattle = parseJson(localStorage.getItem(STORAGE.battle));
  const savedLog = parseJson(localStorage.getItem(STORAGE.log));

  if (savedHeroes) state.heroes = normalizeHeroes(savedHeroes);
  if (savedSkills) state.skills = normalizeSkills(savedSkills);
  state.teams = savedTeams ? normalizeTeams(savedTeams) : clone(DEFAULT_TEAMS);
  state.battle = savedBattle ? hydrateBattle(savedBattle) : null;
  state.log = Array.isArray(savedLog) ? savedLog : [];
  els.heroesJson.value = JSON.stringify({ heroes: state.heroes }, null, 2);
  els.skillsJson.value = JSON.stringify({ skills: state.skills }, null, 2);
}

function saveToStorage() {
  localStorage.setItem(STORAGE.heroes, JSON.stringify(state.heroes));
  localStorage.setItem(STORAGE.skills, JSON.stringify(state.skills));
  localStorage.setItem(STORAGE.teams, JSON.stringify(state.teams));
  localStorage.setItem(STORAGE.battle, JSON.stringify(stripBattle(state.battle)));
  localStorage.setItem(STORAGE.log, JSON.stringify(state.log));
  renderSavedLists();
}

function stripBattle(battle) {
  if (!battle) return null;
  return clone(battle);
}

function hydrateBattle(battle) {
  return clone(battle);
}

function renderAll() {
  els.heroesJson.value = JSON.stringify({ heroes: state.heroes }, null, 2);
  els.skillsJson.value = JSON.stringify({ skills: state.skills }, null, 2);
  renderSlots();
  renderSavedLists();
  renderBattleStatus();
  renderLog();
}

function renderSlots() {
  const heroOptions = ['<option value="">— 空き —</option>'].concat(
    state.heroes.map(h => `<option value="${escapeHtml(h.id)}">${escapeHtml(h.name)} / ATK ${n(h.stats.atk)} DEF ${n(h.stats.def)} INT ${n(h.stats.int)} AGI ${n(h.stats.agi)}</option>`)
  ).join('');

  els.teamLeftSlots.innerHTML = POSITION_ORDER.map((posKey, idx) => {
    const value = state.teams.left[idx] || '';
    return slotHtml('left', idx, POSITION_LABELS[idx], value, heroOptions);
  }).join('');

  els.teamRightSlots.innerHTML = POSITION_ORDER.map((posKey, idx) => {
    const value = state.teams.right[idx] || '';
    return slotHtml('right', idx, POSITION_LABELS[idx], value, heroOptions);
  }).join('');

  document.querySelectorAll('[data-team-slot]').forEach(sel => {
    const side = sel.getAttribute('data-side');
    const idx = Number(sel.getAttribute('data-idx'));
    sel.value = (state.teams[side] && state.teams[side][idx]) || '';
    sel.addEventListener('change', e => {
      const side = e.target.getAttribute('data-side');
      const idx = Number(e.target.getAttribute('data-idx'));
      if (!state.teams[side]) state.teams[side] = ['', '', ''];
      state.teams[side][idx] = e.target.value || '';
      saveToStorage();
    });
  });
}

function slotHtml(side, idx, label, value, heroOptions) {
  return `
    <div class="slot">
      <label>${label}</label>
      <select data-team-slot="1" data-side="${side}" data-idx="${idx}">
        ${heroOptions}
      </select>
    </div>
  `;
}

function renderSavedLists() {
  const heroItems = state.heroes.length
    ? state.heroes.map(h => `<li>${escapeHtml(h.name)} <span class="meta">ATK ${n(h.stats.atk)} / DEF ${n(h.stats.def)} / INT ${n(h.stats.int)} / AGI ${n(h.stats.agi)} / RNG ${n(h.stats.rng)}</span></li>`).join('')
    : '<li class="empty">未保存</li>';

  const skillItems = state.skills.length
    ? state.skills.map(s => `<li>${escapeHtml(s.name)} <span class="meta">${escapeHtml(s.category || '')} / ${escapeHtml(s.trigger || '')}</span></li>`).join('')
    : '<li class="empty">未保存</li>';

  els.savedHeroesList.innerHTML = heroItems;
  els.savedSkillsList.innerHTML = skillItems;
}

function renderBattleStatus() {
  if (!state.battle) {
    els.battleStatus.textContent = '未開始';
    els.turnStatus.textContent = 'ターン: -';
    els.chunkStatus.textContent = 'チャンク: -';
    els.orderStatus.textContent = '行動順: -';
    return;
  }
  const b = state.battle;
  els.battleStatus.textContent = b.phase === 'end' ? (b.winner ? `${SIDE_LABEL[b.winner]} 勝利` : '引き分け') : `進行中 / ${phaseLabel(b.phase)}`;
  els.turnStatus.textContent = `ターン: ${b.turn}`;
  els.chunkStatus.textContent = `チャンク: ${b.chunkLabel || '-' }`;
  els.orderStatus.textContent = `行動順: ${b.orderNames && b.orderNames.length ? b.orderNames.join(' → ') : '-' }`;
}

function renderLog() {
  els.logView.textContent = state.log.join('\n');
}

function saveHeroesFromEditor() {
  const parsed = parseJson(els.heroesJson.value);
  if (!parsed) return toast('偉人JSONの形式が正しくありません。');
  const list = normalizeHeroes(parsed);
  state.heroes = list;
  renderSlots();
  renderSavedLists();
  saveToStorage();
  toast('偉人を保存しました。');
}

function saveSkillsFromEditor() {
  const parsed = parseJson(els.skillsJson.value);
  if (!parsed) return toast('スキルJSONの形式が正しくありません。');
  const list = normalizeSkills(parsed);
  state.skills = list;
  renderSavedLists();
  saveToStorage();
  toast('スキルを保存しました。');
}

function importJsonFile(evt, kind) {
  const file = evt.target.files && evt.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const parsed = parseJson(String(reader.result || ''));
    if (!parsed) {
      toast('JSON を読み込めませんでした。');
      return;
    }
    if (kind === 'heroes') {
      state.heroes = normalizeHeroes(parsed);
      els.heroesJson.value = JSON.stringify({ heroes: state.heroes }, null, 2);
      renderSlots();
    } else {
      state.skills = normalizeSkills(parsed);
      els.skillsJson.value = JSON.stringify({ skills: state.skills }, null, 2);
    }
    saveToStorage();
    renderSavedLists();
    toast(`${kind === 'heroes' ? '偉人' : 'スキル'}を読み込みました。`);
  };
  reader.readAsText(file);
  evt.target.value = '';
}

function startBattle() {
  stopAuto();
  if (!state.heroes.length || !state.skills.length) {
    toast('偉人とスキルが必要です。');
    return;
  }
  const left = buildSide('left');
  const right = buildSide('right');
  if (!left.some(Boolean) || !right.some(Boolean)) {
    toast('左右に少なくとも1人ずつ配置してください。');
    return;
  }

  state.battle = {
    active: true,
    phase: 'opening',
    turn: 0,
    chunkLabel: '0ターン目 / 開幕',
    reversed: false,
    winner: null,
    order: [],
    orderNames: [],
    orderIndex: 0,
    snapshots: [],
    timeProtectSide: null,
    timeProtectActive: false,
    flags: {
      freedomThresholdSeen: false,
    },
    left,
    right,
    units: [],
  };

  state.battle.units = [];
  left.forEach((u, idx) => { if (u) state.battle.units.push(u); });
  right.forEach((u, idx) => { if (u) state.battle.units.push(u); });

  logBattleStart();
  saveToStorage();
  renderBattleStatus();
  renderLog();
}

function buildSide(side) {
  const arr = state.teams[side] || ['', '', ''];
  return arr.map((heroId, idx) => {
    if (!heroId) return null;
    const hero = state.heroes.find(h => h.id === heroId);
    if (!hero) return null;
    return makeUnit(hero, side, idx);
  });
}

function makeUnit(hero, side, pos) {
  return {
    uid: uid(),
    heroId: hero.id,
    name: hero.name,
    side,
    pos,
    alive: true,
    base: clone(hero.stats),
    maxTroops: 10000,
    troops: 10000,
    wounded: 0,
    dead: 0,
    shield: 0,
    statuses: [],
    mods: [],
    skillState: {},
    skills: clone(hero.skills || []),
  };
}

function logBattleStart() {
  const b = state.battle;
  appendLog('【戦闘開始】');
  appendLog(`左軍: ${formatFormation('left')}`);
  appendLog(`右軍: ${formatFormation('right')}`);
  appendLog('0ターン目: 開幕効果を処理します。');
}

function formatFormation(side) {
  return POSITION_LABELS.map((label, idx) => {
    const u = getUnitAt(side, idx);
    return `${label}:${u ? u.name : '空き'}`;
  }).join(' / ');
}

function getUnitAt(side, pos) {
  return state.battle && state.battle[side] ? state.battle[side][pos] : null;
}

function advanceChunk() {
  const b = state.battle;
  if (!b || !b.active) {
    toast('先に戦闘開始を押してください。');
    return;
  }
  if (b.phase === 'end') {
    toast('戦闘は終了しています。');
    return;
  }

  snapshotBattle();

  if (b.phase === 'opening') {
    runOpeningPhase();
    if (checkBattleEnd()) return endBattleIfNeeded();
    b.phase = 'turnStart';
    b.turn = 1;
    b.chunkLabel = '1ターン目 / ターン開始';
    renderBattleStatus();
    saveToStorage();
    return;
  }

  if (b.phase === 'turnStart') {
    runTurnStart();
    if (checkBattleEnd()) return endBattleIfNeeded();
    b.phase = 'action';
    b.chunkLabel = `${b.turn}ターン目 / 行動`;
    b.orderIndex = 0;
    b.order = buildActionOrder();
    b.orderNames = b.order.map(u => u.name);
    renderBattleStatus();
    saveToStorage();
    return;
  }

  if (b.phase === 'action') {
    if (!b.order.length) {
      b.phase = 'turnEnd';
      b.chunkLabel = `${b.turn}ターン目 / ターン終了`;
      renderBattleStatus();
      saveToStorage();
      return;
    }
    if (b.orderIndex >= b.order.length) {
      b.phase = 'turnEnd';
      b.chunkLabel = `${b.turn}ターン目 / ターン終了`;
      renderBattleStatus();
      saveToStorage();
      return;
    }
    const actor = b.order[b.orderIndex];
    b.orderIndex += 1;
    runActorTurn(actor);
    if (checkBattleEnd()) return endBattleIfNeeded();
    if (b.orderIndex >= b.order.length) {
      b.phase = 'turnEnd';
      b.chunkLabel = `${b.turn}ターン目 / ターン終了`;
    }
    renderBattleStatus();
    saveToStorage();
    return;
  }

  if (b.phase === 'turnEnd') {
    runTurnEnd();
    if (checkBattleEnd()) return endBattleIfNeeded();
    if (b.turn >= 8) {
      b.phase = 'end';
      b.winner = null;
      appendLog('8ターン終了時点で決着がつかなかったため、引き分けです。');
      logSurvivors();
      renderBattleStatus();
      saveToStorage();
      return;
    }
    b.turn += 1;
    b.phase = 'turnStart';
    b.chunkLabel = `${b.turn}ターン目 / ターン開始`;
    renderBattleStatus();
    saveToStorage();
    return;
  }
}

function startAuto() {
  if (!state.battle || state.battle.phase === 'end') {
    toast('戦闘を開始してください。');
    return;
  }
  if (state.autoTimer) return;
  state.autoTimer = setInterval(() => {
    if (!state.battle || state.battle.phase === 'end') return stopAuto();
    advanceChunk();
  }, 700);
}

function stopAuto() {
  if (state.autoTimer) {
    clearInterval(state.autoTimer);
    state.autoTimer = null;
  }
}

function toggleReverse() {
  if (!state.battle || state.battle.phase === 'end') {
    toast('戦闘中に使えます。');
    return;
  }
  state.battle.reversed = !state.battle.reversed;
  appendLog(`リバーサル: 行動順を ${state.battle.reversed ? '逆転' : '通常'} にしました。`);
  saveToStorage();
  renderBattleStatus();
  toast('リバーサルを切り替えました。');
}

function useProtect() {
  if (!state.battle || state.battle.phase === 'end') {
    toast('戦闘中に使えます。');
    return;
  }
  const side = els.timeSide.value;
  state.battle.timeProtectSide = side;
  state.battle.timeProtectActive = true;
  appendLog(`プロテクト: ${SIDE_LABEL[side]} の次の受けるダメージを反射対象にします。`);
  saveToStorage();
  toast('プロテクトを発動しました。');
}

function rewindChunk() {
  const b = state.battle;
  if (!b || !b.snapshots || !b.snapshots.length) {
    toast('巻き戻せる履歴がありません。');
    return;
  }
  const snap = b.snapshots.pop();
  state.battle = clone(snap.battle);
  state.log = clone(snap.log);
  stopAuto();
  appendLog('リワインド: 1チャンク戻しました。');
  renderAll();
  saveToStorage();
  toast('1チャンク巻き戻しました。');
}

function snapshotBattle() {
  if (!state.battle) return;
  state.battle.snapshots = state.battle.snapshots || [];
  state.battle.snapshots.push({
    battle: clone(state.battle),
    log: clone(state.log),
  });
  if (state.battle.snapshots.length > 50) state.battle.snapshots.shift();
}

function runOpeningPhase() {
  appendLog('【0ターン目 / 開幕】');
  for (const unit of livingUnits()) {
    triggerSkillEvent(unit, 'battleStart', { actor: unit });
  }
  // 戦闘前に発動する開幕系の残りを一度だけ適用
  tickAllStatuses('battleStart');
}

function runTurnStart() {
  const b = state.battle;
  appendLog(`【${b.turn}ターン目 / ターン開始】`);
  tickAllStatuses('turnStart');
  for (const unit of livingUnits()) {
    triggerSkillEvent(unit, 'turnStart', { actor: unit });
    if (checkBattleEnd()) return;
  }
  // 生存確認
  updateDeaths();
}

function runTurnEnd() {
  const b = state.battle;
  appendLog(`【${b.turn}ターン目 / ターン終了】`);
  for (const unit of livingUnits()) {
    triggerSkillEvent(unit, 'turnEnd', { actor: unit });
    if (checkBattleEnd()) return;
  }
  tickAllStatuses('turnEnd');
  updateDeaths();
  if (state.battle && state.battle.timeProtectActive) {
    state.battle.timeProtectActive = false;
    state.battle.timeProtectSide = null;
  }
}

function buildActionOrder() {
  let units = livingUnits().slice();
  units.sort((a, b) => {
    const ra = orderRank(a);
    const rb = orderRank(b);
    if (ra !== rb) return ra - rb;
    const agiA = effectiveStats(a).agi;
    const agiB = effectiveStats(b).agi;
    if (agiA !== agiB) return agiB - agiA;
    return Math.random() - 0.5;
  });
  if (state.battle.reversed) units.reverse();
  return units;
}

function orderRank(unit) {
  const hasPreempt = hasStatus(unit, '先攻');
  const hasAssault = hasStatus(unit, '襲撃');
  if (hasPreempt && hasAssault) return 1;
  if (hasPreempt) return 0;
  if (hasAssault) return 2;
  return 1;
}

function runActorTurn(unit) {
  if (!unit || !unit.alive) return;
  const b = state.battle;
  const stats = effectiveStats(unit);
  appendLog(`\n■ ${unit.name} 行動開始  [兵力 ${n(unit.troops)} / 負傷兵 ${n(unit.wounded)} / ATK ${n(stats.atk)} DEF ${n(stats.def)} INT ${n(stats.int)} AGI ${n(stats.agi)} RNG ${n(stats.rng)}]`);

  tickUnitStatuses(unit, 'actionStart');
  triggerSkillEvent(unit, 'actionStart', { actor: unit });
  if (checkBattleEnd()) return;

  if (!unit.alive) return;

  const blocked = hasStatus(unit, '眩暈') || hasStatus(unit, '捕獲') || hasStatus(unit, '行動不能');
  const silenced = hasStatus(unit, '沈黙');
  const disarmed = hasStatus(unit, '武装解除');
  let acted = false;

  const activeSkill = getFirstSkill(unit, 'active');
  if (activeSkill && !silenced && !blocked) {
    const canUse = rollChance(skillChance(unit, activeSkill));
    triggerSkillEvent(unit, 'beforeActive', { actor: unit, skill: activeSkill });
    triggerSkillEventForAllies(unit, 'beforeActive', { actor: unit, skill: activeSkill });
    if (canUse) {
      const executed = useSkill(unit, activeSkill, { actor: unit, kind: 'active' });
      acted = executed || acted;
      if (executed) {
        triggerSkillEvent(unit, 'afterActive', { actor: unit, skill: activeSkill });
        applyPassiveAfterActive(unit, activeSkill);
      }
    } else {
      appendLog(`  → ${
        activeSkill.name
      } の発動判定に失敗。`);
    }
  } else if (activeSkill && (silenced || blocked)) {
    appendLog(`  → アクティブスキルは発動できませんでした。`);
  }

  if (!acted && !disarmed && !blocked) {
    acted = normalAttack(unit);
  } else if (!acted && disarmed) {
    appendLog('  → 武装解除により通常攻撃できません。');
  } else if (!acted && blocked) {
    appendLog('  → 行動不能のため行動できません。');
  }

  triggerSkillEvent(unit, 'actionEnd', { actor: unit });
  tickUnitStatuses(unit, 'actionEnd');
  updateDeaths();
}

function applyPassiveAfterActive(unit, skill) {
  // 正義の心 / 最終決戦のような、アクティブ使用時に発生する効果
  if (hasSkill(unit, '正義の心')) {
    addStatus(unit, '正義の心-無敵', 'invincible', 4, 1.0, 'actionEnd');
    addStatMod(unit, 'atk', 1.25, 9999, 'mult');
    addStatMod(unit, 'def', 1.25, 9999, 'mult');
    addStatMod(unit, 'int', 1.25, 9999, 'mult');
    addStatMod(unit, 'agi', 1.25, 9999, 'mult');
    addStatus(unit, '正義の心-与ダメージ', 'damageBonusPct', 9999, 3, 'actionEnd');
    appendLog('  → 正義の心: 自身が強化されました。');
  }
  if (hasSkill(unit, '最終決戦')) {
    unit.skillState.finalBattle = unit.skillState.finalBattle || 0;
    unit.skillState.finalBattle = Math.min(5, unit.skillState.finalBattle + 1);
    appendLog(`  → 最終決戦: アクティブ強化が ${unit.skillState.finalBattle} 回重なりました。`);
  }
}

function normalAttack(unit) {
  const target = chooseNormalTarget(unit);
  if (!target) {
    appendLog('  → 攻撃可能な対象がいません。');
    return false;
  }
  let hits = 1;
  if (hasStatus(unit, '連撃')) hits += 1;
  if (unit.skillState.extraAttackStacks) hits += unit.skillState.extraAttackStacks;
  if (unit.skillState.ambushStacks) hits += unit.skillState.ambushStacks;
  hits = Math.min(10, hits);

  appendLog(`  → 通常攻撃: ${target.name} を ${hits} 回攻撃します。`);

  let anyHit = false;
  for (let i = 0; i < hits; i++) {
    const targetEach = chooseNormalTarget(unit) || target;
    const actual = dealDamage(unit, targetEach, {
      power: 100,
      damageType: 'atk',
      sourceName: '通常攻撃',
      allowCombo: true,
      normalAttack: true,
    });
    if (actual > 0) {
      anyHit = true;
      triggerSkillEvent(unit, 'afterNormalAttack', { actor: unit, target: targetEach, damage: actual });
      triggerSkillEventForAllies(unit, 'afterNormalAttack', { actor: unit, target: targetEach, damage: actual });
    }
  }
  return anyHit;
}

function chooseNormalTarget(unit) {
  const enemies = livingOpponents(unit);
  if (!enemies.length) return null;
  const stats = effectiveStats(unit);
  const inRangeEnemies = enemies.filter(t => inRange(unit, t, stats.rng));
  let pool = inRangeEnemies.length ? inRangeEnemies : enemies;

  const forced = getTauntTargetFor(unit, pool);
  if (forced) return forced;

  if (hasStatus(unit, '混乱')) {
    const all = pool.concat(livingAlliesOf(unit).filter(x => x !== unit));
    if (all.length) return randChoice(all);
  }
  if (hasStatus(unit, '狂乱')) {
    const all = livingUnits().filter(u => u.alive);
    if (all.length) return randChoice(all);
  }
  if (hasStatus(unit, '挑発')) {
    const taunt = getTauntTargetFor(unit, pool, true);
    if (taunt) return taunt;
  }
  return randChoice(pool);
}

function getTauntTargetFor(attacker, pool, allowAny = false) {
  const taunter = pool.find(t => hasTauntAgainst(t, attacker));
  if (taunter) return taunter;
  return allowAny ? pool.find(t => hasTauntAgainst(t, attacker)) || null : null;
}

function hasTauntAgainst(target, attacker) {
  const found = target.statuses.find(s => s.name === '挑発' && s.fromSide === attacker.side);
  if (!found) return false;
  return true;
}

function inRange(attacker, target, rangeValue) {
  const dist = Math.abs(attacker.pos - target.pos);
  return dist <= Math.max(0, rangeValue - 1);
}

function dealDamage(attacker, target, opts) {
  if (!attacker || !target || !attacker.alive || !target.alive) return 0;

  let defender = target;
  if (defender.side !== attacker.side && state.battle.timeProtectActive && state.battle.timeProtectSide === defender.side) {
    const reflected = true;
    const actualBefore = computeDamage(attacker, defender, opts);
    const enemySide = otherSide(defender.side);
    const living = livingBySide(enemySide).filter(u => u.alive);
    if (living.length) {
      const split = Math.max(1, Math.round(actualBefore / living.length));
      appendLog(`    ↩ プロテクト発動: ${defender.name} への ${n(actualBefore)} ダメージを無効化し、敵軍全体へ反射。`);
      living.forEach(u => {
        applyCasualty(u, split, attacker, '反射');
      });
      updateDeaths();
      state.battle.timeProtectActive = false;
      return 0;
    }
  }

  // 保護（通常攻撃のみ）
  if (opts.normalAttack) {
    const protector = getProtectorFor(defender);
    if (protector && protector.alive) {
      appendLog(`    → 保護: ${defender.name} の代わりに ${protector.name} が受けます。`);
      defender = protector;
    }
  }

  const dmg = computeDamage(attacker, defender, opts);
  if (dmg <= 0) {
    appendLog(`    → ${defender.name} にダメージは通りませんでした。`);
    triggerSkillEvent(defender, 'damageTaken', { actor: attacker, target: defender, damage: 0, sourceName: opts.sourceName });
    return 0;
  }

  const evaded = attemptEvade(attacker, defender, dmg, opts);
  if (evaded) {
    appendLog(`    → ${defender.name} は回避しました。`);
    triggerSkillEvent(defender, 'damageTaken', { actor: attacker, target: defender, damage: 0, sourceName: opts.sourceName });
    return 0;
  }

  const actual = applyCasualty(defender, dmg, attacker, opts.sourceName || 'ダメージ');
  triggerSkillEvent(defender, 'damageTaken', { actor: attacker, target: defender, damage: actual, sourceName: opts.sourceName });
  triggerSkillEvent(attacker, 'damageDealt', { actor: attacker, target: defender, damage: actual, sourceName: opts.sourceName });
  if (actual > 0) {
    triggerComboSkills(attacker, defender, actual, opts);
  }
  return actual;
}

function computeDamage(attacker, target, opts) {
  const a = effectiveStats(attacker);
  const d = effectiveStats(target);
  const useInt = opts.damageType === 'int';
  const attackStat = useInt ? a.int : a.atk;
  const defendStat = useInt ? d.int : d.def;
  const troopTerm = ((-0.05 / 10000) * attacker.troops + 0.1) * attacker.troops;
  let base = ((attackStat - defendStat) * 1.5) + troopTerm;
  base *= (opts.power || 100) / 100;

  let mult = 1;
  mult *= 1 + (attacker._outDamageBonus || 0) / 100;
  mult *= 1 - (target._inDamageReduction || 0) / 100;
  if (opts.scaleBy) {
    const scaleStat = a[opts.scaleBy] || 0;
    mult *= (1 + statInfluence(scaleStat));
  }

  let dmg = base * mult;
  dmg *= (0.975 + Math.random() * 0.05);
  if (attacker._critChance > Math.random()) dmg *= 2;

  if (dmg < 0) {
    dmg = Math.round(Math.random() * 10);
  }
  return Math.round(dmg);
}

function attemptEvade(attacker, target, dmg, opts) {
  const a = effectiveStats(attacker);
  const d = effectiveStats(target);
  const evadeChance = target._evadeChance || 0;
  const hitChance = attacker._hitChance || 0;
  if (hitChance >= 100) return false;
  if (hasStatus(attacker, '必中')) return false;
  if (hasStatus(target, '無敵')) return false; // control ではなくダメージは通るのでここでは無視しない
  return Math.random() * 100 < evadeChance;
}

function applyCasualty(target, dmg, attacker, sourceName) {
  const actual = Math.min(target.troops, Math.max(0, dmg));
  if (actual <= 0) return 0;
  const wounded = round(actual * (0.7 + Math.random() * 0.2));
  const dead = Math.max(0, actual - wounded);
  target.troops = Math.max(0, target.troops - actual);
  target.wounded += wounded;
  target.dead += dead;
  appendLog(`    → ${target.name} に ${n(actual)} ダメージ（負傷兵 ${n(wounded)} / 死亡兵 ${n(dead)}）。残存兵力 ${n(target.troops)}`);
  if (target.troops <= 0) {
    target.alive = false;
    appendLog(`    → ${target.name} は撤退しました。`);
  }
  return actual;
}

function triggerComboSkills(actor, target, damage, opts) {
  if (!opts || !opts.normalAttack) return;
  const comboSkill = getFirstSkill(actor, 'combo');
  if (!comboSkill) return;
  const chance = skillChance(actor, comboSkill);
  if (Math.random() * 100 >= chance) return;
  appendLog(`    → 追撃: ${comboSkill.name} が発動！`);
  useSkill(actor, comboSkill, { actor, target, kind: 'combo', attackTarget: target });
}

function useSkill(unit, skill, ctx) {
  const b = state.battle;
  if (!skill) return false;
  if (skill.prepTurns && !unit.skillState.preparing) {
    unit.skillState.preparing = { name: skill.name, turnsLeft: skill.prepTurns };
    appendLog(`  → ${skill.name} は準備中（${skill.prepTurns} チャンク後に発動）。`);
    return true;
  }
  if (unit.skillState.preparing && unit.skillState.preparing.name === skill.name) {
    unit.skillState.preparing.turnsLeft -= 1;
    if (unit.skillState.preparing.turnsLeft > 0) {
      appendLog(`  → ${skill.name} は準備中（残り ${unit.skillState.preparing.turnsLeft}）。`);
      return true;
    }
    delete unit.skillState.preparing;
    appendLog(`  → ${skill.name} の準備が完了。`);
  }

  if (skill.special) {
    return runSpecialSkill(skill.special, unit, skill, ctx);
  }

  if (skill.effects && skill.effects.length) {
    const targets = resolveTargets(unit, skill, ctx);
    let executed = false;
    for (const eff of skill.effects) {
      const effTargets = resolveEffectTargets(unit, skill, ctx, eff, targets);
      for (const t of effTargets) {
        executed = applyEffect(unit, t, skill, eff, ctx) || executed;
      }
    }
    return executed;
  }

  return false;
}

function runSpecialSkill(key, unit, skill, ctx) {
  const b = state.battle;
  switch (key) {
    case 'palmera_counter':
      return specialPalmera(unit, skill, ctx);
    case 'freedom_declaration':
      return specialFreedom(unit, skill, ctx);
    case 'mongol_expansion':
      return specialMongol(unit, skill, ctx);
    case 'red_eye':
      return specialRedEye(unit, skill, ctx);
    case 'phantom_art':
      return specialPhantom(unit, skill, ctx);
    case 'stone_hammer':
      return specialStoneHammer(unit, skill, ctx);
    case 'justice_heart':
      return specialJustice(unit, skill, ctx);
    case 'berserker':
      return specialBerserker(unit, skill, ctx);
    case 'gunmaster':
      return specialGunmaster(unit, skill, ctx);
    case 'repair_defense':
      return specialRepairDefense(unit, skill, ctx);
    case 'budo':
      return specialBudo(unit, skill, ctx);
    case 'sage_plot':
      return specialSagePlot(unit, skill, ctx);
    case 'eloquence':
      return specialEloquence(unit, skill, ctx);
    case 'final_battle':
      return specialFinalBattle(unit, skill, ctx);
    case 'purge':
      return specialPurge(unit, skill, ctx);
    case 'slash':
      return specialSlash(unit, skill, ctx);
    case 'mental_heal':
      return specialMentalHeal(unit, skill, ctx);
    case 'vampire':
      return specialVampire(unit, skill, ctx);
    case 'bullet':
      return specialBullet(unit, skill, ctx);
    case 'supply':
      return specialSupply(unit, skill, ctx);
    case 'full_heal':
      return specialFullHeal(unit, skill, ctx);
    case 'dragon_roar':
      return specialDragonRoar(unit, skill, ctx);
    case 'sniper':
      return specialSniper(unit, skill, ctx);
    case 'rainbow_view':
      return specialRainbowView(unit, skill, ctx);
    case 'shield_guard':
      return specialShieldGuard(unit, skill, ctx);
    case 'stockpile':
      return specialStockpile(unit, skill, ctx);
    case 'time_command':
      return specialTimeCommand(unit, skill, ctx);
    case 'time_reversal':
      return specialTimeReversal(unit, skill, ctx);
    case 'flame_dance':
      return specialFlameDance(unit, skill, ctx);
    case 'ember_echo':
      return specialEmberEcho(unit, skill, ctx);
    case 'time_shield':
      return specialTimeShield(unit, skill, ctx);
    case 'still_prayer':
      return specialStillPrayer(unit, skill, ctx);
    default:
      appendLog(`  → ${skill.name} は効果解釈用の定義がありません。`);
      return false;
  }
}

function specialPalmera(unit, skill, ctx) {
  if (ctx.event !== 'damageTaken') return false;
  unit.skillState.palmeraHits = unit.skillState.palmeraHits || 0;
  const dmg = ctx.damage || 0;
  if (dmg <= 0) return false;
  if (unit.skillState.palmeraHits >= 2) return false;
  const chance = 24 + statInfluence(Math.max(effectiveStats(unit).def, effectiveStats(unit).int)) * 10;
  if (Math.random() * 100 >= chance) return false;
  unit.skillState.palmeraHits += 1;
  appendLog(`    ↩ パルメラの抵抗: 反撃が発動！`);
  const target = ctx.actor;
  if (target && target.alive) {
    dealDamage(unit, target, { power: 140, damageType: 'int', sourceName: 'パルメラの抵抗' });
    if (Math.random() < 0.5) {
      addStatus(target, '眩暈', 'stun', 1, 1, 'turnEnd');
      appendLog(`    → ${target.name} に眩暈を付与。`);
    } else {
      addStatus(target, '消耗', 'weaken', 1, 1, 'turnEnd');
      appendLog(`    → ${target.name} に消耗を付与。`);
    }
  }
  return true;
}

function specialFreedom(unit, skill, ctx) {
  if (ctx.event !== 'beforeActive') return false;
  if (!ctx.actor || ctx.actor.side !== unit.side) return false;
  const triggerChance = 70;
  if (Math.random() * 100 >= triggerChance) return false;
  const enemy = randChoice(livingOpponents(unit));
  if (enemy) {
    appendLog(`    ↪ 自由の宣言: 追加の知力ダメージが発生！`);
    dealDamage(unit, enemy, { power: 160, damageType: 'int', sourceName: '自由の宣言' });
  }
  const woundedMost = mostWoundedAlly(unit);
  if (woundedMost) {
    healUnit(unit, woundedMost, 80, 'int', '自由の宣言');
  }
  if (!unit.skillState.freedomThreshold && battleAnyAllyBelow70(unit)) {
    unit.skillState.freedomThreshold = true;
    const extra = randChoice(livingOpponents(unit));
    if (extra) {
      appendLog(`    ↪ 自由の宣言: 70%未満到達後の追加発動！`);
      dealDamage(unit, extra, { power: 160, damageType: 'int', sourceName: '自由の宣言(追加)' });
    }
  }
  return true;
}

function specialMongol(unit, skill, ctx) {
  if (ctx.event === 'battleStart') {
    const commander = getCommander(unit.side);
    if (commander) {
      addStatus(commander, 'モンゴルの拡張-攻撃', 'damageBonusPct', 3, 30, 'turnEnd');
      addStatus(commander, 'モンゴルの拡張-防御', 'damageTakenReductionPct', 3, 30, 'turnEnd');
      appendLog(`    → ${commander.name} に与ダメージ+30%、被ダメージ-30%を付与。`);
    }
    return true;
  }
  if (ctx.event === 'turnEnd' && ctx.actor && ctx.actor.side === unit.side) {
    if (Math.random() < 0.7) {
      const commander = getCommander(unit.side);
      if (commander) {
        removeCombatDebuffs(commander);
        appendLog(`    → モンゴルの拡張: ${commander.name} の戦闘時デバフを解除。`);
      }
    }
  }
  return true;
}

function specialRedEye(unit, skill, ctx) {
  if (ctx.event !== 'turnStart') return false;
  const enemies = livingOpponents(unit);
  enemies.forEach(e => {
    addStatMod(e, 'atk', -10, 9999, 'flat');
    addStatMod(e, 'int', -10, 9999, 'flat');
  });
  addStatMod(unit, 'atk', 20, 9999, 'flat');
  addStatMod(unit, 'int', 20, 9999, 'flat');
  addStatMod(unit, 'def', 20, 9999, 'flat');
  appendLog(`    → 赤眼の眼光: 敵軍ATK/INT-10、自身ATK/INT/DEF+20。`);
  return true;
}

function specialPhantom(unit, skill, ctx) {
  if (ctx.event === 'battleStart') {
    livingAlliesOf(unit).forEach(a => {
      a.shield += Math.round(a.maxTroops * 0.2);
      a.skillState.phantomArt = true;
      appendLog(`    → ${a.name} はシールドを ${n(Math.round(a.maxTroops * 0.2))} 獲得。`);
    });
    return true;
  }
  if (ctx.event === 'controlAttempt') {
    const target = ctx.target;
    if (!target || target.side !== unit.side) return false;
    if (target.shield <= 0 || !target.skillState.phantomArt) return false;
    if (Math.random() * 100 >= 45) return false;
    appendLog(`    ↩ 幻影の芸術: 制御効果を無効化。`);
    if (ctx.actor && ctx.actor.alive && Math.random() < 0.5) {
      dealDamage(unit, ctx.actor, { power: 100, damageType: 'int', sourceName: '幻影の芸術' });
      if (Math.random() < 0.25) {
        addStatus(ctx.actor, '混乱', 'confusion', 1, 1, 'turnEnd');
        appendLog(`    → 付与者を混乱状態に。`);
      }
    }
    return true;
  }
  return false;
}

function specialStoneHammer(unit, skill, ctx) {
  if (ctx.event !== 'action') return false;
  if (ctx.kind !== 'active') return false;
  livingOpponents(unit).forEach(t => {
    dealDamage(unit, t, { power: 300, damageType: 'atk', sourceName: '岩壁の鉄槌' });
  });
  return true;
}

function specialJustice(unit, skill, ctx) {
  if (ctx.event === 'battleStart') {
    addStatus(unit, '無敵', 'invincible', 4, 1, 'turnEnd');
    addStatus(unit, '正義の心-発動率', 'hitChancePct', 9999, 15, 'turnEnd');
    appendLog(`    → 正義の心: 4ターン無敵、アクティブ発動率+15%。`);
    return true;
  }
  return false;
}

function specialBerserker(unit, skill, ctx) {
  if (ctx.event === 'battleStart') {
    addStatus(unit, '狂乱', 'frenzy', 9999, 1, 'turnEnd');
    appendLog(`    → 狂気のバーサーカー: 狂乱状態に入りました。`);
    return true;
  }
  if (ctx.event === 'turnStart') {
    addStatMod(unit, 'rng', -2, 9999, 'flat');
    if (state.battle.turn >= 3) {
      const target = randChoice(livingOpponents(unit));
      if (target) {
        appendLog(`    → 3ターン目以降効果: ランダム敵に攻撃。`);
        dealDamage(unit, target, { power: 150, damageType: 'atk', sourceName: '狂気のバーサーカー' });
      }
    }
    return true;
  }
  return false;
}

function specialGunmaster(unit, skill, ctx) {
  if (ctx.event === 'battleStart') {
    addStatus(unit, '連撃', 'extraAttack', 9999, 1, 'turnEnd');
    appendLog(`    → 鉄砲王: 連撃を獲得。`);
    return true;
  }
  if (ctx.event === 'afterNormalAttack') {
    if (!ctx.actor || !ctx.actor.alive) return false;
    const chance = ctx.actor.side === unit.side || livingAlliesOf(unit).includes(ctx.actor) ? 45 : 45;
    if (Math.random() * 100 < chance) {
      unit.skillState.extraAttackStacks = Math.min(10, (unit.skillState.extraAttackStacks || 0) + 1);
      appendLog(`    → 鉄砲王: 奇襲を1回獲得（累計 ${unit.skillState.extraAttackStacks}）。`);
    }
    return true;
  }
  return false;
}

function specialRepairDefense(unit, skill, ctx) {
  if (ctx.kind !== 'active') return false;
  const lowest = lowestAlly(unit, true);
  [unit, lowest].filter(Boolean).forEach(t => healUnit(unit, t, 250, 'def', '修復防御'));
  addStatMod(unit, 'def', 20, 3, 'flat');
  appendLog(`    → 修復防御: 自身のDEF+20（3ターン）。`);
  return true;
}

function specialBudo(unit, skill, ctx) {
  const targets = pickEnemyTargets(unit, 2);
  targets.forEach(t => {
    dealDamage(unit, t, { power: 180, damageType: 'int', sourceName: '文武両道' });
    addStatus(t, '文武両道-弱体', 'damageTakenReductionPct', 2, 12, 'turnEnd');
  });
  appendLog(`    → 文武両道: 敵2人の与ダメージを低下。`);
  return true;
}

function specialSagePlot(unit, skill, ctx) {
  pickEnemyTargets(unit, 2, true).forEach(t => {
    addStatus(t, '回復禁止', 'healBlock', 1, 1, 'turnEnd');
    dealDamage(unit, t, { power: 160, damageType: 'int', sourceName: '賢者の謀' });
  });
  appendLog(`    → 賢者の謀: 回復禁止を付与。`);
  return true;
}

function specialEloquence(unit, skill, ctx) {
  const targets = pickEnemyTargets(unit, 2);
  addStatus(unit, '回避', 'evadeChancePct', 2, 25, 'turnEnd');
  targets.forEach(t => {
    addStatus(t, '挑発', 'taunt', 2, 1, 'turnEnd', { fromSide: unit.side });
    addStatus(t, '攻撃低下', 'statFlat', 2, -30, 'turnEnd', { stat: 'atk' });
  });
  appendLog(`    → 巧みな弁舌: 回避と挑発、攻撃低下。`);
  return true;
}

function specialFinalBattle(unit, skill, ctx) {
  if (ctx.event === 'battleStart') {
    addStatus(unit, '最終決戦-発動率', 'hitChancePct', 9999, 12, 'turnEnd');
    appendLog(`    → 最終決戦: アクティブ発動率+12%。`);
    return true;
  }
  if (ctx.event === 'beforeActive') {
    unit.skillState.finalBattle = Math.min(5, (unit.skillState.finalBattle || 0) + 1);
    addStatus(unit, '最終決戦-与ダメージ', 'damageBonusPct', 9999, 6, 'turnEnd');
  }
  return true;
}

function specialPurge(unit, skill, ctx) {
  const targets = pickAllyTargets(unit, 3, true);
  targets.forEach(t => {
    removeCombatDebuffs(t);
    addStatMod(t, 'atk', 50, 2, 'flat');
    addStatMod(t, 'int', 50, 2, 'flat');
  });
  appendLog(`    → 祓いの加護: デバフ解除とATK/INT+50。`);
  return true;
}

function specialSlash(unit, skill, ctx) {
  const target = randChoice(livingOpponents(unit));
  if (!target) return false;
  dealDamage(unit, target, { power: 75, damageType: 'atk', sourceName: '斬撃' });
  dealDamage(unit, target, { power: 75, damageType: 'atk', sourceName: '斬撃' });
  return true;
}

function specialMentalHeal(unit, skill, ctx) {
  const targets = pickAllyTargets(unit, 2, true);
  targets.forEach(t => {
    healUnit(unit, t, 120, 'def', '念力の治癒');
    removeOneControl(t);
  });
  appendLog(`    → 念力の治癒: 制御効果を1つ解除。`);
  return true;
}

function specialVampire(unit, skill, ctx) {
  if (ctx.event !== 'damageDealt') return false;
  const amount = Math.max(0, Math.round((ctx.damage || 0) * 0.2));
  if (amount <= 0) return false;
  healByFixed(unit, unit, amount, '吸血');
  return true;
}

function specialBullet(unit, skill, ctx) {
  const target = ctx.attackTarget || ctx.target || randChoice(livingOpponents(unit));
  if (!target) return false;
  dealDamage(unit, target, { power: 110, damageType: 'int', sourceName: '追撃の銃弾' });
  dealDamage(unit, target, { power: 110, damageType: 'int', sourceName: '追撃の銃弾' });
  return true;
}

function specialSupply(unit, skill, ctx) {
  const target = ctx.attackTarget || ctx.target || randChoice(livingOpponents(unit));
  if (!target) return false;
  dealDamage(unit, target, { power: 70, damageType: 'int', sourceName: '継戦補給' });
  const allies = pickAllyTargets(unit, 2, true);
  allies.forEach(t => healUnit(unit, t, 120, 'def', '継戦補給'));
  return true;
}

function specialFullHeal(unit, skill, ctx) {
  if (ctx.event !== 'turnStart') return false;
  if (Math.random() * 100 >= 40) return false;
  livingAlliesOf(unit).forEach(t => healUnit(unit, t, 150, 'def', '全面治癒'));
  return true;
}

function specialDragonRoar(unit, skill, ctx) {
  const allies = [unit].concat(randChoice(livingAlliesOf(unit).filter(x => x !== unit)) || []);
  addStatus(unit, '龍の咆哮-強化', 'damageBonusPct', 1, 10, 'turnEnd');
  const ally = randChoice(livingAlliesOf(unit).filter(x => x !== unit));
  if (ally) addStatus(ally, '龍の咆哮-強化', 'damageBonusPct', 1, 10, 'turnEnd');
  livingOpponents(unit).forEach(t => dealDamage(unit, t, { power: 120, damageType: 'int', sourceName: '龍の咆哮' }));
  appendLog(`    → 龍の咆哮: 味方のダメージ量+10%、敵全体へ知力ダメージ。`);
  return true;
}

function specialSniper(unit, skill, ctx) {
  if (ctx.event === 'battleStart') {
    addStatus(unit, '必中', 'hitChancePct', 9999, 100, 'turnEnd');
    addStatus(unit, '狙撃者の心得-クリティカル', 'critChancePct', 9999, 25, 'turnEnd');
    appendLog(`    → 狙撃者の心得: 必中、クリティカル+25%。`);
    return true;
  }
  return false;
}

function specialRainbowView(unit, skill, ctx) {
  if (ctx.event === 'battleStart') {
    const enemy = randChoice(livingOpponents(unit));
    if (enemy) {
      addStatus(enemy, '沈黙', 'silence', 2, 1, 'turnEnd');
      appendLog(`    → 虹の景色: ${enemy.name} を沈黙状態に。`);
    }
    return true;
  }
  if (ctx.event === 'turnStart' && state.battle.turn >= 4) {
    addStatus(unit, '破陣', 'breakArmor', 9999, 1, 'turnEnd');
    healUnit(unit, unit, 200, 'int', '虹の景色');
    return true;
  }
  return false;
}

function specialShieldGuard(unit, skill, ctx) {
  if (ctx.event === 'battleStart') {
    pickAllyTargets(unit, 2, true).forEach(t => {
      addStatus(t, '鉄壁の守護', 'damageTakenReductionPct', 2, 30, 'turnEnd');
    });
    return true;
  }
  return false;
}

function specialStockpile(unit, skill, ctx) {
  if (ctx.event !== 'turnStart') return false;
  healUnit(unit, unit, 150, 'def', '機を蓄える');
  addStatMod(unit, 'def', 1.1, 9999, 'mult');
  return true;
}

function specialTimeCommand(unit, skill, ctx) {
  if (ctx.event === 'battleStart') {
    livingAlliesOf(unit).forEach(t => addStatMod(t, 'agi', 1.2, 3, 'mult'));
    appendLog(`    → 時環の指揮: 自軍全体AGI+20%（3ターン）。`);
    return true;
  }
  return false;
}

function specialTimeReversal(unit, skill, ctx) {
  const targets = pickEnemyTargets(unit, 2);
  targets.forEach(t => {
    dealDamage(unit, t, { power: 140, damageType: 'int', sourceName: '時律の逆行' });
    addStatMod(t, 'agi', -20, 2, 'flat');
  });
  return true;
}

function specialFlameDance(unit, skill, ctx) {
  const target = randChoice(livingOpponents(unit));
  if (!target) return false;
  dealDamage(unit, target, { power: 90, damageType: 'atk', sourceName: '流焔乱舞' });
  dealDamage(unit, target, { power: 90, damageType: 'atk', sourceName: '流焔乱舞' });
  addStatus(target, '燃焼', 'dot', 2, 30, 'turnEnd');
  appendLog(`    → 流焔乱舞: 燃焼を付与。`);
  return true;
}

function specialEmberEcho(unit, skill, ctx) {
  const target = ctx.attackTarget || ctx.target || randChoice(livingOpponents(unit));
  if (!target) return false;
  dealDamage(unit, target, { power: 100, damageType: 'atk', sourceName: '灼熱の残響' });
  addStatus(target, '燃焼', 'dot', 1, 20, 'turnEnd');
  return true;
}

function specialTimeShield(unit, skill, ctx) {
  if (ctx.event === 'battleStart') {
    livingAlliesOf(unit).forEach(t => {
      t.shield += Math.round(t.maxTroops * 0.15);
      addStatus(t, '時律の庇護', 'invincible', 1, 1, 'turnEnd');
    });
    appendLog(`    → 時律の庇護: 味方全体にシールドと一時的な無敵。`);
    return true;
  }
  return false;
}

function specialStillPrayer(unit, skill, ctx) {
  const targets = pickEnemyTargets(unit, 2);
  targets.forEach(t => addStatus(t, '眩暈', 'stun', 1, 1, 'turnEnd'));
  pickAllyTargets(unit, 2, true).forEach(t => healUnit(unit, t, 120, 'def', '静止の祈り'));
  return true;
}

function applyEffect(unit, target, skill, eff, ctx) {
  if (!target) return false;
  if (eff.kind === 'damage') {
    return dealDamage(unit, target, {
      power: eff.power || eff.amount || 100,
      damageType: eff.damageType || eff.statType || 'atk',
      scaleBy: eff.scaleBy || null,
      sourceName: skill.name,
    }) > 0;
  }
  if (eff.kind === 'heal') {
    return healUnit(unit, target, eff.power || eff.amount || 100, eff.basis || 'def', skill.name, eff.scaleBy || null);
  }
  if (eff.kind === 'status') {
    if (shouldBlockControl(unit, target, eff)) return false;
    addStatus(target, eff.status, eff.status, eff.duration || 1, eff.value || 1, eff.tick || 'turnEnd', eff.extra || { fromSide: unit.side });
    return true;
  }
  if (eff.kind === 'stat') {
    const mode = eff.mode || (Math.abs(eff.amount || 0) < 2 && (eff.amount || 0) !== 0 ? 'mult' : 'flat');
    if (mode === 'mult') {
      addStatMod(target, eff.stat, eff.amount, eff.duration || 1, 'mult');
    } else {
      addStatMod(target, eff.stat, eff.amount, eff.duration || 1, 'flat');
    }
    return true;
  }
  if (eff.kind === 'shield') {
    const amt = Math.round(eff.amount || 0);
    target.shield += amt;
    appendLog(`    → ${target.name} にシールド ${n(amt)}。`);
    return true;
  }
  if (eff.kind === 'cleanse') {
    if (eff.scope === 'debuffs') removeCombatDebuffs(target);
    else if (eff.scope === 'control') removeOneControl(target);
    else removeCombatDebuffs(target);
    return true;
  }
  return false;
}

function shouldBlockControl(source, target, eff) {
  if (!eff.status) return false;
  if (!CONTROL_DEBUFFS.has(eff.status) && eff.status !== 'capture') return false;
  if (hasStatus(target, '無敵')) return true;
  const phantom = target.skillState && target.skillState.phantomArt;
  if (phantom && target.shield > 0) {
    if (Math.random() < 0.45) {
      appendLog(`    ↩ 幻影の芸術が制御効果を防ぎました。`);
      if (source && Math.random() < 0.5) {
        dealDamage(target, source, { power: 100, damageType: 'int', sourceName: '幻影の芸術' });
        if (Math.random() < 0.25) addStatus(source, '混乱', 'confusion', 1, 1, 'turnEnd');
      }
      return true;
    }
  }
  return false;
}

function resolveTargets(unit, skill, ctx) {
  return [unit];
}

function resolveEffectTargets(unit, skill, ctx, eff, baseTargets) {
  const selector = eff.target || skill.target || 'self';
  switch (selector) {
    case 'self': return [unit];
    case 'selfAndLowestAlly': return [unit, lowestAlly(unit, true)].filter(Boolean);
    case 'selfAndRandomAlly': {
      const ally = randChoice(livingAlliesOf(unit).filter(x => x !== unit));
      return [unit].concat(ally ? [ally] : []);
    }
    case 'allyAll': return livingAlliesOf(unit);
    case 'enemyAll': return livingOpponents(unit);
    case 'enemyRandom': {
      const t = randChoice(livingOpponents(unit));
      return t ? [t] : [];
    }
    case 'allyTwo':
    case 'allyTwoRandom': return pickAllyTargets(unit, 2, true);
    case 'allyThree': return pickAllyTargets(unit, 3, true);
    case 'enemyTwo':
    case 'enemyTwoRandom': return pickEnemyTargets(unit, 2, true);
    case 'attackTarget': return ctx.attackTarget ? [ctx.attackTarget] : (ctx.target ? [ctx.target] : []);
    default: return baseTargets && baseTargets.length ? baseTargets : [unit];
  }
}

function getFirstSkill(unit, category) {
  const names = unit.skills || [];
  for (const name of names) {
    const skill = findSkill(name);
    if (skill && skill.category === category) return skill;
  }
  return null;
}

function findSkill(name) {
  return state.skills.find(s => s.name === name || s.id === name) || null;
}

function skillChance(unit, skill) {
  let chance = Number(skill.chance || 100);
  if (skill.name === '正義の心' || skill.name === '最終決戦') {
    // passive bonuses already included by their effects
  }
  if (hasSkill(unit, '正義の心') && (skill.category === 'active' || skill.trigger === 'action')) chance += 15;
  if (hasSkill(unit, '最終決戦') && (skill.category === 'active' || skill.trigger === 'action')) chance += 12;
  return clamp(chance, 0, 100);
}

function triggerSkillEvent(unit, eventName, ctx = {}) {
  if (!unit || !unit.alive) return;
  for (const name of unit.skills || []) {
    const skill = findSkill(name);
    if (!skill) continue;
    if (skill.trigger !== eventName) continue;
    if (skill.category === 'passive' || skill.category === 'engage' || skill.category === 'combo') {
      if (skill.special) {
        runSpecialSkill(skill.special, unit, skill, Object.assign({}, ctx, { event: eventName }));
      } else if (skill.effects && skill.effects.length) {
        const targets = resolveTargets(unit, skill, ctx);
        skill.effects.forEach(eff => resolveEffectTargets(unit, skill, ctx, eff, targets).forEach(t => applyEffect(unit, t, skill, eff, Object.assign({}, ctx, { event: eventName }))));
      }
    }
  }
}

function triggerSkillEventForAllies(unit, eventName, ctx = {}) {
  for (const ally of livingAlliesOf(unit)) {
    if (!ally.alive || (ctx.actor && ally.uid === ctx.actor.uid)) continue;
    for (const name of ally.skills || []) {
      const skill = findSkill(name);
      if (!skill || skill.trigger !== eventName) continue;
      if (skill.special) runSpecialSkill(skill.special, ally, skill, Object.assign({}, ctx, { event: eventName }));
      else if (skill.effects && skill.effects.length) {
        skill.effects.forEach(eff => resolveEffectTargets(ally, skill, ctx, eff, [ally]).forEach(t => applyEffect(ally, t, skill, eff, Object.assign({}, ctx, { event: eventName }))));
      }
    }
  }
}

function getCommander(side) {
  const list = side === 'left' ? state.battle.left : state.battle.right;
  return list[0];
}

function livingUnits() {
  return state.battle.units.filter(u => u && u.alive);
}

function livingBySide(side) {
  return livingUnits().filter(u => u.side === side);
}

function livingAlliesOf(unit) {
  return livingBySide(unit.side);
}

function livingOpponents(unit) {
  return livingUnits().filter(u => u.side !== unit.side);
}

function otherSide(side) {
  return side === 'left' ? 'right' : 'left';
}

function pickEnemyTargets(unit, count, ignoreRange = false) {
  let list = livingOpponents(unit);
  if (!ignoreRange) list = list.filter(t => inRange(unit, t, effectiveStats(unit).rng));
  if (!list.length) list = livingOpponents(unit);
  return pickUnique(list, count);
}

function pickAllyTargets(unit, count, includeSelf = false) {
  let list = livingAlliesOf(unit);
  if (!includeSelf) list = list.filter(t => t !== unit);
  if (!list.length) list = [unit];
  return pickUnique(list, count);
}

function lowestAlly(unit, includeSelf = false) {
  const list = livingAlliesOf(unit).filter(u => includeSelf || u !== unit);
  if (!list.length) return includeSelf ? unit : null;
  return list.reduce((a, b) => (a.wounded > b.wounded ? a : b), list[0]);
}

function mostWoundedAlly(unit) {
  const list = livingAlliesOf(unit).filter(u => u.alive);
  if (!list.length) return null;
  return list.reduce((a, b) => (a.wounded > b.wounded ? a : b), list[0]);
}

function battleAnyAllyBelow70(unit) {
  return livingAlliesOf(unit).some(u => u.troops < u.maxTroops * 0.7);
}

function pickUnique(list, count) {
  const arr = list.slice();
  shuffle(arr);
  return arr.slice(0, Math.min(count, arr.length));
}

function randChoice(list) {
  if (!list || !list.length) return null;
  return list[Math.floor(Math.random() * list.length)];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function effectiveStats(unit) {
  const base = unit.base;
  const stats = {
    atk: base.atk,
    def: base.def,
    int: base.int,
    agi: base.agi,
    rng: base.rng,
  };
  let outDamageBonus = 0;
  let inDamageReduction = 0;
  let healBonus = 0;
  let critChance = 0;
  let evadeChance = 0;
  let hitChance = 0;
  let extraAttack = 0;
  let invincible = hasStatus(unit, '無敵') || false;
  let breakArmor = hasStatus(unit, '破陣') || false;

  for (const mod of unit.mods || []) {
    if (mod.duration <= 0) continue;
    if (mod.kind === 'flat') stats[mod.stat] = (stats[mod.stat] || 0) + mod.value;
    if (mod.kind === 'mult') stats[mod.stat] = (stats[mod.stat] || 0) * mod.value;
  }

  for (const s of unit.statuses || []) {
    if (s.duration <= 0) continue;
    switch (s.kind) {
      case 'statFlat':
        stats[s.stat] = (stats[s.stat] || 0) + s.value;
        break;
      case 'statMult':
        stats[s.stat] = (stats[s.stat] || 0) * s.value;
        break;
      case 'damageBonusPct':
        outDamageBonus += s.value;
        break;
      case 'damageTakenReductionPct':
        inDamageReduction += s.value;
        break;
      case 'healBonusPct':
        healBonus += s.value;
        break;
      case 'critChancePct':
        critChance += s.value;
        break;
      case 'evadeChancePct':
        evadeChance += s.value;
        break;
      case 'hitChancePct':
        hitChance += s.value;
        break;
      case 'extraAttack':
        extraAttack += s.value;
        break;
      case 'invincible':
        invincible = true;
        break;
      case 'breakArmor':
        unit._breakArmor = true;
        break;
    }
  }

  unit._outDamageBonus = outDamageBonus + (unit.skillState.finalBattle ? unit.skillState.finalBattle * 6 : 0);
  unit._inDamageReduction = inDamageReduction;
  unit._healBonus = healBonus;
  unit._critChance = critChance + (hasStatus(unit, '狙撃者の心得-クリティカル') ? 25 : 0);
  unit._evadeChance = evadeChance;
  unit._hitChance = Math.max(hitChance, hasStatus(unit, '必中') ? 100 : 0);
  unit._extraAttack = extraAttack + (unit.skillState.extraAttackStacks || 0);
  unit._invincible = invincible;
  unit._breakArmor = breakArmor || !!unit._breakArmor;

  return {
    atk: round3(stats.atk),
    def: round3(stats.def),
    int: round3(stats.int),
    agi: round3(stats.agi),
    rng: round3(stats.rng),
  };
}

function statInfluence(value) {
  return Math.max(0, (value / 50) * 0.1);
}

function healUnit(healer, target, power, basis, sourceName, scaleBy = null) {
  if (!healer || !target || !target.alive) return false;
  if (hasStatus(target, '回復無効') || hasStatus(target, '疲弊')) {
    appendLog(`    → ${target.name} は回復できません。`);
    return false;
  }
  if (healer.troops <= 0) return false;
  let base = (145 * Math.log(Math.max(1, healer.troops)) - 900);
  if (base < 0) base = 0;
  let mult = (power || 100) / 100;
  const eff = effectiveStats(healer);
  if (basis && eff[basis] != null) mult *= 1 + statInfluence(eff[basis]);
  if (scaleBy && eff[scaleBy] != null) mult *= 1 + statInfluence(eff[scaleBy]);
  mult *= 1 + (healer._healBonus || 0) / 100;
  const amount = Math.round(Math.max(0, base * mult * (0.975 + Math.random() * 0.05)));
  if (amount <= 0) return false;
  const actual = Math.min(amount, target.wounded);
  if (actual <= 0) {
    appendLog(`    → ${target.name} は負傷兵がいないため回復量0。`);
    return false;
  }
  target.wounded -= actual;
  target.troops += actual;
  if (target.troops > target.maxTroops - target.dead) {
    target.troops = target.maxTroops - target.dead;
  }
  appendLog(`    → ${target.name} が ${n(actual)} 回復。残存兵力 ${n(target.troops)} / 負傷兵 ${n(target.wounded)}`);
  return true;
}

function healByFixed(healer, target, amount, sourceName) {
  if (!healer || !target || !target.alive) return false;
  if (hasStatus(target, '回復無効') || hasStatus(target, '疲弊')) return false;
  const actual = Math.min(amount, target.wounded);
  if (actual <= 0) return false;
  target.wounded -= actual;
  target.troops += actual;
  if (target.troops > target.maxTroops - target.dead) target.troops = target.maxTroops - target.dead;
  appendLog(`    → ${target.name} が ${n(actual)} 回復（${sourceName}）。`);
  return true;
}

function addStatMod(unit, stat, value, duration, kind) {
  unit.mods = unit.mods || [];
  unit.mods.push({
    stat,
    value,
    duration: duration || 1,
    kind: kind || 'flat',
  });
}

function addStatus(unit, name, kind, duration, value, tick, extra = {}) {
  if (!unit || !unit.alive && kind !== 'invincible') return;
  if (kind === 'control' && hasStatus(unit, '無敵')) return;
  if (CONTROL_DEBUFFS.has(kind) && hasStatus(unit, '無敵')) return;
  unit.statuses = unit.statuses || [];
  unit.statuses.push(Object.assign({
    name,
    kind,
    duration: duration || 1,
    value: value == null ? 1 : value,
    tick: tick || 'turnEnd',
  }, extra));
}

function hasStatus(unit, name) {
  return !!(unit.statuses || []).find(s => s.name === name && s.duration > 0);
}

function removeCombatDebuffs(unit) {
  unit.statuses = (unit.statuses || []).filter(s => {
    if (COMBAT_DEBUFFS.has(s.kind)) return false;
    if (CONTROL_DEBUFFS.has(s.kind)) return false;
    if (s.kind === 'dot') return false;
    if (s.kind === 'healBlock') return false;
    if (s.kind === 'fatigue') return false;
    if (s.kind === 'weaken') return false;
    return true;
  });
}

function removeOneControl(unit) {
  const idx = (unit.statuses || []).findIndex(s => CONTROL_DEBUFFS.has(s.kind));
  if (idx >= 0) unit.statuses.splice(idx, 1);
}

function getProtectorFor(unit) {
  const allies = livingAlliesOf(unit);
  for (const a of allies) {
    const status = (a.statuses || []).find(s => s.kind === 'protect' && s.targetId === unit.uid);
    if (status) return a;
  }
  return null;
}

function tickAllStatuses(phase) {
  livingUnits().forEach(u => tickUnitStatuses(u, phase));
}

function tickUnitStatuses(unit, phase) {
  if (!unit) return;
  const next = [];
  for (const s of unit.statuses) {
    if (s.tick === phase || s.tick === 'all') {
      // DOT damage applied before duration decrement
      if (s.kind === 'dot' && unit.alive && s.duration > 0) {
        const dotDmg = Math.round(s.value || 0);
        if (dotDmg > 0) {
          applyCasualty(unit, dotDmg, null, `${s.name}（持続ダメージ）`);
        }
      }
      s.duration -= 1;
    }
    if (s.duration > 0) next.push(s);
  }
  unit.statuses = next;

  const nextMods = [];
  for (const m of unit.mods) {
    if (phase === 'turnEnd') {
      m.duration -= 1;
    }
    if (m.duration > 0) nextMods.push(m);
  }
  unit.mods = nextMods;
}

function updateDeaths() {
  state.battle.units.forEach(u => {
    if (u && u.troops <= 0) u.alive = false;
  });
}

function checkBattleEnd() {
  const b = state.battle;
  if (!b) return false;
  const leftCommander = b.left[0];
  const rightCommander = b.right[0];
  const leftDead = !leftCommander || !leftCommander.alive || leftCommander.troops <= 0;
  const rightDead = !rightCommander || !rightCommander.alive || rightCommander.troops <= 0;
  if (leftDead && rightDead) {
    b.winner = null;
    return true;
  }
  if (leftDead || rightDead) {
    b.winner = leftDead ? 'right' : 'left';
    return true;
  }
  return false;
}

function endBattleIfNeeded() {
  const b = state.battle;
  if (!b) return;
  b.phase = 'end';
  if (b.winner) {
    appendLog(`\n${SIDE_LABEL[b.winner]}の勝利！`);
  } else {
    appendLog('\n引き分けです。');
  }
  logSurvivors();
  renderBattleStatus();
  saveToStorage();
}

function logSurvivors() {
  appendLog('【残存兵力 / 負傷兵】');
  for (const u of livingUnits()) {
    appendLog(`- ${SIDE_LABEL[u.side]} ${u.name}: 兵力 ${n(u.troops)} / 負傷兵 ${n(u.wounded)}`);
  }
  for (const u of state.battle.units.filter(u => !u.alive)) {
    appendLog(`- ${SIDE_LABEL[u.side]} ${u.name}: 兵力 0 / 負傷兵 ${n(u.wounded)}`);
  }
}

function triggerSkillEventForAllies(unit, eventName, ctx = {}) {
  for (const ally of livingAlliesOf(unit)) {
    if (!ally.alive || (ctx.actor && ally.uid === ctx.actor.uid)) continue;
    for (const name of ally.skills || []) {
      const skill = findSkill(name);
      if (!skill || skill.trigger !== eventName) continue;
      if (skill.special) runSpecialSkill(skill.special, ally, skill, Object.assign({}, ctx, { event: eventName }));
      else if (skill.effects && skill.effects.length) {
        const targets = resolveTargets(ally, skill, ctx);
        skill.effects.forEach(eff => resolveEffectTargets(ally, skill, ctx, eff, targets).forEach(t => applyEffect(ally, t, skill, eff, Object.assign({}, ctx, { event: eventName }))));
      }
    }
  }
}

function hasSkill(unit, name) {
  return (unit.skills || []).includes(name);
}

function normalizeHeroes(input) {
  const list = Array.isArray(input) ? input : (input.heroes || []);
  return list.map((h, i) => {
    const stats = h.stats || {
      atk: h.atk || h.ATK || 0,
      def: h.def || h.DEF || 0,
      int: h.int || h.INT || 0,
      agi: h.agi || h.AGI || h.sensitive || 0,
      rng: h.rng || h.RNG || 0,
    };
    return {
      id: h.id || slug(h.name || `hero_${i+1}`),
      name: h.name || h.名前 || `偉人${i+1}`,
      faction: h.faction || 'custom',
      stats: {
        atk: num(stats.atk),
        def: num(stats.def),
        int: num(stats.int),
        agi: num(stats.agi),
        rng: num(stats.rng),
      },
      skills: Array.isArray(h.skills) ? h.skills.slice() : [],
      troops: num(h.troops || h.hp || 10000),
    };
  });
}

function normalizeSkills(input) {
  const list = Array.isArray(input) ? input : (input.skills || []);
  return list.map((s, i) => {
    return {
      id: s.id || slug(s.name || `skill_${i+1}`),
      name: s.name || s.skillName || `スキル${i+1}`,
      category: s.category || s.type || 'active',
      trigger: s.trigger || inferTrigger(s.category || s.type || ''),
      chance: num(s.chance || s['発動確率'] || 100),
      target: s.target || 'self',
      prepTurns: num(s.prepTurns || s.prep || 0),
      special: s.special || null,
      effects: Array.isArray(s.effects) ? s.effects : [],
      description: s.description || s.text || s.raw || '',
    };
  });
}

function normalizeTeams(input) {
  const out = { left: ['', '', ''], right: ['', '', ''] };
  if (!input) return clone(out);
  ['left','right'].forEach(side => {
    const src = input[side] || [];
    out[side] = [0,1,2].map(i => src[i] || '');
  });
  return out;
}

function inferTrigger(category) {
  const c = String(category || '').toLowerCase();
  if (c.includes('パッシブ')) return 'battleStart';
  if (c.includes('エンゲージ') || c.includes('開幕')) return 'battleStart';
  if (c.includes('コンボ') || c.includes('追撃')) return 'afterNormalAttack';
  if (c.includes('アクティブ')) return 'action';
  return 'action';
}

function parseJson(text) {
  try { return JSON.parse(text); } catch (e) { return null; }
}

function downloadJson(obj, filename) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function appendLog(text) {
  state.log.push(text);
  renderLog();
}

function toast(msg) {
  appendLog(`〔${msg}〕`);
}

function rollChance(percent) {
  return Math.random() * 100 < percent;
}

function phaseLabel(phase) {
  switch (phase) {
    case 'opening': return '開幕';
    case 'turnStart': return 'ターン開始';
    case 'action': return '行動';
    case 'turnEnd': return 'ターン終了';
    case 'end': return '終了';
    default: return phase || '-';
  }
}

function uid() {
  return 'u' + Math.random().toString(36).slice(2, 10);
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function num(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function round(v) {
  return Math.round(v);
}

function round3(v) {
  return Math.round(v * 1000) / 1000;
}

function n(v) {
  return round(v).toLocaleString('ja-JP');
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function slug(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9\u3040-\u30ff\u4e00-\u9faf]+/g, '_').replace(/^_+|_+$/g, '') || 'id';
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
