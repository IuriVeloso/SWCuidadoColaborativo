import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3{
       color: #3B7063;
        padding: 30px 0 3px 0;
        font-family: "Baskerville" ;
    }

    >h2{
        color: #000;
        padding: 0 3px 0;
        font-size: 20px;
        font-family: "Baskerville" ;
    }

    h1{
        padding: 40px 0 60px 0;
        max-width: 160px;
        font-size: 35px;
        text-align: center;
        font-family: 'Amatic SC', sans-serif;
    }
`

export const Input = styled.input`
    display: flex;
    margin: auto;
    justify-content: center;
    padding: 5px;
    margin: 0px 0 5px 0;
    height: 25px;
    width: 300px;
    font-size: 16px;
    border-width: 1px;
    border-style: outset;
    border-color: ${props=> (props.match ? '#DDD' : '#C13')};
    border-radius: 6px;
    box-shadow: 1px 1px 1px grey;
    background-color: #FFF;
`;