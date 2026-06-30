import styled from 'styled-components';
import Metaballs from './Metaballs';

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
  opacity: 0.8;
`;

const Fade = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    radial-gradient(circle at 72% 45%, rgba(200, 65, 42, 0.16), transparent 31%),
    linear-gradient(90deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.84) 38%, rgba(10,10,10,0.28) 62%, rgba(10,10,10,0.74) 100%);
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
  &::before { content: ''; width: 40px; height: 1px; background: var(--accent); }
`;

const Title = styled.h1`
  font-size: clamp(2.8rem, 7vw, 5.4rem);
  line-height: 1.02;
  font-weight: 800;
  color: var(--ink);
  margin: 0 0 1.4rem;
  .jp { display: block; font-size: 0.42em; letter-spacing: 0.18em; color: var(--ink-dim); font-weight: 500; margin-bottom: 0.6rem; }
`;

const Sub = styled.p`
  font-size: 1.05rem;
  max-width: 540px;
  color: var(--ink-dim);
  margin: 0 0 2.4rem;
  strong { color: var(--ink); font-weight: 500; }
`;

const CTA = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Btn = styled.a`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.95rem 1.6rem;
  border: 1px solid var(--ink);
  color: var(--ink);
  transition: all 0.25s ease;
  &:hover { background: var(--ink); color: var(--bg); border-color: var(--ink); }
  &.ghost { border-color: var(--line); color: var(--ink-dim); &:hover { border-color: var(--accent); color: var(--accent); background: transparent; } }
`;

const AvatarStage = styled.div`
  position: relative;
  z-index: 3;
  min-height: clamp(360px, 66vh, 620px);
  display: grid;
  place-items: center;
  pointer-events: none;
  @media (max-width: 860px) {
    position: absolute;
    inset: 5rem -10vw auto auto;
    width: min(62vw, 300px);
    min-height: 300px;
    opacity: 0.34;
  }
`;

const AvatarGlow = styled.div`
  position: absolute;
  width: min(34vw, 460px);
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(circle, rgba(0, 230, 255, 0.18), transparent 58%),
    radial-gradient(circle at 65% 35%, rgba(255, 31, 184, 0.18), transparent 42%);
  filter: blur(18px);
  transform: translate(7%, -3%);
`;

const AvatarFrame = styled.div`
  position: relative;
  width: min(34vw, 440px);
  min-width: 320px;
  aspect-ratio: 1;
  border: 1px solid rgba(244, 241, 234, 0.12);
  background: rgba(10, 10, 10, 0.45);
  box-shadow:
    0 0 70px rgba(0, 230, 255, 0.11),
    inset 0 0 45px rgba(200, 65, 42, 0.11);
  overflow: hidden;
  clip-path: polygon(7% 0, 100% 0, 100% 86%, 88% 100%, 0 100%, 0 9%);
  transform: translateX(5%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &::before {
    z-index: 2;
    background:
      linear-gradient(rgba(255,255,255,0.045) 50%, rgba(0,0,0,0.12) 50%),
      radial-gradient(circle at 54% 40%, transparent 0 38%, rgba(10,10,10,0.32) 74%);
    background-size: 100% 4px, 100% 100%;
    mix-blend-mode: screen;
  }

  &::after {
    z-index: 3;
    border: 1px solid rgba(200, 65, 42, 0.5);
    clip-path: polygon(7% 0, 100% 0, 100% 86%, 88% 100%, 0 100%, 0 9%);
    opacity: 0.55;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    filter: saturate(1.08) contrast(1.08) brightness(0.86);
    mix-blend-mode: lighten;
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
  bottom: 10%;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-dim);
  border-top: 1px solid var(--line);
  padding-top: 0.7rem;
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
  color: var(--ink-dim);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  .line { width: 1px; height: 30px; background: var(--ink-dim); animation: drop 2s infinite; }
  @keyframes drop { 0% { transform: scaleY(0.3); transform-origin: top; } 50% { transform: scaleY(1); } 100% { transform: scaleY(0.3); transform-origin: bottom; } }
`;

export default function HeroSection() {
  return (
    <Hero id="top">
      <Backdrop><Metaballs /></Backdrop>
      <Fade />
      <Layout>
        <Inner>
          <Eyebrow>AI Engineer · RAG · Computer Vision</Eyebrow>
          <Title>
            <span className="jp">人工知能エンジニア</span>
            Pranav<br />Patil.
          </Title>
          <Sub>
            Building <strong>RAG systems</strong>, <strong>document understanding</strong> and
            <strong> computer-vision pipelines</strong> that turn messy real-world files into
            structured, searchable knowledge with reliable extraction and retrieval.
          </Sub>
          <CTA>
            <Btn href="#work">View Work</Btn>
            <Btn className="ghost" href="#services">Services</Btn>
          </CTA>
        </Inner>
        <AvatarStage aria-hidden="true">
          <AvatarGlow />
          <AvatarFrame>
            <img src="/assets/rei-avatar.jpg" alt="" />
          </AvatarFrame>
          <AvatarCaption>signal avatar · neon memory</AvatarCaption>
        </AvatarStage>
      </Layout>
      <ScrollHint><span className="line" /> scroll</ScrollHint>
    </Hero>
  );
}
