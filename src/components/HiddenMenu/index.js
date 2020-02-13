import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions.js';
import { Organization } from './styles.js';

export default function HiddenMenu(props) {
    const { show } = props;
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <Organization show={show}>
            <ul>
                <li>Parceiros</li>
                <li>Reuniões</li>
                <li>Saiba Mais</li>
                <li>Em destaque</li>
                <li>
                    <button type="button" onClick={handleLogout}>
                        Sair
                    </button>
                </li>
            </ul>
        </Organization>
    );
}

HiddenMenu.propTypes = {
    show: PropTypes.bool.isRequired
};
