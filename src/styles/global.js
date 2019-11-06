import { createGlobalStyle} from 'styled-components';
import background from '../assets/1125x2436.png';

export default createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        outline: 0;
        box-sizing: border-box;
    }

    @import url(//db.onlinewebfonts.com/c/ad7c34620a5c83f74ecc52bf562be6a1?family=Bodoni+MT+Std);
    @import url(//db.onlinewebfonts.com/c/1333b13c4f911f3160f1c2822573f70c?family=Poor+Richard);



    @font-face {font-family: "Poor Richard";
    src: url("http://db.onlinewebfonts.com/t/1333b13c4f911f3160f1c2822573f70c.eot"); /* IE9*/
    src: url("http://db.onlinewebfonts.com/t/1333b13c4f911f3160f1c2822573f70c.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("http://db.onlinewebfonts.com/t/1333b13c4f911f3160f1c2822573f70c.woff2") format("woff2"), /* chrome firefox */
    url("http://db.onlinewebfonts.com/t/1333b13c4f911f3160f1c2822573f70c.woff") format("woff"), /* chrome firefox */
    url("http://db.onlinewebfonts.com/t/1333b13c4f911f3160f1c2822573f70c.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("http://db.onlinewebfonts.com/t/1333b13c4f911f3160f1c2822573f70c.svg#Poor Richard") format("svg"); /* iOS 4.1- */
}
    @font-face {font-family: "Bodoni MT Std";
    src: url("//db.onlinewebfonts.com/t/ad7c34620a5c83f74ecc52bf562be6a1.eot");
    src: url("//db.onlinewebfonts.com/t/ad7c34620a5c83f74ecc52bf562be6a1.eot?#iefix") format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/ad7c34620a5c83f74ecc52bf562be6a1.woff2") format("woff2"),
    url("//db.onlinewebfonts.com/t/ad7c34620a5c83f74ecc52bf562be6a1.woff") format("woff"),
    url("//db.onlinewebfonts.com/t/ad7c34620a5c83f74ecc52bf562be6a1.ttf") format("truetype"),
    url("//db.onlinewebfonts.com/t/ad7c34620a5c83f74ecc52bf562be6a1.svg#Bodoni MT Std") format("svg");
}

    html, body, #app{
        min-height: 100%;
    }

    body{
        -webkit-font-smoothing: antialiased !important;
        background: url(${background});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    input , a, form {
        text-decoration: none !important;
    }

    button{
        cursor: pointer;
    }
    /*
      www.OnlineWebFonts.Com
      You must credit the author Copy this link on your web
      <div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>
      OR
      <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>
*/

`;