import { createGlobalStyle} from 'styled-components';
import background from '../assets/1125x2436.png';

export default createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        outline: 0;
        box-sizing: border-box;
    }

    @import url(http://db.onlinewebfonts.com/c/ad7c34620a5c83f74ecc52bf562be6a1?family=Bodoni+MT+Std);
    @import url(http://db.onlinewebfonts.com/c/1333b13c4f911f3160f1c2822573f70c?family=Poor+Richard);
    @import url(http://db.onlinewebfonts.com/c/f929174bda22c1821db22ab9760b082a?family=Baskerville);

    html, body, #app{
        min-height: 100%;
    }

    body{
        -webkit-font-smoothing: antialiased !important;
        background: url(${background});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    input , a, form {
        text-decoration: none !important;
    }

    button{
        cursor: pointer;
        text-decoration: none;
    }

`;