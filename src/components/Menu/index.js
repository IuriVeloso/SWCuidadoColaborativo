import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBell, FaSearch, FaUserPlus } from 'react-icons/fa';
import HiddenMenu from '../HiddenMenu/index.js';
import { Organization } from './styles';

export default class Menu extends Component {
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
                <Organization>
                    <HiddenMenu />
                    <Link to="/adicionar-paciente">
                        <FaUserPlus />
                    </Link>
                    <Link to="/procurar-paciente">
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
