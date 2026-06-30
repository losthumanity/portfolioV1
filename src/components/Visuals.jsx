// Procedural, authentic-feeling SVG "photos" with film grain.
// Each is a hand-tuned composition rather than a stock asset — flowchart
// graph, OCR document grid, halftone portrait — so they tie directly to
// Pranav's work (document intelligence, YOLO flowchart extraction, CV).
// feTurbulence adds the noise that makes them read as scanned/printed media.

const Grain = ({ id, opacity = 0.18 }) => (
  <filter id={id} x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="n" />
    <feColorMatrix in="n" type="matrix" values="
      0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0" />
    <feComponentTransfer>
      <feFuncA type="linear" slope={opacity} />
    </feComponentTransfer>
    <feComposite operator="over" in2="SourceGraphic" />
  </filter>
);

const Paper = ({ id }) => (
  <filter id={id} x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.04 0.9" numOctaves="2" seed="7" result="paper" />
    <feColorMatrix in="paper" type="matrix" values="
      0 0 0 0 0.91  0 0 0 0 0.89  0 0 0 0 0.85  0 0 0 0.08 0" result="paperTex" />
    <feComposite in="paperTex" in2="SourceGraphic" operator="in" />
  </filter>
);

// 1) Flowchart → digital graph (the YOLO + OpenCV arrow-tracing work)
export function FlowchartArt({ className }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Flowchart extracted into a digital graph">
      <defs>
        <Grain id="fc-grain" opacity={0.22} />
        <Paper id="fc-paper" />
      </defs>
      <rect width="400" height="300" fill="#0c0c0c" />
      <g filter="url(#fc-paper)">
        <rect x="20" y="20" width="360" height="260" fill="#e9e4d8" />
      </g>

      {/* faint grid */}
      <g stroke="#c9c2b2" strokeWidth="0.5" opacity="0.5">
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`v${i}`} x1={20 + i * 20} y1="20" x2={20 + i * 20} y2="280" />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`h${i}`} x1="20" y1={20 + i * 20} x2="380" y2={20 + i * 20} />
        ))}
      </g>

      {/* nodes */}
      <g fill="#f4f1ea" stroke="#0a0a0a" strokeWidth="2">
        <rect x="50" y="50" width="90" height="40" rx="4" />
        <rect x="260" y="50" width="90" height="40" rx="4" />
        <circle cx="305" cy="150" r="26" />
        <rect x="50" y="210" width="90" height="40" rx="4" />
        <polygon points="305,210 340,250 270,250" />
      </g>

      {/* arrows traced by OpenCV */}
      <g stroke="#c8412a" strokeWidth="2.5" fill="none" markerEnd="url(#fc-arrow)">
        <path d="M140 70 C 200 70, 220 70, 260 70" />
        <path d="M305 90 C 305 110, 305 120, 305 124" />
        <path d="M279 150 C 200 150, 140 180, 140 210" />
        <path d="M305 176 C 305 190, 305 200, 305 210" />
      </g>
      <defs>
        <marker id="fc-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="#c8412a" />
        </marker>
      </defs>

      {/* detected bounding boxes (YOLO) */}
      <g stroke="#c8412a" strokeWidth="1" fill="none" opacity="0.7" strokeDasharray="3 3">
        <rect x="46" y="46" width="98" height="48" />
        <rect x="256" y="46" width="98" height="48" />
        <rect x="277" y="122" width="56" height="56" />
      </g>

      <g filter="url(#fc-grain)">
        <rect width="400" height="300" fill="transparent" />
      </g>
    </svg>
  );
}

// 2) OCR document grid (pdfplumber / PaddleOCR extraction)
export function DocumentArt({ className }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Scanned document with OCR extraction grid">
      <defs>
        <Grain id="doc-grain" opacity={0.25} />
        <Paper id="doc-paper" />
      </defs>
      <rect width="400" height="300" fill="#0c0c0c" />
      <g filter="url(#doc-paper)">
        <rect x="20" y="20" width="360" height="260" fill="#ece7da" />
      </g>

      {/* text lines */}
      <g fill="#3a3631">
        {Array.from({ length: 14 }).map((_, i) => {
          const y = 40 + i * 16;
          const widths = [340, 320, 300, 330, 280, 340, 260, 320, 300, 340, 240, 320, 300, 280];
          return <rect key={i} x="30" y={y} width={widths[i]} height="6" rx="1" />;
        })}
      </g>

      {/* a detected table block */}
      <g stroke="#c8412a" strokeWidth="1.5" fill="none">
        <rect x="30" y="180" width="340" height="80" />
        <line x1="30" y1="200" x2="370" y2="200" />
        <line x1="30" y1="220" x2="370" y2="220" />
        <line x1="30" y1="240" x2="370" y2="240" />
        <line x1="150" y1="200" x2="150" y2="260" />
        <line x1="270" y1="200" x2="270" y2="260" />
      </g>

      {/* OCR confidence tokens */}
      <g fontFamily="monospace" fontSize="6" fill="#c8412a">
        <text x="32" y="178">tbl_01 · 0.97</text>
        <text x="300" y="178">PaddleOCR</text>
      </g>

      <g filter="url(#doc-grain)">
        <rect width="400" height="300" fill="transparent" />
      </g>
    </svg>
  );
}

// 3) Halftone portrait silhouette (AI / agents avatar)
export function PortraitArt({ className }) {
  const dots = [];
  for (let y = 0; y < 60; y++) {
    for (let x = 0; x < 60; x++) {
      const cx = x - 30;
      const cy = y - 30;
      const r = Math.sqrt(cx * cx + cy * cy);
      // head + shoulders silhouette field
      const head = Math.max(0, 12 - r) / 12;
      const shoulders = Math.max(0, 18 - Math.abs(cx)) / 18 * Math.max(0, 8 - (cy - 12)) / 8;
      const f = Math.min(1, head * 0.8 + shoulders * 0.6);
      if (f > 0.05) {
        const size = f * 1.8;
        dots.push(<circle key={`${x}-${y}`} cx={x * 5 + 2.5} cy={y * 5 + 2.5} r={size} fill="#f4f1ea" />);
      }
    }
  }
  return (
    <svg viewBox="0 0 300 300" className={className} role="img" aria-label="Halftone portrait silhouette">
      <defs>
        <Grain id="pt-grain" opacity={0.2} />
      </defs>
      <rect width="300" height="300" fill="#0a0a0a" />
      <g filter="url(#pt-grain)">{dots}</g>
      <circle cx="150" cy="150" r="140" stroke="#c8412a" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

// 4) RAG / vector index diagram
export function RagArt({ className }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="RAG retrieval pipeline diagram">
      <defs>
        <Grain id="rag-grain" opacity={0.18} />
      </defs>
      <rect width="400" height="300" fill="#0c0c0c" />
      <g stroke="#2a2a2a" strokeWidth="0.5">
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={i} x1="0" y1={i * 15} x2="400" y2={i * 15} />
        ))}
      </g>

      {/* chunks */}
      <g fill="#f4f1ea" opacity="0.85">
        {Array.from({ length: 24 }).map((_, i) => {
          const col = i % 6;
          const row = Math.floor(i / 6);
          return <rect key={i} x={20 + col * 60} y={30 + row * 70} width="48" height="50" rx="2" stroke="#0a0a0a" />;
        })}
      </g>

      {/* embedding arrows into FAISS index */}
      <g stroke="#c8412a" strokeWidth="1.5" fill="none" markerEnd="url(#rag-arrow)">
        <path d="M170 150 L 230 150" />
        <path d="M170 80 L 230 145" />
        <path d="M170 220 L 230 155" />
      </g>
      <defs>
        <marker id="rag-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="#c8412a" />
        </marker>
      </defs>

      {/* query → top-k */}
      <g fill="#0a0a0a" stroke="#c8412a" strokeWidth="1.5">
        <circle cx="260" cy="150" r="22" />
      </g>
      <text x="260" y="153" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#c8412a">top-k</text>

      <g filter="url(#rag-grain)"><rect width="400" height="300" fill="transparent" /></g>
    </svg>
  );
}