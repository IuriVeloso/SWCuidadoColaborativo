import styled from 'styled-components';

export const Slider = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: baseline;
    background-color:  rgb(206,206,206, 0.7);
    border-radius: 10px;
    border: solid 1px none;
    padding: 5px 30px;
    margin: 10px;
    min-height: 120px;
    min-width: 250px;
    position: relative;
    > h1{
        align-self: center;
        font-size: 21px;
        margin-bottom: 5px;
        font-family: "Baskerville";
        font-weight:500;
    }
    > small{
        font-family: "Baskerville";
        font-size: 16px;
        margin: 3px 0;
    }
`

export const SliderNext = styled.button.attrs(props=> {
    return ({
        type: 'button',
        disabled : props.ending,
    });
})`
    all: unset;
    cursor: pointer;
    color:#2F2F2F;
    &[disabled]{
        cursor: not-allowed;
        opacity: 0.4;
    }
`

export const SliderPrev = styled.button.attrs(props=> {
    return ({
        type: 'button',
        disabled : props.beginn,
    });
})`
    all: unset;
    cursor: pointer;
    color:#2F2F2F;
    &[disabled]{
        cursor: not-allowed;
        opacity: 0.4;
    }
`