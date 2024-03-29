import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${() => css`
    width: 30%;

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
    }
  `}
`