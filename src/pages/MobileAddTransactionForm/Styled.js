import styled from 'styled-components'

export const StyledMobileAddTransactionLink = styled.div`
  .backLink {
    display: flex;
    align-items: center;
    gap: 4px;

    padding-top: 19px;
    padding-bottom: 19px;
    padding-left: 20px;
  }
  .linkText {
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    font-family: inherit;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }
`
