import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 2rem;
  background: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 2px solid var(--line);
  box-shadow: 0 4px 20px rgba(57, 255, 20, 0.15);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0.75rem 1rem;
    padding: 0.85rem 1rem 0.7rem;
    font-size: 0.68rem;
  }
`;

const Mark = styled.a`
  font-weight: 800;
  font-size: 1.05rem;
  letter-spacing: 0.1em;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background: var(--accent);
    border-radius: 50%;
    animation: ${pulse} 2s infinite;
    box-shadow: var(--accent-glow);
  }

  @media (max-width: 420px) {
    font-size: 0.85rem;
    gap: 0.55rem;

    &::before {
      width: 9px;
      height: 9px;
    }
  }
`;

const Links = styled.nav`
  display: flex;
  gap: 2rem;
  a {
    color: var(--ink-dim);
    position: relative;
    padding: 0.3rem 0;
    
    &::before { content: '['; opacity: 0; color: var(--line); margin-right: 4px; transition: 0.2s; }
    &::after { content: ']'; opacity: 0; color: var(--line); margin-left: 4px; transition: 0.2s; }
    
    &:hover { 
      color: var(--line);
      text-shadow: var(--neon-glow);
      &::before, &::after { opacity: 1; }
    }
  }

  @media (max-width: 768px) {
    order: 3;
    width: 100%;
    gap: 0.35rem;
    overflow-x: auto;
    padding: 0.1rem 0 0.25rem;
    scrollbar-width: none;

    &::-webkit-scrollbar { display: none; }

    a {
      flex: 1 0 auto;
      min-width: fit-content;
      padding: 0.35rem 0.45rem;
      text-align: center;
      border: 1px solid rgba(0, 255, 204, 0.28);
      background: rgba(0, 255, 204, 0.04);
    }
  }
`;

const StatusData = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--ink-dim);
  
  .sys { color: var(--accent); font-weight: bold; }
  
  @media (max-width: 900px) {
    gap: 0.8rem;
  }

  @media (max-width: 640px) {
    margin-left: auto;

    span:not(.sys) { display: none; }
  }
`;

export default function Navbar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      const ss = String(d.getSeconds()).padStart(2, '0');
      setTime(`${hh}:${mm}:${ss}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Bar>
      <Mark href="#top">SYS.PORTFOLIO</Mark>
      <Links>
        <a href="#about">about</a>
        <a href="#skills">skills</a>
        <a href="#services">services</a>
        <a href="#work">work</a>
        <a href="#contact">contact</a>
      </Links>
      <StatusData>
        <span className="sys">ONLINE</span>
        <span>T-{time || '00:00:00'}</span>
        <span>VER.3.0</span>
      </StatusData>
    </Bar>
  );
}
