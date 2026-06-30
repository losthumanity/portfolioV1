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

const Groups = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0;
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
`;

const Group = styled.div`
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 1.6rem 1.4rem;
  h4 { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin: 0 0 1rem; }
  ul { list-style: none; padding: 0; margin: 0; }
  li { color: var(--ink); font-size: 0.9rem; padding: 0.35rem 0; font-family: 'JetBrains Mono', monospace; border-bottom: 1px dashed transparent; transition: border-color 0.2s; &:hover { border-color: var(--accent); color: var(--accent); } }
`;

export default function Skills() {
  const groups = [
    { title: 'Data & Cloud', items: ['Azure', 'Python · Analytics', 'Power BI', 'EDA', 'FAISS'] },
    { title: 'RAG / Retrieval', items: ['Long-doc indexing', 'Para / topic / page chunking', 'Vector search', 'T5 fine-tuning', 'LangChain'] },
    { title: 'Extraction', items: ['PyMuPDF', 'pdfplumber', 'EasyOCR', 'Tesseract', 'PaddleOCR-VL 1.6'] },
    { title: 'Computer Vision', items: ['YOLO', 'OpenCV graph tracing', 'JSON / Mermaid export', 'PyTorch', 'ResNet50'] },
    { title: 'LLMs / Agents', items: ['Qwen3 4B · local', 'Small-model hosting', 'Agentic workflows', 'Prompt design', 'Hugging Face'] },
    { title: 'Engineering', items: ['Docker', 'Git', 'Django / Flask', 'PostgreSQL', 'MongoDB'] },
  ];

  return (
    <Section id="skills">
      <Head>
        <span className="num">03</span>
        <span className="label">Skills</span>
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