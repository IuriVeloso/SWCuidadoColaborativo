import { createGlobalStyle } from 'styled-components';
import background from '../assets/Imagem2.jpg';

export default createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        outline: 0;
        box-sizing: border-box;
    }
    @import url('http://db.onlinewebfonts.com/c/ad7c34620a5c83f74ecc52bf562be6a1?family=Bodoni+MT+Std');
    @import url('http://db.onlinewebfonts.com/c/1333b13c4f911f3160f1c2822573f70c?family=Poor+Richard');
    @import url('http://db.onlinewebfonts.com/c/f929174bda22c1821db22ab9760b082a?family=Baskerville');
    @import url('https://fonts.googleapis.com/css?family=Abel&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Anton&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Bitter&display=swap');
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Bad+Script|Rajdhani:300|Shadows+Into+Light&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Megrim&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Life+Savers&display=swap');
    @import url('https://fonts.googleapis.com/css?family=BioRhyme:200&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Assistant:200&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Assistant:200&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Exo:200&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Pompiere&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Text+Me+One&display=swap');

    html, body, #app{
        min-height: 100%;
    }
    body{
        -webkit-font-smoothing: antialiased !important;
        background: url(${background});
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: 100%;
        background-attachment: fixed;
    }
    input , a, form {
        text-decoration: none !important;
        color: none;
    }
    button{
        cursor: pointer;
        text-decoration: none;
    }
`;
