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

    .tags {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  `}
`

export const Tag = styled.div`
    ${() => css`
      background: gray;
      color: #fff;

      &:hover {
        background: DarkGray;
      }

      border-radius: 10px;
      padding: 1px 8px;
      margin-right: 10px;

      font-size: 12px;
      font-family: sans-serif;
      font-weight: 400;
      color: #fafafa;
      letter-spacing: .3px;

      cursor: pointer;
    `}
`