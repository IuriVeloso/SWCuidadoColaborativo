import styled from 'styled-components';

export const Forms = styled.form`

    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > h1{
        padding: 40px 0 40px 0;
        max-width: 160px;
        font-size: 30px;
        text-align: center;
        font-family: "Poor Richard" sans-serif;
    }

    ul{
        list-style: none;
    li{
        margin-top: 3px;
        margin-bottom: 3px;
    }
    }
`

export const Input = styled.input`
    display: flex;
    margin: auto;
    justify-content: center;
    margin: 0px 0 5px 0;
    padding: 5px;
    height: 25px;
    width: 300px;
    font-size: 16px;
    border-width: 1px;
    border-style: outset;
    border-color: ${props=> (props.match ? '#AAA' : '#C13')};
    border-radius: 6px;
    box-shadow: 1px 1px 1px grey;
    background-color: #FFF;
`;
