import React from 'react';
import PropTypes from 'prop-types';

import { Organization, Note } from './styles.js';
import Image from '../../assets/iStock.jpg';

export default function Notifications(props) {
    const { show } = props;
    return (
        <Organization show={show}>
            <Note>
                <ul>
                    <li>
                        <img src={Image} alt="UserName" />
                    </li>
                    <li>
                        <h1> Username </h1>
                        <text>
                            Texto muito grande que quebra algumas linhas para
                            testar
                        </text>
                    </li>
                </ul>
            </Note>
            <Note>
                <ul>
                    <li>
                        <img src={Image} alt="UserName" />
                    </li>
                    <li>
                        <h1> Username </h1>
                        <text>
                            Texto muito grande que quebra algumas linhas para
                            testar
                        </text>
                    </li>
                </ul>
            </Note>
        </Organization>
    );
}

Notifications.propTypes = {
    show: PropTypes.bool.isRequired
};
