import { createProgress } from './progress.js';
import { initNavigation } from './navigation.js';
import { initEnvironment, initStrategy, initLab } from './interactions.js';
import { initQuiz } from './quiz.js';
import { structureSvgV2, appVisualV2 } from './animal-visuals.js';

const TAB_IDS = ['mission', 'activity1', 'activity2', 'activity3', 'lab', 'applications', 'quiz', 'resources'];
const ANIMAL_ICONS = ['🦆', '🦅', '🐇', '🐸'];

function structureSvg(type) {
  const common = 'font-family="Noto Sans TC" font-size="15" font-weight="700" fill="#173f35"';
  if (type === 'duck-beak') return `<svg viewBox="0 0 430 300" role="img" aria-label="綠頭鴨寬扁的喙與梳狀喙緣示意">
    <rect width="430" height="300" rx="28" fill="#cfe8df"/><circle cx="178" cy="138" r="86" fill="#2e7561"/><circle cx="204" cy="114" r="7" fill="#fff"/><circle cx="206" cy="114" r="3" fill="#173f35"/>
    <path d="M251 125Q339 100 382 140Q325 186 247 155Z" fill="#e8a34d" stroke="#8d6135" stroke-width="4"/><path d="M264 151h100" stroke="#8d6135" stroke-width="4"/>
    <g stroke="#8d6135" stroke-width="3"><path d="M276 150v18"/><path d="M292 149v21"/><path d="M309 147v21"/><path d="M326 145v18"/><path d="M343 143v14"/></g>
    <path d="M365 212Q312 191 306 158" fill="none" stroke="#e9825e" stroke-width="4"/><rect x="238" y="207" width="167" height="39" rx="10" fill="#fff"/><text x="321" y="232" text-anchor="middle" ${common}>細片讓水流出、食物留下</text>
  </svg>`;
  if (type === 'raptor-claw') return `<svg viewBox="0 0 430 300" role="img" aria-label="猛禽彎鉤喙與強壯腳爪示意">
    <rect width="430" height="300" rx="28" fill="#e8e1c9"/><path d="M74 197Q65 82 178 49Q281 55 301 137Q280 212 178 222Z" fill="#b87d45"/><path d="M225 87Q300 91 343 128Q313 145 265 143Q273 173 231 183Q244 144 225 87Z" fill="#dfaa55" stroke="#774d2d" stroke-width="4"/>
    <circle cx="231" cy="103" r="8" fill="#f7da65"/><circle cx="233" cy="103" r="3" fill="#173f35"/>
    <path d="M155 202v49m57-44v45" stroke="#a56d37" stroke-width="14"/><g fill="none" stroke="#5d452f" stroke-width="6" stroke-linecap="round"><path d="M155 246q-31-5-42 20"/><path d="M155 246q9 4 10 27"/><path d="M210 247q-28-2-38 24"/><path d="M212 247q12 3 15 24"/></g>
    <path d="M335 70l-52 53" stroke="#e9825e" stroke-width="4"/><rect x="303" y="39" width="109" height="38" rx="10" fill="#fff"/><text x="357" y="64" text-anchor="middle" ${common}>彎鉤集中力量</text>
  </svg>`;
  if (type === 'rabbit-teeth') return `<svg viewBox="0 0 430 300" role="img" aria-label="兔子門齒切斷植物、臼齒磨碎纖維示意">
    <rect width="430" height="300" rx="28" fill="#f0e4d1"/><ellipse cx="215" cy="163" rx="112" ry="92" fill="#ded2c2"/><ellipse cx="154" cy="63" rx="28" ry="70" fill="#d8c8b9" transform="rotate(-7 154 63)"/><ellipse cx="252" cy="62" rx="28" ry="72" fill="#d8c8b9" transform="rotate(8 252 62)"/>
    <circle cx="174" cy="143" r="8" fill="#173f35"/><circle cx="252" cy="143" r="8" fill="#173f35"/><path d="M191 173Q215 188 239 173" fill="#b98173"/><rect x="198" y="184" width="18" height="37" rx="4" fill="#fff" stroke="#9c8b73"/><rect x="216" y="184" width="18" height="37" rx="4" fill="#fff" stroke="#9c8b73"/>
    <path d="M96 238h71" stroke="#79a657" stroke-width="9" stroke-linecap="round"/><path d="M114 239q-26-30-40-7m57 7q-17-35-38-37" fill="none" stroke="#79a657" stroke-width="7"/>
    <path d="M336 212l-99-15" stroke="#e9825e" stroke-width="4"/><rect x="286" y="209" width="124" height="39" rx="10" fill="#fff"/><text x="348" y="234" text-anchor="middle" ${common}>門齒像切刀</text>
  </svg>`;
  return `<svg viewBox="0 0 430 300" role="img" aria-label="青蛙長後腿與腳蹼增加推水面積示意">
    <rect width="430" height="300" rx="28" fill="#cfe8e6"/><path d="M0 218Q100 189 216 221T430 206V300H0Z" fill="#78b6ba"/><ellipse cx="213" cy="144" rx="84" ry="61" fill="#75a966"/><circle cx="177" cy="100" r="25" fill="#9ac67b"/><circle cx="246" cy="100" r="25" fill="#9ac67b"/><circle cx="181" cy="96" r="6" fill="#173f35"/><circle cx="242" cy="96" r="6" fill="#173f35"/>
    <path d="M154 180Q105 218 61 263M272 179q49 39 94 82" fill="none" stroke="#629559" stroke-width="22" stroke-linecap="round"/><path d="M61 263l-31 17m31-17 0 25m0-25 28 20M366 261l-28 19m28-19 3 26m-3-26 31 18" stroke="#4e8653" stroke-width="9" stroke-linecap="round"/>
    <path d="M319 65l41 67" stroke="#e9825e" stroke-width="4"/><rect x="287" y="35" width="125" height="38" rx="10" fill="#fff"/><text x="349" y="60" text-anchor="middle" ${common}>腳蹼增加面積</text>
  </svg>`;
}

function appVisual(type) {
  const scenes = {
    'webbed-foot': `<svg viewBox="0 0 320 180" role="img" aria-label="鴨子的蹼足向後推水"><rect width="320" height="180" rx="18" fill="#d9eef0"/><path d="M0 105q70-18 140 0t180 0" stroke="#5aa0aa" stroke-width="5" fill="none"/><path d="M148 45v66m0 0-38 34m38-34 0 43m0-43 40 33" stroke="#d88445" stroke-width="12" stroke-linecap="round"/><path d="M109 147q38 20 80-1" fill="#e9a85b"/><path d="M213 75h54m-8-9 14 9-14 9" stroke="#e9825e" stroke-width="4" fill="none"/></svg>`,
    teeth: `<svg viewBox="0 0 320 180" role="img" aria-label="尖犬齒與寬臼齒的比較"><rect width="320" height="180" rx="18" fill="#f5ead8"/><path d="M55 38q28 8 53 0l-13 100q-15 19-28 0z" fill="#fff" stroke="#9a896e" stroke-width="4"/><path d="M184 52q40-17 76 0l-6 76q-31 27-64 0z" fill="#fff" stroke="#9a896e" stroke-width="4"/><path d="M135 89h30m-9-9 13 9-13 9" stroke="#e9825e" stroke-width="4"/><text x="80" y="164" text-anchor="middle" fill="#173f35" font-size="14" font-weight="700">尖：刺、撕</text><text x="221" y="164" text-anchor="middle" fill="#173f35" font-size="14" font-weight="700">寬：磨碎</text></svg>`,
    camouflage: `<svg viewBox="0 0 320 180" role="img" aria-label="昆蟲在樹皮上利用保護色"><rect width="320" height="180" rx="18" fill="#bccfa6"/><path d="M0 140Q85 78 168 112T320 70V180H0Z" fill="#779b62"/><path d="M40 164Q130 92 235 34" stroke="#70573b" stroke-width="18"/><g transform="translate(137 91) rotate(-30)" stroke="#6d5738" stroke-linecap="round"><path d="M0 0h87" stroke-width="8"/><path d="M20 0L4-19m16 19L3 18m52-18 19-20M55 0l20 18" stroke-width="4"/></g><circle cx="214" cy="48" r="24" fill="none" stroke="#e9825e" stroke-width="4" stroke-dasharray="5 5"/></svg>`,
    fish: `<svg viewBox="0 0 320 180" role="img" aria-label="魚的流線形身體與水流方向"><rect width="320" height="180" rx="18" fill="#c7e9eb"/><path d="M30 45h250M15 90h284M40 138h220" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".75"/><path d="M80 93q65-70 155 0q-70 70-155 0Q51 114 27 130q20-37 0-73 27 17 53 36" fill="#e7a24e" stroke="#805a35" stroke-width="4"/><circle cx="209" cy="80" r="5" fill="#173f35"/></svg>`,
    insulation: `<svg viewBox="0 0 320 180" role="img" aria-label="蓬鬆羽毛層留住空氣以減少熱散失"><rect width="320" height="180" rx="18" fill="#e5eef1"/><circle cx="160" cy="90" r="48" fill="#f6c56b"/><path d="M92 144q-42-62 4-103q27 8 44 41q13-47 61-52q37 40 8 88q-19 35-64 34q-32 12-53-8" fill="#fff" stroke="#8aa5a9" stroke-width="4"/><path d="M53 47l18 15m191-19-18 17M69 129l-23 11m217-15 22 13" stroke="#70a7b4" stroke-width="4"/><text x="160" y="101" text-anchor="middle" fill="#173f35" font-size="14" font-weight="800">留住空氣</text></svg>`,
    'group-watch': `<svg viewBox="0 0 320 180" role="img" aria-label="一隻狐獴站哨，其他成員覓食"><rect width="320" height="180" rx="18" fill="#f0dfb6"/><path d="M0 135q80-36 160 0t160-10v55H0z" fill="#d6ac6b"/><g fill="#a97447" stroke="#6f4c32" stroke-width="3"><ellipse cx="215" cy="92" rx="18" ry="48"/><circle cx="215" cy="41" r="20"/><ellipse cx="91" cy="125" rx="29" ry="18"/><circle cx="115" cy="111" r="15"/><ellipse cx="146" cy="135" rx="27" ry="17"/><circle cx="168" cy="122" r="14"/></g><path d="M236 37q22-18 40 1m-35 12q14-11 25 0" stroke="#e9825e" stroke-width="4" fill="none"/></svg>`
  };
  return scenes[type];
}

function renderStructure(items) {
  const selector = document.querySelector('#structure-selector');
  const stage = document.querySelector('#structure-stage');
  selector.innerHTML = items.map((item, i) => `<button class="animal-button ${i === 0 ? 'is-active' : ''}" type="button" data-animal="${i}"><span>${ANIMAL_ICONS[i]}</span>${item.animal}</button>`).join('');
  function show(index) {
    const item = items[index];
    selector.querySelectorAll('button').forEach((button, i) => button.classList.toggle('is-active', i === index));
    stage.innerHTML = `<div class="concept-visual">${structureSvgV2(item.visual)}</div><div class="concept-copy"><p class="section-kicker">觀察對象 ${String(index + 1).padStart(2, '0')}</p><h3>${item.animal}</h3><div class="fact-row"><span>構造特徵</span><strong>${item.feature}</strong></div><div class="fact-row"><span>可能功能</span><strong>${item.function}</strong></div><div class="fact-row"><span>證據怎麼說</span><strong>${item.evidence}</strong></div></div>`;
  }
  selector.addEventListener('click', event => { const button = event.target.closest('[data-animal]'); if (button) show(Number(button.dataset.animal)); });
  show(0);
}

function renderApplications(items) {
  const grid = document.querySelector('#application-grid');
  grid.innerHTML = items.map(item => `<article class="application-card"><div class="app-visual">${appVisualV2(item.visual)}</div><div class="application-copy"><span class="principle-tag">${item.principle}</span><h3>${item.title}</h3><p>${item.description}</p><p class="thought-question">想一想：${item.question}</p></div></article>`).join('');
}

function renderResources(items) {
  const icons = ['🏛️', '🦗', '🔬', '🧭', '🦴', '🥽', '📚', '🌿'];
  document.querySelector('#resource-grid').innerHTML = items.map((item, i) => `<a class="resource-card" href="${item.url}" target="_blank" rel="noopener noreferrer"><span class="resource-icon" aria-hidden="true">${icons[i]}</span><h3>${item.title}</h3><p>${item.description}</p><div class="resource-meta"><span>${item.type}</span><span>${item.grade}</span><span>查核 ${item.checkedAt}</span></div></a>`).join('');
}

async function start() {
  try {
    const [content, quiz, resources] = await Promise.all([
      fetch('data/content.json').then(response => response.json()),
      fetch('data/quiz.json').then(response => response.json()),
      fetch('data/resources.json').then(response => response.json())
    ]);
    renderStructure(content.activities.structure);
    renderApplications(content.applications);
    renderResources(resources);
    initEnvironment(content.activities.environments);
    initStrategy(content.activities.survival);
    initLab();
    const progress = createProgress(TAB_IDS.length);
    const navigation = initNavigation(TAB_IDS, progress.mark);
    initQuiz(quiz, navigation.showTab);
  } catch (error) {
    console.error(error);
    document.querySelector('#learning-content').innerHTML = `<section class="tab-panel is-active"><h2>教材資料暫時無法載入</h2><p>請重新整理頁面；若直接從電腦開啟檔案，請改用本機伺服器啟動。</p></section>`;
  }
}

start();
