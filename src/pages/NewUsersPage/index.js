import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MemberActions from '../../store/modules/member/actions';
import MenuAdmin from '../../components/Menu_admin/index';
import { Organization, Card } from './styles.js';
import api from '../../services/api.js';

class newUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        api.get('/')
            .then(response => {
                this.data = response.data;
            })
            .catch(() => {
                this.setState({
                    data: [
                        {
                            nome: 'Psi 1',
                            email: 'psi1@mail.com',
                            telefone: '12345-1234',
                            servico: {
                                Id: 1,
                                nome: 'Capsi'
                            },
                            profissao: 'Psicologa',
                            funcao: { Id: 1, nome: 'psicanalista pediatrico' }
                        },
                        {
                            nome: 'Psi 2',
                            email: 'psi2@mail.com',
                            telefone: '15685-1234',
                            servico: {
                                Id: 2,
                                nome: 'Clinida da Familia'
                            },
                            profissao: 'Enfermeira',
                            funcao: { Id: 2, nome: 'Plantonista' }
                        }
                    ]
                });
            });
    }

    handleAddUser = memberData => {
        const { dispatch } = this.props;
        dispatch(MemberActions.addNewMember(memberData.email, memberData.nome));
    };

    render() {
        const data = this.state;
        return (
            <Organization>
                <h1> Membros novos </h1>
                {data.data.map(memberData => (
                    <Card key={memberData.nome}>
                        <ul>
                            <li>Nome: {memberData.nome} </li>
                            <li>Email: {memberData.email}</li>
                            <li>Telefone: {memberData.telefone}</li>
                            <li>Serviço: {memberData.servico.nome}</li>
                            <li>Formação: {memberData.profissao}</li>
                            <li>Função: {memberData.funcao.nome}</li>
                        </ul>
                        <button
                            type="button"
                            onClick={() => this.handleAddUser(memberData)}
                        >
                            Adicionar
                        </button>
                        <button type="button"> Excluir </button>
                    </Card>
                ))}
                <MenuAdmin />
            </Organization>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(MemberActions, dispatch);

export default connect(mapDispatchToProps)(newUsers);
