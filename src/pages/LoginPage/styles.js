import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Input = styled.input`
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    margin: 10px 0 5px 0;
    height: 25px;
    font-size: 16px;
    border: linear;
    border-color: ${props=> (props.match ? '#000' : '#C13')};
    background-color: #FFF;
    font-weight: bold;
`;

export const Organization= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;