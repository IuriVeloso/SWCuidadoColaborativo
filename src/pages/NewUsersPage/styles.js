import styled from 'styled-components';

export const Organization = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        margin: auto;
        font-family: 'Baskerville';
        font-weight: 500;
    }
`;

export const Card = styled.div`
    background-color: rgb(225, 225, 0, 0.3);
    margin: 10px 20px;
    padding: 5px 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 300px;
    border-radius: 12px;
    justify-content: space-around;
    align-content: left;
    align-items: left;
    color: #444;
    font-family: 'Baskerville';

    ul {
        list-style: none;
        width: 240px;
    }

    button {
        background-color: #4b8c7c;
        border-width: 0px;
        border-radius: 4px;
        width: 40%;
        height: 20px;
        margin: 8px;
        color: #fff;
    }
`;
