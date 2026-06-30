import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  padding: 6rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  border-top: 1px solid var(--line);
`;

const Head = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 3rem;
  .num { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--accent); letter-spacing: 0.2em; }
  .label { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-dim); }
  .rule { flex: 1; height: 1px; background: var(--line); }
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.4fr);
  gap: 3rem;
  align-items: start;
  @media (max-width: 820px) { grid-template-columns: 1fr; gap: 2rem; }
`;

const Meta = styled.div`
  .role { font-family: 'Shippori Mincho', serif; font-size: 1.6rem; color: var(--ink); margin: 0 0 0.4rem; }
  .org { color: var(--accent); font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; letter-spacing: 0.1em; margin-bottom: 0.4rem; }
  .when { color: var(--ink-dim); font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; letter-spacing: 0.1em; }
`;

const Stack = styled.div`
  margin-top: 1.5rem;
  border-top: 1px solid var(--line);
  .item {
    padding: 0.9rem 0;
    border-bottom: 1px dashed var(--line);
  }
  .k {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ink-dim);
  }
  .v {
    margin-top: 0.25rem;
    color: var(--ink);
    font-size: 0.95rem;
  }
`;

const Body = styled.div`
  h4 { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink); margin: 0 0 0.8rem; }
  p { color: var(--ink-dim); font-size: 0.95rem; margin: 0 0 1.4rem; }
  ul { list-style: none; padding: 0; margin: 0; }
  li {
    color: var(--ink-dim); font-size: 0.92rem; padding: 0.5rem 0; border-bottom: 1px dashed var(--line);
    display: flex; gap: 0.8rem; align-items: flex-start;
    &::before { content: '→'; color: var(--accent); font-family: monospace; }
    strong { color: var(--ink); font-weight: 500; }
    code { font-family: 'JetBrains Mono', monospace; font-size: 0.82em; color: var(--ink); background: var(--accent-soft); padding: 1px 5px; border-radius: 2px; }
  }
`;

export default function Experience() {
  return (
    <Section id="experience">
      <Head>
        <span className="num">02</span>
        <span className="label">Applied Work</span>
        <span className="rule" />
      </Head>

      <Card>
        <div>
          <Meta>
            <div className="role">Skill-First AI Work</div>
            <div className="org">Retrieval · Extraction · Automation</div>
            <div className="when">Current technical focus</div>
          </Meta>
          <Stack>
            <div className="item"><div className="k">Inputs</div><div className="v">PDFs, scans, diagrams, tables</div></div>
            <div className="item"><div className="k">Core</div><div className="v">RAG, OCR, CV, structured output</div></div>
            <div className="item"><div className="k">Output</div><div className="v">Searchable data, JSON, Mermaid, tools</div></div>
          </Stack>
        </div>

        <Body>
          <h4>Skill proof</h4>
          <p>
            End-to-end <strong>AI pipelines for unstructured information</strong>:
            ingestion, extraction, chunking, indexing, retrieval, small-LLM
            generation and computer-vision graph understanding.
          </p>
          <ul>
            <li><strong>Chunking strategy:</strong> paragraph-, topic- and page-wise splitting tuned to document structure instead of naive fixed-size windows.</li>
            <li><strong>Extraction stack:</strong> <code>PyMuPDF</code>, <code>pdfplumber</code> for native PDFs; OCR for scans via <code>EasyOCR</code>, <code>Tesseract</code>, <code>PaddleOCR</code>.</li>
            <li><strong>Flowchart understanding:</strong> <code>YOLO</code> detects shapes, OpenCV follows arrows to trace the graph, then validate the extracted JSON + Mermaid.</li>
            <li><strong>Tables & layout:</strong> <code>PaddleOCR-VL 1.6</code> for table and full-document extraction.</li>
            <li><strong>Retrieval:</strong> indexing and search over long documents with vector databases, reranking patterns and FAISS-style retrieval.</li>
            <li><strong>Local LLMs:</strong> deploying small models (e.g. <code>Qwen3 4B</code>) locally and on free hosting for agentic day-to-day tasks.</li>
          </ul>
        </Body>
      </Card>
    </Section>
  );
}
