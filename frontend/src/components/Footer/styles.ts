import styled, { css } from 'styled-components';

export const MainContent = styled.div`  
  ${() => css`
    width: 100%;
    height: 200px;
    background-color: #212529;
    color: #fff;

    .social-midia {
      display: flex;
      justify-content: center;
      padding: 36px;
      .icons {
        font-size: 24px;
        margin-right: 30px;
        cursor: pointer;
      }
    }

    .copyright {
      display: flex;
      justify-content: center;
      padding: 24px;
    }
  `}
`