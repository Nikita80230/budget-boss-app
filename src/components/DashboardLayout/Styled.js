import styled from 'styled-components'

export const StyledDashboardLayout = styled.div`
  position: relative;
  max-width: 1098px;
  width: 100%;
  margin: 0 auto;
  .dashboardNavigation {
    display: flex;
    justify-content: center;
  }

  .reportLink {
    position: absolute;
    top: 50px;
    right: 111px;

    text-decoration: none;
  }
  .dashboardLinks {
    display: flex;
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
`
