import styled from 'styled-components'

export const StyledNewTransaction = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  .newTransactionForm {
    display: flex;
  }
  .newTransactionDate {
    max-width: 104px;
    height: 44px;

    padding: 15px 5px 15px 28px;
    margin-right: 32px;

    border: none;
    background: transparent;

    color: ${(props) => props.theme.colors.secondary};
    font-family: Roboto;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.48px;
    text-transform: uppercase;
  }
  .newTransactionDescriptionInput {
    width: 280px;
    min-height: 44px;

    padding: 15px 20px;

    background: transparent;
    border-radius: 16px 0 0 0;
    border: 2px solid ${(props) => props.theme.colors.grey};

    color: rgba(199, 204, 220, 0.5);
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.24px;
  }

  .newTransactionType {
    width: 170px;
    height: 44px;
  }
  .newTransactionAmountInput {
    max-width: 120px;
    min-height: 44px;
    padding: 15px 20px 14px 40px;
    margin-right: 32px;

    background: transparent;

    border-radius: 0px 16px 16px 0px;
    border: 2px solid ${(props) => props.theme.colors.grey};

    color: rgba(199, 204, 220, 0.5);
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.24px;
    line-height: 1.3;
  }
  .newTransactionSubmitBtn {
    width: 136px;
    height: 44px;

    margin-right: 16px;

    color: ${(props) => props.theme.colors.white};
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.24px;
    text-transform: uppercase;

    border: none;
    border-radius: 16px;
    background: ${(props) => props.theme.colors.accentGreen};
    box-shadow: 1px 3px 5px 0px rgba(96, 196, 112, 0.35);
  }
  .newTransactionClearBtn {
    width: 136px;
    height: 44px;

    color: ${(props) => props.theme.colors.white};
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.24px;
    text-transform: uppercase;

    background: transparent;
    border-radius: 16px;
    border: 2px solid var(--grey, #474759);
    box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  }
`
