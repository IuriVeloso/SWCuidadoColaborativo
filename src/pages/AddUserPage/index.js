import React, { Component } from 'react';
import { ButtonSubmit } from '../../components/styles';
import Menu from '../../components/Menu/index';
import MenuAdmin from '../../components/Menu_admin/index';
import { Input, Textarea, Forms, Select, Organization } from './styles';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            mother: '',
            name: '',
            birth: '',
            responsible: '',
            adress: '',
            point: '',
            unity: '',
            territory: '',
            nickname: '',
            summary: '',
            loading: false
        };
    }

    handleChangeFullName = e => this.setState({ fullName: e.target.value });

    handleChangeMother = e => this.setState({ mother: e.target.value });

    handleChangeName = e => this.setState({ name: e.target.value });

    handleChangeBirth = e => this.setState({ birth: e.target.value });

    handleChangeResponsible = e => this.setState({ responsible: e.target.value });

    handleChangeAdress = e => this.setState({ adress: e.target.value });

    handleChangePoint = e => this.setState({ point: e.target.value });

    handleChangeUnity = e => this.setState({ unity: e.target.value });

    handleChangeTerritory = e => this.setState({ territory: e.target.value });

    handleChangeNickname = e => this.setState({ nickname: e.target.value });

    handleChangeSummary = e => this.setState({ summary: e.target.value });

    render() {
        const {
            fullName,
            mother,
            name,
            birth,
            responsible,
            adress,
            point,
            unity,
            territory,
            nickname,
            summary,
            loading
        } = this.state;
        const admin = true;
        const listUnity = [
            'CRAS',
            'Clínica da Família',
            'Escola A',
            'Escola B',
            'CApsi',
            'ONG A',
            'ONG B'
        ];
        const listTerritory = ['Dona Marta', 'Pavão', 'Pavãozinho'];
        const listResponsible = [
            'Responsável Legal',
            'Mãe',
            'Pai',
            'Instituição'
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
                            value={fullName}
                            onChange={this.handleChangeFullName}
                            nome_campo="Nome Completo"
                        />
                    </li>
                    <li>
                        <Inputed
                            value={nickname}
                            onChange={this.handleChangeNickname}
                            nome_campo="Apelido"
                        />
                    </li>
                    <li>
                        <DropdownInput
                            value={responsible}
                            onChange={this.handleChangeResponsible}
                            nome_campo="Responsável"
                            list={listResponsible}
                        />
                    </li>
                    <li>
                        <Inputed
                            value={name}
                            onChange={this.handleChangeName}
                            nome_campo="Nome do Responsável"
                        />
                    </li>
                    <li>
                        <DropdownInput
                            value={territory}
                            onChange={this.handleChangeTerritory}
                            nome_campo="Território"
                            list={listTerritory}
                        />
                    </li>
                    <li>
                        <Inputed
                            value={adress}
                            onChange={this.handleChangeAdress}
                            nome_campo="Endereço"
                        />
                    </li>
                    <li>
                        <Inputed
                            value={point}
                            onChange={this.handleChangePoint}
                            nome_campo="Ponto de Referência"
                        />
                    </li>
                    <li>
                        <DropdownInput
                            value={unity}
                            onChange={this.handleChangeUnity}
                            nome_campo="Unidade de Referência"
                            list={listUnity}
                        />
                    </li>
                    <li>
                        <Inputed3
                            value={birth}
                            onChange={this.handleChangeBirth}
                            nome_campo="Data de Nascimento"
                        />
                    </li>
                    <li>
                        <Inputed
                            value={mother}
                            onChange={this.handleChangeMother}
                            nome_campo="Mãe"
                        />
                    </li>
                    <li>
                        <Inputed2
                            value={summary}
                            onChange={this.handleChangeSummary}
                            nome_campo="Resumo do Caso"
                        />
                    </li>
                </ul>
                <ButtonSubmit load={loading}> Adicionar Paciente </ButtonSubmit>
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
                <Input value={value} onChange={onChange} />
            </>
        );
    }
}
class Inputed2 extends Component {
    render() {
        const { value, onChange, nome_campo } = this.props;
        return (
            <>
                <Organization>
                    <h2> {nome_campo} </h2>
                </Organization>
                <Textarea value={value} onChange={onChange} />
            </>
        );
    }
}
class Inputed3 extends Component {
    render() {
        const { value, onChange, nome_campo } = this.props;
        return (
            <>
                <Organization>
                    <h2> {nome_campo} </h2>
                </Organization>
                <Input value={value} onChange={onChange} type="date" />
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
}
