import styled from 'styled-components';

export const Forms = styled.form`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom:80px;

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
`;

export const Textarea= styled.textarea.attrs(props=> {
    return ({
        required: 'required'
    });
})`
    display: flex;
    margin: auto;
    justify-content: center;
    margin: 0px 0 5px 0;
    padding: 5px;
    height: 120px;
    width: 300px;
    font-size: 16px;
    border-width: 1px;
    border-style: outset;
    border-color: #DDD;
    border-radius: 6px;
    box-shadow: 1px 1px 1px grey;
    background-color: #FFF;
    type:"text";
    resize:none;
`;

export const Select = styled.select.attrs(props=> {
    return({
        required: 'required'
    });
})`
    display: flex;
    margin: auto;
    justify-content: center;
    margin: 0px 0 5px 0;
    height: 25px;
    width: 300px;
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
    font-size: 35px;
    text-align: center;
    font-family: 'Amatic SC', sans-serif;
    margin-bottom:-100px;

}
`


