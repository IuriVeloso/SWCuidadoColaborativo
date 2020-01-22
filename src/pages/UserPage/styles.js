import styled from 'styled-components';

export const Forms = styled.form`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom:100px;
    margin-top:20px;
   
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
        margin-top: 1px;
        margin-bottom: 1px;
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
    height: 45px;
    width: 450px;
    font-size: 16px;
    border-width: 1px;
    border-style: outset;
    border-color: #DDD;
    border-radius: 6px;
    box-shadow: 1px 1px 1px grey;
    background-color: #FFF;
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
justify-content: space-between;
flex-wrap: wrap;
align-items: baseline;
width: 450px;


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

export const Text = styled.text`
font-size: 28px;
color: #000;
font-family: "Baskerville";
margin-bottom:2px;
margin-top:20px;
`
export const Posi = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: baseline;
width: 300px;
margin-left:370px;
> h2{
    font-size: 20px;
    color: #444;
    font-family: "Baskerville";
}
> a{
    display: flex;
    color: #444;
    font-size: 13px;
    font-weight: bold;
    font-family: "Baskerville";
}
`

export const Box = styled.div`
width:500px;
height:400px;
margin-top:10px;
border: 2px solid grey;
border-radius:8px;
background-color: rgb(256,256,256,0.5);
`
