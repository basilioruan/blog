import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${({theme}) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `}
`