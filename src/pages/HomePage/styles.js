import styled from 'styled-components';

export const Recentes = styled.div`
    background-color: rgb(225,225,225, 0.7) ;
    border: solid 0px rgb(121,121,121, 0.7);
    margin: 10px 20px;
    padding: 0 8px;
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;
    border-radius: 8px;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    > h1{
        font-size: 21px;
        font-family: "Baskerville";
        margin: 2px;
    };
    > h2{
        font-size: 21px;
        font-family: "Baskerville";
    }
    > small{
        font-size: 12px;
        padding: 0 80px;
        margin: auto;
        color: #5d5d5d;
        font-weight: bold;
    }
`
export const ButtonUser = styled.button`
    font-size: 21px;
    display: flex;
    align-content: center;
    justify-content: center;
    font-family: "Baskerville";
    border: 0;
    margin: auto;
    font-weight: bold;
    padding: 2px 40px;
    border-radius: 5px;
    background-color:  rgb(206,206,206, 0.7) ;
    > a {color: #000 !important} ;
    `

export const Org1 = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin: auto;
    > h1{
        align-self: baseline;
        margin-top: 10px;
        margin-left: 15px;
        font-size: 25px;
        font-family: "Baskerville";
    }
    >a{
        color: #000;
    }
`
export const OrgSlider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #000;
`

export const ButtonEvents = styled.button`
    font-size: 21px;
    font-family: "Baskerville";
    display: flex;
    align-content: center;
    justify-content: center;
    border: 0;
    margin: auto;
    font-weight: bold;
    padding: 2px 40px;
    border-radius: 5px;
    background-color: rgb(255,255,255, 0.5);
    > a {color: #000 !important} ;
    `
   