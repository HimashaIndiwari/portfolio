/**
 * Animated SVG data cables — multi-wire bundles connecting modules to center hub.
 */
export default function DataCables() {
  return (
    <svg className="data-cables scene-layer" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid meet" data-depth="0.3">
      <defs>
        <linearGradient id="cyanCable" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#67e8f9" stopOpacity="1" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="purpleCable" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#c084fc" stopOpacity="1" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="hybridCable" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="cableGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Frontend → center (bundle of 4 cyan wires) */}
      <path className="cable cable-cyan" d="M 78 195 C 175 195, 220 238, 298 258" filter="url(#cableGlow)" />
      <path className="cable cable-cyan cable-thin" d="M 78 204 C 174 204, 220 246, 298 266" />
      <path className="cable cable-cyan cable-thin" style={{ opacity: 0.35 }} d="M 78 212 C 173 212, 218 253, 297 273" />
      <path className="cable cable-cyan cable-ultra-thin" d="M 80 188 C 176 188, 222 230, 300 250" />

      {/* Backend → center (bundle of 4 purple wires) */}
      <path className="cable cable-purple" d="M 522 195 C 425 195, 380 238, 302 258" filter="url(#cableGlow)" />
      <path className="cable cable-purple cable-thin" d="M 522 204 C 426 204, 380 246, 302 266" />
      <path className="cable cable-purple cable-thin" style={{ opacity: 0.35 }} d="M 522 212 C 427 212, 382 253, 303 273" />
      <path className="cable cable-purple cable-ultra-thin" d="M 520 188 C 424 188, 378 230, 300 250" />

      {/* Persistence → center (hybrid bundle) */}
      <path className="cable cable-cyan" d="M 300 425 C 300 365, 300 325, 300 292" style={{ stroke: "url(#hybridCable)" }} filter="url(#cableGlow)" />
      <path className="cable cable-thin" d="M 307 422 C 307 364, 306 323, 305 291" style={{ stroke: "url(#hybridCable)", opacity: 0.5 }} />
      <path className="cable cable-thin" d="M 293 422 C 293 364, 294 323, 295 291" style={{ stroke: "url(#hybridCable)", opacity: 0.35 }} />

      {/* Delivery → center (bundle — purple/glass) */}
      <path className="cable cable-purple" d="M 482 78 C 422 120, 362 178, 322 230" filter="url(#cableGlow)" />
      <path className="cable cable-cyan cable-thin" d="M 470 88 C 410 128, 352 185, 312 238" />
      <path className="cable cable-purple cable-thin" style={{ opacity: 0.4 }} d="M 492 85 C 432 125, 372 183, 330 234" />
      <path className="cable cable-ultra-thin" d="M 460 95 C 400 133, 345 192, 308 244" style={{ stroke: "#67e8f9", opacity: 0.25 }} />
    </svg>
  );
}
