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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;

const Card = styled.article`
  border: 1px solid var(--line);
  background: var(--bg-soft);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  transition: border-color 0.25s ease, transform 0.25s ease;
  &:hover { border-color: var(--accent); transform: translateY(-3px); }
`;

const Body = styled.div`
  padding: 1.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  .num { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; letter-spacing: 0.2em; color: var(--accent); }
  h3 { font-family: 'Shippori Mincho', serif; font-size: 1.45rem; color: var(--ink); margin: 0.7rem 0 0.9rem; }
  p { color: var(--ink-dim); font-size: 0.95rem; margin: 0 0 1.5rem; flex: 1; }
  .tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .tag { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-dim); border: 1px solid var(--line); padding: 3px 8px; }
`;

const projects = [
  {
    num: 'P01',
    title: 'Flowchart → Digital Graph',
    desc: 'YOLO detects shapes in flowchart images; OpenCV follows the arrows to trace and validate the structure, exporting clean JSON and Mermaid.',
    tags: ['YOLO', 'OpenCV', 'JSON', 'Mermaid'],
  },
  {
    num: 'P02',
    title: 'Long-Document RAG Pipeline',
    desc: 'Structure-aware chunking (paragraph / topic / page) plus PyMuPDF + pdfplumber extraction and FAISS indexing for retrieval over long, scanned documents.',
    tags: ['RAG', 'FAISS', 'Chunking', 'Azure'],
  },
];

export default function Projects() {
  return (
    <Section id="work">
      <Head>
        <span className="num">05</span>
        <span className="label">Selected Work</span>
        <span className="rule" />
      </Head>
      <Grid>
        {projects.map(({ num, title, desc, tags }) => (
          <Card key={num}>
            <Body>
              <span className="num">{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="tags">{tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            </Body>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
