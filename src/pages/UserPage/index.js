import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Forms, Text, Text2, Organization, Input, Box } from './styles.js';
// import {Button, ButtonSubmit,  } from '../../components/styles';
import Menu from '../../components/Menu/index';
import MenuAdmin from '../../components/Menu_admin/index';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pacient: '',
            nis: '',
            any: '',
            show: false
        };
    }

    handleChangePacient = e => this.setState({ pacient: e.target.value });

    handleChangeNis = e => this.setState({ nis: e.target.value });

    handleChangeAny = e => this.setState({ any: e.target.value });

    showInfo = show => this.setState({ show: !show });

    render() {
        const { pacient, any, nis, show } = this.state;
        const admin = true;
        return (
            <Forms onSubmit={this.handleSubmit}>
                <Organization>
                    <ul>
                        <ul>
                            <li>
                                <Text2>Usuário </Text2>
                            </li>
                            <li>
                                <Text>Nome: {pacient}</Text>
                            </li>
                            <li>
                                <Text>Apelido: </Text>
                            </li>
                            <li>
                                <Text>Território: </Text>
                            </li>
                            <li>
                                <Text>Resumo do Caso: </Text>
                            </li>
                            {show && (
                                <>
                                    {' '}
                                    <li>
                                        <Text>Relação do Responsável: </Text>
                                    </li>
                                    <li>
                                        <Text>Responsável: </Text>
                                    </li>
                                    <li>
                                        <Text>Benefícios: </Text>
                                    </li>
                                    <li>
                                        <Text>Equipe CF/CMS:</Text>
                                    </li>
                                    <li>
                                        <Text>Endereço:</Text>
                                    </li>
                                    <li>
                                        <Text>Ponto de Referência:</Text>
                                    </li>
                                    <li>
                                        <Text>Escola: </Text>
                                    </li>
                                    <li>
                                        <Text>NIS:{nis}</Text>
                                    </li>
                                    <li>
                                        <Text>Profissional no cras: </Text>
                                    </li>
                                    <li>
                                        <Text>Nome da mãe: </Text>
                                    </li>
                                    <li>
                                        <Text>Referência no capsi:</Text>
                                    </li>
                                    <li>
                                        <Text>Nome do pai: </Text>
                                    </li>
                                    <li>
                                        <Text>
                                            Quem cadastrou: {this.pacient}
                                        </Text>
                                    </li>
                                    <li>
                                        <Text>Data de nascimento:</Text>
                                    </li>
                                </>
                            )}
                        </ul>
                        <button
                            type="button"
                            onClick={() => this.showInfo(show)}
                        >
                            Mais informações
                        </button>
                    </ul>
                    <Box>
                      
                    </Box>
                </Organization>
                {admin ? <MenuAdmin /> : <Menu />}
            </Forms>
        );
    }
}

function Inputed({ value, onChange }) {
    return (
        <>
            <Input value={value} onChange={onChange} />
        </>
    );
}

Inputed.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
