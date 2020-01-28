import React from 'react';

import { Organization } from './styles.js';

export default function HiddenMenu(props){
    return(
        <Organization>
            <table>
                <td>Usuários</td>
                <td>Parceiros</td>
                <td>Reuniões</td>
                <td>Saiba Mais</td>
                <td>Em destaque</td>
            </table>
        </Organization>
    )
}

//usar position absolute e visibility hidden no css q é gol