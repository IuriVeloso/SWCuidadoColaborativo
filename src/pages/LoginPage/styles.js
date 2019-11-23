import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3{
        color: #49508E;
        padding: 30px 0 3px 0;
        font-family: "Bodoni MT Std" sans-serif;
    }

    h1{
        padding: 40px 0 80px 0;
        max-width: 160px;
        font-size: 30px;
        text-align: center;
        font-family: "Poor Richard" sans-serif;
    }
`

export const Input = styled.input`
    display: flex;
    margin: auto;
    justify-content: center;
    margin: 0px 0 5px 0;
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