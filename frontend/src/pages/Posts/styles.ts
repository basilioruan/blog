import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${({theme}) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    h2 { 
      margin: 0 auto;
      margin-top: 46px;
      font-family: Arial;
      font-weight: bold;
    }
  `}
`