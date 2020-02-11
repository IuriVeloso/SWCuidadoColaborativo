import React from 'react';
import PropTypes from 'prop-types';

import { Organization } from './styles.js';

export default function HiddenMenu(props) {
    const { show } = props;
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

HiddenMenu.propTypes = {
    show: PropTypes.bool.isRequired
};
