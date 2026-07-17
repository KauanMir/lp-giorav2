interface WaveBandProps {
  text: string
  repeat?: number
}

export function WaveBand({ text, repeat = 6 }: WaveBandProps) {
  const items = Array.from({ length: repeat }, () => text).join('   •   ')

  return (
    <div className="wave-band" aria-hidden="true">
      {/* Layer 1 — pure decorative shape. Purposely has no text and no
          knowledge of the marquee: the wave never dictates where the
          text sits, so it can never visually "bend" it. */}
      <svg
        className="wave-band-shape"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-band-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#15120D" />
            <stop offset="50%" stopColor="#2C261D" />
            <stop offset="100%" stopColor="#15120D" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave-band-gradient)"
          d="M0,42 C240,26 480,26 720,42 C960,58 1200,58 1440,42 L1440,158 C1200,174 960,174 720,158 C480,142 240,142 0,158 Z"
        />
      </svg>

      {/* Layer 2 — plain, flat marquee track. Centered as a rigid block
          over the shape; it never follows the curve. */}
      <div className="wave-band-text">
        <div className="wave-band-track">
          <span className="wave-band-item">{items}   •   </span>
          <span className="wave-band-item">{items}   •   </span>
        </div>
      </div>
    </div>
  )
}
