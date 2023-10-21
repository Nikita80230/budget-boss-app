import styled from 'styled-components'

export const StyledSummaryTable = styled.div`
  max-width: 215px;
  width: 100%;

  .summaryTable {
    display: flex;
    flex-direction: column;
  }
  .summaryTableHead {
    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(86, 86, 107, 0.5);
    height: 38px;

    margin-bottom: 2px;
    border-radius: 16px 16px 0 0;

    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.24px;
    text-transform: uppercase;
  }
  .summaryTableHeadBox {
  }
  .summaryTableBody {
    display: flex;
    flex-direction: column;
    height: 360px;

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
  .summaryTableBodyRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2px;
    padding: 0 12px;

    min-height: 38px;

    background: rgba(86, 86, 107, 0.5);

    color: ${(props) => props.theme.colors.secondary};
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.48px;
    text-transform: uppercase;
  }
  .summaryTableBodyBox {
    &date {
    }
    &sum {
    }
  }
`
