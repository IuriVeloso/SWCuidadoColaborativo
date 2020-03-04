import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonSubmit } from '../../components/styles';
import Menu from '../../components/Menu/index';
import MenuAdmin from '../../components/Menu_admin/index';
import { Input, Forms, Select, Organization, ButtonSubmit2 } from './styles';

export default class Register extends Component {
    state = {
        pacient: '',
        search: '',
        loading: false,
        error: []
    };

    handleChangeSearch = e => this.setState({ search: e.target.value });

    handleChangePacient = e => this.setState({ pacient: e.target.value });

    render() {
        const { search, pacient, loading } = this.state;
        const admin = true;
        const list_pacient = [
            'Nome',
            'Data de nascimento',
            'Apelido',
            'Território',
            'Nome da Mãe'
        ];
        return (
            <Forms onSubmit={this.handleSubmit}>
                <Organization>
                    {' '}
                    <h1>Cuidado Colaborativo</h1>{' '}
                </Organization>

                <ul>
                    <li>
                        <Inputed
                            value={pacient}
                            onChange={this.handleChangePacient}
                            nome_campo="Procurar Usuários"
                        />
                    </li>
                    <li>
                        <DropdownInput
                            value={search}
                            onChange={this.handleChangeSearch}
                            nome_campo="Procurar por"
                            list={list_pacient}
                        />
                    </li>
                </ul>
                <ButtonSubmit load={loading}> Pesquisar </ButtonSubmit>
                <Link to="adicionar-usuário">
                    {' '}
                    <ButtonSubmit2 load={loading}>
                        {' '}
                        Adicionar Usuários{' '}
                    </ButtonSubmit2>
                </Link>
                {admin ? <MenuAdmin /> : <Menu />}
            </Forms>
        );
    }
}

class Inputed extends Component {
    render() {
        const { value, onChange, nome_campo } = this.props;
        return (
            <>
                <Organization>
                    <h2> {nome_campo} </h2>
                </Organization>
                <Input value={value} onChange={onChange} type="search" />
            </>
        );
    }
}
class DropdownInput extends Component {
    render() {
        const { value, onChange, nome_campo, list } = this.props;
        return (
            <>
                <Organization>
                    <h2> {nome_campo} </h2>
                    <div>
                        <Select value={value} onChange={onChange}>
                            {list.map(item => (
                                <option key={item}> {item} </option>
                            ))}
                        </Select>
                    </div>{' '}
                </Organization>
            </>
        );
    }
}
