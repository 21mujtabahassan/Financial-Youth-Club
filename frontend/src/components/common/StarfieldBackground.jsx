import React from 'react'

const StarfieldBackground = ({ opacity = 0.85 }) => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity }}
      >
        <defs>
          <style>{`
            @keyframes starPulse1 { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.9; } }
            @keyframes starPulse2 { 0%, 100% { opacity: 0.85; } 50% { opacity: 0.2; } }
            @keyframes starPulse3 { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
            @keyframes glintShimmer { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }

            .twinkle-1 { animation: starPulse1 4.5s ease-in-out infinite; }
            .twinkle-2 { animation: starPulse2 5.8s ease-in-out infinite; animation-delay: 1.6s; }
            .twinkle-3 { animation: starPulse3 3.6s ease-in-out infinite; animation-delay: 2.3s; }
            .glint-twinkle { animation: glintShimmer 4.8s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Tier 1: Micro Background Pinpoints (0.5px - 0.8px, Densely Populated) */}
        <g fill="#FFFFFF" opacity="0.45">
          {/* Top Horizon Dense Cluster */}
          <rect x="25" y="15" width="0.8" height="0.8" />
          <rect x="55" y="45" width="0.7" height="0.7" />
          <rect x="85" y="25" width="0.8" height="0.8" />
          <rect x="115" y="65" width="0.6" height="0.6" />
          <rect x="145" y="15" width="0.9" height="0.9" />
          <rect x="175" y="85" width="0.7" height="0.7" />
          <rect x="205" y="35" width="0.8" height="0.8" />
          <rect x="235" y="105" width="0.6" height="0.6" />
          <rect x="265" y="20" width="0.7" height="0.7" />
          <rect x="295" y="75" width="0.8" height="0.8" />
          <rect x="325" y="40" width="0.6" height="0.6" />
          <rect x="355" y="95" width="0.9" height="0.9" />
          <rect x="385" y="15" width="0.7" height="0.7" />
          <rect x="415" y="60" width="0.8" height="0.8" />
          <rect x="445" y="30" width="0.6" height="0.6" />
          <rect x="475" y="110" width="0.7" height="0.7" />
          <rect x="505" y="25" width="0.9" height="0.9" />
          <rect x="535" y="80" width="0.6" height="0.6" />
          <rect x="565" y="45" width="0.8" height="0.8" />
          <rect x="595" y="120" width="0.7" height="0.7" />

          <rect x="625" y="20" width="0.8" height="0.8" />
          <rect x="655" y="70" width="0.6" height="0.6" />
          <rect x="685" y="35" width="0.9" height="0.9" />
          <rect x="715" y="90" width="0.7" height="0.7" />
          <rect x="745" y="15" width="0.8" height="0.8" />
          <rect x="775" y="65" width="0.6" height="0.6" />
          <rect x="805" y="40" width="0.7" height="0.7" />
          <rect x="835" y="105" width="0.8" height="0.8" />
          <rect x="865" y="25" width="0.6" height="0.6" />
          <rect x="895" y="80" width="0.9" height="0.9" />
          <rect x="925" y="45" width="0.7" height="0.7" />
          <rect x="955" y="115" width="0.8" height="0.8" />
          <rect x="985" y="30" width="0.6" height="0.6" />
          <rect x="1015" y="75" width="0.7" height="0.7" />
          <rect x="1045" y="15" width="0.9" height="0.9" />
          <rect x="1075" y="95" width="0.6" height="0.6" />
          <rect x="1105" y="40" width="0.8" height="0.8" />
          <rect x="1135" y="110" width="0.7" height="0.7" />
          <rect x="1165" y="25" width="0.8" height="0.8" />
          <rect x="1195" y="70" width="0.6" height="0.6" />
          <rect x="1225" y="35" width="0.9" height="0.9" />
          <rect x="1255" y="85" width="0.7" height="0.7" />
          <rect x="1285" y="20" width="0.8" height="0.8" />
          <rect x="1315" y="60" width="0.6" height="0.6" />
          <rect x="1345" y="105" width="0.7" height="0.7" />
          <rect x="1375" y="30" width="0.8" height="0.8" />

          {/* Upper-Mid Layer Pinpoints */}
          <rect x="40" y="145" width="0.8" height="0.8" />
          <rect x="90" y="185" width="0.7" height="0.7" />
          <rect x="150" y="135" width="0.6" height="0.6" />
          <rect x="210" y="195" width="0.9" height="0.9" />
          <rect x="270" y="155" width="0.7" height="0.7" />
          <rect x="330" y="215" width="0.8" height="0.8" />
          <rect x="390" y="165" width="0.6" height="0.6" />
          <rect x="450" y="235" width="0.7" height="0.7" />
          <rect x="510" y="175" width="0.8" height="0.8" />
          <rect x="570" y="245" width="0.6" height="0.6" />
          <rect x="630" y="185" width="0.9" height="0.9" />
          <rect x="690" y="225" width="0.7" height="0.7" />
          <rect x="750" y="165" width="0.8" height="0.8" />
          <rect x="810" y="235" width="0.6" height="0.6" />
          <rect x="870" y="175" width="0.7" height="0.7" />
          <rect x="930" y="245" width="0.8" height="0.8" />
          <rect x="990" y="185" width="0.6" height="0.6" />
          <rect x="1050" y="225" width="0.9" height="0.9" />
          <rect x="1110" y="165" width="0.7" height="0.7" />
          <rect x="1170" y="235" width="0.8" height="0.8" />
          <rect x="1230" y="175" width="0.6" height="0.6" />
          <rect x="1290" y="245" width="0.7" height="0.7" />
          <rect x="1350" y="185" width="0.8" height="0.8" />

          {/* Lower Mid & Outer Margins Pinpoints */}
          <rect x="30" y="295" width="0.8" height="0.8" />
          <rect x="80" y="355" width="0.6" height="0.6" />
          <rect x="130" y="415" width="0.7" height="0.7" />
          <rect x="180" y="325" width="0.9" height="0.9" />
          <rect x="230" y="475" width="0.6" height="0.6" />
          <rect x="280" y="385" width="0.8" height="0.8" />
          <rect x="340" y="445" width="0.7" height="0.7" />
          <rect x="400" y="315" width="0.6" height="0.6" />
          <rect x="460" y="395" width="0.8" height="0.8" />
          <rect x="520" y="465" width="0.7" height="0.7" />
          <rect x="580" y="335" width="0.9" height="0.9" />
          <rect x="640" y="415" width="0.6" height="0.6" />
          <rect x="700" y="485" width="0.8" height="0.8" />
          <rect x="760" y="355" width="0.7" height="0.7" />
          <rect x="820" y="425" width="0.6" height="0.6" />
          <rect x="880" y="315" width="0.8" height="0.8" />
          <rect x="940" y="395" width="0.7" height="0.7" />
          <rect x="1000" y="465" width="0.9" height="0.9" />
          <rect x="1060" y="335" width="0.6" height="0.6" />
          <rect x="1120" y="415" width="0.8" height="0.8" />
          <rect x="1180" y="485" width="0.7" height="0.7" />
          <rect x="1240" y="355" width="0.6" height="0.6" />
          <rect x="1300" y="425" width="0.8" height="0.8" />
          <rect x="1360" y="315" width="0.7" height="0.7" />

          {/* Bottom Dark Tapering Pinpoints */}
          <rect x="50" y="555" width="0.8" height="0.8" opacity="0.6" />
          <rect x="120" y="635" width="0.6" height="0.6" opacity="0.5" />
          <rect x="190" y="715" width="0.7" height="0.7" opacity="0.4" />
          <rect x="260" y="585" width="0.8" height="0.8" opacity="0.5" />
          <rect x="330" y="765" width="0.6" height="0.6" opacity="0.4" />
          <rect x="410" y="625" width="0.7" height="0.7" opacity="0.5" />
          <rect x="490" y="705" width="0.8" height="0.8" opacity="0.4" />
          <rect x="570" y="565" width="0.6" height="0.6" opacity="0.5" />
          <rect x="650" y="655" width="0.7" height="0.7" opacity="0.4" />
          <rect x="730" y="745" width="0.8" height="0.8" opacity="0.4" />
          <rect x="810" y="605" width="0.6" height="0.6" opacity="0.5" />
          <rect x="890" y="685" width="0.7" height="0.7" opacity="0.4" />
          <rect x="970" y="775" width="0.8" height="0.8" opacity="0.4" />
          <rect x="1050" y="595" width="0.6" height="0.6" opacity="0.5" />
          <rect x="1130" y="675" width="0.7" height="0.7" opacity="0.4" />
          <rect x="1210" y="755" width="0.8" height="0.8" opacity="0.4" />
          <rect x="1290" y="615" width="0.6" height="0.6" opacity="0.5" />
          <rect x="1350" y="705" width="0.7" height="0.7" opacity="0.4" />
        </g>

        {/* Tier 2: Medium Pinpoint Stars (1.2px - 1.5px, Bright White & Sky Blue) */}
        <g fill="#FFFFFF" opacity="0.75">
          <rect x="65" y="30" width="1.2" height="1.2" />
          <rect x="185" y="90" width="1.5" height="1.5" />
          <rect x="315" y="20" width="1.2" height="1.2" />
          <rect x="435" y="70" width="1.4" height="1.4" />
          <rect x="555" y="35" width="1.2" height="1.2" />
          <rect x="675" y="100" width="1.5" height="1.5" />
          <rect x="795" y="25" width="1.2" height="1.2" />
          <rect x="915" y="85" width="1.4" height="1.4" />
          <rect x="1035" y="40" width="1.2" height="1.2" />
          <rect x="1155" y="95" width="1.5" height="1.5" />
          <rect x="1275" y="30" width="1.2" height="1.2" />

          <rect x="105" y="160" width="1.4" height="1.4" />
          <rect x="245" y="220" width="1.2" height="1.2" />
          <rect x="375" y="170" width="1.5" height="1.5" />
          <rect x="505" y="230" width="1.2" height="1.2" />
          <rect x="635" y="150" width="1.4" height="1.4" />
          <rect x="765" y="210" width="1.2" height="1.2" />
          <rect x="895" y="160" width="1.5" height="1.5" />
          <rect x="1025" y="220" width="1.2" height="1.2" />
          <rect x="1155" y="170" width="1.4" height="1.4" />

          <rect x="75" y="340" width="1.2" height="1.2" />
          <rect x="215" y="410" width="1.4" height="1.4" />
          <rect x="355" y="330" width="1.2" height="1.2" />
          <rect x="495" y="390" width="1.5" height="1.5" />
          <rect x="635" y="350" width="1.2" height="1.2" />
          <rect x="775" y="420" width="1.4" height="1.4" />
          <rect x="915" y="360" width="1.2" height="1.2" />
          <rect x="1055" y="410" width="1.5" height="1.5" />
          <rect x="1195" y="330" width="1.2" height="1.2" />
        </g>

        {/* Sky Blue (#4FC3E8) Medium Stars */}
        <g fill="#4FC3E8" opacity="0.8">
          <rect x="140" y="50" width="1.4" height="1.4" />
          <rect x="360" y="125" width="1.5" height="1.5" />
          <rect x="590" y="60" width="1.4" height="1.4" />
          <rect x="830" y="115" width="1.5" height="1.5" />
          <rect x="1060" y="75" width="1.4" height="1.4" />
          <rect x="1290" y="130" width="1.5" height="1.5" />
          <rect x="170" y="290" width="1.4" height="1.4" />
          <rect x="610" y="260" width="1.5" height="1.5" />
          <rect x="1010" y="310" width="1.4" height="1.4" />
        </g>

        {/* Tier 3: Hero Stars with 4-Point Diamond Cross Glint Shape */}
        <g fill="#FFFFFF" opacity="0.95" className="glint-twinkle">
          <path d="M 160 40 L 160.8 43.2 L 164 44 L 160.8 44.8 L 160 48 L 159.2 44.8 L 156 44 L 159.2 43.2 Z" />
          <path d="M 980 50 L 980.8 53.2 L 984 54 L 980.8 54.8 L 980 58 L 979.2 54.8 L 976 54 L 979.2 53.2 Z" />
          <path d="M 280 180 L 280.8 183.2 L 284 184 L 280.8 184.8 L 280 188 L 279.2 184.8 L 276 184 L 279.2 183.2 Z" />
          <path d="M 520 70 L 520.8 73.2 L 524 74 L 520.8 74.8 L 520 78 L 519.2 74.8 L 516 74 L 519.2 73.2 Z" />
          <path d="M 1120 190 L 1120.8 193.2 L 1124 194 L 1120.8 194.8 L 1120 198 L 1119.2 194.8 L 1116 194 L 1119.2 193.2 Z" />
          <path d="M 90 380 L 90.8 383.2 L 94 384 L 90.8 384.8 L 90 388 L 89.2 384.8 L 86 384 L 89.2 383.2 Z" />
          <path d="M 1240 370 L 1240.8 373.2 L 1244 374 L 1240.8 374.8 L 1240 378 L 1239.2 374.8 L 1236 374 L 1239.2 373.2 Z" />
        </g>

        {/* Sky Blue Hero Glints */}
        <g fill="#4FC3E8" opacity="0.9">
          <path d="M 740 60 L 740.8 63.2 L 744 64 L 740.8 64.8 L 740 68 L 739.2 64.8 L 736 64 L 739.2 63.2 Z" />
          <path d="M 420 200 L 420.8 203.2 L 424 204 L 420.8 204.8 L 420 208 L 419.2 204.8 L 416 204 L 419.2 203.2 Z" />
        </g>

        {/* Staggered Twinkling Groups */}
        <g fill="#FFFFFF" className="twinkle-1">
          <rect x="220" y="50" width="1.5" height="1.5" />
          <rect x="640" y="80" width="1.6" height="1.6" />
          <rect x="1080" y="60" width="1.5" height="1.5" />
          <rect x="310" y="280" width="1.4" height="1.4" />
        </g>
        <g fill="#4FC3E8" className="twinkle-2">
          <rect x="460" y="95" width="1.6" height="1.6" />
          <rect x="880" y="45" width="1.5" height="1.5" />
          <rect x="1190" y="210" width="1.6" height="1.6" />
        </g>
        <g fill="#FFFFFF" className="twinkle-3">
          <rect x="130" y="115" width="1.5" height="1.5" />
          <rect x="790" y="145" width="1.6" height="1.6" />
          <rect x="950" y="290" width="1.4" height="1.4" />
        </g>
      </svg>
    </div>
  )
}

export default StarfieldBackground
