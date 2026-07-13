function environmentSvg(type) {
  if (type === 'cold') return `
    <svg viewBox="0 0 620 370" role="img" aria-label="北極熊在寒冷雪地，標示厚毛、脂肪層和小耳朵">
      <rect width="620" height="370" rx="26" fill="#dceff3"/>
      <path d="M0 270Q150 210 310 270T620 245V370H0Z" fill="#fff"/>
      <path d="M0 318Q160 260 340 320T620 285V370H0Z" fill="#cbe1e5"/>
      <g class="snow-dot" fill="#fff"><circle cx="100" cy="40" r="8"/><circle cx="480" cy="55" r="9"/><circle cx="550" cy="130" r="6"/></g>
      <g class="breathing" transform="translate(170 115)">
        <ellipse cx="150" cy="120" rx="125" ry="84" fill="#f9f6ea" stroke="#8aa9aa" stroke-width="3"/>
        <circle cx="253" cy="78" r="57" fill="#f9f6ea" stroke="#8aa9aa" stroke-width="3"/>
        <circle cx="225" cy="31" r="19" fill="#f0eadc" stroke="#8aa9aa" stroke-width="3"/>
        <circle cx="276" cy="35" r="18" fill="#f0eadc" stroke="#8aa9aa" stroke-width="3"/>
        <circle cx="272" cy="75" r="5" fill="#173f35"/><ellipse cx="305" cy="91" rx="16" ry="11" fill="#173f35"/>
        <path d="M65 178l-5 75m72-61-2 64m94-72 5 69m50-85 19 83" stroke="#e7e1d5" stroke-width="27" stroke-linecap="round"/>
        <path d="M76 70Q150 17 221 70" fill="none" stroke="#b8d2d0" stroke-width="13" stroke-dasharray="4 8"/>
      </g>
      <g font-family="Noto Sans TC" font-weight="700" font-size="16" fill="#173f35">
        <path d="M135 95l82 52" stroke="#e9825e" stroke-width="3"/><rect x="35" y="66" width="108" height="38" rx="10" fill="#fff"/><text x="89" y="91" text-anchor="middle">厚毛隔絕層</text>
        <path d="M469 80l-58 59" stroke="#e9825e" stroke-width="3"/><rect x="458" y="50" width="115" height="38" rx="10" fill="#fff"/><text x="515" y="75" text-anchor="middle">相對小的耳朵</text>
        <path d="M122 305l110-50" stroke="#e9825e" stroke-width="3"/><rect x="32" y="293" width="130" height="38" rx="10" fill="#fff"/><text x="97" y="318" text-anchor="middle">皮下脂肪層</text>
      </g>
    </svg>`;
  if (type === 'desert') return `
    <svg viewBox="0 0 620 370" role="img" aria-label="駱駝在沙漠，標示長睫毛、可閉鼻孔和寬腳掌">
      <rect width="620" height="370" rx="26" fill="#f7deb0"/><circle cx="520" cy="70" r="44" fill="#f5b74c"/>
      <path d="M0 260Q150 180 330 260T620 220V370H0Z" fill="#eab96b"/><path d="M0 315Q170 250 350 320T620 280V370H0Z" fill="#d9964d"/>
      <g class="breathing" transform="translate(145 67)" fill="#b97845" stroke="#7b4b2d" stroke-width="3">
        <path d="M95 175Q78 102 124 83Q169 68 186 121Q202 55 253 73Q299 91 275 165L256 214H110Z"/>
        <path d="M267 169Q292 120 302 52Q305 23 333 23Q370 24 369 61L350 173"/>
        <ellipse cx="343" cy="43" rx="38" ry="27"/><circle cx="355" cy="36" r="4" fill="#173f35" stroke="none"/>
        <path d="M325 50l-12-10m15 5-11-16m14 13-3-18" stroke="#173f35" stroke-width="2"/>
        <path d="M127 197l-10 99m58-94 6 92m92-93-6 93m55-101 15 99" stroke="#8e5b35" stroke-width="17" stroke-linecap="round"/>
        <path d="M94 297h48m20-2h48m34 0h49m17-2h53" stroke="#8e5b35" stroke-width="15" stroke-linecap="round"/>
      </g>
      <g font-family="Noto Sans TC" font-weight="700" font-size="16" fill="#173f35">
        <path d="M455 59l-70 41" stroke="#e26048" stroke-width="3"/><rect x="448" y="37" width="112" height="38" rx="10" fill="#fff"/><text x="504" y="62" text-anchor="middle">長睫毛擋沙</text>
        <path d="M105 317l95-28" stroke="#e26048" stroke-width="3"/><rect x="26" y="305" width="120" height="38" rx="10" fill="#fff"/><text x="86" y="330" text-anchor="middle">寬腳掌分壓</text>
        <path d="M444 124l-69-21" stroke="#e26048" stroke-width="3"/><rect x="432" y="111" width="140" height="38" rx="10" fill="#fff"/><text x="502" y="136" text-anchor="middle">鼻孔可減少進沙</text>
      </g>
    </svg>`;
  return `
    <svg viewBox="0 0 620 370" role="img" aria-label="魚在水中，標示流線形身體、鰭和鰓">
      <defs><linearGradient id="water-bg" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#bfe5e7"/><stop offset="1" stop-color="#397d8c"/></linearGradient></defs>
      <rect width="620" height="370" rx="26" fill="url(#water-bg)"/>
      <path d="M0 76Q120 45 230 76T460 71T620 60" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="6"/>
      <g class="moving-animal" transform="translate(125 95)">
        <path d="M80 107Q177 27 318 99Q348 115 370 145Q346 174 309 185Q167 225 80 145Q43 178 3 181Q35 145 4 102Q45 104 80 107Z" fill="#efb453" stroke="#865d2e" stroke-width="4"/>
        <path d="M189 84Q215 30 268 42Q250 75 238 98" fill="#d98250" stroke="#865d2e" stroke-width="3"/>
        <path d="M197 176Q226 225 280 206Q257 180 238 162" fill="#d98250" stroke="#865d2e" stroke-width="3"/>
        <circle cx="309" cy="121" r="8" fill="#173f35"/><path d="M286 102Q270 137 288 165" fill="none" stroke="#7d5c36" stroke-width="4"/>
        <path d="M265 120l-52 30 54 11" fill="#e7924e" stroke="#865d2e" stroke-width="3"/>
      </g>
      <g fill="#d8f4f3"><circle cx="482" cy="222" r="10"/><circle cx="510" cy="187" r="6"/><circle cx="492" cy="158" r="4"/></g>
      <g font-family="Noto Sans TC" font-weight="700" font-size="16" fill="#173f35">
        <path d="M166 59l57 66" stroke="#e26048" stroke-width="3"/><rect x="44" y="35" width="133" height="38" rx="10" fill="#fff"/><text x="110" y="60" text-anchor="middle">流線形減少阻力</text>
        <path d="M493 101l-110 72" stroke="#e26048" stroke-width="3"/><rect x="468" y="77" width="100" height="38" rx="10" fill="#fff"/><text x="518" y="102" text-anchor="middle">鰓取氧</text>
        <path d="M455 286l-105-87" stroke="#e26048" stroke-width="3"/><rect x="438" y="272" width="116" height="38" rx="10" fill="#fff"/><text x="496" y="297" text-anchor="middle">鰭控制方向</text>
      </g>
    </svg>`;
}

function strategySvg(type, step) {
  const opacity = n => step === n ? 1 : .28;
  if (type === 0) return `
    <svg viewBox="0 0 600 360" role="img" aria-label="竹節蟲利用保護色降低被鳥發現的機會">
      <rect width="600" height="360" rx="24" fill="#d9ebd1"/><path d="M0 310Q160 240 300 310T600 280V360H0Z" fill="#91bd7e"/>
      <g style="opacity:${opacity(0)}"><path d="M60 270Q145 173 273 92T560 48" fill="none" stroke="#71543a" stroke-width="20" stroke-linecap="round"/><g fill="#659b61"><ellipse cx="150" cy="185" rx="50" ry="23" transform="rotate(-25 150 185)"/><ellipse cx="276" cy="100" rx="52" ry="24" transform="rotate(15 276 100)"/><ellipse cx="438" cy="67" rx="51" ry="23" transform="rotate(-15 438 67)"/></g></g>
      <g style="opacity:${opacity(1)}" transform="translate(250 94) rotate(-30)" stroke="#6d5738" stroke-linecap="round"><path d="M0 0h135" stroke-width="10"/><path d="M30 0L10-28m20 28L8 27m75-27 27-31M83 0l28 28" stroke-width="5"/><circle cx="135" cy="0" r="8" fill="#6d5738"/></g>
      <g style="opacity:${opacity(2)}" transform="translate(35 55)"><path d="M0 55Q50 2 110 48Q145 10 174 49Q123 69 85 84Q48 80 0 55Z" fill="#315f63"/><circle cx="118" cy="48" r="5" fill="#fff"/><path d="M174 49l35 13-35 11" fill="#e0a84a"/><path d="M117 95Q275 175 345 106" fill="none" stroke="#e9825e" stroke-width="4" stroke-dasharray="9 9"/></g>
      <g font-family="Noto Sans TC" font-weight="800"><rect x="195" y="306" width="210" height="34" rx="9" fill="#fff"/><text x="300" y="329" text-anchor="middle" fill="#173f35">${['先看背景：枝葉與枯枝','再看外觀：顏色與形狀相近','結果：掠食者較難辨認'][step]}</text></g>
    </svg>`;
  if (type === 1) return `
    <svg viewBox="0 0 600 360" role="img" aria-label="枯葉蝶外觀像環境中的枯葉">
      <rect width="600" height="360" rx="24" fill="#e8dfbd"/>
      <g style="opacity:${opacity(0)}" fill="#b47a47"><path d="M54 280Q158 170 280 78" fill="none" stroke="#6f5036" stroke-width="17"/><path d="M110 230q50-70 105-42q-25 64-105 42m100-101q45-64 101-31q-34 55-101 31m104-60q45-58 98-21q-35 49-98 21"/></g>
      <g style="opacity:${opacity(1)}" transform="translate(270 100)"><path d="M0 90Q-66 4 6 1Q60 24 50 91Q105 18 163 46Q173 119 58 112Z" fill="#9d6d3e" stroke="#5f442d" stroke-width="5"/><path d="M53 3l3 112M7 21l42 70m99-35-82 50" stroke="#d5b276" stroke-width="3"/><path d="M54 0v-28m0 0-16-18m16 18 18-17" stroke="#5f442d" stroke-width="3"/></g>
      <g style="opacity:${opacity(2)}" transform="translate(60 48)"><path d="M0 38Q48 3 103 38Q123 58 159 47Q122 91 72 82Q30 78 0 38Z" fill="#41686a"/><circle cx="107" cy="45" r="5" fill="#fff"/><path d="M159 47l31 11-31 12" fill="#e0a84a"/><path d="M140 100Q250 165 373 113" fill="none" stroke="#e9825e" stroke-width="4" stroke-dasharray="9 9"/></g>
      <rect x="180" y="306" width="240" height="34" rx="9" fill="#fff"/><text x="300" y="329" text-anchor="middle" fill="#173f35" font-family="Noto Sans TC" font-weight="800">${['背景：落葉很多','外觀：像一片有葉脈的枯葉','結果：可能被誤認成環境物體'][step]}</text>
    </svg>`;
  if (type === 2) return `
    <svg viewBox="0 0 600 360" role="img" aria-label="醒目色彩讓掠食者學習避開難吃的獵物">
      <rect width="600" height="360" rx="24" fill="#dff1e4"/>
      <g style="opacity:${opacity(0)}" transform="translate(245 105)"><ellipse cx="57" cy="70" rx="65" ry="47" fill="#ec5d45" stroke="#263f35" stroke-width="6"/><circle cx="35" cy="55" r="12" fill="#263f35"/><circle cx="79" cy="82" r="13" fill="#263f35"/><path d="M56 24v92" stroke="#263f35" stroke-width="5"/><circle cx="57" cy="18" r="28" fill="#263f35"/><path d="M44 0L31-22m38 22 15-21" stroke="#263f35" stroke-width="4"/></g>
      <g style="opacity:${opacity(1)}" transform="translate(38 73)"><path d="M0 50Q48 7 107 42Q134 58 170 47Q133 95 77 88Q32 84 0 50Z" fill="#426d70"/><circle cx="116" cy="48" r="5" fill="#fff"/><path d="M169 47l35 13-35 12" fill="#e0a84a"/><path d="M203 70q31 7 43 35" fill="none" stroke="#e9825e" stroke-width="5" stroke-dasharray="7 7"/></g>
      <g style="opacity:${opacity(2)}" transform="translate(58 218)"><path d="M0 50Q48 7 107 42Q134 58 170 47Q133 95 77 88Q32 84 0 50Z" fill="#426d70"/><circle cx="116" cy="48" r="5" fill="#fff"/><path d="M169 47l35 13-35 12" fill="#e0a84a"/><path d="M220 50h90" stroke="#e9825e" stroke-width="5"/><path d="M300 36l18 14-18 14" fill="#e9825e"/><path d="M350 20l35 60m0-60-35 60" stroke="#c84e45" stroke-width="10"/></g>
      <rect x="155" y="306" width="290" height="34" rx="9" fill="#fff"/><text x="300" y="329" text-anchor="middle" fill="#173f35" font-family="Noto Sans TC" font-weight="800">${['訊號：醒目色彩容易被注意','經驗：取食後可能有不愉快感受','學習：下次對相似外觀更猶豫'][step]}</text>
    </svg>`;
  return `
    <svg viewBox="0 0 600 360" role="img" aria-label="狐獴輪流站哨並發出警戒訊號">
      <rect width="600" height="360" rx="24" fill="#f2d9a8"/><path d="M0 280Q180 218 340 278T600 245V360H0Z" fill="#d6a75f"/>
      <g style="opacity:${opacity(0)}" transform="translate(150 184)" fill="#aa7747" stroke="#704d32" stroke-width="3"><ellipse cx="0" cy="60" rx="30" ry="48"/><circle cx="0" cy="10" r="26"/><path d="M-20-5l-12-18 21 7m31 11 12-18-21 7"/><circle cx="-8" cy="6" r="3" fill="#173f35"/><circle cx="8" cy="6" r="3" fill="#173f35"/><ellipse cx="70" cy="81" rx="34" ry="25"/><circle cx="93" cy="59" r="19"/></g>
      <g style="opacity:${opacity(1)}" transform="translate(370 93)" fill="#aa7747" stroke="#704d32" stroke-width="3"><ellipse cx="0" cy="93" rx="31" ry="68"/><circle cx="0" cy="21" r="28"/><path d="M-22 5l-13-20 22 8m35 12 13-20-22 8"/><circle cx="-9" cy="17" r="3" fill="#173f35"/><circle cx="9" cy="17" r="3" fill="#173f35"/><path d="M-14 158l-8 65m35-65 8 65" stroke="#704d32" stroke-width="13" stroke-linecap="round"/></g>
      <g style="opacity:${opacity(2)}"><path d="M398 82q30-35 61-3m-51 17q22-24 40-3" fill="none" stroke="#e26048" stroke-width="6"/><path d="M350 150Q275 115 215 140" fill="none" stroke="#e26048" stroke-width="4" stroke-dasharray="9 9"/><path d="M110 282q45 25 90 0" fill="none" stroke="#416d5d" stroke-width="6"/></g>
      <rect x="168" y="306" width="264" height="34" rx="9" fill="#fff"/><text x="300" y="329" text-anchor="middle" fill="#173f35" font-family="Noto Sans TC" font-weight="800">${['部分成員安心覓食','站哨者持續觀察四周','發現危險，發出訊號一起躲避'][step]}</text>
    </svg>`;
}

export function initEnvironment(environments) {
  const buttons = [...document.querySelectorAll('[data-environment]')];
  const visual = document.querySelector('#environment-visual');
  function render(type) {
    const data = environments[type];
    buttons.forEach(button => button.classList.toggle('is-active', button.dataset.environment === type));
    visual.innerHTML = environmentSvg(type);
    visual.classList.toggle('is-animated', type === 'water');
    document.querySelector('#env-label').textContent = `${data.label}・${data.animal}`;
    document.querySelector('#env-feature').textContent = data.feature;
    document.querySelector('#env-benefit').textContent = data.benefit;
    document.querySelector('#env-limit').textContent = data.limit;
  }
  buttons.forEach(button => button.addEventListener('click', () => render(button.dataset.environment)));
  render('cold');
}

export function initStrategy(strategies) {
  const tabs = document.querySelector('#strategy-tabs');
  const visual = document.querySelector('#strategy-visual');
  const steps = document.querySelector('#strategy-steps');
  let strategy = 0;
  let step = 0;
  let timer = null;

  tabs.innerHTML = strategies.map((item, i) => `<button type="button" class="strategy-button ${i === 0 ? 'is-active' : ''}" data-strategy="${i}">${item.name}</button>`).join('');

  function render() {
    const item = strategies[strategy];
    tabs.querySelectorAll('button').forEach((button, i) => button.classList.toggle('is-active', i === strategy));
    document.querySelector('#strategy-label').textContent = item.name;
    document.querySelector('#strategy-example').textContent = item.example;
    steps.innerHTML = item.steps.map((text, i) => `<li class="${i === step ? 'is-current' : ''}">${text}</li>`).join('');
    document.querySelector('#strategy-note').textContent = item.note;
    visual.innerHTML = strategySvg(strategy, step);
  }

  function stop() { clearInterval(timer); timer = null; }
  function play() {
    stop();
    const speed = Number(document.querySelector('#strategy-speed').value);
    timer = setInterval(() => { step = (step + 1) % 3; render(); }, speed);
  }

  tabs.addEventListener('click', event => {
    const button = event.target.closest('[data-strategy]');
    if (!button) return;
    stop(); strategy = Number(button.dataset.strategy); step = 0; render();
  });
  document.querySelector('#strategy-play').addEventListener('click', play);
  document.querySelector('#strategy-pause').addEventListener('click', stop);
  document.querySelector('#strategy-replay').addEventListener('click', () => { step = 0; render(); play(); });
  document.querySelector('#strategy-speed').addEventListener('change', () => { if (timer) play(); });
  render();
}

export function initLab() {
  const cards = [...document.querySelectorAll('.evidence-card')];
  const zones = [...document.querySelectorAll('.drop-zone')];
  const feedback = document.querySelector('#lab-feedback');
  let selected = null;
  let matched = 0;

  function select(card) {
    if (card.classList.contains('is-matched')) return;
    cards.forEach(item => item.classList.remove('is-selected'));
    selected = card;
    card.classList.add('is-selected');
    feedback.textContent = `已選「${card.querySelector('strong').textContent}」，請選擇觀察站。`;
  }

  function match(card, zone) {
    if (!card || card.classList.contains('is-matched')) return;
    if (card.dataset.match === zone.dataset.zone) {
      card.classList.add('is-matched');
      card.classList.remove('is-selected');
      zone.classList.add('is-correct');
      zone.disabled = true;
      matched += 1;
      feedback.textContent = matched === cards.length ? '全部配對成功！你已把構造、功能和環境證據連起來。' : '配對成功！構造特徵和這個觀察站有合理的證據關係。';
      selected = null;
    } else {
      zone.classList.add('is-wrong');
      setTimeout(() => zone.classList.remove('is-wrong'), 450);
      feedback.textContent = '這組證據還接不起來。看看構造的形狀和接觸面，再試一次。';
    }
  }

  cards.forEach(card => {
    card.addEventListener('click', () => select(card));
    card.addEventListener('dragstart', event => { select(card); event.dataTransfer.setData('text/plain', card.dataset.match); });
  });
  zones.forEach(zone => {
    zone.addEventListener('click', () => match(selected, zone));
    zone.addEventListener('dragover', event => { event.preventDefault(); zone.classList.add('is-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('is-over'));
    zone.addEventListener('drop', event => { event.preventDefault(); zone.classList.remove('is-over'); match(selected, zone); });
  });
  document.querySelector('#lab-reset').addEventListener('click', () => {
    selected = null; matched = 0;
    cards.forEach(card => card.classList.remove('is-selected', 'is-matched'));
    zones.forEach(zone => { zone.classList.remove('is-correct', 'is-wrong'); zone.disabled = false; });
    feedback.textContent = '已重設。先選一張證據卡，再找出最合理的觀察站。';
  });
}

