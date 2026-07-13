const font = 'font-family="Noto Sans TC, sans-serif" font-weight="800" fill="#173f35"';

function tag(x, y, w, text) {
  return `<rect x="${x}" y="${y}" width="${w}" height="32" rx="10" fill="#fff" stroke="#d4e2dc"/><text x="${x + w / 2}" y="${y + 22}" text-anchor="middle" font-size="14" ${font}>${text}</text>`;
}

export function structureSvgV2(type) {
  if (type === 'duck-beak') return `<svg viewBox="0 0 430 300" role="img" aria-label="雄綠頭鴨側身與寬扁、有梳狀喙緣的喙">
    <defs>
      <linearGradient id="mallardHead" x1="0" x2="1"><stop stop-color="#082f2a"/><stop offset=".5" stop-color="#0b6650"/><stop offset="1" stop-color="#163c36"/></linearGradient>
      <linearGradient id="mallardBody" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#b9b8ab"/><stop offset="1" stop-color="#77796f"/></linearGradient>
    </defs>
    <rect width="430" height="300" rx="28" fill="#dcece5"/><path d="M0 230Q95 208 196 232T430 220V300H0Z" fill="#9dcac1"/><path d="M0 250q110-18 220 0t210-4" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="4"/>
    <g transform="translate(12 61)">
      <ellipse cx="188" cy="130" rx="128" ry="72" fill="url(#mallardBody)" stroke="#374b44" stroke-width="2"/>
      <path d="M83 123Q31 132 9 166Q52 158 84 174" fill="#272d2a"/><path d="M97 155q82 35 166-5q-71 60-159 29" fill="#ded9c9" opacity=".75"/>
      <path d="M157 78q69 4 105 61q-55 10-111-7q-35-12-64-1q31-50 70-53" fill="#7c5d3f" stroke="#564637" stroke-width="2"/>
      <path d="M130 89q50 14 95 41" stroke="#d7c7aa" stroke-width="3" opacity=".6"/>
      <path d="M255 154q28-2 49 13q-27 11-52 2" fill="#121716"/><path d="M250 149q25-16 48-7q-19 15-43 20" fill="#f7f4e7"/>
      <path d="M247 77Q232 55 245 27Q260-5 300 1Q337 7 342 41Q345 72 318 91Q277 105 247 77Z" fill="url(#mallardHead)" stroke="#25463e" stroke-width="2"/>
      <path d="M246 77q39 16 73 1" fill="none" stroke="#fff" stroke-width="8"/><path d="M255 86q25 19 43 48" fill="none" stroke="#783d27" stroke-width="27"/>
      <circle cx="309" cy="35" r="6" fill="#d9b45d"/><circle cx="310" cy="35" r="3" fill="#111"/>
      <path d="M330 45Q372 30 405 48Q378 70 330 62Z" fill="#d8ad42" stroke="#6b552e" stroke-width="2"/><ellipse cx="386" cy="47" rx="5" ry="2" fill="#473a25"/>
      <path d="M333 59q34 7 64-8" fill="none" stroke="#68542c" stroke-width="2"/><g stroke="#765f34" stroke-width="1.5"><path d="M345 58v8"/><path d="M354 58v9"/><path d="M363 57v9"/><path d="M372 55v8"/><path d="M381 54v6"/></g>
      <path d="M166 188v33m52-34v35" stroke="#d28742" stroke-width="6"/><path d="M166 220l-25 13m25-13 3 17m-3-17 24 12m28-10-22 14m22-14 5 17m-5-17 24 10" stroke="#d28742" stroke-width="4" stroke-linecap="round"/>
    </g>
    <path d="M355 39L365 105" stroke="#e9825e" stroke-width="3"/><circle cx="365" cy="105" r="5" fill="#e9825e"/>${tag(280, 12, 138, '寬扁喙＋梳狀喙緣')}
  </svg>`;

  if (type === 'raptor-claw') return `<svg viewBox="0 0 430 300" role="img" aria-label="大冠鷲的冠羽、彎鉤喙、黃色強壯腳爪">
    <defs><linearGradient id="eagleFeather" x1="0" x2="1"><stop stop-color="#312a24"/><stop offset=".55" stop-color="#584337"/><stop offset="1" stop-color="#281f1b"/></linearGradient></defs>
    <rect width="430" height="300" rx="28" fill="#e8e2cf"/><path d="M0 250Q105 218 210 246T430 234V300H0Z" fill="#a5b687"/><path d="M40 258q92-21 174 4t176-11" fill="none" stroke="#6e7b55" stroke-width="7"/>
    <g transform="translate(74 24)">
      <path d="M122 49q-12-29 1-46l15 29q2-27 20-34l3 35q14-26 31-23l-8 36" fill="#211d1b"/>
      <path d="M106 62Q132 25 177 38Q215 50 217 91Q217 114 198 129Q218 151 213 203Q164 238 98 210Q73 155 95 122Q77 92 106 62Z" fill="url(#eagleFeather)" stroke="#29221e" stroke-width="3"/>
      <path d="M106 130q51 26 102 0q-6 58-10 77q-49 23-92 0" fill="#5c493e"/>
      <g fill="#eee5cf"><circle cx="120" cy="151" r="3"/><circle cx="139" cy="160" r="3"/><circle cx="161" cy="149" r="3"/><circle cx="183" cy="162" r="3"/><circle cx="126" cy="183" r="3"/><circle cx="151" cy="190" r="3"/><circle cx="177" cy="182" r="3"/></g>
      <path d="M128 56q42-17 74 12q-5 39-42 49q-42-10-41-45" fill="#d5ad3d"/><path d="M121 78q18-29 35-28q-16 27-3 64" fill="#302b27"/>
      <circle cx="176" cy="72" r="9" fill="#f1c84f"/><circle cx="177" cy="72" r="4" fill="#111"/>
      <path d="M196 79q48-3 67 20q-17 4-39 5q11 18-4 35q2-20-25-32" fill="#d7a83c" stroke="#4b392a" stroke-width="3"/><path d="M252 96q14 8 0 20" fill="none" stroke="#25221e" stroke-width="5"/>
      <path d="M115 207l-4 38m76-38 4 38" stroke="#d5ac3e" stroke-width="12"/><g fill="none" stroke="#d5ac3e" stroke-width="7" stroke-linecap="round"><path d="M112 244q-28-5-37 17m37-17q0 18 10 25m69-25q-29-4-38 17m38-17q1 18 12 24"/></g><g stroke="#23211e" stroke-width="3"><path d="M75 261l-4 9"/><path d="M122 269l3 7"/><path d="M153 261l-4 9"/><path d="M203 268l4 7"/></g>
    </g>
    <path d="M347 54L316 111" stroke="#e9825e" stroke-width="3"/><circle cx="316" cy="111" r="5" fill="#e9825e"/>${tag(297, 18, 120, '彎鉤喙撕取食物')}
    <path d="M337 246L270 259" stroke="#e9825e" stroke-width="3"/><circle cx="270" cy="259" r="5" fill="#e9825e"/>${tag(288, 251, 130, '強壯腳爪抓握')}
  </svg>`;

  if (type === 'rabbit-teeth') return `<svg viewBox="0 0 430 300" role="img" aria-label="兔子側身、長耳與門齒和臼齒放大圖">
    <defs><linearGradient id="rabbitFur" x1="0" x2="1"><stop stop-color="#a88c72"/><stop offset=".55" stop-color="#d0bca4"/><stop offset="1" stop-color="#8e725d"/></linearGradient></defs>
    <rect width="430" height="300" rx="28" fill="#eee7d7"/><path d="M0 253Q110 223 223 250T430 239V300H0Z" fill="#b8c891"/>
    <g transform="translate(36 39)">
      <ellipse cx="178" cy="154" rx="111" ry="68" fill="url(#rabbitFur)" stroke="#6f5c4c" stroke-width="2"/><ellipse cx="83" cy="172" rx="54" ry="45" fill="#b49b82"/><circle cx="285" cy="145" r="55" fill="#baa187"/>
      <path d="M264 105Q239 20 271 4Q303 43 301 107" fill="#a98d76" stroke="#6f5c4c" stroke-width="3"/><path d="M285 105Q286 18 321 12Q338 65 315 121" fill="#b79b82" stroke="#6f5c4c" stroke-width="3"/><path d="M274 28q14 42 16 71m19-64q13 44 3 75" stroke="#d9a79c" stroke-width="10" stroke-linecap="round"/>
      <circle cx="311" cy="133" r="9" fill="#3a2821"/><circle cx="314" cy="130" r="3" fill="#fff"/><ellipse cx="341" cy="162" rx="10" ry="7" fill="#6b4e46"/><path d="M331 169q10 8 19 0" fill="none" stroke="#6b4e46" stroke-width="2"/><g stroke="#6f5c4c" stroke-width="1.4"><path d="M330 166l45-12"/><path d="M331 170l47 3"/><path d="M329 174l41 17"/></g>
      <circle cx="61" cy="151" r="31" fill="#e8dfd0"/><path d="M139 188q-33 20-58 44h77" fill="#a08068"/><path d="M224 192q27 26 61 30" fill="none" stroke="#8c6f59" stroke-width="18" stroke-linecap="round"/>
    </g>
    <g transform="translate(278 207)"><circle cx="62" cy="36" r="50" fill="#fff" stroke="#e9825e" stroke-width="4"/><path d="M22 38q29-31 76-12q-8 35-34 42q-27 4-42-30" fill="#d8bfa8"/><rect x="64" y="24" width="13" height="30" rx="3" fill="#fff9e7" stroke="#8f7964"/><rect x="78" y="24" width="13" height="30" rx="3" fill="#fff9e7" stroke="#8f7964"/><g fill="#eee5d4" stroke="#8f7964"><path d="M40 45q8-10 16 0v13H40Z"/><path d="M26 44q7-9 14 0v12H26Z"/></g><text x="62" y="88" text-anchor="middle" font-size="11" ${font}>前切後磨</text></g>
    <path d="M309 192L337 207" stroke="#e9825e" stroke-width="3"/>${tag(14, 14, 148, '長耳、強壯後腿')}
  </svg>`;

  return `<svg viewBox="0 0 430 300" role="img" aria-label="真實比例的青蛙側身與有蹼後腳">
    <defs><linearGradient id="frogSkin" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#85944d"/><stop offset="1" stop-color="#4f6f3c"/></linearGradient></defs>
    <rect width="430" height="300" rx="28" fill="#d7ece8"/><path d="M0 224q105-23 213 2t217-10v84H0Z" fill="#83bdba"/><g fill="#6da06a"><ellipse cx="48" cy="220" rx="42" ry="8"/><ellipse cx="378" cy="237" rx="49" ry="9"/></g>
    <g transform="translate(43 57)">
      <path d="M96 104Q110 43 184 44Q254 45 278 100Q290 132 262 150Q219 172 150 158Q105 153 96 104Z" fill="url(#frogSkin)" stroke="#3c5c38" stroke-width="3"/>
      <path d="M104 90q67-34 157 4" fill="none" stroke="#b2b773" stroke-width="5"/><path d="M129 116q47 16 111-1" fill="none" stroke="#3f6138" stroke-width="3"/>
      <ellipse cx="246" cy="63" rx="25" ry="23" fill="#99a958"/><circle cx="252" cy="59" r="10" fill="#d5b64e"/><rect x="250" y="51" width="4" height="16" rx="2" fill="#111"/><circle cx="215" cy="88" r="13" fill="#6b7546" stroke="#354a31" stroke-width="2"/>
      <g fill="#365532" opacity=".6"><circle cx="144" cy="83" r="6"/><circle cx="178" cy="67" r="4"/><circle cx="188" cy="119" r="7"/><circle cx="232" cy="126" r="5"/></g>
      <path d="M120 133Q62 151 30 202Q82 183 132 165" fill="none" stroke="#557944" stroke-width="21" stroke-linecap="round"/><path d="M169 153Q121 185 86 221Q151 201 213 169" fill="none" stroke="#4f7140" stroke-width="23" stroke-linecap="round"/>
      <path d="M86 221l-40 12m40-12-10 25m10-25 25 20m-25-20 42 4" stroke="#527b47" stroke-width="7" stroke-linecap="round"/><path d="M46 233q16 15 30 13q4-13 35-5q9-11 17-16" fill="#799b5a" opacity=".8"/>
      <path d="M270 128q32 20 61 20" fill="none" stroke="#5a8147" stroke-width="13" stroke-linecap="round"/><path d="M329 148l25-11m-25 11 22 8m-22-8 18 20" stroke="#5a8147" stroke-width="5" stroke-linecap="round"/>
    </g>
    <path d="M352 53L160 261" stroke="#e9825e" stroke-width="3"/><circle cx="160" cy="261" r="5" fill="#e9825e"/>${tag(288, 17, 128, '長後腿＋腳蹼推水')}
  </svg>`;
}

export function environmentSvgV2(type) {
  if (type === 'cold') return `<svg viewBox="0 0 620 370" role="img" aria-label="接近真實體態的北極熊在雪地行走，標示厚毛、小耳與寬大腳掌">
    <defs><linearGradient id="arcticSky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#b8dce5"/><stop offset="1" stop-color="#eef7f7"/></linearGradient><linearGradient id="bearFur" x1="0" x2="0" y2="1"><stop stop-color="#fffdf1"/><stop offset="1" stop-color="#d9d8cd"/></linearGradient></defs>
    <rect width="620" height="370" rx="26" fill="url(#arcticSky)"/><path d="M0 240Q130 195 254 233T493 216T620 226V370H0Z" fill="#f9fcfc"/><path d="M0 305q147-50 293 0t327-20v85H0Z" fill="#c8dfe3"/>
    <g class="breathing" transform="translate(116 88)">
      <path d="M84 133Q105 61 229 61Q319 60 346 118Q363 128 370 151Q350 181 305 184Q211 201 111 173Q64 170 84 133Z" fill="url(#bearFur)" stroke="#81999a" stroke-width="3"/>
      <path d="M294 77q18-48 70-45q42 3 57 35q11 26-8 48q-18 20-58 15q-40-7-61-53" fill="url(#bearFur)" stroke="#81999a" stroke-width="3"/>
      <circle cx="344" cy="30" r="14" fill="#e7e4da" stroke="#81999a" stroke-width="3"/><circle cx="344" cy="30" r="6" fill="#898983"/><circle cx="385" cy="61" r="5" fill="#202827"/><path d="M409 74q28 5 35 19q-8 16-29 11q-14-4-21-19" fill="#f5f1e7"/><ellipse cx="439" cy="91" rx="12" ry="9" fill="#202827"/><path d="M437 100q-8 8-19 5" fill="none" stroke="#202827" stroke-width="3"/>
      <path d="M112 165l-7 94m67-82-5 80m107-76 7 77m56-87 23 82" stroke="#dddcd2" stroke-width="31" stroke-linecap="round"/><path d="M89 259q28-11 51 0m9-2q28-11 53 0m61 1q29-11 55 0m22-5q32-10 58 0" fill="none" stroke="#262e2d" stroke-width="8" stroke-linecap="round"/>
      <g fill="none" stroke="#c3c6bf" stroke-width="2"><path d="M105 90q45 24 96 6"/><path d="M139 74q59 18 117 5"/><path d="M211 167q38 7 75-3"/></g>
    </g>
    <path d="M92 79L238 164" stroke="#e26048" stroke-width="3"/><circle cx="238" cy="164" r="5" fill="#e26048"/>${tag(20, 48, 115, '雙層厚毛保溫')}
    <path d="M522 59L461 117" stroke="#e26048" stroke-width="3"/><circle cx="461" cy="117" r="5" fill="#e26048"/>${tag(486, 28, 110, '小耳減少散熱')}
    <path d="M506 324L448 337" stroke="#e26048" stroke-width="3"/><circle cx="448" cy="337" r="5" fill="#e26048"/>${tag(477, 306, 120, '寬大腳掌踩雪')}
  </svg>`;

  if (type === 'desert') return `<svg viewBox="0 0 620 370" role="img" aria-label="接近真實比例的單峰駱駝，標示長睫毛、可閉鼻孔與寬大肉墊足">
    <defs><linearGradient id="desertSky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#f7d69c"/><stop offset="1" stop-color="#fff0cc"/></linearGradient><linearGradient id="camelCoat" x1="0" x2="1"><stop stop-color="#9b6339"/><stop offset=".55" stop-color="#c58a53"/><stop offset="1" stop-color="#8a5735"/></linearGradient></defs>
    <rect width="620" height="370" rx="26" fill="url(#desertSky)"/><circle cx="535" cy="67" r="42" fill="#f5b94f"/><path d="M0 258Q151 193 307 252T620 224V370H0Z" fill="#e6b56d"/><path d="M0 315q159-55 318 5t302-23v73H0Z" fill="#d69850"/>
    <g class="breathing" transform="translate(80 44)">
      <path d="M93 173Q88 124 142 112Q190 103 231 141Q248 139 258 115Q273 57 309 48Q349 54 361 133Q362 171 333 211H105Z" fill="url(#camelCoat)" stroke="#6d472f" stroke-width="3"/>
      <path d="M332 178q38-32 48-110q3-47 36-54q44-7 61 27q14 31-12 54q-30 31-58 97" fill="url(#camelCoat)" stroke="#6d472f" stroke-width="3"/>
      <path d="M415 22q35-25 61 11q9 18-5 33q-21 15-59 8" fill="#bd8050" stroke="#6d472f" stroke-width="3"/><path d="M456 58q25 8 39-1q-4 21-30 21" fill="#a96e43"/>
      <circle cx="449" cy="37" r="5" fill="#171b19"/><path d="M441 31l-11-14m15 12-4-18m8 18 4-17" stroke="#2c251f" stroke-width="2"/><path d="M480 50q8 1 13 7" stroke="#2c251f" stroke-width="3"/><path d="M460 64q12 7 24 0" fill="none" stroke="#6d472f" stroke-width="2"/>
      <path d="M127 199l-7 102m72-101-2 101m101-104-2 104m62-111 17 109" stroke="#9b633d" stroke-width="18" stroke-linecap="round"/><path d="M102 302q24-14 49 0m18 0q24-14 48 0m48 0q27-14 52 0m28-2q29-13 56 1" fill="none" stroke="#6d472f" stroke-width="15" stroke-linecap="round"/>
      <path d="M94 159q-29-25-44-4q18 8 35 3" fill="none" stroke="#6d472f" stroke-width="5"/>
      <g fill="none" stroke="#d6a16f" stroke-width="2" opacity=".75"><path d="M118 128q42 20 83 3"/><path d="M132 158q55 18 102 1"/><path d="M260 88q40-12 75 7"/></g>
    </g>
    <path d="M522 57L526 85" stroke="#e26048" stroke-width="3"/><circle cx="526" cy="85" r="5" fill="#e26048"/>${tag(465, 19, 132, '長睫毛、可閉鼻孔')}
    <path d="M108 330L197 347" stroke="#e26048" stroke-width="3"/><circle cx="197" cy="347" r="5" fill="#e26048"/>${tag(20, 309, 112, '寬大肉墊足')}
    <path d="M214 53L326 100" stroke="#e26048" stroke-width="3"/><circle cx="326" cy="100" r="5" fill="#e26048"/>${tag(93, 23, 122, '單峰儲存脂肪')}
  </svg>`;

  return `<svg viewBox="0 0 620 370" role="img" aria-label="鯖魚在水中，標示流線形、鰓蓋與各類魚鰭，文字不遮住魚身">
    <defs><linearGradient id="waterV2" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#bfe7ea"/><stop offset="1" stop-color="#4a8999"/></linearGradient><linearGradient id="mackerelBody" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#285d6a"/><stop offset=".45" stop-color="#6f9b9d"/><stop offset=".58" stop-color="#c9d5c7"/><stop offset="1" stop-color="#f4e5be"/></linearGradient></defs>
    <rect width="620" height="370" rx="26" fill="url(#waterV2)"/><path d="M0 74q117-30 236 0t235-5t149-5" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="6"/><path d="M34 302q80-28 153 4t160 1t239-13" fill="none" stroke="#376f76" stroke-width="7" opacity=".55"/>
    <g class="moving-animal"><g transform="translate(87 103)">
      <path d="M75 104Q145 36 302 54Q361 62 400 104Q356 153 286 161Q146 176 75 124Q41 151 3 164Q27 124 3 78Q40 91 75 104Z" fill="url(#mackerelBody)" stroke="#294a50" stroke-width="4"/>
      <path d="M9 79q25 34-5 85q55-22 72-40q-8-19 0-20Q54 93 9 79Z" fill="#355e69" stroke="#294a50" stroke-width="3"/>
      <path d="M183 58q22-46 70-42q-15 28-22 46m50-4q25-35 61-24q-17 22-20 34" fill="#547d7c" stroke="#294a50" stroke-width="3"/>
      <path d="M190 158q26 39 68 28q-14-22-20-31m52-3q25 29 57 13q-15-14-18-25" fill="#6f8e84" stroke="#294a50" stroke-width="3"/>
      <path d="M287 91q-31 20-17 50q26-4 45-22" fill="#8aa194" stroke="#294a50" stroke-width="3"/>
      <path d="M337 72q-18 42 5 75" fill="none" stroke="#41646a" stroke-width="4"/><circle cx="368" cy="91" r="8" fill="#f1d56e" stroke="#294a50" stroke-width="3"/><circle cx="370" cy="91" r="3" fill="#111"/><path d="M390 119q11 5 19 0" fill="none" stroke="#294a50" stroke-width="2"/>
      <g fill="none" stroke="#143d4b" stroke-width="3" opacity=".9"><path d="M99 73q13 18 31 29"/><path d="M120 62q15 23 33 37"/><path d="M145 55q16 22 35 40"/><path d="M172 51q15 21 35 41"/><path d="M201 49q14 19 34 40"/><path d="M232 49q13 18 32 37"/><path d="M263 51q10 15 28 32"/></g>
      <g fill="#eef8f5" opacity=".7"><circle cx="117" cy="126" r="2"/><circle cx="148" cy="140" r="2"/><circle cx="183" cy="119" r="2"/><circle cx="224" cy="143" r="2"/><circle cx="268" cy="125" r="2"/></g>
    </g></g>
    <path d="M141 67L188 162" stroke="#e26048" stroke-width="3"/><circle cx="188" cy="162" r="5" fill="#e26048"/>${tag(28, 32, 150, '流線形身體減少阻力')}
    <path d="M510 68L433 199" stroke="#e26048" stroke-width="3"/><circle cx="433" cy="199" r="5" fill="#e26048"/>${tag(477, 33, 112, '鰓蓋保護鰓')}
    <path d="M501 321L374 259" stroke="#e26048" stroke-width="3"/><circle cx="374" cy="259" r="5" fill="#e26048"/>${tag(459, 307, 132, '魚鰭控制方向')}
  </svg>`;
}

function bird(x, y, scale = 1) {
  return `<g transform="translate(${x} ${y}) scale(${scale})"><path d="M0 28Q35-3 76 20q20 12 47 6q-25 36-64 35Q27 59 0 28Z" fill="#3e6668" stroke="#27494b" stroke-width="3"/><circle cx="82" cy="24" r="4" fill="#fff"/><circle cx="83" cy="24" r="2" fill="#111"/><path d="M122 26l24 8-24 9" fill="#d9a444"/><path d="M38 56l-7 20m26-18 3 20" stroke="#684a32" stroke-width="3"/></g>`;
}

export function strategySvgV2(type, step) {
  const active = n => step === n ? 1 : .23;
  const caption = (texts, width = 300) => `<rect x="${(600 - width) / 2}" y="309" width="${width}" height="34" rx="10" fill="#fff"/><text x="300" y="332" text-anchor="middle" font-size="15" ${font}>${texts[step]}</text>`;
  if (type === 0) return `<svg viewBox="0 0 600 360" role="img" aria-label="細長、具關節的竹節蟲藏在枝葉中形成保護色">
    <rect width="600" height="360" rx="24" fill="#dbe9cf"/><path d="M0 296q151-62 305 2t295-35v97H0Z" fill="#91b875"/>
    <g style="opacity:${active(0)}"><path d="M40 278Q146 180 286 104T575 58" fill="none" stroke="#6d5137" stroke-width="18" stroke-linecap="round"/><g fill="#5f9557" stroke="#3f7441" stroke-width="2"><path d="M116 207q-50-69-87-11q25 52 87 11"/><path d="M211 141q-1-76 55-51q9 58-55 51"/><path d="M354 83q29-67 73-25q-10 51-73 25"/><path d="M471 62q35-54 71-11q-19 43-71 11"/></g><g stroke="#9fc28b" stroke-width="2"><path d="M37 195l74 11"/><path d="M264 92l-51 46"/><path d="M425 61l-68 21"/></g></g>
    <g style="opacity:${active(1)}" transform="translate(215 112) rotate(-29)">
      <path d="M16 0h109" stroke="#715a3c" stroke-width="9" stroke-linecap="round"/><path d="M42 0h66" stroke="#826845" stroke-width="13" stroke-linecap="round"/><ellipse cx="126" cy="0" rx="11" ry="8" fill="#6e593c"/><circle cx="134" cy="-2" r="2" fill="#111"/>
      <g fill="none" stroke="#675238" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M40 0L20-25 0-32"/><path d="M43 2L24 31 2 38"/><path d="M75 0L61-31 39-45"/><path d="M78 2L68 35 47 51"/><path d="M104 0L99-28 84-47"/><path d="M106 2l8 31 19 18"/><path d="M133-5l22-17m-21 20 25-5"/></g><g stroke="#4a3d2e" stroke-width="2"><path d="M58-5l8 10"/><path d="M72-5l8 10"/><path d="M88-5l8 10"/></g>
    </g>
    <g style="opacity:${active(2)}">${bird(37, 49, 1.05)}<path d="M166 116Q284 181 397 110" fill="none" stroke="#e26048" stroke-width="4" stroke-dasharray="9 9"/><path d="M412 97l-19 16 24 7" fill="#e26048"/></g>
    ${caption(['背景：枝條、葉片與光影交錯','竹節蟲：細長、具節，顏色近似枝條','結果：鳥不容易從背景中辨認牠'], 318)}
  </svg>`;

  if (type === 1) return `<svg viewBox="0 0 600 360" role="img" aria-label="閉翅枯葉蝶具有葉形輪廓、主葉脈與斑駁枯葉色">
    <rect width="600" height="360" rx="24" fill="#e9dfc1"/>
    <g style="opacity:${active(0)}"><path d="M48 286Q172 177 297 70T570 38" fill="none" stroke="#6b5036" stroke-width="16"/><g fill="#9f6d3f" stroke="#68492f" stroke-width="2"><path d="M103 237q30-73 92-49q-11 62-92 49"/><path d="M225 135q20-69 81-47q-16 60-81 47"/><path d="M372 73q35-62 86-28q-26 52-86 28"/></g></g>
    <g style="opacity:${active(1)}" transform="translate(247 74)">
      <path d="M52 0Q1 38 14 112Q21 163 54 212Q80 167 125 145Q158 128 157 75Q146 19 52 0Z" fill="#8c5e34" stroke="#4d392a" stroke-width="5"/>
      <path d="M52 0Q44 61 54 212" fill="none" stroke="#d3ad6f" stroke-width="4"/><path d="M49 48L21 72m30 4 73-38M53 106l-36 22m37 9 85-39m-84 72-20 15" stroke="#c79a5e" stroke-width="2.5"/>
      <path d="M20 59q26-30 42-15q-8 32-42 15M84 125q32-25 53-6q-15 30-53 6M27 145q23-17 38-2q-12 24-38 2" fill="#5e432d" opacity=".72"/><path d="M52 1l-6-29m6 29 14-26" stroke="#4d392a" stroke-width="3"/><path d="M52 211l-7 21" stroke="#4d392a" stroke-width="4"/>
    </g>
    <g style="opacity:${active(2)}">${bird(38, 44, 1)}<path d="M167 109Q287 164 415 114" fill="none" stroke="#e26048" stroke-width="4" stroke-dasharray="9 9"/><path d="M428 107l-20 13 22 9" fill="#e26048"/></g>
    ${caption(['背景：枝條上有許多乾枯葉片','枯葉蝶：閉翅像葉片，連葉脈和破損斑都相似','結果：掠食者可能把牠當成枯葉'], 342)}
  </svg>`;

  if (type === 2) return `<svg viewBox="0 0 600 360" role="img" aria-label="紅底黑斑瓢蟲以醒目的警戒色降低鳥類再次捕食的機會">
    <defs><radialGradient id="ladyRed" cx="35%" cy="25%"><stop stop-color="#ff8b68"/><stop offset=".45" stop-color="#e34131"/><stop offset="1" stop-color="#9f1d20"/></radialGradient></defs>
    <rect width="600" height="360" rx="24" fill="#dfeee0"/><path d="M198 267q101-173 269-173q-17 154-158 196" fill="#6ca565" stroke="#417a45" stroke-width="4"/><path d="M237 249Q326 173 450 113" stroke="#a5c897" stroke-width="3"/>
    <g style="opacity:${active(0)}" transform="translate(246 89)">
      <ellipse cx="74" cy="86" rx="73" ry="61" fill="url(#ladyRed)" stroke="#211f1c" stroke-width="6"/><path d="M74 26v120" stroke="#211f1c" stroke-width="5"/><path d="M18 48q18-39 56-40q39 1 57 40q-56 22-113 0" fill="#211f1c"/><path d="M42 28q12-8 21 1m23 0q11-9 22-1" stroke="#f3e9d1" stroke-width="8" stroke-linecap="round"/><ellipse cx="74" cy="8" rx="25" ry="17" fill="#171817"/>
      <g fill="#171817"><circle cx="38" cy="66" r="12"/><circle cx="34" cy="106" r="11"/><circle cx="57" cy="132" r="10"/><circle cx="110" cy="66" r="12"/><circle cx="114" cy="106" r="11"/><circle cx="92" cy="132" r="10"/><circle cx="74" cy="84" r="10"/></g>
      <g fill="none" stroke="#211f1c" stroke-width="4" stroke-linecap="round"><path d="M35 47L9 31 0 12"/><path d="M24 72L-5 69-17 57"/><path d="M27 106L1 121-8 141"/><path d="M113 47l26-16 9-19"/><path d="M124 72l29-3 12-12"/><path d="M121 106l26 15 9 20"/><path d="M63-4L47-24m38 20 17-20"/></g><ellipse cx="48" cy="49" rx="14" ry="7" fill="#fff" opacity=".36"/>
    </g>
    <g style="opacity:${active(1)}">${bird(35, 57, 1.05)}<path d="M181 119q42 9 63 40" fill="none" stroke="#e26048" stroke-width="5" stroke-dasharray="7 7"/><path d="M222 143l22 16-5-25" fill="#e26048"/></g>
    <g style="opacity:${active(2)}">${bird(32, 217, .86)}<path d="M178 263h76" stroke="#e26048" stroke-width="5"/><path d="M244 249l18 14-18 14" fill="#e26048"/><path d="M290 231l43 64m0-64-43 64" stroke="#c84e45" stroke-width="10"/></g>
    ${caption(['訊號：紅底黑斑很醒目，容易被看見','經驗：瓢蟲會分泌難聞、味苦的防禦液','學習：鳥下次遇到相似警戒色會更猶豫'], 326)}
  </svg>`;

  return `<svg viewBox="0 0 600 360" role="img" aria-label="狐獴群體中一隻直立站哨，其他成員低頭覓食">
    <rect width="600" height="360" rx="24" fill="#efd8aa"/><path d="M0 278q151-60 310 4t290-31v109H0Z" fill="#d2a461"/><path d="M36 248q22-63 39 0m435-10q22-62 41 1" fill="none" stroke="#8d995d" stroke-width="7"/>
    <g style="opacity:${active(0)}" transform="translate(93 194)"><g fill="#aa7b50" stroke="#664b36" stroke-width="3"><path d="M0 53q5-42 43-43q31 4 36 31q-6 38-48 40q-31-1-31-28"/><path d="M61 17q24-20 43-2q12 23-13 37"/><path d="M71 74q-28 9-53 38" fill="none" stroke-width="10"/></g><circle cx="89" cy="22" r="3"/><path d="M75 26q16 5 28-1" stroke="#3b3028" stroke-width="5"/></g><g style="opacity:${active(0)}" transform="translate(216 217) scale(.82)"><path d="M0 53q5-42 43-43q31 4 36 31q-6 38-48 40q-31-1-31-28" fill="#aa7b50" stroke="#664b36" stroke-width="3"/><circle cx="88" cy="22" r="3"/><path d="M61 17q24-20 43-2q12 23-13 37M71 74q-28 9-53 38" fill="#aa7b50" stroke="#664b36" stroke-width="9"/></g>
    <g style="opacity:${active(1)}" transform="translate(374 54)"><path d="M42 66Q8 102 17 188q3 58 51 57q46-3 48-57q7-85-25-122" fill="#aa7b50" stroke="#664b36" stroke-width="3"/><path d="M42 67q-25-42 11-61q38-17 64 18q14 35-26 54" fill="#aa7b50" stroke="#664b36" stroke-width="3"/><path d="M56 17l-16-12 4 23m57-12 16-13-4 25" fill="#8e623f"/><path d="M55 38q16-12 23 0m8 0q13-12 22 0" stroke="#4a3c31" stroke-width="8"/><circle cx="68" cy="37" r="3"/><circle cx="97" cy="37" r="3"/><path d="M75 52q10 5 20 0" stroke="#3c3028" stroke-width="5"/><path d="M38 130q44 13 66 0m-64 28q39 12 65 0" stroke="#7c583e" stroke-width="4"/><path d="M44 234l-8 53m52-53 10 53" stroke="#765238" stroke-width="13" stroke-linecap="round"/><path d="M59 194q-46 8-71 44" fill="none" stroke="#765238" stroke-width="12" stroke-linecap="round"/></g>
    <g style="opacity:${active(2)}"><path d="M492 74q29-34 58-3m-50 21q22-24 43-4" fill="none" stroke="#e26048" stroke-width="6"/><path d="M382 137Q298 98 224 138" fill="none" stroke="#e26048" stroke-width="4" stroke-dasharray="9 9"/><path d="M150 282q43 23 85-2" fill="none" stroke="#416d5d" stroke-width="6"/></g>
    ${caption(['部分成員低頭覓食','站哨者直立，持續掃視四周','發現危險，發出訊號一起躲避'], 292)}
  </svg>`;
}

export function appVisualV2(type) {
  const scenes = {
    'webbed-foot': `<svg viewBox="0 0 320 180" role="img" aria-label="綠頭鴨橘色蹼足向後推水"><defs><linearGradient id="footWater" y2="1"><stop stop-color="#eaf7f5"/><stop offset="1" stop-color="#93c8cd"/></linearGradient></defs><rect width="320" height="180" rx="18" fill="url(#footWater)"/><path d="M0 98q79-18 157 1t163-3" fill="none" stroke="#fff" stroke-width="5"/><path d="M139 8q4 53 1 90" stroke="#d48239" stroke-width="14"/><path d="M140 92q-37 20-58 63m59-62q-5 35 4 68m-4-68q33 21 57 60" fill="none" stroke="#d48239" stroke-width="9" stroke-linecap="round"/><path d="M82 155q31 17 63 6q26 7 53-8q-20-41-57-60q-39 21-59 62" fill="#e8a149" stroke="#b66c30" stroke-width="3" opacity=".95"/><path d="M238 62h51m-14-11 15 11-15 11" stroke="#e26048" stroke-width="5"/><path d="M238 84h38" stroke="#e26048" stroke-width="3" opacity=".7"/></svg>`,
    teeth: `<svg viewBox="0 0 320 180" role="img" aria-label="貓的尖犬齒與兔子的門齒臼齒比較"><rect width="320" height="180" rx="18" fill="#f3e8d6"/><g transform="translate(15 19)"><path d="M8 47q17-43 62-42q42 1 57 43v61q-44 28-86 4Q6 91 8 47" fill="#bda58d"/><path d="M20 29L9 4l29 15m72 10 13-25-31 15" fill="#a88e76"/><circle cx="44" cy="51" r="5"/><circle cx="90" cy="51" r="5"/><path d="M56 66q12 9 23 0" fill="#8f625b"/><path d="M43 79q8 29 17 0m19 0q8 29 17 0" fill="#fff" stroke="#8d7c68" stroke-width="2"/><text x="68" y="141" text-anchor="middle" font-size="13" ${font}>貓：尖犬齒撕裂</text></g><g transform="translate(171 18)"><path d="M12 63q5-50 56-54q48 4 56 54q-4 54-56 59q-51-5-56-59" fill="#c9b7a5"/><path d="M49 17Q40-24 59-28q20 28 18 47m6-2Q87-23 105-16q13 36-5 48" fill="#c9b7a5" stroke="#8c7866" stroke-width="3"/><circle cx="88" cy="51" r="6"/><ellipse cx="112" cy="72" rx="8" ry="6" fill="#75564e"/><rect x="92" y="78" width="11" height="23" rx="2" fill="#fff"/><rect x="103" y="78" width="11" height="23" rx="2" fill="#fff"/><g fill="#eee6d9" stroke="#8c7866"><path d="M55 80q9-13 18 0v17H55Z"/><path d="M38 81q8-11 17 0v15H38Z"/></g><text x="69" y="142" text-anchor="middle" font-size="13" ${font}>兔：門齒切、臼齒磨</text></g></svg>`,
    camouflage: `<svg viewBox="0 0 320 180" role="img" aria-label="有細長分節身體的竹節蟲藏在校園樹枝"><rect width="320" height="180" rx="18" fill="#cbdcae"/><path d="M15 170Q91 105 161 93T304 21" fill="none" stroke="#74563a" stroke-width="16"/><g fill="#5c9857"><path d="M52 138q-44-46-23-67q45 15 23 67"/><path d="M177 89q2-56 42-45q8 42-42 45"/><path d="M245 51q21-49 57-25q-12 38-57 25"/></g><g transform="translate(113 103) rotate(-23)" stroke="#6a5539" stroke-linecap="round"><path d="M0 0h108" stroke-width="9"/><path d="M29 0L7-25M30 0 8 28m55-28L49-31M65 0l-8 34m39-34-5-26m7 26 17 24" stroke-width="4"/><circle cx="109" r="7" fill="#6a5539"/><path d="M113-3l20-15m-20 19 22 2" stroke-width="2"/></g><circle cx="214" cy="75" r="35" fill="none" stroke="#e26048" stroke-width="4" stroke-dasharray="6 5"/></svg>`,
    fish: `<svg viewBox="0 0 320 180" role="img" aria-label="市場鯖魚的流線形、波狀背紋與叉形尾"><defs><linearGradient id="appFish" y2="1"><stop stop-color="#295d6b"/><stop offset=".55" stop-color="#93aaa3"/><stop offset="1" stop-color="#eee0b8"/></linearGradient></defs><rect width="320" height="180" rx="18" fill="#c8e8e8"/><g transform="translate(24 39)"><path d="M52 55Q103 4 211 26q36 8 55 32q-29 39-74 42Q99 108 52 69Q29 90 2 98q20-29 0-65q25 13 50 22" fill="url(#appFish)" stroke="#2d4c51" stroke-width="3"/><path d="M3 33q21 25 0 65q38-15 49-29V55Q29 43 3 33" fill="#3e6970"/><path d="M106 28q14-28 45-25q-8 17-13 28m35-5q16-23 40-14q-10 13-12 22" fill="#537c7b" stroke="#2d4c51" stroke-width="2"/><path d="M116 96q17 25 44 18q-10-13-13-21" fill="#738f83"/><path d="M207 39q-12 25 2 49" fill="none" stroke="#395c62" stroke-width="3"/><circle cx="233" cy="49" r="6" fill="#e6cd6a" stroke="#29464b" stroke-width="2"/><circle cx="234" cy="49" r="2"/><g fill="none" stroke="#173f4a" stroke-width="2"><path d="M70 39l18 22"/><path d="M87 31l20 28"/><path d="M108 27l20 29"/><path d="M130 25l20 29"/><path d="M153 24l18 28"/><path d="M178 27l15 23"/></g></g><path d="M24 24h261M13 145h275" stroke="#fff" stroke-width="4" opacity=".65" stroke-linecap="round"/></svg>`,
    insulation: `<svg viewBox="0 0 320 180" role="img" aria-label="羽毛層與絨羽間留住空氣形成保溫層"><rect width="320" height="180" rx="18" fill="#e6f0f2"/><path d="M0 142q79-24 160 0t160-5v43H0Z" fill="#ecc8a2"/><g transform="translate(30 22)"><path d="M42 110Q1 52 39 7q42 9 58 70q15-61 62-72q38 48-5 109" fill="#faf8ec" stroke="#8aa2a5" stroke-width="3"/><path d="M97 121V18M50 34l47 45m54-49-54 49" stroke="#8aa2a5" stroke-width="3"/><g fill="#c6e5e8" stroke="#70a7b4"><circle cx="54" cy="86" r="10"/><circle cx="81" cy="105" r="8"/><circle cx="126" cy="91" r="11"/><circle cx="147" cy="114" r="8"/></g><text x="98" y="137" text-anchor="middle" font-size="12" ${font}>空氣層</text></g><g fill="none" stroke="#e26048" stroke-width="4"><path d="M236 135V56m0 0-10 16m10-16 10 16"/><path d="M274 121V76m0 0-9 14m9-14 9 14"/></g><text x="255" y="153" text-anchor="middle" font-size="12" ${font}>熱較慢散失</text></svg>`,
    'group-watch': `<svg viewBox="0 0 320 180" role="img" aria-label="一隻狐獴直立站哨，兩隻低頭覓食"><rect width="320" height="180" rx="18" fill="#efdeb5"/><path d="M0 132q83-36 164 1t156-14v61H0Z" fill="#d5ad70"/><g fill="#9f714b" stroke="#654b38" stroke-width="2"><path d="M205 55q-18 22-15 73q2 34 28 35q27-2 28-35q3-52-15-73"/><path d="M205 57q-14-27 8-40q27-11 40 12q6 24-22 36"/><path d="M218 155l-4 24m19-24 5 24" stroke-width="8"/><path d="M201 122q-30 5-45 27" fill="none" stroke-width="8"/><path d="M30 127q5-31 35-30q27 2 31 24q-5 29-37 31q-27 0-29-25"/><path d="M79 104q20-16 34 0q8 18-11 28"/><path d="M109 143q7-29 36-27q25 2 29 22q-5 27-34 28q-25-1-31-23"/><path d="M158 123q20-15 33 0q8 17-10 26"/></g><g stroke="#493a31" stroke-width="6"><path d="M213 36q10-7 17 0m5 0q9-7 16 0"/><path d="M90 113q8-6 14 0m65 17q7-5 12 0"/></g><path d="M259 28q22-23 42-2m-36 15q16-16 29-1" fill="none" stroke="#e26048" stroke-width="4"/></svg>`
  };
  return scenes[type];
}
