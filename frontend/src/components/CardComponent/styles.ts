import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${(theme) => css`
    margin-bottom: 64px;
    margin-right: 24px;

    .card { 
      min-height: 410px;
      min-width: 350px;
      border-radius: 10px;

      img { 
        border-radius: 10px 10px 0px 0px;
      }

      .card-title { 
        margin-bottom: 16px;
      }

      .card-subtitle { 
        margin-bottom: 16px;
      }
    }

    footer { 
      display: flex;
      justify-content: space-between;
      align-items: center;

      bottom: 0;

      font-size: 12px;
      font-family: Arial;
      color: #6c757d;
    }
  `}
`