import styled from 'styled-components'

export const StyledAddNewTransactionButton = styled.div`
  display: flex;
  align-items: center;

  & > img {
    margin-right: 8px;
  }

  & > span {
    color: ${(props) => props.theme.colors.primary};
    color: #f6f7fb;

    text-align: center;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.24px;
    text-transform: uppercase;
  }
`
