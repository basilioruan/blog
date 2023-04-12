import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${({theme}) => css`
    width: 100%;

    img {
      width: 100%;
      height: 300px;
    }
  `}
`

export const TextContainer = styled.div`
  ${({theme}) => css`
    padding 32px 0;
    text-align: justify;
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 400;
    color: #36344D;
    letter-spacing: .3px;
  `}
`