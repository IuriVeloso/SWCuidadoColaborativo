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
    background-image: linear-gradient(to bottom, gray, white);
    min-width:240px;
    min-height: 35px;
    border-width: 0px;
    font-size: 16px;
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
    min-width:160px;
    margin: 20px 0;
    min-height: 35px;
    padding: 5px 18px ;
    border-radius: 10px;
    background-image: linear-gradient(to bottom, #2D3CFF, #110065);
    border-width: 0px;
    max-width: 180px;
    font-size: 16px;
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
