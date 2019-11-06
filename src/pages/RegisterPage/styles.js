import styled from 'styled-components';

export const Forms = styled.form`

    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        padding: 40px 0 80px 0;
        max-width: 160px;
        font-size: 30px;
        text-align: center;
        font-family: "Poor Richard";
    }

    ul{
        list-style: none;
    li{
        margin-top: 3px;
        margin-bottom: 3px;
    }
    }
`

export const Organization= styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: baseline;
    width: 300px;

    h2{
        display:flex;
        font-size: 20px;
        color: #444;
        font-family: "Bodoni MT";
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
