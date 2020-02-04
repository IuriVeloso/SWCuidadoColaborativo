import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Forms, Text, Text2, Posi, Organization, Input, Box } from './styles.js';
import {Button, ButtonSubmit,  } from '../../components/styles';
import Menu from '../../components/Menu/index';
import MenuAdmin from '../../components/Menu_admin/index'


export default class Register extends Component{
    state={
        pacient:"",
        nis:"",
        any:"",
        loading: false,
        error:[],

    };

handleChangePacient= e =>
    this.setState({pacient: e.target.value});

handleChangeNis= e =>
    this.setState({nis: e.target.value});

handleChangeAny= e =>
    this.setState({any: e.target.value});

    render(){
        const {pacient, any, nis, loading} = this.state;
        const admin=true;
        return(
                <Forms onSubmit={this.handleSubmit} >
                <Organization>
                    <ul>
                    <ul>
                      <li>
                            <Text2>Paciente </Text2>
                      </li>
                       <li>
                            <Text>Id: </Text>
                       </li>
                       <li>
                            <Text>Nome: </Text>
                       </li>
                       <li>
                            <Text>Apelido:</Text>
                       </li>
                       <li>
                            <Text>Responsável: </Text>
                       </li>
                       <li>
                            <Text>Relação do Responsável: </Text>
                       </li>
                       <li>
                            <Text>Território: </Text>
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
                            <Text>NIS:</Text>
                       </li>
                       <li>
                            <Text>Resumo do Caso: </Text>
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
                            <Text>Quem cadastrou: {this.pacient}</Text>
                       </li>
                       <li>
                            <Text>Data de nascimento:</Text>
                       </li>
                    </ul>
                    <Posi>
                          <Link to=""> Mais informações </Link>
                    </Posi>

                   <Box>
<<<<<<< Updated upstream

                            <Inputed value={any} onChange= {this.handleChangeAny} nome_campo= ''/>

=======

                            <Inputed value={any} onChange= {this.handleChangeAny} nome_campo= ''/>


>>>>>>> Stashed changes


                    </Box>

                   </Organization>
                     {admin ? <MenuAdmin/>:<Menu/>}
                </Forms>


        )
    }
}
class Inputed extends Component{
    render(){
        const {value, onChange, nome_campo} = this.props;
        return(
        <>
            <Organization>
                <h2> {nome_campo} </h2>
            </Organization>
            <Input
            value= {value}
            onChange={onChange}


            />
        </>
        )
    }
}