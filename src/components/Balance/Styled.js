import styled from 'styled-components'

export const StyledBalance = styled.div`
  display: flex;
  padding-top: 40px;
  padding-bottom: 48px;

  // ===================================
  @media (max-width: 564px) {
    margin: 0 auto;
  }

  .balanceForm {
    display: flex;
    // ===================================
    @media (max-width: 564px) {
      position: relative;
    }
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
    // =====================================
    @media (max-width: 564px) {
      position: absolute;
      top: -22px;
      left: 50%;
      transform: translateX(-50%);
      margin-right: 0;
    }
  }

  .balanceInputContainer {
    padding: 11px 10px;
    border-radius: 16px;
    border: 2px solid var(--grey2, #80848f);
    margin-right: 16px;
    // ============================================
    @media (max-width: 564px) {
      margin-right: 0;
      border-radius: 22px 0px 0px 22px;
      border-right: none;
      padding: 15px 16px;
    }
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
    line-height: 1;
    // =========================================
    @media (max-width: 564px) {
      height: auto;
    }
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
    // ====================================
    @media (max-width: 564px) {
      border-radius: 0 22px 22px 0px;
      height: 50px;
      text-align: left;
      padding: 15px 16px;
      display: flex;
      align-items: center;
    }
  }
`
