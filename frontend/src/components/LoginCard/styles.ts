import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${() => css`
    width: 450px;

    margin: 3rem 0;

    background: #f5f5f5;

    border-radius: 1rem;

    box-shadow: 10px 10px 5px #a9a9a9;

    h4 {
      margin-top: 1rem;
    }

    .header {
      display: flex;
      justify-content: center;
    }

    .body {
      display: flex;
      justify-content: center;
      padding: 2rem;

      .login-btn {
        width: 100%;

        margin-top: 0.8rem;
        padding: 0.5rem;

        border-radius: 1rem;
        border: 0;

        background-color: #363636;

        color: #fff;

        .icon {
          margin-right: 0.4rem;
        }
      }

      .sign-up-btn {
        width: 100%;

        margin-top: 0.8rem;
        padding: 0.5rem;

        border-radius: 1rem;
        border: 1px solid #363636;

        background-color: #f5f5f5;

        color: #363636;
      }

      .login-social {
        font-size: 1.75rem;
      }

      .login-social-text {
        font-size: 0.75rem;
      }
    }

    Form {
      width: 300px;
    }
  `}
`