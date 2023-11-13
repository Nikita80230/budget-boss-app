import styled from 'styled-components'

export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 392px;
  width: 100%;
  min-height: 554px;
  border-radius: 30px;
  background: #383847;
  box-shadow: 0px 2px 14px 0px rgba(132, 132, 132, 0.2) inset;
  padding: 52px;
  color: #f6f7fb;

  z-index: 2;

  .googleWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;

    .googleWrapper-topText {
      text-align: center;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.64px;
      margin-bottom: 20px;
    }
    .googleWrapper-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      border-radius: 16px;
      background: #f6f7fb;
      width: 120px;
      height: 40px;
      margin-bottom: 32px;
      color: ${(props) => props.theme.colors.dark};
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.28px;
    }
    .googleWrapper-bottomText {
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.56px;
    }
  }
  .authForm {
    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 36px;
      .labelText {
        margin-bottom: 8px;
        color: ${(props) => props.theme.colors.primary};
        font-size: 12px;
        letter-spacing: 0.48px;
        text-transform: capitalize;
        &::before {
          content: '*';
          color: ${(props) => props.theme.colors.accentRed};
          margin-right: 4px;
        }
      }
      input {
        max-width: 288px;
        height: 48px;
        flex-shrink: 0;
        border-radius: 16px;
        background: #f6f7fb;
        padding: 0 16px;
        font-size: 14px;
        letter-spacing: 0.56px;
        border: none;
      }
    }
  }
`
export const StyledBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  button {
    border: none;
    border-radius: 16px;
    width: 100%;
    max-width: 136px;
    height: 44px;
    color: ${(props) => props.theme.colors.dark};
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.24px;
    text-transform: uppercase;
  }
  .login {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.accentGreen};
    box-shadow: ${(props) => props.theme.colors.greenBoxShadow};
  }
`
