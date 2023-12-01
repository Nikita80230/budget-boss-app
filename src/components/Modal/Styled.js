import styled from 'styled-components'

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  border-radius: 16px;
  background: rgba(0, 0, 0, 0.5);

  z-index: 5;

  .modal {
    max-width: 380px;
    width: 100%;
    height: 175px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 40px 57px;

    border-radius: 16px;
    background: #383847;

    box-shadow: 0px 2px 14px 0px rgba(132, 132, 132, 0.2) inset;

    z-index: 6;
  }

  .closeBtn {
    position: absolute;
    top: 20px;
    right: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    border: none;
  }

  .text {
    margin-bottom: 32px;

    color: ${(props) => props.theme.colors.secondary};
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.32px;
    text-align: center;
  }

  .buttonsWrapper {
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  .btn {
    width: 125px;
    height: 44px;
    border-radius: 16px;
    border: none;

    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.24px;
    text-transform: uppercase;
  }

  .acceptBtn {
    background: ${(props) => props.theme.colors.accentGreen};
    box-shadow: 1px 3px 5px 0px rgba(96, 196, 112, 0.35);
  }
  .cancelBtn {
    background: transparent;
    border-radius: 16px;
    border: ${(props) => props.theme.colors.grey};
    box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  }
`
