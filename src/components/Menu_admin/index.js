import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    FaBars,
    FaBell,
    FaSearch,
    FaUserPlus,
    FaAddressCard
} from 'react-icons/fa';

import { Organization } from '../Menu/styles.js';
import HiddenMenu from '../HiddenMenu/index.js';

export default class MenuAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    handleMenuAppear = e => {
        this.setState({ show: !e.show });
    };

    render() {
        const { show } = this.state;
        return (
            <>
                <HiddenMenu show={show} />
                <Organization>
                    <Link to="/adicionar-membro">
                        <FaAddressCard />
                    </Link>
                    <Link to="/adicionar-usuário">
                        <FaUserPlus />
                    </Link>
                    <Link to="/procurar-usuário">
                        <FaSearch />
                    </Link>
                    <FaBell />
                    <FaBars
                        cursor="pointer"
                        onClick={() => this.handleMenuAppear({ show })}
                    />
                </Organization>
            </>
        );
    }
}
