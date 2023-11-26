import styled from 'styled-components'

export const StyledExpensesPage = styled.div`
  max-width: 1098px;
  width: 100%;
  min-height: 579px;

  padding: 35px;

  border-radius: 0 20px 20px 20px;
  background: linear-gradient(
    116deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
  filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.2));
  .tablesWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  // ===================@media (max-width: 564px)====================

  @media (max-width: 564px) {
    background: unset;
  }
`
