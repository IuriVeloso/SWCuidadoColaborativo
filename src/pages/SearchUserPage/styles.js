import styled, {keyframes, css} from 'styled-components';

export const Forms = styled.form`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom:100px;
   
    > h1{
        padding: 40px 0 40px 0;
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

export const Input = styled.input.attrs(props=> {
    return ({
        required: 'required'
    });
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
    border-color: #DDD;
    border-radius: 6px;
    box-shadow: 1px 1px 1px grey;
    background-color: #FFF;
    background-image: url('https://www.w3schools.com/howto/searchicon.png');
    background-position: 3px 1px; 
    background-repeat: no-repeat;
    padding: 4px 2px 5px 30px;
`;

export const Select = styled.select.attrs(props=> {
    return({
        required: 'required'
    });
})`
    display: flex;
    margin: auto;
    justify-content: center;
    margin: 10px 0px 15px 10px;
    height: 25px;
    width: 170px;
    font-size: 16px;
    border-width: 1px;
    border-style: outset;
    border-color: #DDD;
    border-radius: 6px;
    box-shadow: 1px 1px 1px grey;
    background-color: #FFF;
`;

export const Organization = styled.div`
display: flex;
align-items:flex-end;
justify-content: space-between;
flex-wrap: wrap;
align-items: baseline;

> h2{
    font-size: 20px;
    color: #444;
    font-family: "Baskerville";
    margin-bottom:2px;
}
> a{
    display: flex;
    color: #444;
    font-size: 15px;
    font-weight: bold;
    font-family: "Baskerville";
}
>h1{
    display: flex;
    align-items: flex-end;
    justify-content : space-evenly;
    padding: 40px 0 130px 0;
    max-width: 160px;
    font-size: 30px;
    text-align: center;
    font-family: "Poor Richard";
    margin-bottom:-100px;

}
`
export const ButtonSubmit2= styled.button.attrs(props => {
    return ({
        type: 'submit',
        disabled: props.load,
    });
})`
    width:250px;
    margin: 4%;
    min-height: 35px;
    padding: 5px 45px;
    border-radius: 10px;
    background-image: linear-gradient(to bottom,#555DA5, #555DA5, #A5DEF9);
    border-width: 0px;
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
const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;