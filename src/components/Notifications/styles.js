import styled from 'styled-components';

export const Organization = styled.div`
    background-color: #3b7063;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    display: ${props => (props.show ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
`;

export const Note = styled.div`
    display: flex;
    justify-content: flex-start;
    background: rgb(255, 255, 255, 0.7);
    margin: 5px;
    border-radius: 10px;
    width: 90%;
    height: 12%;

    :first-child {
        margin-top: 15px;
    }

    > ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
    }

    > ul li img {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        margin: 5px;
    }
    > ul li h1 {
        font-size: 18px;
    }
    > ul li text {
        font-size: 15px;
    }
`;
