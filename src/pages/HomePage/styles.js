import styled from 'styled-components';

export const Recentes = styled.div`
    background-color: rgb(225, 225, 0, 0.3);
    margin: 8px 20px;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 300px;
    border-radius: 8px;
    justify-content: space-between;
    align-content: left;
    align-items: left;

    > h1 {
        font-size: 19px;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
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
export const OrgSlider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #000;
    margin-top: 2%;
`;

export const ButtonEvents = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 40px;
    border-radius: 10px;
    border-style: solid;
    background-color: #4b8c7c;
    min-width: 150px;
    min-height: 35px;
    border-width: 0px;
    font-size: 20px;
    color: #fff;
    font-family: 'Bodoni MT Std';
    margin-bottom: 40%;
`;
