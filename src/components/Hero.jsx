import styled, { keyframes } from 'styled-components';
import Ramiel from './Ramiel';

const glitch = keyframes`
  0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); }
  20% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
  40% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
  60% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); }
  80% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
  100% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
`;

const Hero = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 0 2rem;
  overflow: hidden;
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.9;
`;

const Fade = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    radial-gradient(circle at 72% 45%, rgba(0, 255, 255, 0.08), transparent 35%),
    linear-gradient(90deg, rgba(5,5,5,1) 0%, rgba(5,5,5,0.8) 38%, rgba(5,5,5,0.2) 65%, rgba(5,5,5,0.7) 100%);
  pointer-events: none;
`;

const Layout = styled.div`
  position: relative;
  z-index: 3;
  min-height: 100vh;
  width: min(100%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(340px, 0.9fr);
  align-items: center;
  gap: 2rem;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    align-items: end;
    padding-bottom: 6rem;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 4;
  max-width: 720px;
  padding-top: 6rem;
  
  /* Corner crosshairs for the text area */
  &::before, &::after {
    content: '+';
    position: absolute;
    color: var(--line);
    font-size: 1.2rem;
    line-height: 1;
    opacity: 0.5;
  }
  &::before { top: 4rem; left: -1.5rem; }
  &::after { bottom: -1.5rem; right: -1.5rem; }
`;

const Eyebrow = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  &::before { content: 'SYS.ID:'; color: var(--ink-dim); letter-spacing: 0.1em; }
  &::after { content: ''; flex: 1; height: 1px; background: repeating-linear-gradient(90deg, var(--accent) 0, var(--accent) 4px, transparent 4px, transparent 8px); max-width: 80px; }
`;

const Title = styled.h1`
  font-size: clamp(2.8rem, 7vw, 5.4rem);
  line-height: 1.02;
  font-weight: 800;
  color: var(--ink);
  margin: 0 0 1.4rem;
  text-shadow: var(--neon-glow);
  .jp { 
    display: inline-block; 
    font-size: 0.38em; 
    letter-spacing: 0.25em; 
    color: var(--ink-dim); 
    font-weight: 500; 
    margin-bottom: 0.6rem; 
    background: rgba(0, 255, 255, 0.1);
    padding: 0.2em 0.5em;
    border: 1px solid var(--ink-dim);
    box-shadow: inset 0 0 8px rgba(0,255,255,0.2);
  }
`;

const Sub = styled.p`
  font-size: 1.05rem;
  max-width: 540px;
  color: var(--ink);
  opacity: 0.85;
  margin: 0 0 2.4rem;
  border-left: 2px solid var(--line);
  padding-left: 1rem;
  strong { color: var(--line); font-weight: bold; text-shadow: var(--neon-glow); }
`;

const CTA = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Btn = styled.a`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.95rem 1.6rem;
  background: rgba(57, 255, 20, 0.1);
  border: 1px solid var(--line);
  color: var(--line);
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '> ';
    opacity: 0.7;
  }

  &:hover { 
    background: var(--line); 
    color: var(--bg); 
    box-shadow: var(--neon-glow);
  }
  
  &.ghost { 
    border-color: var(--ink-dim); 
    color: var(--ink-dim); 
    background: transparent;
    &::before { content: '[ '; opacity: 0.7; }
    &::after { content: ' ]'; opacity: 0.7; }
    &:hover { 
      border-color: var(--accent); 
      color: var(--accent); 
      box-shadow: var(--accent-glow);
      &::before { content: '[ '; color: var(--accent); }
      &::after { content: ' ]'; color: var(--accent); }
    } 
  }
`;

const AvatarStage = styled.div`
  position: relative;
  z-index: 3;
  min-height: clamp(360px, 66vh, 620px);
  display: grid;
  place-items: center;
  pointer-events: auto;
  @media (max-width: 860px) {
    position: absolute;
    inset: 5rem -10vw auto auto;
    width: min(62vw, 300px);
    min-height: 300px;
  }
`;

const AvatarGlow = styled.div`
  position: absolute;
  width: min(34vw, 460px);
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(circle, rgba(0, 255, 255, 0.15), transparent 58%),
    radial-gradient(circle at 65% 35%, rgba(57, 255, 20, 0.15), transparent 42%);
  filter: blur(24px);
  transform: translate(7%, -3%);
`;

const AvatarFrame = styled.div`
  position: relative;
  width: min(34vw, 440px);
  min-width: 320px;
  aspect-ratio: 1;
  border: 1px solid var(--ink-dim);
  background: rgba(5, 5, 5, 0.6);
  box-shadow:
    0 0 30px rgba(0, 255, 255, 0.15),
    inset 0 0 20px rgba(0, 255, 255, 0.2);
  overflow: hidden;
  clip-path: polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%);
  transform: translateX(5%);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 50px rgba(57, 255, 20, 0.3), inset 0 0 30px rgba(57, 255, 20, 0.3);
    border-color: var(--line);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 4;
    background:
      linear-gradient(rgba(0,255,255,0.05) 50%, rgba(0,0,0,0.15) 50%),
      radial-gradient(circle at 54% 40%, transparent 0 38%, rgba(5,5,5,0.4) 74%);
    background-size: 100% 4px, 100% 100%;
    mix-blend-mode: screen;
    pointer-events: none;
  }

  /* Glitch effect layer */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 5;
    background: rgba(0, 255, 255, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
  }
  
  &:hover::after {
    opacity: 1;
    animation: ${glitch} 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    filter: saturate(1.2) contrast(1.2) brightness(0.9) hue-rotate(15deg);
    mix-blend-mode: hard-light;
  }

  @media (max-width: 860px) {
    width: 100%;
    min-width: 0;
    transform: none;
  }
`;

const AvatarCaption = styled.div`
  position: absolute;
  right: min(5vw, 3rem);
  bottom: 8%;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-dim);
  border-top: 1px solid var(--ink-dim);
  padding-top: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
  
  &::after {
    content: 'TARGET: ACQUIRED';
    color: var(--line);
    font-size: 0.55rem;
  }
  
  @media (max-width: 860px) { display: none; }
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 2;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  .line { width: 1px; height: 30px; background: var(--accent); animation: drop 2s infinite; }
  @keyframes drop { 0% { transform: scaleY(0.3); transform-origin: top; } 50% { transform: scaleY(1); } 100% { transform: scaleY(0.3); transform-origin: bottom; } }
`;

export default function HeroSection() {
  return (
    <Hero id="top">
      <Backdrop><Ramiel /></Backdrop>
      <Fade />
      <Layout>
        <Inner>
          <Eyebrow>AI Engineer · RAG · Computer Vision</Eyebrow>
          <Title>
            <span className="jp">人工知能エンジニア</span><br />
            Pranav<br />Patil.
          </Title>
          <Sub>
            Building <strong>RAG systems</strong>, <strong>document understanding</strong> and
            <strong> computer-vision pipelines</strong> that turn messy real-world files into
            structured, searchable knowledge with reliable extraction and retrieval.
          </Sub>
          <CTA>
            <Btn href="#work">VIEW_WORK</Btn>
            <Btn className="ghost" href="#services">SERVICES</Btn>
          </CTA>
        </Inner>
        <AvatarStage>
          <AvatarGlow />
          <AvatarFrame>
            <img src="/assets/rei-avatar.jpg" alt="Rei" />
          </AvatarFrame>
          <AvatarCaption>SIGNAL_AVATAR // NEON_MEMORY</AvatarCaption>
        </AvatarStage>
      </Layout>
      <ScrollHint><span className="line" /> SCROLL_DOWN</ScrollHint>
    </Hero>
  );
}
