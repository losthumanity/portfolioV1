import styled, { keyframes } from 'styled-components';

const Section = styled.section`
  position: relative;
  padding: 7rem 2rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
  border-top: 2px dashed var(--line);
`;

const Big = styled.h2`
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(2rem, 4.8vw, 3.8rem);
  line-height: 1.1;
  color: var(--ink);
  margin: 0 0 3rem;
  max-width: 20ch;
  text-shadow: 0 0 10px rgba(224, 255, 240, 0.3);
  
  a {
    color: var(--accent);
    text-shadow: var(--accent-glow);
    white-space: nowrap;
    border-bottom: 2px solid var(--accent);
    padding-bottom: 0.2rem;
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(255, 102, 0, 0.15);
    }
  }
  .small { 
    display: flex; 
    align-items: center;
    gap: 1rem;
    font-family: 'JetBrains Mono', monospace; 
    font-size: 0.18em; 
    letter-spacing: 0.3em; 
    text-transform: uppercase; 
    color: var(--line); 
    font-weight: bold; 
    margin-bottom: 1.5rem; 
    
    &::before {
      content: 'REC';
      color: var(--accent);
      animation: blink 1s infinite;
    }
  }
  
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 900px;
`;

const Link = styled.a`
  flex: 1 1 250px;
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid var(--ink-dim);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0; top: 0;
    width: 4px;
    height: 100%;
    background: var(--ink-dim);
    transition: background 0.3s ease;
  }

  &:hover { 
    background: rgba(0, 255, 255, 0.15); 
    border-color: var(--line);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
    
    &::before { background: var(--line); box-shadow: var(--neon-glow); }
    .label { color: var(--line); }
    .value { color: var(--bg); background: var(--line); text-shadow: none; padding: 0 0.5rem; }
  }
  
  .label { 
    font-family: 'JetBrains Mono', monospace; 
    font-size: 0.7rem; 
    letter-spacing: 0.2em; 
    text-transform: uppercase; 
    color: var(--ink-dim); 
    font-weight: bold;
    transition: color 0.3s;
  }
  .value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    color: var(--ink);
    overflow-wrap: anywhere;
    word-break: break-word;
    font-weight: bold;
    transition: all 0.3s;
    align-self: flex-start;
  }
`;

const Footer = styled.footer`
  margin-top: 6rem;
  padding-top: 2rem;
  border-top: 1px dashed var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-dim);
  
  .mark { color: var(--line); text-shadow: var(--neon-glow); }
`;

export default function Contact() {
  return (
    <Section id="contact">
      <Big>
        <span className="small">COMM_LINK // ESTABLISHED</span>
        Initiate project transmission? <a href="mailto:pranavpatil.d3v@gmail.com">SAY_HELLO_</a>
      </Big>

      <Links>
        <Link href="mailto:pranavpatil.d3v@gmail.com">
          <span className="label">SECURE_MAIL</span>
          <span className="value">pranavpatil.d3v@gmail.com</span>
        </Link>
        <Link href="https://github.com/losthumanity" target="_blank" rel="noreferrer">
          <span className="label">REPO_UPLINK</span>
          <span className="value">github/losthumanity</span>
        </Link>
        <Link href="https://www.linkedin.com/in/pranavpatil6/" target="_blank" rel="noreferrer">
          <span className="label">NEURAL_NET</span>
          <span className="value">in/pranavpatil6</span>
        </Link>
        <Link href="https://huggingface.co/rukia07" target="_blank" rel="noreferrer">
          <span className="label">MODEL_HUB</span>
          <span className="value">hf/rukia07</span>
        </Link>
      </Links>

      <Footer>
        <span>SYS.COPYRIGHT © {new Date().getFullYear()} PRANAV_PATIL <span className="mark">·</span> LOSTHUMANITY</span>
        <span>ENGINE: REACT + THREE.JS</span>
      </Footer>
    </Section>
  );
}
