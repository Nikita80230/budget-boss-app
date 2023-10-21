import styled from 'styled-components'

export const StyledTransactionTable = styled.div`
  display: flex;

  .table {
    // padding: 0 20px;
  }

  .tableHead {
    display: flex;
    background: rgba(86, 86, 107, 0.5);
    gap: 32px;

    border-radius: 16px 16px 0 0;
  }
  .tableHeadBox {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.colors.primary};
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.24px;
    text-transform: uppercase;
    &.date {
      width: 98px;
      height: 38px;
    }
    &.description {
      width: 188px;
      height: 38px;
    }
    &.category {
      width: 120px;
      height: 38px;
    }
    &.sum {
      width: 120px;
      height: 38px;
    }
    &.removeItemBtn {
      width: 76px;
      height: 38px;
    }
  }

  .tableBody {
    display: flex;
    flex-direction: column;

    max-height: 373px;

    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      height: 30%;
      border-radius: 2px;
      background: #60c470;
    }
  }

  .tableBodyRow {
    display: flex;
    gap: 32px;

    border-left: 2px solid ${(props) => props.theme.colors.grey};
    border-right: 2px solid ${(props) => props.theme.colors.grey};
    border-bottom: 2px solid ${(props) => props.theme.colors.grey};
  }
  .tableBodyBox {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.colors.secondary};
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.48px;
    &.date {
      width: 98px;
      height: 40px;
    }
    &.description {
      width: 188px;
      height: 40px;
    }
    &.category {
      width: 120px;
      height: 40px;
    }
    &.sum {
      width: 120px;
      height: 40px;
    }
    &.removeItemBtn {
      width: 76px;
      height: 40px;
    }
    & > button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 30px;
      height: 30px;

      border: none;
      border-radius: 5px;

      background: #56566b;
    }
  }
`
