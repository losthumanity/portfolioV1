import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  box-sizing: border-box;
`;

const Header = styled.header`
  pointer-events: auto;
  border-bottom: 2px solid #00ffff;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  letter-spacing: 5px;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff;
`;

const Nav = styled.nav`
  gap: 2rem;
  display: flex;
  
  a {
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    &:hover {
      color: #ff00ff;
    }
  }
`;

const ContentPanel = styled.div`
  pointer-events: auto;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #ff00ff;
  border-left: 5px solid #ff00ff;
  padding: 2rem;
  max-width: 500px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.2);
  
  h2 {
    color: #ff00ff;
    border-bottom: 1px solid #333;
    padding-bottom: 0.5rem;
  }
`;

const Footer = styled.footer`
  pointer-events: auto;
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.7;
  color: #00ffff;
`;

export default function UI() {
  return (
    <Container>
      <Header>
        <Title>BLADE FOLIO</Title>
        <Nav>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </Nav>
      </Header>

      <ContentPanel>
        <h2>Status: ONLINE</h2>
        <p>
          Welcome to the portfolio. 
          <br /><br />
          System integration with Assistant "JOE" is stable.
          <br />
          Waiting for neural link...
        </p>
        <button style={{
          background: 'transparent',
          border: '2px solid #00ffff',
          color: '#00ffff',
          padding: '10px 20px',
          marginTop: '1rem',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>
          Initiate Protocol
        </button>
      </ContentPanel>

      <Footer>
        SYSTEM ID: 2049-X // REPLICANT DETECTED // NANO BANANA UI V1.0
      </Footer>
    </Container>
  );
}
