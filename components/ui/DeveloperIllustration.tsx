"use client";

export default function DeveloperIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-4/3 flex items-center justify-center select-none">
      {/* Decorative Vector Scene */}
      <svg
        viewBox="0 0 420 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
      >
        {/* Ambient Soft Canvas Circle */}
        <circle cx="210" cy="160" r="130" fill="#e6faf5" />

        {/* Floating Geometric Ornaments in SVG */}
        <rect
          x="70"
          y="70"
          width="12"
          height="12"
          rx="3"
          fill="#20e9bd"
          opacity="0.6"
        />
        <circle cx="340" cy="90" r="6" fill="#0d9488" opacity="0.5" />
        <rect
          x="350"
          y="200"
          width="10"
          height="10"
          rx="2"
          fill="#cbd5e1"
          opacity="0.8"
        />

        {/* Desk Surface & Legs */}
        <rect x="45" y="240" width="330" height="12" rx="6" fill="#0f172a" />
        <rect x="75" y="252" width="8" height="55" rx="4" fill="#334155" />
        <rect x="337" y="252" width="8" height="55" rx="4" fill="#334155" />

        {/* Office Chair Base & Backrest */}
        <rect x="192" y="165" width="40" height="65" rx="8" fill="#1e293b" />
        <rect x="208" y="230" width="8" height="50" rx="3" fill="#475569" />
        <path
          d="M 185 278 L 239 278 L 235 284 L 189 284 Z"
          fill="#1e293b"
        />

        {/* Main Workstation Monitor */}
        <rect x="195" y="210" width="34" height="30" fill="#475569" />
        <rect x="172" y="236" width="80" height="6" rx="3" fill="#1e293b" />
        <rect x="110" y="85" width="204" height="132" rx="12" fill="#0f172a" />
        <rect x="118" y="93" width="188" height="116" rx="8" fill="#1e293b" />

        {/* Monitor Titlebar with Mac/Window Dots */}
        <rect x="118" y="93" width="188" height="20" rx="8" fill="#0f172a" />
        <circle cx="132" cy="103" r="3.5" fill="#f87171" />
        <circle cx="142" cy="103" r="3.5" fill="#fbbf24" />
        <circle cx="152" cy="103" r="3.5" fill="#20e9bd" />

        {/* Editor Tab */}
        <rect x="164" y="97" width="56" height="12" rx="3" fill="#1e293b" />
        <rect x="170" y="101" width="34" height="4" rx="2" fill="#94a3b8" />

        {/* Code Editor Lines */}
        <rect x="130" y="124" width="48" height="5" rx="2.5" fill="#20e9bd" />
        <rect x="184" y="124" width="64" height="5" rx="2.5" fill="#cbd5e1" />

        <rect x="138" y="136" width="80" height="5" rx="2.5" fill="#0d9488" />
        <rect x="224" y="136" width="45" height="5" rx="2.5" fill="#94a3b8" />

        <rect x="146" y="148" width="60" height="5" rx="2.5" fill="#64748b" />
        <rect x="212" y="148" width="30" height="5" rx="2.5" fill="#20e9bd" />

        <rect x="138" y="160" width="70" height="5" rx="2.5" fill="#cbd5e1" />
        <rect x="214" y="160" width="40" height="5" rx="2.5" fill="#0d9488" />

        <rect x="130" y="172" width="32" height="5" rx="2.5" fill="#20e9bd" />
        {/* Blinking Cursor */}
        <rect
          x="166"
          y="171"
          width="7"
          height="7"
          rx="1.5"
          fill="#20e9bd"
          className="animate-pulse"
        />

        {/* Developer Character (Front/Side Focus at Desk) */}
        {/* Torso */}
        <path
          d="M 194 185 C 194 172 230 172 230 185 L 234 235 L 190 235 Z"
          fill="#0f172a"
        />

        {/* Head */}
        <circle cx="212" cy="155" r="16" fill="#f8fafc" />
        {/* Hair */}
        <path
          d="M 197 154 C 197 140 227 140 227 154 C 220 146 204 146 197 154 Z"
          fill="#0f172a"
        />
        {/* Headphones band */}
        <path
          d="M 196 154 A 16 16 0 0 1 228 154"
          stroke="#20e9bd"
          strokeWidth="3.5"
          fill="none"
        />
        <rect x="193" y="152" width="4" height="9" rx="2" fill="#0d9488" />
        <rect x="227" y="152" width="4" height="9" rx="2" fill="#0d9488" />

        {/* Arms Typing */}
        <path
          d="M 198 196 L 176 226 L 186 230 L 206 200 Z"
          fill="#334155"
        />
        <path
          d="M 226 196 L 246 226 L 236 230 L 218 200 Z"
          fill="#334155"
        />

        {/* Secondary Laptop on Right */}
        <path d="M 285 240 L 335 240 L 330 244 L 290 244 Z" fill="#334155" />
        <rect x="288" y="194" width="44" height="46" rx="4" fill="#0f172a" />
        <rect x="292" y="198" width="36" height="38" rx="2" fill="#0d9488" />
        <rect x="296" y="206" width="20" height="3" rx="1.5" fill="#e6faf5" />
        <rect x="296" y="213" width="28" height="3" rx="1.5" fill="#20e9bd" />
        <rect x="296" y="220" width="16" height="3" rx="1.5" fill="#e6faf5" />

        {/* Hot Coffee Mug on Left Desk */}
        <rect x="68" y="220" width="18" height="20" rx="3.5" fill="#20e9bd" />
        <path
          d="M 68 224 C 61 224 61 234 68 234"
          stroke="#0d9488"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Steam */}
        <path
          d="M 74 214 C 71 209 77 204 74 199"
          stroke="#20e9bd"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-pulse"
        />
        <path
          d="M 80 214 C 78 210 82 206 80 202"
          stroke="#0d9488"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="animate-pulse"
        />

        {/* Potted Desk Plant on Right */}
        <path
          d="M 345 226 L 362 226 L 359 240 L 348 240 Z"
          fill="#cbd5e1"
        />
        <path
          d="M 353 226 C 347 214 345 204 353 208 C 356 216 354 222 353 226 Z"
          fill="#20e9bd"
        />
        <path
          d="M 354 226 C 361 216 364 208 358 212 C 354 218 354 223 354 226 Z"
          fill="#0d9488"
        />
      </svg>

      {/* Floating Animated Badge 1: Terminal Status */}
      <div className="absolute top-2 right-4 bg-slate-900 text-[#20e9bd] font-mono text-[11px] px-3 py-1.5 rounded-xl shadow-xs animate-float-slow flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#20e9bd] animate-ping" />
        <span>npm run build: 200 OK</span>
      </div>

      {/* Floating Animated Badge 2: Code File */}
      <div
        className="absolute bottom-4 left-4 bg-white text-slate-800 font-mono text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-xs border border-slate-100 flex items-center gap-2 animate-float-slow"
        style={{ animationDelay: "2s" }}
      >
        <span className="text-[#0d9488]">&lt;/&gt;</span>
        <span>Full-Stack Web Dev</span>
      </div>
    </div>
  );
}
