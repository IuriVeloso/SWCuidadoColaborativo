import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBell, FaSearch, FaUserPlus } from 'react-icons/fa';
import HiddenMenu from '../HiddenMenu/index.js';
import { Organization } from './styles';

export default class Menu extends Component {
    state = {
        show: false
    };

    handleMenuAppear = e => {
        this.setState({ show: !e.show });
    };

    render() {
        const { show } = this.state;
        return (
            <>
                <Organization>
                    <HiddenMenu />
                    <Link to="/adicionar-paciente">
                        {' '}
                        <FaUserPlus />{' '}
                    </Link>
                    <Link to="/procurar-paciente">
                        {' '}
                        <FaSearch />{' '}
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
