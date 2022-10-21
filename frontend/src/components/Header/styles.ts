import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

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

    .link {
      text-decoration: none;
    }
  `}
`

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;