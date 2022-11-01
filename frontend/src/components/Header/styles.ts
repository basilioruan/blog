import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContent = styled.div`
  ${({theme}) => css`
    font-family: Arial !important;
    font-size: 18px;

    .title {
      font-family: Arial;
      color: White;
    }

    img { 
      height: 40px;
      width: 40px;
      border-radius: 100%;
      margin-right: 5px;
    }

  `}
`
export const ButtonContainer = styled.div`
  ${() => css `
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;

    .icon:hover {
      color: red; 
    }

    .button-search {
      margin-left: 28px;
    }
  `}
`