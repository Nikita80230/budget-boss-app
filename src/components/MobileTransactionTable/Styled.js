import styled from 'styled-components'

export const StyledMobileTransactionTable = styled.div`
  display: flex;

  font-family: Roboto;

  .tableBody {
    width: 100%;
  }

  .tableBodyRow {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 8px;
    width: 100%;
    padding: 4px;
    padding-bottom: 0;

    border-bottom: 2px solid ${(props) => props.theme.colors.grey};
  }
  .transactionInfo {
    display: flex;
    flex-direction: column;

    color: ${(props) => props.theme.colors.secondary};
    font-family: Roboto;
    font-size: 8px;
    font-weight: 400;
    letter-spacing: 0.32px;
  }
  .description {
    margin-bottom: 7px;

    color: ${(props) => props.theme.colors.secondary};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.48px;
  }
  .dateCategory {
    display: flex;
    gap: 20px;
  }

  .sum {
    margin-left: auto;
    margin-right: 8px;
    padding-top: 8px;

    color: ${(props) => props.theme.colors.accentGreen};
    text-align: right;

    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.48px;
  }

  .tableBodyRow.expenses .sum {
    color: ${(props) => props.theme.colors.accentRed};
  }

  .removeItemBtn {
  }

  .removeItemBtn > button {
    background: transparent;
    border: none;

    padding: 0;
    width: 36px;
    height: 36px;
  }
`
