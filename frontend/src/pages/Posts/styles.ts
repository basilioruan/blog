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
      color: #4F4F4F;
    }
  `}
`

export const SearchHeader = styled.div`
  ${() => css`
    margin: 0 auto;

    h3 { 
      margin: 0 auto;
      margin-top: 46px;
      font-family: Arial;
      font-weight: bold;
      color: #696969;
      font-weight: 400;

      .word-search {
        color: #363636;
        font-weight: bold;
      }
    }
  `}
`