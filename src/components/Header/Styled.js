import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: ${(props) => props.theme.sizes.headerHeight};
  padding: 0 15px;
  margin: 0 auto;
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1f1f27;
  box-shadow: 0px 7px 24px 0px rgba(0, 0, 0, 0.25);
`
export const StyledLogo = styled.div`
  position: relative;

  .logo {
  }
  .logoCoin {
    position: absolute;
    top: 4px;
    left: 119px;
  }
`
