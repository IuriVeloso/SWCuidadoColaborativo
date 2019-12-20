import styled from 'styled-components';

export const Slider = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: baseline;
    background-color:rgb(255,255,255, 0.5);
    border-radius: 10px;
    border: solid 2px rgb(194, 129, 255, 0.5);
    padding: 5px 30px;
    margin: 10px;
    min-height: 120px;
    min-width: 250px;
    position: relative;
    > h1{
        align-self: center;
        font-size: 20px;
        margin-bottom: 5px;
        font-family: "Baskerville";
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
    &[disabled]{
        cursor: not-allowed;
        opacity: 0.4;
    }
`