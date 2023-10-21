import styled from 'styled-components'

export const StyledApp = styled.div`
  main {
    min-height: calc(100vh - ${(props) => props.theme.sizes.headerHeight});
  }
`

const StyledContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: block;
`
export default StyledContainer
