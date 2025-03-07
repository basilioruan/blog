import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${() => css`
    width: 55%;
    margin-top: 48px; 

    img {
      width: 100%;
      border-radius: 30px;
    }

    .image-post {
      cursor: pointer;
    }
  `}
`