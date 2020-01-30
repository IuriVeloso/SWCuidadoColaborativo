import styled from 'styled-components';

export const Organization = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content : space-evenly;
    background-color: rgb(256,256,256,0.5);
    min-width: 100%;
    bottom: 0;
    position: fixed;
    color: #265E4A;
    font-size: 40px;
    padding: 5px 0;
    > h2{
        font-size: 20px;
        color: #444;
        font-family: "Baskerville";
    }
    > a{
        color: #265E4A;
    }
`