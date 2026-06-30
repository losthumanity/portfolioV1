import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  padding: 8rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
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
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 3rem;
  align-items: start;
  @media (max-width: 760px) { grid-template-columns: 1fr; gap: 2.5rem; }
`;

const Lead = styled.p`
  font-family: 'Shippori Mincho', serif;
  font-size: clamp(1.3rem, 2.4vw, 1.9rem);
  line-height: 1.45;
  color: var(--ink);
  font-weight: 500;
  margin: 0 0 1.8rem;
  em { color: var(--accent); font-style: normal; }
`;

const Body = styled.p`
  color: var(--ink-dim);
  font-size: 1rem;
  margin: 0 0 1.2rem;
  max-width: 60ch;
`;

const FocusPanel = styled.aside`
  border: 1px solid var(--line);
  padding: 1.4rem;
  background: var(--bg-soft);
  h3 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin: 0 0 1rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    color: var(--ink-dim);
    font-size: 0.92rem;
    padding: 0.8rem 0;
    border-top: 1px dashed var(--line);
  }
  strong {
    color: var(--ink);
    font-weight: 500;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  border-top: 1px solid var(--line);
  padding-top: 2rem;
  .stat .n { font-family: 'Shippori Mincho', serif; font-size: 2rem; color: var(--ink); }
  .stat .n span { color: var(--accent); }
  .stat .l { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink-dim); margin-top: 0.3rem; }
  @media (max-width: 560px) { grid-template-columns: 1fr 1fr; }
`;

export default function About() {
  return (
    <Section id="about">
      <Head>
        <span className="num">01</span>
        <span className="label">About</span>
        <span className="rule" />
      </Head>

      <Grid>
        <div>
          <Lead>
            I build practical AI systems around <em>retrieval, extraction and
            computer vision</em>, with a bias for tools that are useful outside
            a demo.
          </Lead>
          <Body>
            I'm Pranav, an AI engineer focused on <strong>document intelligence,
            retrieval systems and computer vision</strong>. I like the parts
            where prototypes become dependable: parsing awkward files, designing
            chunking strategies, evaluating retrieval quality and turning model
            output into clean structures.
          </Body>
          <Body>
            My project base spans RAG, OCR, YOLO/OpenCV workflows, local LLMs,
            PRNU-based camera-source identification and iris recognition. The
            common thread is simple: make messy inputs searchable, explainable
            and easier to automate.
          </Body>
        </div>

        <FocusPanel>
          <h3>What I am sharp at</h3>
          <ul>
            <li><strong>Retrieval:</strong> chunking, vector search, grounding and answer quality checks.</li>
            <li><strong>Extraction:</strong> PDFs, OCR, tables, layouts and document-to-JSON pipelines.</li>
            <li><strong>Vision:</strong> detection, graph tracing and structured exports from images.</li>
            <li><strong>LLM tooling:</strong> small local models, agent workflows and useful prototypes.</li>
          </ul>
        </FocusPanel>
      </Grid>

      <Stats>
        <div className="stat"><div className="n">RAG</div><div className="l">Long-doc retrieval</div></div>
        <div className="stat"><div className="n">IEEE</div><div className="l">Published · ESCI-2025</div></div>
        <div className="stat"><div className="n">95<span>%</span></div><div className="l">PRNU precision</div></div>
      </Stats>
    </Section>
  );
}
