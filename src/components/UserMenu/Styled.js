import styled from 'styled-components'

export const StyledUserAuth = styled.div`
  .userMenuBtn {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;

    margin-right: 12px;
    padding: 0 0 0 2px;

    background-color: #474759;
    color: ${(props) => props.theme.colors.secondary};
    text-align: center;
    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.48px;
    text-transform: uppercase;
  }
  .userName {
    padding: 8px 12px 8px 0;
    margin-right: 15px;
    height: 100%;
    color: ${(props) => props.theme.colors.secondary};
    border-right: 2px solid;
  }
  .userLogOutBtn {
    padding: 0;
    border: none;
    width: 32px;
    background: transparent;
    color: ${(props) => props.theme.colors.secondary};
    font-family: inherit;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.48px;
    text-decoration-line: underline;
  }
`
