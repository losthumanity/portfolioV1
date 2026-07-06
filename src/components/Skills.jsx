import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  padding: 6rem 2rem;
  max-width: 1100px;
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
    flex-wrap: wrap;
    gap: 0.55rem 0.8rem;
    margin-bottom: 2rem;

    .label {
      font-size: 0.72rem;
      letter-spacing: 0.13em;
    }

    .rule { flex-basis: 100%; }
  }
`;

const Groups = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 2rem;

  @media (max-width: 640px) {
    gap: 1rem;
  }
`;

const Group = styled.div`
  background: rgba(5, 5, 5, 0.6);
  border: 1px solid var(--ink-dim);
  border-top: 3px solid var(--line);
  padding: 1.6rem 1.4rem;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(rgba(0,255,255,0.05) 50%, rgba(0,0,0,0) 50%);
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 1;
  }
  
  &:hover {
    border-color: var(--line);
    box-shadow: 0 0 15px rgba(57, 255, 20, 0.15), inset 0 0 20px rgba(57, 255, 20, 0.05);
  }

  h4 { 
    font-family: 'JetBrains Mono', monospace; 
    font-size: 0.8rem; 
    letter-spacing: 0.1em; 
    text-transform: uppercase; 
    color: var(--accent); 
    margin: 0 0 1.5rem;
    display: flex;
    justify-content: space-between;
    
    &::before { content: 'SYS.MOD // '; color: var(--ink-dim); }
  }
  ul { list-style: none; padding: 0; margin: 0; position: relative; z-index: 2; }
  li { 
    color: var(--ink); 
    font-size: 0.85rem; 
    padding: 0.4rem 0; 
    font-family: 'JetBrains Mono', monospace; 
    display: flex;
    align-items: center;
    gap: 0.8rem;
    border-bottom: 1px dotted rgba(0, 255, 255, 0.2);
    
    &::before {
      content: '[OK]';
      color: var(--line);
      font-size: 0.75rem;
    }
    
    &:hover { color: var(--accent); &::before { color: var(--accent); content: '[>>]'; } } 
  }

  @media (max-width: 520px) {
    padding: 1.25rem 1rem;

    h4 {
      display: block;
      font-size: 0.72rem;
      line-height: 1.45;
    }

    li {
      align-items: flex-start;
      font-size: 0.8rem;
    }
  }
`;

export default function Skills() {
  const groups = [
    { title: 'CORE_AI_DL', items: ['PyTorch · CNNs', 'ResNet50 Fine-Tuning', 'T5 (Seq2Seq)', 'ROUGE Evaluation', 'PyWavelets'] },
    { title: 'RAG_RETRIEVAL', items: ['FAISS-GPU', 'Ollama / Llama3', 'Vector Search', 'LangChain', 'Prompt Design'] },
    { title: 'VISION_SYS', items: ['YOLO Shape Detection', 'OpenCV Graph Tracing', 'Contours & Filtering', 'Digital Forensics (PRNU)'] },
    { title: 'MLOPS_CLOUD', items: ['AWS SAM / CloudFormation', 'AWS Lambda & RDS', 'Docker / Compose', 'Event-Driven Pipeline', 'GitHub Actions'] },
    { title: 'ENTERPRISE_ENG', items: ['Java 17 · Spring Boot', 'Spring Cloud Gateway', 'Eureka Service Registry', 'Redis 7 Caching', 'PostgreSQL / MySQL'] },
    { title: 'DATA_CLOUD', items: ['Python · Pandas', 'Power BI', 'EDA & Feature Eng', 'MongoDB', 'Testcontainers'] }
  ];

  return (
    <Section id="skills">
      <Head>
        <span className="num">03</span>
        <span className="label">SKILL_MODULES</span>
        <span className="rule" />
      </Head>
      <Groups>
        {groups.map((g) => (
          <Group key={g.title}>
            <h4>{g.title}</h4>
            <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </Group>
        ))}
      </Groups>
    </Section>
  );
}
