import React from 'react';

import { Organization } from './styles.js';

export default function HiddenMenu({ show } = this.props) {
    return (
        <Organization show={show}>
            <ul>
                <li>Usuários</li>
                <li>Parceiros</li>
                <li>Reuniões</li>
                <li>Saiba Mais</li>
                <li>Em destaque</li>
            </ul>
        </Organization>
    );
}
