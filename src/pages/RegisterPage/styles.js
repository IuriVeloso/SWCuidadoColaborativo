import styled from 'styled-components';

export const Forms = styled.form`

    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ul{
        list-style: none;
    li{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    }
`
export const Input = styled.input`
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    height: 25px;
    font-size: 16px;
    border: linear;
    border-color: #000;
    background-color: #FFF;
    font-weight: bold;
`;
