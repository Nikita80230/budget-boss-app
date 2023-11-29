import styled from 'styled-components'

export const StyledStatisticPage = styled.div`
  padding: 20px 0;
  .topWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .mainPageLink {
    text-decoration: none;
  }
  .mainPageLink > img {
    margin-right: 19px;
  }
  .mainPageLink > span {
    color: ${(props) => props.theme.colors.secondary};
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.48px;
  }
  // ======================@media (max-width: 1125px)==================================

  // ==============================@media (max-width: 991px)===========================
  // ===========================@media (max-width: 768px)==============================
  // ===========================@media (max-width: 564px)==============================

  @media (max-width: 564px) {
    .topWrapper {
      display: flex;
      flex-direction: column;
      align-items: start;

      margin-bottom: 32px;
    }
  }
`
