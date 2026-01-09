// SVGIcons.js - All your SVGs in ONE file
export const SVGIcons = {
  housingLoan: `<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Soft grey background circle -->
      <linearGradient id="bgCircleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#f5f5f7"/>
        <stop offset="100%" stop-color="#e9eaed"/>
      </linearGradient>
  
      <!-- Yellowish house body -->
      <linearGradient id="houseBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffeec5"/>
        <stop offset="100%" stop-color="#ffd769"/>
      </linearGradient>
  
      <!-- Roof dark grey -->
      <linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#333843"/>
        <stop offset="100%" stop-color="#21242c"/>
      </linearGradient>
  
      <!-- Ground / base -->
      <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffc93c"/>
        <stop offset="100%" stop-color="#ffb62b"/>
      </linearGradient>
  
      <!-- Tree blue body -->
      <linearGradient id="blueTreeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#23b1ff"/>
        <stop offset="100%" stop-color="#0584d6"/>
      </linearGradient>
  
      <!-- Sun -->
      <radialGradient id="sunGrad">
        <stop offset="0%" stop-color="#fff9b0"/>
        <stop offset="100%" stop-color="#ffc93c"/>
      </radialGradient>
    </defs>
  
    <!-- White page background -->
    <rect x="0" y="0" width="480" height="360" fill="#ffffff"/>
  
    <!-- Large soft grey circle behind house -->
    <circle cx="250" cy="145" r="145" fill="url(#bgCircleGrad)"/>
  
    <!-- Sun and cloud on top-right -->
    <g>
      <circle cx="340" cy="100" r="33" fill="url(#sunGrad)"/>
      <path d="M313 117c11-15 33-15 44 0 11-4 22 4 24 15-4 11-13 16-26 16h-43c-11 0-20-8-20-18 1-13 15-19 20-15z"
            fill="#9dd8ff"/>
    </g>
  
    <!-- Blue bush / water on left ground -->
    <g>
      <ellipse cx="146" cy="280" rx="73" ry="13" fill="#c3ecff"/>
      <path d="M110 261c11-11 26-11 35 0 13-9 32-8 41 5-5 13-20 19-37 19H110c-13 0-23-8-23-18 0-9 8-13 23-7z"
            fill="#1fb3ff"/>
    </g>
  
    <!-- Left tree (blue) -->
    <g>
      <path d="M110 164c0-26 15-44 33-44 17 0 28 17 28 41-2 24-13 44-32 52-19-8-29-24-29-49z"
            fill="url(#blueTreeGrad)"/>
      <line x1="144" y1="213" x2="144" y2="280" stroke="#00324d" stroke-width="5" stroke-linecap="round"/>
      <path d="M144 227l-11-11m11 27l-9-8" stroke="#00324d" stroke-width="4" stroke-linecap="round"/>
    </g>
  
    <!-- Yellow ground strip in front of house -->
    <g>
      <rect x="146" y="273" width="252" height="22" rx="11" fill="url(#groundGrad)"/>
      <ellipse cx="250" cy="291" rx="146" ry="11" fill="#c3ecff" opacity="0.5"/>
    </g>
  
    <!-- House group -->
    <g>
      <!-- House main body -->
      <rect x="179" y="149" width="176" height="130" rx="8" fill="url(#houseBodyGrad)"/>
  
      <!-- Base shadow under house -->
      <rect x="179" y="269" width="176" height="11" fill="#f5b73c"/>
  
      <!-- Roof -->
      <polygon points="170,152 267,88 352,152 338,163 267,107 196,163"
               fill="url(#roofGrad)"/>
  
      <!-- Roof front dark stroke -->
      <polyline points="170,152 267,88 352,152" fill="none" stroke="#1c2027" stroke-width="11" stroke-linecap="round"/>
  
      <!-- Right side support beam -->
      <g>
        <rect x="341" y="179" width="19" height="85" fill="#d0d3db"/>
        <polyline points="341,179 376,152 388,158 358,187" fill="#d0d3db"/>
        <polyline points="341,179 376,152 388,158 358,187" fill="none" stroke="#555a64" stroke-width="5" stroke-linecap="round"/>
      </g>
  
      <!-- Chimney -->
      <g>
        <rect x="251" y="112" width="23" height="56" fill="#f5b73c"/>
        <rect x="246" y="104" width="33" height="11" fill="#353944"/>
        <rect x="251" y="112" width="23" height="8" fill="#ffc93c" opacity="0.9"/>
      </g>
  
      <!-- Left dark wall stripe (door side) -->
      <rect x="205" y="160" width="45" height="120" fill="#1f1f26" opacity="0.97"/>
  
      <!-- Door -->
      <g>
        <rect x="216" y="187" width="27" height="59" rx="4" fill="#2b2722"/>
        <circle cx="235" cy="217" r="5" fill="#ffdd55"/>
      </g>
  
      <!-- Front window -->
      <g>
        <rect x="264" y="195" width="59" height="37" rx="4" fill="#0496ff" stroke="#003d7a" stroke-width="5"/>
        <line x1="293" y1="195" x2="293" y2="232" stroke="#003d7a" stroke-width="5"/>
      </g>
  
      <!-- Round attic window -->
      <g>
        <circle cx="267" cy="152" r="19" fill="#ffffff" stroke="#003d7a" stroke-width="5"/>
        <circle cx="267" cy="152" r="13" fill="#0496ff"/>
        <line x1="267" y1="137" x2="267" y2="167" stroke="#ffffff" stroke-width="4"/>
        <line x1="252" y1="152" x2="282" y2="152" stroke="#ffffff" stroke-width="4"/>
      </g>
    </g>
  </svg>`,

  personalLoan: `<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Yellow theme gradients -->
    <linearGradient id="yellowBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fef9e7"/>
      <stop offset="100%" stop-color="#fde4b6"/>
    </linearGradient>

    <!-- Gold coins for money bag top -->
    <radialGradient id="coinGrad">
      <stop offset="0%" stop-color="#ffe31f"/>
      <stop offset="70%" stop-color="#ffc93c"/>
      <stop offset="100%" stop-color="#ff9800"/>
    </radialGradient>

    <!-- Money bag gradient -->
    <linearGradient id="bagGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f4d466"/>
      <stop offset="100%" stop-color="#f0c74a"/>
    </linearGradient>

    <!-- Skin tone for hands -->
    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f9dcc4"/>
      <stop offset="100%" stop-color="#f8d4b8"/>
    </linearGradient>

    <!-- Shadow effect -->
    <filter id="shadow">
      <feDropShadow dx="0" dy="4" stdDeviation="3" flood-opacity="0.2"/>
    </filter>
  </defs>

  <!-- Yellow background circle -->
  <circle cx="240" cy="160" r="145" fill="url(#yellowBgGrad)"/>

  <!-- Sun (top right) -->
  <g>
    <circle cx="330" cy="90" r="26" fill="url(#coinGrad)"/>
    <circle cx="330" cy="90" r="18" stroke="#e68900" stroke-width="2" fill="none"/>
  </g>

  <!-- Cloud (top left) -->
  <g fill="#e1f5fe" opacity="0.85">
    <ellipse cx="80" cy="85" rx="32" ry="16"/>
    <circle cx="62" cy="90" r="12"/>
    <circle cx="98" cy="90" r="11"/>
  </g>

  <!-- Yellow ground -->
  <g>
    <rect x="80" y="280" width="320" height="20" rx="10" fill="#ffc93c"/>
    <ellipse cx="240" cy="296" rx="160" ry="10" fill="#ffe082" opacity="0.4"/>
  </g>

  <!-- === MAIN MONEY BAG === -->
  <g filter="url(#shadow)">
    <!-- Bag body (main pouch) -->
    <ellipse cx="240" cy="180" rx="80" ry="90" fill="url(#bagGrad)" stroke="#d4a956" stroke-width="2.5"/>
    
    <!-- Bag opening/top edge -->
    <ellipse cx="240" cy="95" rx="75" ry="18" fill="#fef5d9" stroke="#d4a956" stroke-width="2"/>
    
    <!-- Rope handles (left and right) -->
    <g stroke="#8b6f47" stroke-width="4" stroke-linecap="round" fill="none">
      <!-- Left handle -->
      <path d="M180 100 Q160 60 180 40"/>
      <!-- Right handle -->
      <path d="M300 100 Q320 60 300 40"/>
      <!-- Connection at top -->
      <path d="M180 40 Q240 20 300 40"/>
    </g>
    
    <!-- Stacked coins on top of bag -->
    <g>
      <!-- Large coin in center -->
      <circle cx="240" cy="50" r="22" fill="url(#coinGrad)"/>
      <circle cx="240" cy="50" r="16" stroke="#e68900" stroke-width="2.5" fill="none"/>
      <text x="240" y="58" text-anchor="middle" font-size="18" font-weight="bold" fill="#000">₹</text>
      
      <!-- Left smaller coin -->
      <circle cx="200" cy="65" r="16" fill="url(#coinGrad)"/>
      <circle cx="200" cy="65" r="11" stroke="#e68900" stroke-width="2" fill="none"/>
      <text x="200" y="72" text-anchor="middle" font-size="13" font-weight="bold" fill="#000">₹</text>
      
      <!-- Right smaller coin -->
      <circle cx="280" cy="65" r="16" fill="url(#coinGrad)"/>
      <circle cx="280" cy="65" r="11" stroke="#e68900" stroke-width="2" fill="none"/>
      <text x="280" y="72" text-anchor="middle" font-size="13" font-weight="bold" fill="#000">₹</text>
      
      <!-- Top left tiny coin -->
      <circle cx="170" cy="45" r="11" fill="url(#coinGrad)"/>
      <circle cx="170" cy="45" r="7" stroke="#e68900" stroke-width="1.5" fill="none"/>
      <text x="170" y="50" text-anchor="middle" font-size="9" font-weight="bold" fill="#000">₹</text>
      
      <!-- Top right tiny coin -->
      <circle cx="310" cy="45" r="11" fill="url(#coinGrad)"/>
      <circle cx="310" cy="45" r="7" stroke="#e68900" stroke-width="1.5" fill="none"/>
      <text x="310" y="50" text-anchor="middle" font-size="9" font-weight="bold" fill="#000">₹</text>
    </g>
    
    <!-- Money bag shadow/details -->
    <ellipse cx="240" cy="260" rx="70" ry="15" fill="#e8c141" opacity="0.4"/>
  </g>

  <!-- === LEFT HAND === -->
  <g>
    <!-- Arm -->
    <rect x="100" y="200" width="50" height="35" rx="17.5" fill="url(#skinGrad)" stroke="#e8d4c0" stroke-width="1.5"/>
    
    <!-- Hand palm -->
    <ellipse cx="130" cy="235" rx="28" ry="32" fill="url(#skinGrad)" stroke="#e8d4c0" stroke-width="1.5"/>
    
    <!-- Thumb -->
    <ellipse cx="105" cy="215" rx="12" ry="18" fill="url(#skinGrad)" transform="rotate(-30 105 215)"/>
    
    <!-- Fingers -->
    <g fill="url(#skinGrad)" stroke="#e8d4c0" stroke-width="1">
      <ellipse cx="110" cy="255" rx="10" ry="20"/>
      <ellipse cx="130" cy="265" rx="10" ry="22"/>
      <ellipse cx="150" cy="255" rx="10" ry="20"/>
    </g>
  </g>

  <!-- === RIGHT HAND === -->
  <g>
    <!-- Arm -->
    <rect x="330" y="200" width="50" height="35" rx="17.5" fill="url(#skinGrad)" stroke="#e8d4c0" stroke-width="1.5"/>
    
    <!-- Hand palm -->
    <ellipse cx="350" cy="235" rx="28" ry="32" fill="url(#skinGrad)" stroke="#e8d4c0" stroke-width="1.5"/>
    
    <!-- Thumb -->
    <ellipse cx="375" cy="215" rx="12" ry="18" fill="url(#skinGrad)" transform="rotate(30 375 215)"/>
    
    <!-- Fingers -->
    <g fill="url(#skinGrad)" stroke="#e8d4c0" stroke-width="1">
      <ellipse cx="330" cy="265" rx="10" ry="22"/>
      <ellipse cx="350" cy="265" rx="10" ry="22"/>
      <ellipse cx="370" cy="255" rx="10" ry="20"/>
    </g>
  </g>

  <!-- Blue feet/shoes (like in reference image) -->
  <g>
    <!-- Left foot -->
    <rect x="105" y="265" width="45" height="22" rx="11" fill="#00a8e8" stroke="#0088b8" stroke-width="1.5"/>
    <!-- Left foot shine -->
    <ellipse cx="127" cy="272" rx="15" ry="6" fill="#1ec4ff" opacity="0.6"/>
    
    <!-- Right foot -->
    <rect x="330" y="265" width="45" height="22" rx="11" fill="#00a8e8" stroke="#0088b8" stroke-width="1.5"/>
    <!-- Right foot shine -->
    <rect x="348" y="272" width="18" height="6" rx="3" fill="#1ec4ff" opacity="0.6"/>
  </g>

  <!-- Decorative sparkles around bag -->
  <g fill="#ffc93c" opacity="0.8">
    <!-- Top sparkle -->
    <circle cx="120" cy="120" r="3"/>
    <circle cx="120" cy="120" r="6" fill="none" stroke="#ffc93c" stroke-width="1"/>
    
    <!-- Right sparkle -->
    <circle cx="340" cy="150" r="2.5"/>
    <circle cx="340" cy="150" r="5.5" fill="none" stroke="#ffc93c" stroke-width="1"/>
    
    <!-- Bottom left sparkle -->
    <circle cx="140" cy="240" r="2"/>
    <circle cx="140" cy="240" r="4.5" fill="none" stroke="#ffc93c" stroke-width="1"/>
  </g>

  <!-- Growth upward arrow -->
  <g stroke="#ffc93c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <polyline points="420,220 450,180 480,220"/>
  </g>
  <polygon points="450,180 445,200 455,200" fill="#ffc93c"/>
</svg>`
,

  professionalLoan: `<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Yellow theme -->
    <linearGradient id="yellowBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fef9e7"/>
      <stop offset="100%" stop-color="#fde4b6"/>
    </linearGradient>

    <!-- Gold coins -->
    <radialGradient id="coinGrad">
      <stop offset="0%" stop-color="#ffe31f"/>
      <stop offset="70%" stop-color="#ffc93c"/>
      <stop offset="100%" stop-color="#ff9800"/>
    </radialGradient>

    <!-- Light skin tone (lighter brown) -->
    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f9dcc4"/>
      <stop offset="100%" stop-color="#f8d4b8"/>
    </linearGradient>

    <!-- Hair gradient (dark) -->
    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3c2820"/>
      <stop offset="100%" stop-color="#2c1810"/>
    </linearGradient>
  </defs>

  <!-- Yellow background circle -->
  <circle cx="240" cy="145" r="145" fill="url(#yellowBgGrad)"/>

  <!-- Sun -->
  <g>
    <circle cx="330" cy="100" r="28" fill="url(#coinGrad)"/>
    <circle cx="330" cy="100" r="20" stroke="#e68900" stroke-width="2" fill="none"/>
  </g>

  <!-- Cloud -->
  <g fill="#e1f5fe" opacity="0.9">
    <ellipse cx="80" cy="90" rx="35" ry="18"/>
    <circle cx="60" cy="95" r="14"/>
    <circle cx="100" cy="95" r="12"/>
  </g>

  <!-- Yellow ground strip -->
  <g>
    <rect x="80" y="273" width="320" height="22" rx="11" fill="#ffc93c"/>
    <ellipse cx="240" cy="291" rx="160" ry="11" fill="#ffe082" opacity="0.5"/>
  </g>

  <!-- MONEY BAG (CENTER - between doctor and CA) -->
  <g>
    <!-- Bag body -->
    <ellipse cx="240" cy="180" rx="35" ry="45" fill="#8b6f47" stroke="#6b4423" stroke-width="2"/>
    
    <!-- Bag opening -->
    <ellipse cx="240" cy="145" rx="30" ry="12" fill="#a89968" stroke="#6b4423" stroke-width="1.5"/>
    
    <!-- Rope handle -->
    <path d="M215 145 Q215 120 240 110 Q265 120 265 145" fill="none" stroke="#6b4423" stroke-width="3" stroke-linecap="round"/>
    
    <!-- Coins sticking out of bag -->
    <g>
      <!-- Coin 1 -->
      <circle cx="215" cy="155" r="14" fill="url(#coinGrad)"/>
      <circle cx="215" cy="155" r="10" stroke="#e68900" stroke-width="2" fill="none"/>
      <text x="215" y="161" text-anchor="middle" font-size="12" font-weight="bold" fill="#000">₹</text>
      
      <!-- Coin 2 -->
      <circle cx="240" cy="165" r="16" fill="url(#coinGrad)"/>
      <circle cx="240" cy="165" r="11" stroke="#e68900" stroke-width="2" fill="none"/>
      <text x="240" y="172" text-anchor="middle" font-size="14" font-weight="bold" fill="#000">₹</text>
      
      <!-- Coin 3 -->
      <circle cx="265" cy="150" r="13" fill="url(#coinGrad)"/>
      <circle cx="265" cy="150" r="9" stroke="#e68900" stroke-width="2" fill="none"/>
      <text x="265" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#000">₹</text>
    </g>
  </g>

  <!-- === LEFT: DOCTOR === -->
  <g>
    <!-- Head -->
    <circle cx="120" cy="100" r="20" fill="url(#skinGrad)"/>
    
    <!-- Hair -->
    <path d="M100 92 Q120 75 140 92 Q136 108 120 115 Q104 108 100 92 Z" fill="url(#hairGrad)"/>
    
    <!-- Left ear (SMALL) -->
    <ellipse cx="100" cy="105" rx="5" ry="8" fill="url(#skinGrad)" stroke="#e8d4c0" stroke-width="0.8"/>
    
    <!-- Right ear (SMALL) -->
    <ellipse cx="140" cy="105" rx="5" ry="8" fill="url(#skinGrad)" stroke="#e8d4c0" stroke-width="0.8"/>
    
    <!-- Eyes (detailed) -->
    <g>
      <!-- Left eye white -->
      <ellipse cx="110" cy="98" rx="4.5" ry="5.5" fill="#ffffff" stroke="#e8d4c0" stroke-width="0.5"/>
      <!-- Left pupil -->
      <circle cx="111" cy="100" r="2.5" fill="#333"/>
      <!-- Left eye shine -->
      <circle cx="112" cy="98" r="1" fill="#ffffff"/>
      
      <!-- Right eye white -->
      <ellipse cx="130" cy="98" rx="4.5" ry="5.5" fill="#ffffff" stroke="#e8d4c0" stroke-width="0.5"/>
      <!-- Right pupil -->
      <circle cx="129" cy="100" r="2.5" fill="#333"/>
      <!-- Right eye shine -->
      <circle cx="128" cy="98" r="1" fill="#ffffff"/>
    </g>
    
    <!-- Nose (smaller) -->
    <path d="M120 105 L118 113 L122 113 Z" fill="#e8d4c0"/>
    <!-- Nostril left -->
    <circle cx="117" cy="114" r="1" fill="#d4bfaa"/>
    <!-- Nostril right -->
    <circle cx="123" cy="114" r="1" fill="#d4bfaa"/>
    
    <!-- Mouth -->
    <path d="M112 120 Q120 125 128 120" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    
    <!-- White coat -->
    <path d="M105 132 Q120 130 135 132 L135 180 Q120 188 105 180 Z" fill="#ffffff" stroke="#d0d0d0" stroke-width="1.5" rx="3"/>
    
    <!-- Coat buttons -->
    <circle cx="120" cy="142" r="2" fill="#ffc93c"/>
    <circle cx="120" cy="156" r="2" fill="#ffc93c"/>
    <circle cx="120" cy="170" r="2" fill="#ffc93c"/>
    
    <!-- Stethoscope around neck -->
    <g stroke="#e74c3c" stroke-width="3" stroke-linecap="round">
      <!-- Tubes down -->
      <path d="M112 138 Q98 158 88 172"/>
      <path d="M128 138 Q142 158 152 172"/>
      <!-- Main line -->
      <path d="M88 172 Q102 176 120 176 Q138 176 152 172"/>
      <!-- Earpieces -->
      <circle cx="84" cy="168" r="4" fill="none"/>
      <circle cx="156" cy="168" r="4" fill="none"/>
    </g>
    
    <!-- Left arm -->
    <rect x="92" y="142" width="12" height="52" rx="6" fill="url(#skinGrad)"/>
    <!-- Right arm -->
    <rect x="156" y="142" width="12" height="52" rx="6" fill="url(#skinGrad)"/>
    
    <!-- Legs -->
    <rect x="112" y="188" width="8" height="47" rx="4" fill="#333"/>
    <rect x="130" y="188" width="8" height="47" rx="4" fill="#333"/>
    
    <!-- Shoes -->
    <ellipse cx="116" cy="238" rx="6" ry="3.5" fill="#1a1a1a"/>
    <ellipse cx="134" cy="238" rx="6" ry="3.5" fill="#1a1a1a"/>
    
    <!-- Doctor label -->
    <g>
      <rect x="102" y="208" width="36" height="12" fill="#ffffff" stroke="#e74c3c" stroke-width="1" rx="2"/>
      <text x="120" y="217" text-anchor="middle" font-size="8" font-weight="bold" fill="#e74c3c">DOCTOR</text>
    </g>
  </g>

  <!-- === RIGHT: CA (CHARTERED ACCOUNTANT) === -->
  <g>
    <!-- Head -->
    <circle cx="360" cy="100" r="20" fill="url(#skinGrad)"/>
    
    <!-- Hair -->
    <path d="M340 92 Q360 75 380 92 Q376 108 360 115 Q344 108 340 92 Z" fill="url(#hairGrad)"/>
    
    <!-- Left ear (SMALL) -->
    <ellipse cx="340" cy="105" rx="5" ry="8" fill="url(#skinGrad)" stroke="#e8d4c0" stroke-width="0.8"/>
    
    <!-- Right ear (SMALL) -->
    <ellipse cx="380" cy="105" rx="5" ry="8" fill="url(#skinGrad)" stroke="#e8d4c0" stroke-width="0.8"/>
    
    <!-- Eyes with glasses (detailed) -->
    <g>
      <!-- Left glass frame -->
      <rect x="348" y="92" width="11" height="10" rx="4" fill="none" stroke="#333" stroke-width="1.8"/>
      <!-- Left eye white inside -->
      <ellipse cx="353" cy="97" rx="3.5" ry="4.5" fill="#ffffff" opacity="0.8"/>
      <!-- Left pupil -->
      <circle cx="353" cy="99" r="2" fill="#333"/>
      <!-- Left shine -->
      <circle cx="354" cy="97" r="0.8" fill="#ffffff"/>
      
      <!-- Bridge -->
      <line x1="359" y1="97" x2="361" y2="97" stroke="#333" stroke-width="1.5"/>
      
      <!-- Right glass frame -->
      <rect x="361" y="92" width="11" height="10" rx="4" fill="none" stroke="#333" stroke-width="1.8"/>
      <!-- Right eye white inside -->
      <ellipse cx="366" cy="97" rx="3.5" ry="4.5" fill="#ffffff" opacity="0.8"/>
      <!-- Right pupil -->
      <circle cx="366" cy="99" r="2" fill="#333"/>
      <!-- Right shine -->
      <circle cx="367" cy="97" r="0.8" fill="#ffffff"/>
    </g>
    
    <!-- Nose (smaller) -->
    <path d="M360 105 L358 113 L362 113 Z" fill="#e8d4c0"/>
    <!-- Nostril left -->
    <circle cx="357" cy="114" r="1" fill="#d4bfaa"/>
    <!-- Nostril right -->
    <circle cx="363" cy="114" r="1" fill="#d4bfaa"/>
    
    <!-- Mouth -->
    <path d="M352 120 Q360 125 368 120" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    
    <!-- Formal shirt (light blue) -->
    <rect x="347" y="132" width="26" height="58" fill="#bbdefb" stroke="#64b5f6" stroke-width="1" rx="2"/>
    
    <!-- Tie -->
    <polygon points="360,132 356,145 360,160 364,145" fill="#1976d2"/>
    
    <!-- CA degree certificate in hand -->
    <g>
      <rect x="312" y="163" width="35" height="48" fill="#f5deb3" stroke="#8b7355" stroke-width="1.5" rx="2"/>
      
      <!-- Certificate seal -->
      <circle cx="330" cy="180" r="6" fill="#ffc107"/>
      <text x="330" y="185" text-anchor="middle" font-size="8" font-weight="bold" fill="#d32f2f">CA</text>
      
      <!-- Certificate lines -->
      <line x1="318" y1="200" x2="342" y2="200" stroke="#8b7355" stroke-width="1"/>
      <line x1="318" y1="208" x2="342" y2="208" stroke="#8b7355" stroke-width="1"/>
    </g>
    
    <!-- Left arm -->
    <rect x="320" y="142" width="12" height="52" rx="6" fill="url(#skinGrad)"/>
    <!-- Right arm -->
    <rect x="396" y="142" width="12" height="52" rx="6" fill="url(#skinGrad)"/>
    
    <!-- Legs -->
    <rect x="352" y="188" width="8" height="47" rx="4" fill="#333"/>
    <rect x="370" y="188" width="8" height="47" rx="4" fill="#333"/>
    
    <!-- Shoes -->
    <ellipse cx="356" cy="238" rx="6" ry="3.5" fill="#1a1a1a"/>
    <ellipse cx="374" cy="238" rx="6" ry="3.5" fill="#1a1a1a"/>
    
    <!-- CA label -->
    <g>
      <rect x="342" y="208" width="36" height="12" fill="#ffffff" stroke="#1976d2" stroke-width="1" rx="2"/>
      <text x="360" y="217" text-anchor="middle" font-size="9" font-weight="bold" fill="#1976d2">CA</text>
    </g>
  </g>

  <!-- Scattered rupee coins on ground -->
  <g>
    <!-- Left coin -->
    <circle cx="100" cy="310" r="13" fill="url(#coinGrad)"/>
    <circle cx="100" cy="310" r="9" stroke="#e68900" stroke-width="2" fill="none"/>
    <text x="100" y="317" text-anchor="middle" font-size="12" font-weight="bold" fill="#000">₹</text>
    
    <!-- Right coin -->
    <circle cx="380" cy="315" r="11" fill="url(#coinGrad)"/>
    <circle cx="380" cy="315" r="7" stroke="#e68900" stroke-width="2" fill="none"/>
    <text x="380" y="321" text-anchor="middle" font-size="10" font-weight="bold" fill="#000">₹</text>
  </g>

  <!-- Professional connection line -->
  <g stroke="#ffc93c" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,4" opacity="0.6">
    <line x1="158" y1="130" x2="200" y2="160"/>
    <line x1="320" y1="160" x2="332" y2="130"/>
  </g>
</svg>`
,

  businessLoan: `<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
  <defs>

    <!-- Glass gradient (transparent blue-ish) -->
    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d4f1ff" opacity="0.8"/>
      <stop offset="50%" stop-color="#a8e1ff" opacity="0.7"/>
      <stop offset="100%" stop-color="#7ecbff" opacity="0.9"/>
    </linearGradient>

    <!-- Yellow tree -->
    <linearGradient id="treeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffd700"/>
      <stop offset="100%" stop-color="#ffca00"/>
    </linearGradient>

    <!-- Cloud gradient -->
    <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#b3e5fc"/>
      <stop offset="100%" stop-color="#81d4fa"/>
    </linearGradient>

    <!-- Glass pane effect -->
    <filter id="glassReflection">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
    </filter>
  </defs>

  <!-- Gray curved ground -->
  <ellipse cx="240" cy="280" rx="200" ry="30" fill="#b3e5fc" opacity="0.5"/>

  <!-- === LEFT: YELLOW TREE === -->
  <g>
    <!-- Tree trunk -->
    <rect x="70" y="220" width="18" height="70" fill="#8b6f47" rx="9"/>
    
    <!-- Tree foliage (yellow) -->
    <g fill="url(#treeGrad)" stroke="#ffb700" stroke-width="2">
      <!-- Main circle -->
      <circle cx="79" cy="200" r="50"/>
      <!-- Left side -->
      <circle cx="50" cy="210" r="35"/>
      <!-- Right side -->
      <circle cx="108" cy="210" r="35"/>
      <!-- Top -->
      <circle cx="79" cy="160" r="40"/>
    </g>

    <!-- Tree shine/highlight -->
    <ellipse cx="65" cy="180" rx="25" ry="30" fill="#ffff99" opacity="0.4"/>
  </g>

  <!-- === CENTER: MODERN GLASS BUILDING === -->
  <g>
    <!-- Building body (glass) -->
    <rect x="140" y="140" width="200" height="160" fill="url(#glassGrad)" stroke="#0087be" stroke-width="3" rx="8"/>

    <!-- Glass shine effect (top) -->
    <rect x="145" y="145" width="190" height="20" fill="#ffffff" opacity="0.3" rx="6"/>

    <!-- "BUSINESS" text on top of building -->
    <rect x="160" y="100" width="160" height="30" fill="#0087be" rx="6"/>
    <text x="240" y="125" text-anchor="middle" font-size="20" font-weight="bold" fill="#ffffff" font-family="Arial, sans-serif">BUSINESS</text>

    <!-- Window grid (3x4) -->
    <g>
      <!-- Row 1 -->
      <rect x="165" y="165" width="35" height="30" fill="#00bfff" stroke="#0087be" stroke-width="1.5"/>
      <rect x="220" y="165" width="35" height="30" fill="#00bfff" stroke="#0087be" stroke-width="1.5"/>
      <rect x="275" y="165" width="35" height="30" fill="#00bfff" stroke="#0087be" stroke-width="1.5"/>

      <!-- Row 2 -->
      <rect x="165" y="205" width="35" height="30" fill="#00bfff" stroke="#0087be" stroke-width="1.5"/>
      <rect x="220" y="205" width="35" height="30" fill="#00bfff" stroke="#0087be" stroke-width="1.5"/>
      <rect x="275" y="205" width="35" height="30" fill="#00bfff" stroke="#0087be" stroke-width="1.5"/>

      <!-- Row 3 -->
      <rect x="165" y="245" width="35" height="30" fill="#0099cc" stroke="#0087be" stroke-width="1.5"/>
      <rect x="220" y="245" width="35" height="30" fill="#0099cc" stroke="#0087be" stroke-width="1.5"/>
      <rect x="275" y="245" width="35" height="30" fill="#0099cc" stroke="#0087be" stroke-width="1.5"/>
    </g>

    <!-- Window shine effects -->
    <g fill="#ffffff" opacity="0.5">
      <rect x="168" y="168" width="10" height="10" rx="2"/>
      <rect x="223" y="168" width="10" height="10" rx="2"/>
      <rect x="278" y="168" width="10" height="10" rx="2"/>
    </g>

    <!-- Building door -->
    <rect x="230" y="275" width="20" height="25" fill="#1a1a1a" stroke="#0087be" stroke-width="2" rx="3"/>
    <!-- Door handle -->
    <circle cx="245" cy="287" r="2" fill="#ffd700"/>
  </g>

  <!-- === RIGHT: BLUE CLOUDS === -->
  <g>
    <!-- Cloud 1 (top right) -->
    <g fill="url(#cloudGrad)" opacity="0.9">
      <ellipse cx="390" cy="100" rx="45" ry="25"/>
      <circle cx="365" cy="110" r="18"/>
      <circle cx="415" cy="110" r="16"/>
    </g>

    <!-- Cloud 2 (far right) -->
    <g fill="url(#cloudGrad)" opacity="0.85">
      <ellipse cx="430" cy="180" rx="35" ry="20"/>
      <circle cx="410" cy="188" r="14"/>
      <circle cx="450" cy="188" r="12"/>
    </g>

    <!-- Cloud shine -->
    <ellipse cx="380" cy="95" rx="20" ry="12" fill="#ffffff" opacity="0.4"/>
  </g>

  <!-- Small decorative cloud (left) -->
  <g fill="url(#cloudGrad)" opacity="0.8">
    <ellipse cx="60" cy="130" rx="30" ry="18"/>
    <circle cx="45" cy="138" r="12"/>
    <circle cx="75" cy="138" r="10"/>
  </g>

  <!-- Ground shadow under building -->
  <ellipse cx="240" cy="305" rx="130" ry="20" fill="#b3e5fc" opacity="0.1"/>

  <!-- Blue accent rocks/bushes -->
  <g fill="#81d4fa" opacity="0.7">
    <circle cx="370" cy="300" r="8"/>
    <circle cx="390" cy="305" r="6"/>
    <circle cx="350" cy="310" r="7"/>
  </g>
</svg>`
 ,
  usedCarLoan: `<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gray car gradient -->
    <linearGradient id="carGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#a8a8a8"/>
      <stop offset="50%" stop-color="#808080"/>
      <stop offset="100%" stop-color="#666666"/>
    </linearGradient>

    <!-- Light gray accent -->
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c0c0c0"/>
      <stop offset="50%" stop-color="#d3d3d3"/>
      <stop offset="100%" stop-color="#a9a9a9"/>
    </linearGradient>

    <!-- Glass gradient (dark tint) -->
    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#666666" opacity="0.8"/>
      <stop offset="100%" stop-color="#444444" opacity="0.6"/>
    </linearGradient>

    <!-- Wheel gradient -->
    <radialGradient id="wheelGrad">
      <stop offset="0%" stop-color="#555555"/>
      <stop offset="70%" stop-color="#333333"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </radialGradient>

    <!-- Money gradient -->
    <linearGradient id="moneyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffd700"/>
      <stop offset="100%" stop-color="#ffaa00"/>
    </linearGradient>

    <!-- Shadow filter -->
    <filter id="shadow">
      <feDropShadow dx="0" dy="4" stdDeviation="3" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Main car body (modern sedan) -->
  <g filter="url(#shadow)">
    <!-- Lower body/chassis -->
    <path d="M 80 220 L 400 220 L 410 240 L 70 240 Z" fill="url(#carGradient)" stroke="#333333" stroke-width="2"/>

    <!-- Main car body (sleek design) -->
    <path d="M 90 140 Q 100 120 240 110 Q 380 120 390 140 L 410 220 Q 400 230 240 235 Q 80 230 70 220 Z" fill="url(#carGradient)" stroke="#333333" stroke-width="2.5" stroke-linejoin="round"/>

    <!-- Roof line (modern) -->
    <path d="M 140 140 Q 150 100 240 95 Q 330 100 340 140" fill="#6b6b6b" stroke="#333333" stroke-width="2"/>

    <!-- Windshield (front) -->
    <path d="M 145 138 L 180 105 L 300 100 L 335 138" fill="url(#glassGrad)" stroke="#555555" stroke-width="1.5" opacity="0.7"/>

    <!-- Side window (left) -->
    <rect x="160" y="120" width="70" height="30" fill="url(#glassGrad)" stroke="#555555" stroke-width="1" rx="4" opacity="0.7"/>

    <!-- Side window (right) -->
    <rect x="250" y="120" width="70" height="30" fill="url(#glassGrad)" stroke="#555555" stroke-width="1" rx="4" opacity="0.7"/>

    <!-- Rear window -->
    <path d="M 150 140 L 170 135 L 310 135 L 330 140" fill="url(#glassGrad)" stroke="#555555" stroke-width="1" opacity="0.6"/>

    <!-- Front bumper/grille -->
    <rect x="390" y="210" width="30" height="20" fill="url(#accentGrad)" stroke="#666666" stroke-width="1.5" rx="2"/>
    
    <!-- Grille details -->
    <g stroke="#888888" stroke-width="1" opacity="0.6">
      <line x1="395" y1="215" x2="415" y2="215"/>
      <line x1="395" y1="222" x2="415" y2="222"/>
      <line x1="395" y1="229" x2="415" y2="229"/>
    </g>

    <!-- Headlights (LED) -->
    <g>
      <rect x="365" y="200" width="12" height="12" fill="#ffcc00" stroke="#999999" stroke-width="1" rx="2" opacity="0.9"/>
      <rect x="385" y="200" width="12" height="12" fill="#ffcc00" stroke="#999999" stroke-width="1" rx="2" opacity="0.9"/>
    </g>

    <!-- Door line -->
    <line x1="240" y1="145" x2="240" y2="225" stroke="#333333" stroke-width="1.5" opacity="0.8"/>

    <!-- Door handles -->
    <circle cx="200" cy="180" r="2.5" fill="#777777"/>
    <circle cx="280" cy="180" r="2.5" fill="#777777"/>

    <!-- Side mirror (left) -->
    <g>
      <rect x="75" y="175" width="12" height="18" fill="#696969" stroke="#333333" stroke-width="1" rx="2"/>
      <rect x="77" y="177" width="8" height="14" fill="#555555" opacity="0.8"/>
    </g>

    <!-- Side mirror (right) -->
    <g>
      <rect x="393" y="175" width="12" height="18" fill="#696969" stroke="#333333" stroke-width="1" rx="2"/>
      <rect x="395" y="177" width="8" height="14" fill="#555555" opacity="0.8"/>
    </g>
  </g>

  <!-- Wheels -->
  <g>
    <!-- Left wheel -->
    <circle cx="160" cy="240" r="32" fill="url(#wheelGrad)" stroke="#333333" stroke-width="2.5"/>
    <!-- Wheel rim -->
    <circle cx="160" cy="240" r="22" fill="none" stroke="#666666" stroke-width="2.5" opacity="0.8"/>
    <!-- Wheel center cap -->
    <circle cx="160" cy="240" r="8" fill="#777777" stroke="#555555" stroke-width="1"/>
    <!-- Wheel spokes -->
    <g stroke="#555555" stroke-width="1" opacity="0.6">
      <line x1="160" y1="210" x2="160" y2="270"/>
      <line x1="130" y1="240" x2="190" y2="240"/>
      <line x1="137" y1="213" x2="183" y2="267"/>
      <line x1="183" y1="213" x2="137" y2="267"/>
    </g>

    <!-- Right wheel -->
    <circle cx="320" cy="240" r="32" fill="url(#wheelGrad)" stroke="#333333" stroke-width="2.5"/>
    <!-- Wheel rim -->
    <circle cx="320" cy="240" r="22" fill="none" stroke="#666666" stroke-width="2.5" opacity="0.8"/>
    <!-- Wheel center cap -->
    <circle cx="320" cy="240" r="8" fill="#777777" stroke="#555555" stroke-width="1"/>
    <!-- Wheel spokes -->
    <g stroke="#555555" stroke-width="1" opacity="0.6">
      <line x1="320" y1="210" x2="320" y2="270"/>
      <line x1="290" y1="240" x2="350" y2="240"/>
      <line x1="297" y1="213" x2="343" y2="267"/>
      <line x1="343" y1="213" x2="297" y2="267"/>
    </g>
  </g>

  <!-- Money elements -->
  <g>
    <!-- Flying rupee coin 1 (top left) -->
    <circle cx="80" cy="80" r="14" fill="url(#moneyGrad)"/>
    <circle cx="80" cy="80" r="10" stroke="#cc8800" stroke-width="2" fill="none"/>
    <text x="80" y="88" text-anchor="middle" font-size="11" font-weight="bold" fill="#000">₹</text>

    <!-- Flying rupee coin 2 (top center) -->
    <circle cx="240" cy="50" r="12" fill="url(#moneyGrad)"/>
    <circle cx="240" cy="50" r="9" stroke="#cc8800" stroke-width="1.5" fill="none"/>
    <text x="240" y="57" text-anchor="middle" font-size="10" font-weight="bold" fill="#000">₹</text>

    <!-- Flying rupee coin 3 (top right) -->
    <circle cx="400" cy="85" r="13" fill="url(#moneyGrad)"/>
    <circle cx="400" cy="85" r="9.5" stroke="#cc8800" stroke-width="1.5" fill="none"/>
    <text x="400" y="92" text-anchor="middle" font-size="10" font-weight="bold" fill="#000">₹</text>

    <!-- Money trail effect (bottom coins) -->
    <circle cx="120" cy="290" r="11" fill="url(#moneyGrad)"/>
    <circle cx="120" cy="290" r="8" stroke="#cc8800" stroke-width="1.5" fill="none"/>
    <text x="120" y="296" text-anchor="middle" font-size="9" font-weight="bold" fill="#000">₹</text>

    <circle cx="360" cy="295" r="10" fill="url(#moneyGrad)"/>
    <circle cx="360" cy="295" r="7" stroke="#cc8800" stroke-width="1.5" fill="none"/>
    <text x="360" y="300" text-anchor="middle" font-size="8" font-weight="bold" fill="#000">₹</text>
  </g>

  <!-- Motion/speed lines -->
  <g stroke="#cccccc" stroke-width="2" opacity="0.4" stroke-linecap="round">
    <line x1="20" y1="180" x2="60" y2="180"/>
    <line x1="10" y1="200" x2="50" y2="200"/>
    <line x1="25" y1="220" x2="65" y2="220"/>
  </g>

  <!-- Brake/taillight glow (right back) -->
  <circle cx="420" cy="220" r="8" fill="#ff4444" opacity="0.6"/>
  <circle cx="420" cy="220" r="5" fill="#ff6666" opacity="0.8"/>
</svg>`
 ,
  CGTMSE : `<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Orange/saffron gradient (Indian theme) -->
    <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ff9800"/>
      <stop offset="100%" stop-color="#f57c00"/>
    </linearGradient>

    <!-- Green gradient (prosperity) -->
    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4caf50"/>
      <stop offset="100%" stop-color="#388e3c"/>
    </linearGradient>

    <!-- Blue gradient (trust/guarantee) -->
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2196f3"/>
      <stop offset="100%" stop-color="#1565c0"/>
    </linearGradient>

    <!-- Gold gradient (certificate) -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffd700"/>
      <stop offset="100%" stop-color="#ffb700"/>
    </linearGradient>

    <!-- Light background -->
    

    <!-- Shadow filter -->
    <filter id="shadow">
      <feDropShadow dx="0" dy="4" stdDeviation="3" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Light background -->
  <rect width="480" height="360" fill="url(#bgGrad)"/>

  <!-- === CENTER: GUARANTEE SHIELD === -->
  <g filter="url(#shadow)">
    <!-- Main shield shape -->
    <path d="M 240 60 L 320 90 L 320 180 Q 320 240 240 280 Q 160 240 160 180 L 160 90 Z" fill="url(#blueGrad)" stroke="#0d47a1" stroke-width="2.5" stroke-linejoin="round"/>

    <!-- Shield shine/highlight -->
    <ellipse cx="220" cy="130" rx="35" ry="45" fill="#ffffff" opacity="0.2"/>

    <!-- Checkmark inside shield -->
    <g stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <polyline points="210,175 240,205 280,155"/>
    </g>

    <!-- Inner circle badge -->
    <circle cx="240" cy="160" r="45" fill="none" stroke="#ffeb3b" stroke-width="2" opacity="0.8" stroke-dasharray="5,5"/>
    
    <!-- CGTMSE text on shield -->
    <text x="240" y="230" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff" font-family="Arial, sans-serif">CGTMSE</text>
  </g>

  <!-- === LEFT: SMALL BUSINESS (SHOP) === -->
  <g filter="url(#shadow)">
    <!-- Shop building -->
    <rect x="50" y="150" width="80" height="100" fill="#f5deb3" stroke="#8b6f47" stroke-width="2" rx="4"/>

    <!-- Shop roof -->
    <polygon points="50,150 130,150 90,110" fill="url(#orangeGrad)" stroke="#d97706" stroke-width="2"/>

    <!-- Door -->
    <rect x="75" y="190" width="30" height="60" fill="#8b4513" stroke="#654321" stroke-width="1.5" rx="2"/>
    <!-- Door handle -->
    <circle cx="100" cy="220" r="2" fill="#ffd700"/>

    <!-- Window 1 -->
    <rect x="60" y="165" width="20" height="20" fill="#87ceeb" stroke="#666" stroke-width="1" rx="2"/>
    <!-- Window cross -->
    <line x1="70" y1="165" x2="70" y2="185" stroke="#666" stroke-width="0.5"/>
    <line x1="60" y1="175" x2="80" y2="175" stroke="#666" stroke-width="0.5"/>

    <!-- Window 2 -->
    <rect x="110" y="165" width="20" height="20" fill="#87ceeb" stroke="#666" stroke-width="1" rx="2"/>
    <!-- Window cross -->
    <line x1="120" y1="165" x2="120" y2="185" stroke="#666" stroke-width="0.5"/>
    <line x1="110" y1="175" x2="130" y2="175" stroke="#666" stroke-width="0.5"/>

    <!-- Flag/sign on top -->
    <rect x="105" y="100" width="30" height="8" fill="url(#orangeGrad)" stroke="#d97706" stroke-width="1" rx="2"/>
    <text x="120" y="106" text-anchor="middle" font-size="6" font-weight="bold" fill="#ffffff">SHOP</text>
  </g>

  <!-- === RIGHT: GROWTH ARROW/GRAPH === -->
  <g filter="url(#shadow)">
    <!-- Growth bars -->
    <g fill="url(#greenGrad)" stroke="#2e7d32" stroke-width="1.5">
      <!-- Bar 1 -->
      <rect x="310" y="210" width="20" height="40"/>
      <!-- Bar 2 -->
      <rect x="340" y="190" width="20" height="60"/>
      <!-- Bar 3 -->
      <rect x="370" y="160" width="20" height="90"/>
    </g>

    <!-- Growth arrow -->
    <g stroke="url(#greenGrad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <polyline points="315,230 340,200 365,170"/>
    </g>
    <!-- Arrow head -->
    <polygon points="365,170 355,175 360,185" fill="url(#greenGrad)"/>

    <!-- Percentage symbol -->
    <circle cx="410" cy="120" r="8" fill="url(#goldGrad)" stroke="#d97706" stroke-width="1.5"/>
    <text x="410" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="#000">%</text>
  </g>

  <!-- === TOP: RUPEE COINS FLOW === -->
  <g>
    <!-- Coin 1 -->
    <circle cx="120" cy="80" r="12" fill="url(#goldGrad)"/>
    <circle cx="120" cy="80" r="9" stroke="#b8860b" stroke-width="1.5" fill="none"/>
    <text x="120" y="87" text-anchor="middle" font-size="10" font-weight="bold" fill="#000">₹</text>

    <!-- Coin 2 -->
    <circle cx="240" cy="40" r="13" fill="url(#goldGrad)"/>
    <circle cx="240" cy="40" r="10" stroke="#b8860b" stroke-width="1.5" fill="none"/>
    <text x="240" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#000">₹</text>

    <!-- Coin 3 -->
    <circle cx="360" cy="75" r="11" fill="url(#goldGrad)"/>
    <circle cx="360" cy="75" r="8" stroke="#b8860b" stroke-width="1.5" fill="none"/>
    <text x="360" y="82" text-anchor="middle" font-size="9" font-weight="bold" fill="#000">₹</text>
  </g>

  <!-- === BOTTOM: GUARANTEE CERTIFICATE === -->
  <g filter="url(#shadow)">
    <!-- Certificate paper -->
    <rect x="140" y="270" width="200" height="70" fill="#fffacd" stroke="#8b6f47" stroke-width="2" rx="4"/>

    <!-- Certificate border -->
    <rect x="148" y="278" width="184" height="54" fill="none" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3,3"/>

    <!-- Seal/badge -->
    <circle cx="420" cy="295" r="18" fill="url(#goldGrad)" stroke="#d97706" stroke-width="2"/>
    <text x="420" y="302" text-anchor="middle" font-size="10" font-weight="bold" fill="#000">✓</text>

    <!-- Certificate text -->
    <text x="240" y="295" text-anchor="middle" font-size="12" font-weight="bold" fill="#0d47a1" font-family="Arial, sans-serif">GUARANTEE CERTIFICATE</text>
    <text x="240" y="312" text-anchor="middle" font-size="9" fill="#2e7d32" font-family="Arial, sans-serif">Loan Protection Assured</text>
    <text x="240" y="328" text-anchor="middle" font-size="8" fill="#555" font-family="Arial, sans-serif">100% Default Coverage</text>
  </g>

  <!-- Connection lines (flowing guarantee to business) -->
  <g stroke="#2196f3" stroke-width="2" opacity="0.4" stroke-linecap="round" stroke-dasharray="5,5">
    <!-- Shield to Shop -->
    <path d="M 200 200 Q 150 180 130 200"/>
    <!-- Shield to Growth -->
    <path d="M 280 200 Q 330 180 350 200"/>
  </g>

  <!-- Decorative elements -->
  <g fill="#ff9800" opacity="0.6">
    <!-- Spark 1 -->
    <circle cx="100" cy="50" r="2"/>
    <!-- Spark 2 -->
    <circle cx="380" cy="100" r="2.5"/>
    <!-- Spark 3 -->
    <circle cx="60" cy="280" r="1.5"/>
  </g>
</svg>`,

  loanAgainstProperty: `<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- House wall gradient (cream/tan) -->
    <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f5e6d3"/>
      <stop offset="100%" stop-color="#e8d5c0"/>
    </linearGradient>

    <!-- Roof gradient (terracotta) -->
    <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#d45d3c"/>
      <stop offset="100%" stop-color="#a03c20"/>
    </linearGradient>

    <!-- Door gradient (wood) -->
    <linearGradient id="doorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#8b6f47"/>
      <stop offset="100%" stop-color="#6b5537"/>
    </linearGradient>

    <!-- Window gradient (glass) -->
    <linearGradient id="windowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a8d8ea"/>
      <stop offset="100%" stop-color="#7ec8e3"/>
    </linearGradient>

    <!-- Ground/grass gradient -->
    <linearGradient id="grassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#7cb342"/>
      <stop offset="100%" stop-color="#558b2f"/>
    </linearGradient>

    <!-- Money gradient -->
    <linearGradient id="moneyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffd700"/>
      <stop offset="100%" stop-color="#ffaa00"/>
    </linearGradient>

    <!-- Light bg -->
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f0f4f8"/>
      <stop offset="100%" stop-color="#e8f1f7"/>
    </linearGradient>

    <!-- Shadow filter -->
    <filter id="shadow">
      <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-opacity="0.18"/>
    </filter>
  </defs>

  <!-- === MAIN HOUSE === -->
  <g filter="url(#shadow)">
    <!-- House foundation/base -->
    <rect x="100" y="200" width="280" height="70" fill="#d4b5a0" stroke="#8b6f47" stroke-width="1.5" opacity="0.8" rx="3"/>

    <!-- Main house walls -->
    <rect x="120" y="130" width="240" height="75" fill="url(#wallGrad)" stroke="#8b6f47" stroke-width="2" rx="4"/>

    <!-- Roof - left side -->
    <polygon points="100,130 240,60 380,130" fill="url(#roofGrad)" stroke="#6b4423" stroke-width="2.5"/>

    <!-- Roof shadow/depth -->
    <polygon points="260,65 385,130 400,130" fill="#8b3d1f" opacity="0.3"/>

    <!-- Roof texture lines -->
    <g stroke="#8b3d1f" stroke-width="0.5" opacity="0.4">
      <line x1="140" y1="115" x2="150" y2="130"/>
      <line x1="180" y1="95" x2="190" y2="130"/>
      <line x1="220" y1="75" x2="230" y2="130"/>
      <line x1="260" y1="65" x2="270" y2="130"/>
      <line x1="300" y1="75" x2="310" y2="130"/>
      <line x1="340" y1="95" x2="350" y2="130"/>
      <line x1="380" y1="115" x2="390" y2="130"/>
    </g>

    <!-- Chimney -->
    <rect x="310" y="90" width="20" height="50" fill="#9b6b47" stroke="#6b4423" stroke-width="1.5" rx="2"/>
    <!-- Chimney top -->
    <rect x="312" y="82" width="16" height="10" fill="#b87d56" stroke="#6b4423" stroke-width="1"/>

    <!-- Door -->
    <rect x="215" y="165" width="50" height="70" fill="url(#doorGrad)" stroke="#4a3728" stroke-width="1.5" rx="3"/>
    <!-- Door frame -->
    <rect x="217" y="167" width="46" height="66" fill="none" stroke="#3a2718" stroke-width="0.8" opacity="0.6" rx="2"/>
    <!-- Door handle -->
    <circle cx="258" cy="200" r="2.5" fill="#d4a574" opacity="0.8"/>
    <!-- Door shadow -->
    <rect x="240" y="165" width="8" height="70" fill="#000000" opacity="0.08" rx="1"/>

    <!-- Window 3 (lower left) -->
    <rect x="150" y="155" width="32" height="32" fill="url(#windowGrad)" stroke="#1565c0" stroke-width="1.2" rx="2"/>
    <!-- Window muntins -->
    <line x1="166" y1="155" x2="166" y2="187" stroke="#1565c0" stroke-width="0.6" opacity="0.6"/>
    <line x1="150" y1="171" x2="182" y2="171" stroke="#1565c0" stroke-width="0.6" opacity="0.6"/>

    <!-- Window 4 (lower right) -->
    <rect x="298" y="155" width="32" height="32" fill="url(#windowGrad)" stroke="#1565c0" stroke-width="1.2" rx="2"/>
    <!-- Window muntins -->
    <line x1="314" y1="155" x2="314" y2="187" stroke="#1565c0" stroke-width="0.6" opacity="0.6"/>
    <line x1="298" y1="171" x2="330" y2="171" stroke="#1565c0" stroke-width="0.6" opacity="0.6"/>

    <!-- Wall texture (subtle mortar lines) -->
    <g stroke="#8b6f47" stroke-width="0.5" opacity="0.2">
      <line x1="120" y1="145" x2="360" y2="145"/>
      <line x1="120" y1="160" x2="360" y2="160"/>
      <line x1="120" y1="175" x2="360" y2="175"/>
    </g>

    <!-- House shadow on ground -->
    <ellipse cx="240" cy="275" rx="145" ry="28" fill="#000000" opacity="0.1"/>
  </g>

  <!-- === MONEY COINS (flowing to house) === -->
  <g>
    <!-- Coin 1 (upper left) -->
    <circle cx="70" cy="90" r="15" fill="url(#moneyGrad)"/>
    <circle cx="70" cy="90" r="10" stroke="#cc8800" stroke-width="1.5" fill="none"/>
    <text x="70" y="93" text-anchor="middle" font-size="12" font-weight="bold" fill="#000">₹</text>

    <!-- Coin 2 (top center) -->
    <circle cx="200" cy="20" r="15" fill="url(#moneyGrad)"/>
    <circle cx="200" cy="20" r="10" stroke="#cc8800" stroke-width="1.5" fill="none"/>
    <text x="200" y="23" text-anchor="middle" font-size="12" font-weight="bold" fill="#000">₹</text>

    <circle cx="240" cy="50" r="10" fill="url(#moneyGrad)"/>
    <circle cx="240" cy="50" r="7" stroke="#cc8800" stroke-width="1.5" fill="none"/>
    <text x="240" y="53" text-anchor="middle" font-size="8" font-weight="bold" fill="#000">₹</text>

    <circle cx="280" cy="50" r="15" fill="url(#moneyGrad)"/>
    <circle cx="280" cy="50" r="10" stroke="#cc8800" stroke-width="1.5" fill="none"/>
    <text x="280" y="53" text-anchor="middle" font-size="12" font-weight="bold" fill="#000">₹</text>

    <circle cx="150" cy="50" r="10" fill="url(#moneyGrad)"/>
    <circle cx="150" cy="50" r="7" stroke="#cc8800" stroke-width="1.5" fill="none"/>
    <text x="150" y="53" text-anchor="middle" font-size="8" font-weight="bold" fill="#000">₹</text>

    <!-- Coin 3 (upper right) -->
    <circle cx="410" cy="85" r="11" fill="url(#moneyGrad)"/>
    <circle cx="410" cy="85" r="8" stroke="#cc8800" stroke-width="1.5" fill="none"/>
    <text x="410" y="89" text-anchor="middle" font-size="9" font-weight="bold" fill="#000">₹</text>
  </g>

  <!-- === INFO LABELS (subtle) === -->
  <!-- Property Value (left side) -->
  <g opacity="0.8">
    <text x="80" y="310" font-size="11" font-weight="bold" fill="#2e7d32" font-family="Arial, sans-serif">Property Value</text>
    <text x="80" y="325" font-size="9" fill="#555" font-family="Arial, sans-serif">Market Price</text>
  </g>

  <!-- Loan Amount (right side) -->
  <g opacity="0.8">
    <text x="350" y="310" text-anchor="end" font-size="11" font-weight="bold" fill="#1565c0" font-family="Arial, sans-serif">Loan Amount</text>
    <text x="350" y="325" text-anchor="end" font-size="9" fill="#555" font-family="Arial, sans-serif">Up to 60%</text>
  </g>

  <!-- Connection arrow (subtle) -->
  <g stroke="#1565c0" stroke-width="2" opacity="0.25" stroke-linecap="round">
    <path d="M 100 300 Q 240 280 380 300" fill="none"/>
  </g>
</svg>`

 ,
  PID: `<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blue gradient (digital/tech) -->
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e88e5"/>
      <stop offset="100%" stop-color="#1565c0"/>
    </linearGradient>

    <!-- Green gradient (approval/success) -->
    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#43a047"/>
      <stop offset="100%" stop-color="#2e7d32"/>
    </linearGradient>

    <!-- Purple gradient (digital wallet) -->
    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#7e57c2"/>
      <stop offset="100%" stop-color="#5e35b1"/>
    </linearGradient>

    <!-- Gold gradient (instant money) -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffd700"/>
      <stop offset="100%" stop-color="#ffaa00"/>
    </linearGradient>

    <!-- Shadow filter -->
    <filter id="shadow">
      <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-opacity="0.2"/>
    </filter>

    <!-- Glow effect -->
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- === CENTER: SMARTPHONE === -->
  <g filter="url(#shadow)">
    <!-- Phone body -->
    <rect x="165" y="80" width="150" height="220" fill="#1a1a1a" stroke="#000000" stroke-width="2" rx="15"/>

    <!-- Phone screen background -->
    <rect x="170" y="83" width="140" height="215" fill="url(#blueGrad)" stroke="#000000" stroke-width="0.5" rx="10"/>

    <!-- Phone notch (top) -->
    <rect x="205" y="80" width="70" height="12" fill="#000000" rx="4"/>

    <!-- PID App Interface on screen -->
    <!-- Header -->
    <rect x="170" y="78" width="140" height="35" fill="#ffffff" opacity="0.15" rx="8"/>
    <text x="240" y="105" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff" font-family="Arial, sans-serif">INSTANT LOAN</text>

    <!-- Loan amount display -->
    <g>
      <rect x="180" y="115" width="120" height="45" fill="#ffffff" opacity="0.1" rx="6"/>
      <text x="240" y="132" text-anchor="middle" font-size="10" fill="#ffff99" font-family="Arial, sans-serif">Amount</text>
      <text x="240" y="148" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffd700" font-family="Arial, sans-serif">₹ 50,000</text>
    </g>

    <!-- Approval status (checkmark) -->
    <g>
      <circle cx="240" cy="185" r="20" fill="url(#greenGrad)"/>
      <g stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <polyline points="232,185 238,191 248,180"/>
      </g>
    </g>

    <!-- Status text -->
    <text x="240" y="215" text-anchor="middle" font-size="9" font-weight="bold" fill="#4caf50" font-family="Arial, sans-serif">APPROVED</text>

    <!-- Time indicator -->
    <text x="240" y="230" text-anchor="middle" font-size="8" fill="#a8d8ea" font-family="Arial, sans-serif">In 5 Minutes</text>

    <!-- Phone button (home) -->
    <circle cx="240" cy="290" r="6" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.5"/>
  </g>

</svg>`

};
