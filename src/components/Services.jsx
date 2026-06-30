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

const Intro = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 3rem;
  margin-bottom: 2.5rem;
  @media (max-width: 760px) { grid-template-columns: 1fr; gap: 1.4rem; }
  h2 {
    font-family: 'Shippori Mincho', serif;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    line-height: 1.1;
    color: var(--ink);
    margin: 0;
  }
  p {
    color: var(--ink-dim);
    font-size: 1rem;
    margin: 0;
    max-width: 62ch;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;

const Service = styled.article`
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.015);
  display: flex;
  flex-direction: column;
  min-height: 230px;
  .kicker {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.9rem;
  }
  h3 {
    font-family: 'Shippori Mincho', serif;
    font-size: 1.35rem;
    color: var(--ink);
    margin: 0 0 0.7rem;
  }
  p {
    color: var(--ink-dim);
    font-size: 0.92rem;
    margin: 0 0 1.2rem;
    flex: 1;
  }
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  span {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.64rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-dim);
    border: 1px solid var(--line);
    padding: 3px 8px;
  }
`;

const services = [
  {
    kicker: '01 / retrieval',
    title: 'RAG & Knowledge Systems',
    desc: 'Design ingestion, chunking, indexing and retrieval flows for long PDFs, scans and internal knowledge bases that need precise answers instead of loose summaries.',
    chips: ['RAG', 'FAISS', 'Azure', 'Evaluation'],
  },
  {
    kicker: '02 / extraction',
    title: 'Document AI Pipelines',
    desc: 'Convert messy documents into clean JSON, tables and searchable fields using PDF parsers, OCR, layout-aware extraction and validation loops.',
    chips: ['PyMuPDF', 'pdfplumber', 'OCR', 'Tables'],
  },
  {
    kicker: '03 / vision',
    title: 'Computer-Vision Automation',
    desc: 'Build detection and graph-tracing workflows for images, diagrams and flowcharts with model training, OpenCV logic and structured exports.',
    chips: ['YOLO', 'OpenCV', 'Graphs', 'Mermaid'],
  },
  {
    kicker: '04 / agents',
    title: 'LLM Tools & Local Models',
    desc: 'Prototype lightweight agents, prompt workflows and small-model deployments that run locally or on modest hosting without oversized infrastructure.',
    chips: ['Qwen', 'LangChain', 'Agents', 'Hugging Face'],
  },
];

export default function Services() {
  return (
    <Section id="services">
      <Head>
        <span className="num">04</span>
        <span className="label">Services</span>
        <span className="rule" />
      </Head>

      <Intro>
        <h2>Practical AI systems, built from the data outward.</h2>
        <p>
          I can help turn unstructured files, diagrams and internal workflows into
          reliable prototypes or production-ready foundations: extraction first,
          retrieval second, polished interfaces when the core signal is working.
        </p>
      </Intro>

      <Grid>
        {services.map((service) => (
          <Service key={service.title}>
            <span className="kicker">{service.kicker}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <Chips>
              {service.chips.map((chip) => <span key={chip}>{chip}</span>)}
            </Chips>
          </Service>
        ))}
      </Grid>
    </Section>
  );
}