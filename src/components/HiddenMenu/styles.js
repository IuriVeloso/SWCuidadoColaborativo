import styled from 'styled-components';

export const Organization = styled.div`
    background-color: rgb(0,0,0,0.62);
    position: fixed;
    width:100%;
    height:100%;
    top: 0;
    bottom: 0;
    display: ${props=>(props.show ? 'flex': "none")};
    justify-content: center;
    align-items:center;
    >ul{
        >li{
            color: #FFF8FF;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 0;
            min-width: 200px;
            font-size: 200%;
            border-top: 1px solid;
            border-image-source: radial-gradient(rgb(255,128,219,1), rgb(0,0,0,0));
            border-image-slice: 1;

            &:first-child{
            border-top: 10px;
            }
        }
    }
`
//radial-gradient(to left, rgb(255,128,219,0.5))