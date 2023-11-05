import styled from 'styled-components'

export const StyledDateSwitcher = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 165px;
  width: 100%;

  & > span {
    margin-bottom: 5px;

    color: rgba(199, 204, 220, 0.5);
    text-align: center;
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.48px;
  }
  .switcher {
    display: flex;
    justify-content: space-between;

    max-width: 165px;
    width: 100%;

    & > button {
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
    }
  }
  .switcherDate {
    margin: 0 10px;

    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.28px;
    text-transform: uppercase;
  }
`
