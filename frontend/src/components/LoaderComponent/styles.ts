import styled from 'styled-components';

export const LoaderContainer = styled.div`
    overflow-block: unset;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    width: 100%;
    height: 100%;
`