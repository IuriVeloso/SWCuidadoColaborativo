import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as EmailValidator from 'email-validator';
import { FiLoader } from 'react-icons/fi';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthActions from '../../store/ducks/auth.js';
import { Input, Form } from './styles.js';
import { Button, ButtonSubmit, Organization } from '../../components/styles';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            matchEmail: true,
            matchPassword: true
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true });

        const { email, password } = this.state;
        const { signInRequest } = this.props;

        if (!EmailValidator.validate(email))
            this.setState({ matchEmail: false });
        else {
            this.setState({ matchEmail: true });
            signInRequest(email, password);
        }
        this.setState({
            email: '',
            password: '',
            loading: false
        });
    };

    render() {
        const {
            email,
            loading,
            password,
            matchEmail,
            matchPassword
        } = this.state;

        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <h1> Cuidado Colaborativo</h1>
                    <Inputed
                        match={matchEmail}
                        type="email"
                        nomeCampo="Email:"
                        value={email}
                        handleChange={this.handleChange}
                        name="email"
                    />
                    <Inputed
                        match={matchPassword}
                        type="password"
                        nomeCampo="Senha:"
                        value={password}
                        handleChange={this.handleChange}
                        name="password"
                    />
                    <ButtonSubmit load={loading}>
                        {loading ? (
                            <FiLoader color="#FFF" size="13" />
                        ) : (
                            'Login'
                        )}
                    </ButtonSubmit>
                    {!matchEmail ? <h2> Email inválido</h2> : null}
                    <h3> Não possui cadastro? </h3>
                    <Link to="/cadastro">
                        <Button type="button"> Solicitar cadastro </Button>
                    </Link>
                </Form>
            </>
        );
    }
}

function Inputed({ match, type, value, handleChange, name, nomeCampo }) {
    return (
        <>
            <Organization>
                <h2> {nomeCampo} </h2>
                {type === 'password' ? (
                    <Link to="/recuperacao-senha"> Esqueceu a senha? </Link>
                ) : null}
            </Organization>
            <Input
                match={match}
                type={type}
                value={value}
                onChange={handleChange}
                name={name}
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

Login.propTypes = {
    signInRequest: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(Login);
