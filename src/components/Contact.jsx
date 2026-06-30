import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  padding: 7rem 2rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
  border-top: 1px solid var(--line);
`;

const Big = styled.h2`
  font-family: 'Shippori Mincho', serif;
  font-size: clamp(2rem, 4.8vw, 3.8rem);
  line-height: 1.08;
  color: var(--ink);
  margin: 0 0 2.4rem;
  max-width: 18ch;
  a {
    color: var(--accent);
    border-bottom: 2px solid var(--accent);
    white-space: nowrap;
  }
  .small { display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.18em; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-dim); font-weight: 500; margin-bottom: 1rem; }
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
  max-width: 860px;
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`;

const Link = styled.a`
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 1.4rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
  transition: background 0.2s ease;
  &:hover { background: var(--accent-soft); }
  .label { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-dim); }
  .value {
    font-family: 'Shippori Mincho', serif;
    font-size: clamp(0.95rem, 1.8vw, 1.08rem);
    color: var(--ink);
    overflow-wrap: anywhere;
    word-break: break-word;
    line-height: 1.25;
  }
`;

const Footer = styled.footer`
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink-dim);
  .mark { color: var(--accent); }
`;

export default function Contact() {
  return (
    <Section id="contact">
      <Big>
        <span className="small">Available for practical AI builds</span>
        Have a project? <a href="mailto:pranavpatil7896@gmail.com">Say hello →</a>
      </Big>

      <Links>
        <Link href="mailto:pranavpatil7896@gmail.com">
          <span className="label">Email</span>
          <span className="value">pranavpatil7896@gmail.com</span>
        </Link>
        <Link href="https://github.com/losthumanity" target="_blank" rel="noreferrer">
          <span className="label">GitHub</span>
          <span className="value">losthumanity</span>
        </Link>
        <Link href="https://www.linkedin.com/in/pranavpatil6/" target="_blank" rel="noreferrer">
          <span className="label">LinkedIn</span>
          <span className="value">in/pranavpatil6</span>
        </Link>
        <Link href="https://huggingface.co/rukia07" target="_blank" rel="noreferrer">
          <span className="label">Hugging Face</span>
          <span className="value">rukia07</span>
        </Link>
        <Link href="https://leetcode.com/u/pranavpatil7896/" target="_blank" rel="noreferrer">
          <span className="label">LeetCode</span>
          <span className="value">pranavpatil7896</span>
        </Link>
      </Links>

      <Footer>
        <span>© {new Date().getFullYear()} Pranav Patil <span className="mark">·</span> losthumanity</span>
        <span>Built with React + three.js</span>
      </Footer>
    </Section>
  );
}
