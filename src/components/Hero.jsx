import styled from 'styled-components';
import CanvasPlexus from './CanvasPlexus';

const Hero = styled.section`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 0 2rem;
  overflow: hidden;

  @media (max-width: 640px) {
    padding: 0 1rem;
  }
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
    radial-gradient(circle at 72% 45%, rgba(0, 255, 204, 0.05), transparent 45%),
    linear-gradient(90deg, rgba(5,5,5,1) 0%, rgba(5,5,5,0.8) 38%, rgba(5,5,5,0.2) 65%, rgba(5,5,5,0.8) 100%);
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
    align-items: center;
    gap: 1.5rem;
    padding: 8.5rem 0 5.5rem;
  }

  @media (max-width: 420px) {
    padding-top: 8rem;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 4;
  max-width: 720px;
  padding-top: 6rem;
  
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

  @media (max-width: 860px) {
    max-width: 100%;
    padding-top: 0;

    &::before,
    &::after {
      display: none;
    }
  }
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

  @media (max-width: 520px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.68rem;
    letter-spacing: 0.18em;

    &::after { width: 80px; flex: none; }
  }
`;

const Title = styled.h1`
  font-size: clamp(2.45rem, 10vw, 5.4rem);
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
    background: rgba(0, 255, 204, 0.1);
    padding: 0.2em 0.5em;
    border: 1px solid var(--ink-dim);
    box-shadow: inset 0 0 8px rgba(0, 255, 204, 0.2);
  }

  @media (max-width: 420px) {
    font-size: clamp(2.25rem, 12vw, 3rem);
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

  @media (max-width: 520px) {
    font-size: 0.9rem;
    margin-bottom: 1.7rem;
  }
`;

const CTA = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 420px) {
    gap: 0.75rem;
  }
`;

const Btn = styled.a`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.95rem 1.6rem;
  background: rgba(0, 255, 204, 0.1);
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

  @media (max-width: 420px) {
    flex: 1 1 100%;
    padding: 0.85rem 1rem;
    text-align: center;
    font-size: 0.76rem;
  }
`;

/* AVATAR COMPONENTS */
const AvatarStage = styled.div`
  position: relative;
  z-index: 3;
  width: min(34vw, 440px);
  min-width: 320px;
  aspect-ratio: 1;
  pointer-events: auto;
  transform: translateX(5%);
  @media (max-width: 860px) {
    width: min(64vw, 280px);
    min-width: 0;
    margin: 1rem auto 0;
    transform: none;
  }

  @media (max-width: 420px) {
    width: min(76vw, 250px);
  }
`;

const AvatarGlow = styled.div`
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 204, 0.15), transparent 60%);
  filter: blur(24px);
`;

const HUDOutline = styled.div`
  position: absolute;
  inset: -15px;
  border: 1px solid rgba(0, 255, 204, 0.3);
  /* Create the notch on the bottom left for the text box */
  clip-path: polygon(0 0, 100% 0, 100% 100%, 38% 100%, 35% 85%, 0 85%);
  
  /* Corner Brackets */
  &::before, &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid var(--line);
  }
  
  /* Top-left bracket */
  &::before {
    top: -1px; left: -1px;
    border-right: none; border-bottom: none;
  }
  
  /* Top-right bracket */
  &::after {
    top: -1px; right: -1px;
    border-left: none; border-bottom: none;
  }
`;

const HUDBottomRight = styled.div`
  position: absolute;
  bottom: -16px; right: -16px;
  width: 20px;
  height: 20px;
  border: 2px solid var(--line);
  border-left: none; border-top: none;
  z-index: 10;
`;

const HUDTextBox = styled.div`
  position: absolute;
  left: -15px;
  bottom: -15px;
  height: 15%;
  width: 36%;
  border-top: 1px solid rgba(0, 255, 204, 0.3);
  border-right: 1px solid rgba(0, 255, 204, 0.3);
  clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.8rem;
  
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: var(--line);
  background: rgba(0, 255, 204, 0.03);
  
  .bold { font-weight: bold; margin-bottom: 2px; }
  .sub { font-size: 0.6rem; opacity: 0.8; }

  @media (max-width: 420px) {
    width: 45%;
    font-size: 0.52rem;
    padding-left: 0.5rem;

    .sub { font-size: 0.48rem; }
  }
`;

const AvatarFrame = styled.div`
  position: absolute;
  inset: 0;
  border: 1px solid rgba(0, 255, 204, 0.15);
  background: rgba(5, 5, 5, 0.6);
  box-shadow: inset 0 0 20px rgba(0, 255, 204, 0.1);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    mix-blend-mode: hard-light;
    filter: contrast(1.1) brightness(0.9);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 4;
    background:
      linear-gradient(rgba(0, 255, 204, 0.05) 50%, rgba(0, 0, 0, 0.15) 50%);
    background-size: 100% 4px;
    pointer-events: none;
  }
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

  @media (max-width: 640px) {
    bottom: 1.25rem;
    left: 1rem;
    font-size: 0.6rem;
  }
`;

export default function HeroSection() {
  return (
    <Hero id="top">
      <Backdrop>
        <CanvasPlexus />
      </Backdrop>
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
          <HUDOutline />
          <HUDBottomRight />
          <HUDTextBox>
            <span className="bold">// MEMORY_TRACE</span>
            <span className="sub">TARGET: ACQUIRED</span>
          </HUDTextBox>
          <AvatarFrame>
            <img src="/avatar.png" alt="Rei Outline Profile" />
          </AvatarFrame>
        </AvatarStage>
      </Layout>
      <ScrollHint><span className="line" /> SCROLL_DOWN</ScrollHint>
    </Hero>
  );
}
