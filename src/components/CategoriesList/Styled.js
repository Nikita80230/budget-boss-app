import styled from 'styled-components'

export const StyledCategoriesList = styled.div`
  display: flex;
  flex-direction: column;

  height: auto;

  padding: 20px 220px;

  border-radius: 30px;
  background: linear-gradient(
    116deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );

  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);

  //   -------------------------------------------------------------------------

  .transactionSwitcher {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }
  .transactionSwitcherLeft {
    margin-right: 25px;

    background: transparent;
    border: none;
  }
  .transactionSwitcherRight {
    background: transparent;
    border: none;
  }
  .transactionSwitcherTitle {
    margin-right: 25px;

    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.28px;
    text-transform: uppercase;
  }

  // ---------------------------------------------------------------------------

  .categoryList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    column-gap: 43px;
    row-gap: 40px;

    // flex-direction:;
  }
  .categoryItem {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0;
    background: transparent;
    border: none;
  }
  .categoryItemValue {
    margin-bottom: 6px;

    color: ${(props) => props.theme.colors.secondary};
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.48px;
    text-transform: uppercase;
  }

  .categoryItemImgThumb {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    width: 64px;
    height: 64px;

    margin-bottom: 6px;

    border-radius: 32px;
    border: 1px solid transparent;
    background: rgba(86, 86, 107, 0.2);

    transition: border 0.3s;

    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.15);
  }

  .categoryItemImgThumb:hover {
    border: 1px solid #42a652;
    box-shadow: 0px 0px 6px 0px #41a350;
  }

  .categoryItemImg {
    width: 50px;
    height: 50px;

    position: absolute;
    top: calc(50% - 25px);
    left: calc(53% - 25px);
  }
  .categoryItemText {
    color: ${(props) => props.theme.colors.secondary};
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.24px;
    text-transform: uppercase;
  }

  // ===========================@media (max-width: 564px)==============================

  @media (max-width: 564px) {
    padding: 20px 20px;
  }
`
