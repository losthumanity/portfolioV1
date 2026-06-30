import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Mark = styled.a`
  font-family: 'Shippori Mincho', serif;
  font-weight: 800;
  font-size: 1.05rem;
  letter-spacing: 0.02em;
  text-transform: none;
  color: var(--ink);
  span { color: var(--accent); }
`;

const Links = styled.nav`
  display: flex;
  gap: 2rem;
  a {
    color: var(--ink-dim);
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0; bottom: -6px;
      width: 0; height: 1px;
      background: var(--accent);
      transition: width 0.3s ease;
    }
    &:hover { color: var(--ink); &::after { width: 100%; } }
  }
  @media (max-width: 640px) { display: none; }
`;

const Time = styled.span`
  color: var(--ink-dim);
  @media (max-width: 640px) { display: none; }
`;

export default function Navbar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      setTime(`${hh}:${mm}`);
    };
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <Bar>
      <Mark href="#top">pranav<span>.</span>patil</Mark>
      <Links>
        <a href="#about">about</a>
        <a href="#skills">skills</a>
        <a href="#services">services</a>
        <a href="#work">work</a>
        <a href="#contact">contact</a>
      </Links>
      <Time>{time || '00:00'} · same time</Time>
    </Bar>
  );
}