import React from 'react';
import {Link} from 'react-router-dom';
import { Organization } from './styles.js';

export default function HiddenMenu({ show } = this.props) {
    return (
        <Organization show={show}>
            <ul>
                <li>Usuários</li>
             <li><Link to="/parceiros">Parceiros</Link> </li>
                <li>Reuniões</li>
                <li>Saiba Mais</li>
                <li>Em destaque</li>
            </ul>
        </Organization>
    );
}
