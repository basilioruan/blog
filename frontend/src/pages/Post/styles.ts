import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${({theme}) => css`
    width: 100%;
  `}
`

export const HeaderContainer = styled.div`
  ${({theme}) => css`
    width: 100%;
    background: #F8F8FF;
    margin: 0 auto;

    .title {
      width: 60%;
      padding: 32px;
      margin: 0 auto;
    }
  `}
`

export const BodyContainer = styled.div`
  ${({theme}) => css`
    width: 60%;
    margin: 0 auto;
    padding: 0 32px;
  `}
`