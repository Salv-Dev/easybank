import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;

    & > .bg-mobile {
        width: 100%;
    }

    & > .fg-phone {
        position: absolute;
        bottom: 60px;
        width: 100%;
        background: transparent;
    }
`;