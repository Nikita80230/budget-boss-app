import styled from 'styled-components'

export const StyledTransactionsSummary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  min-height: 50px;

  margin-bottom: 32px;

  border-radius: 30px;
  background: linear-gradient(
    116deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);

  .text {
    margin-right: 15px;

    color: ${(props) => props.theme.colors.secondary};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
  }

  .expenses {
    position: relative;

    padding-right: 20px;
    margin-right: 20px;
  }

  .expenses:after {
    content: '';
    height: 36px;
    width: 1px;

    position: absolute;
    right: 0;
    top: -10px;

    background-color: #474759;
  }

  .expensesText {
  }
  .expensesValue {
    color: ${(props) => props.theme.colors.accentRed};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.56px;
  }
  .income {
  }
  .incomeText {
  }
  .incomeValue {
    color: ${(props) => props.theme.colors.accentGreen};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.56px;
  }
`
