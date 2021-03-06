import styled from 'styled-components';

export const Parceiro = styled.div`
    background-color:    #C4EAA7;
    margin: 8px 10px;
    padding: 12px 10px 12px 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 140px;
    border-radius: 18px;
    justify-content: space-between;
    align-content: left;
    align-items: left;
    text-align: center;

    > h1 {
        font-size: 17px;
        font-family: 'Baskerville';
        margin: 1px;
        color: #444;
    }
    > h2 {
        font-size: 14px;
        font-family: 'Baskerville';
        color: #414141;
        font-weight: 500;
    }
    > small {
        font-size: 12px;
        color: #5d5d5d;
        font-weight: bold;
        text-align: right;
        padding-bottom: 3px;
        margin-top: -8px;
    }
`;
export const ButtonUser = styled.button`
    font-size: 21px;
    display: flex;
    align-content: center;
    justify-content: center;
    font-family: 'Baskerville';
    border: 0;
    margin: 2% auto;
    font-weight: bold;
    padding: 2px 40px;
    border-radius: 5px;
    background-color: rgb(206, 206, 206, 0.7);
    font-weight: 500;
    > a {
        color: #000 !important;
    }
`;

export const Org1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

   
    > h1 {
        align-self: baseline;
        margin-top: 15px;
        margin-left: 15px;
        font-size: 22px;
        font-family: 'Baskerville';
        font-weight: 500;
    }
    > a {
        color: #000;
    }
`;



export const Organization = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;



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
    padding: 40px 0 150px 0;
    max-width: 160px;
    font-size: 35px;
    text-align: center;
    font-family: 'Amatic SC', sans-serif;
    margin-bottom:-100px;

}
`
export const Coluna1 = styled.div`
display:flex;
flex-direction: column;
`

export const Coluna2 = styled.div`
display:flex;
flex-direction: column;
`