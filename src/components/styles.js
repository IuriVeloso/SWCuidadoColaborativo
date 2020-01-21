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
    background-image: linear-gradient(to bottom,#555DA5,#555DA5, #A5DEF9);
    min-width:250px;
    min-height: 35px;
    border-width: 0px;
    font-size: 20px;
    color: #FFF;
    font-family: "Bodoni MT Std";
    margin: 5px;
    a{
        color: white;
    }
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
    padding: 5px 45px ;
    border-radius: 10px;
    background-image: linear-gradient(to bottom,#555DA5, #555DA5, #A5DEF9);
    border-width: 0px;
    max-width: 250px;
    font-size: 20px;
    color: #FFF !important;
    font-family: "Bodoni MT Std";
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
    a{
        color: white;
    }
`;

export const Image = styled.img`
    margin-top: 40px;
    width: 158px;
`;

export const Organization = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: baseline;
width: 300px;;
> h2{
    font-size: 20px;
    color: #444;
    font-family: "Baskerville";
}
> a{
    display: flex;
    color: #444;
    font-size: 15px;
    font-weight: bold;
    font-family: "Baskerville";
}
`;