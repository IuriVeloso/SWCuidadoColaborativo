import React, { Component } from 'react';

import PropTypes from 'prop-types';
import * as EmailValidator from 'email-validator';
import { Forms, Input } from './styles.js';
import { ButtonSubmit, Organization } from '../../components/styles';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            match: true,
            loading: false
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true });

        const { email } = this.state;
        if (!EmailValidator.validate(email)) {
            this.setState({ match: false, loading: false });
            return null;
        }
        this.setState({ match: true, loading: false, email: '' });
        return alert('E-mail enviado');
    };

    render() {
        const { email, loading, match } = this.state;
        return (
            <>
                <Forms onSubmit={this.handleSubmit}>
                    <h1>Cuidado Colaborativo</h1>

                    <Inputed
                        match={match}
                        type="email"
                        nomeCampo=""
                        value={email}
                        handleChange={this.handleChange}
                        name="email"
                    />
                    <ButtonSubmit onClick={this.alerta} load={loading}>
                        Enviar Email
                    </ButtonSubmit>

                    {!match ? <h2> Email inválido</h2> : null}
                </Forms>
            </>
        );
    }
}

function Inputed({ match, type, value, handleChange, name, nomeCampo }) {
    return (
        <>
            <Organization>
                <h2> {nomeCampo} </h2>
            </Organization>
            <Input
                match={match}
                type={type}
                value={value}
                onChange={handleChange}
                name={name}
                placeholder="Digite o e-mail cadastrado"
            />
        </>
    );
}

Inputed.propTypes = {
    match: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    nomeCampo: PropTypes.string.isRequired
};
