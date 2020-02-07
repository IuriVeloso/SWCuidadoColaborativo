import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as EmailValidator from 'email-validator';

import { Forms, MissInput, Select, Input } from './styles';
import { ButtonSubmit, Organization } from '../../components/styles.js';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            pass: '',
            confirmPass: '',
            phone: '',
            service: '',
            profession: '',
            $function: '',
            loading: false,
            error: [],
            matchPass: true,
            matchEmail: true
        };
    }

    handleChangeName = e => this.setState({ fullName: e.target.value });

    handleChangeEmail = e => this.setState({ email: e.target.value });

    handleChangePass = e => this.setState({ pass: e.target.value });

    handleChangePass2 = e => this.setState({ confirmPass: e.target.value });

    handleChangePhone = e => this.setState({ phone: e.target.value });

    handleChangeService = e => this.setState({ service: e.target.value });

    handleChangeProfession = e => this.setState({ profession: e.target.value });

    handleChangeFunction = e => this.setState({ $function: e.target.value });

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ loading: true });
        const { pass, confirmPass, error, email } = this.state;
        if (pass !== confirmPass)
            this.setState({
                error: [...error, 'Senhas Diferentes'],
                matchPass: false
            });
        else this.setState({ matchPass: true });
        if (!EmailValidator.validate(email))
            this.setState({
                error: [...error, 'Email inválido'],
                matchEmail: false
            });
        else this.setState({ matchEmail: true });

        this.setState({
            loading: false
        });
    };

    render() {
        const {
            fullName,
            email,
            pass,
            confirmPass,
            phone,
            service,
            profession,
            $function,
            loading,
            matchPass,
            matchEmail
        } = this.state;
        const listService = [
            'CRAS',
            'Clínica da Família',
            'Escola A',
            'Escola B',
            'CApsi',
            'ONG A',
            'ONG B'
        ];
        const listFunction = [
            'Fazer Triagem',
            'Visita aos usuários',
            'Psicólogo'
        ];
        return (
            <Forms onSubmit={this.handleSubmit}>
                <h1>Cuidado Colaborativo</h1>
                <ul>
                    <li>
                        <Inputed
                            value={fullName}
                            onChange={this.handleChangeName}
                            nomeCampo="Nome Completo"
                        />
                    </li>
                    <li>
                        <MissInputed
                            value={email}
                            onChange={this.handleChangeEmail}
                            nomeCampo="Email"
                            match={matchEmail}
                            type="email"
                        />
                    </li>
                    <li>
                        <MissInputed
                            value={pass}
                            onChange={this.handleChangePass}
                            nomeCampo="Senha"
                            match={matchPass}
                            type="password"
                        />
                    </li>
                    <li>
                        <MissInputed
                            value={confirmPass}
                            onChange={this.handleChangePass2}
                            nomeCampo="Confirmação da Senha"
                            match={matchPass}
                            type="password"
                        />
                    </li>
                    <li>
                        <Inputed
                            value={phone}
                            onChange={this.handleChangePhone}
                            nomeCampo="Telefone"
                        />
                    </li>
                    <li>
                        <DropdownInput
                            value={service}
                            onChange={this.handleChangeService}
                            nomeCampo="Serviço"
                            list={listService}
                        />
                    </li>
                    <li>
                        <Inputed
                            value={profession}
                            onChange={this.handleChangeProfession}
                            nomeCampo="Formação"
                        />
                    </li>
                    <li>
                        <DropdownInput
                            value={$function}
                            onChange={this.handleChangeFunction}
                            nomeCampo="Função"
                            list={listFunction}
                        />
                    </li>
                </ul>
                {!matchEmail ? <h2> Email inválido</h2> : null}
                {!matchPass ? <h2> Senhas incorretas</h2> : null}
                <ButtonSubmit load={loading}> Solicitar Cadastro </ButtonSubmit>
            </Forms>
        );
    }
}

function Inputed({ value, onChange, nomeCampo }) {
    return (
        <>
            <Organization>
                <h2> {nomeCampo} </h2>
            </Organization>
            <Input value={value} onChange={onChange} />
        </>
    );
}

Inputed.propTypes = {
    nomeCampo: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

function MissInputed({ value, onChange, nomeCampo, match, type }) {
    return (
        <>
            <Organization>
                <h2> {nomeCampo} </h2>
            </Organization>
            <MissInput
                match={match}
                value={value}
                onChange={onChange}
                type={type}
            />
        </>
    );
}

MissInputed.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    nomeCampo: PropTypes.string.isRequired,
    match: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired
};

function DropdownInput({ value, onChange, nomeCampo, list }) {
    return (
        <>
            <Organization>
                <h2> {nomeCampo} </h2>
            </Organization>
            <div>
                <Select value={value} onChange={onChange}>
                    {list.map(item => (
                        <option key={item}> {item} </option>
                    ))}
                </Select>
            </div>
        </>
    );
}

DropdownInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    nomeCampo: PropTypes.string.isRequired,
    list: PropTypes.object.isRequired
};
