import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${({theme}) => css`
    width: 100;

    header { 
      h1 { 
        font-size: 44px;
        font-family: Arial;
        color: #1C1C1C;
      }
      p {
        font-size: 14px;
        font-family: Arial;
        color: #6c757d;
      }
    }
  `}
`