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
import Notification from '../Notifications/index.js';

export default class MenuAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            showNotifications: false
        };
    }

    handleMenuAppear = e => this.setState({ showMenu: !e.showMenu });

    handleNotificationsAppear = e =>
        this.setState({ showNotifications: !e.showNotifications });

    render() {
        const { showMenu, showNotifications } = this.state;
        return (
            <>
                <HiddenMenu show={showMenu} />
                <Notification show={showNotifications} />
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
                    <FaBell
                        cursor="pointer"
                        onClick={() =>
                            this.handleNotificationsAppear({
                                showNotifications
                            })
                        }
                    />
                    <FaBars
                        cursor="pointer"
                        onClick={() => this.handleMenuAppear({ showMenu })}
                    />
                </Organization>
            </>
        );
    }
}
