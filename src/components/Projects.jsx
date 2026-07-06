import { useRef } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  padding: 6rem 0; /* Removing side padding for full-bleed horizontal scroll */
  border-top: 2px dashed var(--line);

  @media (max-width: 760px) {
    padding: 5rem 0;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 3rem;
  padding: 0 2rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  
  .num { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--accent); letter-spacing: 0.2em; text-shadow: var(--accent-glow); }
  .label { font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--line); text-shadow: var(--neon-glow); }
  .rule { flex: 1; height: 1px; background: var(--line); box-shadow: var(--neon-glow); }

  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 0.55rem 0.8rem;
    margin-bottom: 2rem;
    padding: 0 1rem;

    .label {
      font-size: 0.72rem;
      letter-spacing: 0.13em;
    }

    .rule { flex-basis: 100%; }
  }
`;

const TrackContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(5, 5, 5, 0.85);
  border: 1px solid var(--ink-dim);
  color: var(--line);
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  padding: 1.5rem 0.5rem;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  
  &.left { left: 0; border-left: none; border-radius: 0 8px 8px 0; }
  &.right { right: 0; border-right: none; border-radius: 8px 0 0 8px; }

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    box-shadow: 0 0 20px rgba(255, 102, 0, 0.2);
    background: rgba(5, 5, 5, 0.95);
  }
  
  @media (max-width: 760px) {
    display: none; /* Hide on mobile where swipe is natural */
  }
`;

const HorizontalTrack = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem 2rem 3rem 2rem;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  
  /* Hide scrollbar for cleaner look, but keep functionality */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(5,5,5,0.8);
    border-top: 1px solid var(--ink-dim);
    border-bottom: 1px solid var(--ink-dim);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--line);
  }

  @media (max-width: 640px) {
    gap: 1rem;
    padding: 0.5rem 1rem 2rem;
    scroll-padding-inline: 1rem;
  }
`;

const Card = styled.article`
  flex: 0 0 85%;
  max-width: 500px;
  min-width: 0;
  scroll-snap-align: center;
  border: 1px solid var(--ink-dim);
  background: rgba(5, 5, 5, 0.7);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  
  /* Geometric background grid for empty space */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: 0;
    pointer-events: none;
  }
  
  &:hover { 
    border-color: var(--line); 
    transform: translateY(-5px); 
    box-shadow: 0 10px 30px rgba(57, 255, 20, 0.15);
  }

  @media (max-width: 640px) {
    flex-basis: calc(100vw - 2rem);
    max-width: calc(100vw - 2rem);
    scroll-snap-align: start;
  }
`;

const Watermark = styled.div`
  position: absolute;
  top: -1rem;
  right: -1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 8rem;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px rgba(0, 255, 255, 0.1);
  z-index: 1;
  pointer-events: none;
  transition: all 0.3s ease;
  
  ${Card}:hover & {
    -webkit-text-stroke: 1px rgba(57, 255, 20, 0.3);
    text-shadow: 0 0 20px rgba(57, 255, 20, 0.2);
  }

  @media (max-width: 520px) {
    font-size: 5.5rem;
    right: -0.6rem;
  }
`;

const Body = styled.div`
  padding: 2.5rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  
  .num { 
    font-family: 'JetBrains Mono', monospace; 
    font-size: 0.85rem; 
    letter-spacing: 0.2em; 
    color: var(--accent);
    margin-bottom: 1.5rem;
    display: inline-block;
    border-bottom: 1px solid var(--accent);
    padding-bottom: 0.3rem;
  }
  
  h3 { 
    font-family: 'JetBrains Mono', monospace; 
    font-size: 1.4rem; 
    color: var(--ink); 
    margin: 0 0 1.2rem; 
    text-shadow: 0 0 8px rgba(224,255,240,0.3); 
    line-height: 1.3;
  }
  
  p { 
    color: var(--ink-dim); 
    font-size: 0.95rem; 
    margin: 0 0 2rem; 
    flex: 1; 
    line-height: 1.6; 
  }
  
  .tags { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 0.6rem; 
  }
  
  .tag { 
    font-family: 'JetBrains Mono', monospace; 
    font-size: 0.7rem; 
    letter-spacing: 0.1em; 
    text-transform: uppercase; 
    color: var(--bg); 
    background: var(--ink-dim); 
    padding: 4px 10px; 
    transition: all 0.2s; 
  }
  
  ${Card}:hover .tag {
    background: var(--line);
    box-shadow: var(--neon-glow);
  }

  @media (max-width: 520px) {
    padding: 1.5rem 1rem;

    .num {
      font-size: 0.72rem;
      letter-spacing: 0.13em;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.08rem;
    }

    p {
      font-size: 0.84rem;
      margin-bottom: 1.5rem;
    }

    .tag {
      font-size: 0.58rem;
      letter-spacing: 0.07em;
    }
  }
`;

const projects = [
  {
    num: 'P01',
    title: 'Camera Source Forensics & Deepfake Detection',
    desc: 'Advanced forensic computer vision system extracting PRNU (Photo-Response Non-Uniformity) sensor noise residuals with wavelet denoising, classifying camera models via a fine-tuned ResNet50 classifier (PyTorch), and checking correlation thresholds to identify video forgery or deepfakes.',
    tags: ['PyTorch', 'ResNet50', 'Wavelets', 'OpenCV', 'Flask'],
  },
  {
    num: 'P02',
    title: 'HealthWave: Medical Simplifier & RAG',
    desc: 'A patient-friendly terminology simplification tool. Fine-tuned a T5-base sequence-to-sequence model (evaluating via ROUGE metrics) combined with a local Llama3 RAG assistant running over FAISS-GPU vector search with session-based memory.',
    tags: ['T5 Transformer', 'Llama3', 'Ollama', 'FAISS-GPU', 'LangChain'],
  },
  {
    num: 'P03',
    title: 'Computer Vision Flowchart Parser',
    desc: 'Image-to-graph pipeline designed during an engineering internship. Employs YOLO model to locate diagram nodes (rectangles, diamonds) and OpenCV line-following/contour heuristics to trace connection paths, exporting structural layouts to clean JSON and Mermaid graphs.',
    tags: ['YOLO', 'OpenCV', 'NetworkX', 'Mermaid.js', 'Python'],
  },
  {
    num: 'P04',
    title: 'Serverless Financial Sentiment MLOps',
    desc: 'Event-driven serverless pipeline executing scheduled financial news sentiment analyses (Lambda + EventBridge). Scores news using a hybrid TextBlob/VADER ensemble and aggregates records in a normalized RDS MySQL database using complex window functions and CTE analytics.',
    tags: ['AWS SAM', 'AWS Lambda', 'RDS MySQL', 'Docker', 'NLTK VADER'],
  },
  {
    num: 'P05',
    title: 'E-Commerce Analytics Microservices',
    desc: 'An enterprise microservices analytics dashboard. Built on Spring Boot 3.2 and Spring Cloud (API Gateway, Discovery Server) with Redis 7 caching layers, React 18, and Docker orchestration, validated via Testcontainers database integration tests.',
    tags: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Redis', 'React'],
  }
];

export default function Projects() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = window.innerWidth * 0.6; // Scroll by a good chunk of the screen
      trackRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <Section id="work">
      <Head>
        <span className="num">05</span>
        <span className="label">PROJECT_ARCHIVE</span>
        <span className="rule" />
      </Head>
      <TrackContainer>
        <ScrollButton className="left" onClick={() => scroll('left')} aria-label="Scroll left">
          [ &lt; ]
        </ScrollButton>
        <HorizontalTrack ref={trackRef}>
          {projects.map(({ num, title, desc, tags }) => (
            <Card key={num}>
              <Watermark aria-hidden="true">{num}</Watermark>
              <Body>
                <span className="num">DATA_FILE // {num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="tags">{tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              </Body>
            </Card>
          ))}
        </HorizontalTrack>
        <ScrollButton className="right" onClick={() => scroll('right')} aria-label="Scroll right">
          [ &gt; ]
        </ScrollButton>
      </TrackContainer>
    </Section>
  );
}
