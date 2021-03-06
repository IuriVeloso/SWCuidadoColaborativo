import styled from 'styled-components';

export const Forms = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 10px;
    > h1 {
        padding: 40px 0 40px 0;
        max-width: 160px;
        font-size: 35px;
        text-align: center;
        font-family: 'Amatic SC', sans-serif;
    }

    > h2 {
        color: #000;
        padding: 0 3px 0;
        font-size: 20px;
        font-family: 'Baskerville';
    }
    ul {
        list-style: none;
        li {
            margin-top: 3px;
            margin-bottom: 3px;
        }
    }
`;

export const Input = styled.input.attrs(() => {
    return {
        required: 'required'
    };
})`
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
    border-color: #ddd;
    border-radius: 6px;
    box-shadow: 1px 1px 1px grey;
    background-color: #fff;
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
    border-color: '#AAA';
    border-radius: 6px;
    box-shadow: 1px 1px 1px grey;
    background-color: #fff;
`;

export const MissInput = styled.input`
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
    border-color: ${props => (props.match ? '#DDD' : '#C13')};
    border-radius: 6px;
    box-shadow: 1px 1px 1px grey;
    background-color: #fff;
`;
