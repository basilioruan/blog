import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${(theme) => css`
    margin-right: 64px;
    margin-bottom: 64px;

    .card { 
      border-radius: 10px;

      img { 
        border-radius: 10px 10px 0px 0px;
      }
    }
  `}
`