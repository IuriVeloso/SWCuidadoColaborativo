import styled from 'styled-components';

export const Forms = styled.form`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > h1{
        padding: 40px 0 40px 0;
        max-width: 160px;
        font-size: 35px;
        text-align: center;
        font-family: 'Amatic SC', sans-serif;
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
height: 28px;
width: 300px;
font-size: 16px;
border-width: 1px;
border-color: ${props=> (props.match ? '#DDD' : '#C13')};
border-radius: 6px;
border: white;
background-color: #FFF;
`;
export const Select = styled.select`
    display: flex;
    margin: auto;
    justify-content: center;
    margin: 0px 0 5px 0;
    height: 25px;
    width: 300px;
    font-size: 16px;
    border-width: 1px;
    border-style: outset;
    border-color: '#DDD';
    border-radius: 6px;
    box-shadow: 1px 1px 1px grey;
    background-color: #FFF;
`;

export const MissInput = styled.input`
display: flex;
margin: auto;
justify-content: center;
margin: 0px 0 10px 0;
padding: 5px;
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