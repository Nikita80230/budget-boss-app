import styled from 'styled-components'

export const StyledHomePage = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  padding-top: 50px;
  gap: 70px;

  // ======================@media (max-width: 1125px)==============================

  @media (max-width: 1125px) {
    gap: 0;
  }

  .homePageImg {
    max-width: 675px;
    width: 100%;
  }

  .backgroundImgForTablet {
    max-width: 640px;
    width: 100%;

    position: absolute;
    top: 5%;
    left: 7%;

    display: none;
  }

  // ==============================@media (max-width: 991px)==================================

  @media (max-width: 991px) {
    .homePageImg {
      max-width: 520px;
      width: 100%;
    }
  }

  // ===========================@media (max-width: 768px)==============================

  @media (max-width: 768px) {
    padding-top: 180px;
    padding-bottom: 60px;
    .homePageImg {
      display: none;
    }
    .backgroundImgForTablet {
      display: unset;
    }
    .backgroundImgForTablet {
      max-width: 640px;
      width: 100%;

      position: absolute;
      top: 0;
      left: 0;

      z-index: 1;
    }
  }

  // ===========================@media (max-width: 425px)==============================

  @media (max-width: 425px) {
    padding-top: 50px;

    .backgroundImgForTablet {
      display: none;
    }
    .backgroundImgForTablet {
      display: none;
    }
  }
`

// export const StyledHomePageContainer = styled.div`
//   display: flex;
//   padding-top: 50px;
//   gap: 140px;

//   .homePageImg {
//     max-width: 675px;
//     width: 100%;
//   }
// `

// export const StyledHomePageImg = styled.div`
//   @media (max-width: 768px) {
//     display: none;
//   }
// `
