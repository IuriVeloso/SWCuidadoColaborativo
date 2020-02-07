import styled from 'styled-components';

export const Forms = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;
    > h1 {
        padding: 40px 0 40px 0;
        max-width: 160px;
        font-size: 35px;
        text-align: center;
        font-family: 'Amatic SC', sans-serif;
    }
    ul {
        list-style: none;
        li {
            margin-top: 1px;
            margin-bottom: 1px;
        }
    }
`;

export const Input = styled.input.attrs(() => {
    return {
        required: 'required'
    };
})`
    margin-top: 3px;
    height: 45px;
    padding: 0 3px;
    width: 290px;
    font-size: 16px;
    border-width: 1px;
    border-style: outset;
    border-color: #ddd;
    border-radius: 6px;
    box-shadow: 1px 1px 1px grey;
    background-color: #fff;
`;

export const Organization = styled.div`
    flex-direction: column;
    width: 100%;
    margin-left: 3%;
    max-width: 300px;
    > h2 {
        font-size: 20px;
        color: #444;
        font-family: 'Baskerville';
    }
    > ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    > ul button {
        background: none;
        border: none;
        justify-self: flex-end;
        align-self: flex-end;
        margin-left: 0px;
    }
`;

export const Text = styled.text`
    font-size: 18px;
    color: #000;
    font-family: 'Baskerville';
    margin-bottom: 2px;
    margin-top: 20px;
`;

export const Text2 = styled.text`
    font-size: 34px;
    color: #333;
    font-family: 'Baskerville';
    margin-bottom: 2px;
    font-weight: 500;
    margin-top: 20px;
`;
export const Posi = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: baseline;
`;
export const Box = styled.div`
    display: flex;
    justify-content: center;
    justify-self: center;
    align-self: center;
    min-width: 300px;
    width: 85%;
    height: 200px;
    margin-top: 10px;
    border: 2px solid grey;
    border-radius: 8px;
    background-color: rgb(256, 256, 256, 0.5);
`;
