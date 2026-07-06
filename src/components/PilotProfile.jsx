import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  padding: 8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  border-top: 2px dashed var(--line);

  @media (max-width: 760px) {
    padding: 5rem 1rem;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 3rem;
  .num { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--accent); letter-spacing: 0.2em; text-shadow: var(--accent-glow); }
  .label { font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--line); text-shadow: var(--neon-glow); }
  .rule { flex: 1; height: 1px; background: var(--line); box-shadow: var(--neon-glow); }

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0.55rem 0.8rem;
    margin-bottom: 2rem;

    .label {
      flex: 1 1 calc(100% - 4rem);
      font-size: 0.72rem;
      line-height: 1.45;
      letter-spacing: 0.13em;
    }

    .rule { flex-basis: 100%; }
  }
`;

const HUDGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: 2rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div`
  background: rgba(5, 5, 5, 0.7);
  border: 1px solid var(--ink-dim);
  border-top: 3px solid var(--line);
  padding: 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(0,255,255,0.02) 50%, transparent 50%);
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 640px) {
    padding: 1.25rem;
  }
`;

const PanelHeader = styled.h3`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 102, 0, 0.3);
  padding-bottom: 0.5rem;
  
  &::before { content: 'SYS.DATA // '; color: var(--ink-dim); }

  @media (max-width: 520px) {
    display: block;
    font-size: 0.72rem;
    line-height: 1.45;
    letter-spacing: 0.13em;
  }
`;

/* BIO PANEL STYLES */
const Lead = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--ink);
  margin: 0 0 1.5rem;
  text-shadow: 0 0 8px rgba(224, 255, 240, 0.2);
  
  em { color: var(--accent); font-style: normal; text-shadow: var(--accent-glow); }

  @media (max-width: 520px) {
    font-size: 1rem;
  }
`;

const Body = styled.p`
  color: var(--ink-dim);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0 0 1.2rem;
  strong { color: var(--line); font-weight: normal; text-shadow: var(--neon-glow); }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  border-top: 1px dashed var(--ink-dim);
  padding-top: 1.5rem;
  
  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .n { font-family: 'JetBrains Mono', monospace; font-size: 1.5rem; color: var(--ink); font-weight: bold; }
  .n span { color: var(--accent); font-size: 1rem; }
  .l { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-dim); }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;

    .stat {
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 1px dotted rgba(0, 255, 255, 0.2);
      padding-bottom: 0.5rem;
    }
  }
`;

/* EXPERIENCE PANEL STYLES */
const LogEntry = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px dashed rgba(0, 255, 255, 0.2);
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const LogMeta = styled.div`
  margin-bottom: 1.2rem;
  .role { font-family: 'JetBrains Mono', monospace; font-size: 1.2rem; color: var(--ink); margin: 0 0 0.4rem; text-shadow: 0 0 5px rgba(224,255,240,0.3); }
  .org { color: var(--accent); font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; letter-spacing: 0.1em; margin-bottom: 0.4rem; }
  .when { color: var(--ink-dim); font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; letter-spacing: 0.1em; }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  background: rgba(0,0,0,0.4);
  padding: 1rem;
  border-left: 2px solid var(--accent);
  
  .item { display: flex; align-items: baseline; gap: 1rem; }
  .k { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-dim); min-width: 60px; }
  .v { color: var(--line); font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; }

  @media (max-width: 520px) {
    .item {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.3rem;
    }
  }
`;

const LogDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    color: var(--ink-dim); 
    font-size: 0.85rem; 
    font-family: 'JetBrains Mono', monospace;
    padding: 0.6rem 0; 
    display: flex; 
    gap: 0.8rem; 
    align-items: flex-start;
    line-height: 1.5;
    
    &::before { content: '>'; color: var(--line); font-weight: bold; }
    strong { color: var(--ink); font-weight: normal; }
    code { font-family: 'JetBrains Mono', monospace; font-size: 0.82em; color: var(--bg); background: var(--line); padding: 2px 6px; }
  }
`;

export default function PilotProfile() {
  return (
    <Section id="about">
      <Head>
        <span className="num">01_02</span>
        <span className="label">PILOT_PROFILE // SYSTEM_OVERVIEW</span>
        <span className="rule" />
      </Head>

      <HUDGrid>
        {/* PANEL A: BIO DATA */}
        <Panel>
          <PanelHeader>PILOT_BIO_DATA</PanelHeader>
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
          
          <StatsGrid>
            <div className="stat"><div className="n">RAG</div><div className="l">Retrieval</div></div>
            <div className="stat"><div className="n">IEEE</div><div className="l">ESCI-2025</div></div>
            <div className="stat"><div className="n">95<span>%</span></div><div className="l">Precision</div></div>
          </StatsGrid>
        </Panel>

        {/* PANEL B: COMBAT/WORK LOGS */}
        <Panel>
          <PanelHeader>MISSION_LOGS // EXP</PanelHeader>
          
          <LogEntry>
            <LogMeta>
              <div className="role">Skill-First AI Work</div>
              <div className="org">Retrieval · Extraction · Automation</div>
              <div className="when">CURRENT_FOCUS</div>
            </LogMeta>
            
            <Stack>
              <div className="item"><div className="k">INPUTS</div><div className="v">PDFs, scans, diagrams, tables</div></div>
              <div className="item"><div className="k">CORE</div><div className="v">RAG, OCR, CV, structured output</div></div>
              <div className="item"><div className="k">OUTPUT</div><div className="v">Searchable data, JSON, Mermaid</div></div>
            </Stack>
            
            <LogDetails>
              <li><strong>Chunking strategy:</strong> paragraph-, topic- and page-wise splitting tuned to document structure.</li>
              <li><strong>Extraction stack:</strong> <code>PyMuPDF</code>, <code>pdfplumber</code>; OCR via <code>EasyOCR</code>, <code>PaddleOCR</code>.</li>
              <li><strong>Flowchart logic:</strong> <code>YOLO</code> detects shapes, OpenCV traces the graph, exporting JSON + Mermaid.</li>
              <li><strong>Retrieval:</strong> vector databases, reranking patterns and FAISS-style retrieval.</li>
              <li><strong>Local LLMs:</strong> deploying small models (<code>Qwen3 4B</code>) locally for agentic day-to-day tasks.</li>
            </LogDetails>
          </LogEntry>
          
        </Panel>
      </HUDGrid>
    </Section>
  );
}
