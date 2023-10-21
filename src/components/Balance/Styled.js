import styled from 'styled-components'

export const StyledBalance = styled.div`
  display: flex;
  padding-top: 40px;
  padding-bottom: 48px;
  .balanceForm {
    display: flex;
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .balanceLabelText {
    color: ${(props) => props.theme.colors.secondary};
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.24px;
    margin-right: 20px;
  }

  .balanceInputContainer {
    padding: 11px 10px;
    border-radius: 16px;
    border: 2px solid var(--grey2, #80848f);
    margin-right: 16px;
  }

  .balanceInput {
    width: 95px;
    height: 20px;

    padding: 0;

    border: none;
    background: transparent;

    color: ${(props) => props.theme.colors.primary};
    text-align: right;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.24px;
    text-transform: uppercase;
  }
  .balanceConfirmBtn {
    width: 125px;
    height: 44px;
    border-radius: 16px;
    border: 2px solid var(--grey2, #80848f);
    background: transparent;

    color: ${(props) => props.theme.colors.secondary};
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.24px;
    text-transform: uppercase;
  }
`
