import styled from 'styled-components'

export const StyledDashboardLayout = styled.div`
  position: relative;
  max-width: 1098px;
  width: 100%;
  margin: 0 auto;
  .dashboardNavigation {
    display: flex;
    justify-content: center;
    @media (max-width: 564px) {
      flex-direction: column-reverse;
      align-items: center;
      padding-top: 20px;
    }
  }

  .reportLink {
    position: absolute;
    top: 50px;
    right: 111px;

    text-decoration: none;
    @media (max-width: 564px) {
      position: static;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
    }
  }
  .dashboardLinks {
    display: flex;
    width: 100%;
    @media (max-width: 564px) {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 2;
    }
  }
  .dashboardLink {
    width: 138px;
    height: 40px;
    background-image: linear-gradient(245deg, #383847 14.1%, #2d2d38 89.51%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    color: ${(props) => props.theme.colors.primary};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.24px;
    text-transform: uppercase;

    transition: all 0.3s;

    &.active {
      background-image: none;
      background-color: #383847;
      color: ${(props) => props.theme.colors.accentGreen};
    }
  }

  // ===================@media (max-width: 564px)====================

  @media (max-width: 564px) {
    .dashboardLinks {
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 2;
    }

    .dashboardLink {
      width: 50%;
      &.active {
        background-image: none;
        background-color: #383847;
        border: 2px solid ${(props) => props.theme.colors.accentGreen};
        box-shadow: 0px 0px 6px 0px #41a350;
      }
      border-radius: 0;
    }

    .dashboardLink:first-child {
      border-top-right-radius: 20px;
    }
    .dashboardLink:last-child {
      border-top-left-radius: 20px;
    }
  }
`
