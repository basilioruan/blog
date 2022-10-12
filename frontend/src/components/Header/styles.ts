import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${({theme}) => css`
    font-family: Arial !important;
    font-size: 18px;
  `}
`
export const ButtonContainer = styled.div`
  ${() => css `
    display: flex;
    align-items: center;
    background: transparent;
  `}
`