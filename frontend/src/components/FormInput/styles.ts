import styled, { css } from 'styled-components';

export const FormInput = styled.input<{ error?: boolean }>`
  ${({ error }) => css`
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid ${error ? 'red' : '#ced4da'};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
  `}
`