import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${({theme}) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    .title { 
      margin: 0 auto;
      font-family: Arial;
      color: #1C1C1C;
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `}
`