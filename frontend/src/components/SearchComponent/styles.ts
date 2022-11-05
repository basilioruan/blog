import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;

    margin-top: 36px;

    .search-input {
      border: 1px solid #696969;
      border-right: none;
      padding: 10px;
      border-radius: 20px 0 0 20px;
      outline: none;
      color: #696969;
    }

    .btn-search {
      border: 1px solid #696969;
      background: transparent;
      border-left: none;
      text-align: center;
      color: #696969;
      border-radius: 0 20px 20px 0;

      &:hover {
        color: #000;
      }
    }
  `}
`;