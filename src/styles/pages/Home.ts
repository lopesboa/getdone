import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 4em;
    color: ${props => props.theme.text.title};
    margin-top: 3.2rem;
  }

  p {
    margin-top: 24px;
    font-size: 1.4em;
    line-height: 3rem;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.text.tagline};
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.9em;
  }
`;
