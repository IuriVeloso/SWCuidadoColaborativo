import styled, {keyframes, css} from 'styled-components';

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Button= styled.button`
    padding: 5px 18px ;
    border-radius: 10px;
    border-style: solid;
    max-width: 160px;
    border-color: #A316D5;
    background-color: #A316D5;
    border-width: 4px;
    font-size: 13px;
    color: #FFF;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin: 5px;
`;

export const ButtonSubmit= styled.button.attrs(props => {
    return ({
        type: 'submit',
        disabled: props.load,
    });
})`
    min-width:90px;
    padding: 5px 18px ;
    border-radius: 10px;
    background-color: #A316D5;
    border-style: solid;
    border-color: #A316D5;
    border-width: 4px;
    max-width: 180px;
    font-size: 13px;
    font-weight: bold;
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props=> props.load && css`
        svg{
            animation: ${rotate} 3s linear infinite;
            color: darkblue;
            }
        `}
`;

export const Image = styled.img`
    margin-top: 40px;
    width: 158px;
`;
