import React, {Component} from 'react';
import {ButtonSubmit, Organization} from '../../components/styles'
import {Input, MissInput, Forms, Select } from './styles';
import PropTypes from 'prop-types';
import * as EmailValidator from 'email-validator';

export default class Register extends Component{
    state={
        fullName: "",
        email:"",
        pass:"",
        confirmPass:"",
        phone:"",
        service:"",
        profession: "",
        function:"",
        loading: false,
        error:[],
        match_pass: true,
        match_email: true,
    };

handleChangeName= e =>
    this.setState({fullName: e.target.value});

handleChangeEmail= e =>
    this.setState({email: e.target.value})

handleChangePass= e =>
    this.setState({pass: e.target.value});

handleChangePass2= e =>
    this.setState({confirmPass: e.target.value})

handleChangePhone= e =>
    this.setState({phone: e.target.value});

handleChangeService= e =>
    this.setState({service: e.target.value})

handleChangeProfession= e =>
    this.setState({profession: e.target.value});

handleChangeFunction= e =>
    this.setState({function : e.target.value})

handleSubmit = e =>{
    e.preventDefault();
    this.setState({loading: true});
    if (this.state.pass !== this.state.confirmPass)
        this.setState({error: [...this.state.error, 'Senhas Diferentes'], match_pass: false})
    else
        this.setState({match_pass:true})
    if (!EmailValidator.validate(this.state.email))
        this.setState({error: [...this.state.error, 'Email inválido'], match_email: false})
    else
        this.setState({match_email:true})
    console.log(this.state)

    this.setState({
        loading: false,
    });
}

    render(){
        const {fullName, email, pass, confirmPass, phone, service, profession, $function, loading, match_pass, match_email} = this.state;
        const list_service= ["CRAS", "Clínica da Família", "Escola A", "Escola B", "CApsi", "ONG A", "ONG B"];
        const list_function= ["Fazer Triagem", "Visita aos usuários", "Psicólogo"]
        return(
                <Forms onSubmit={this.handleSubmit} >
                    <h1>Cuidado Colaborativo</h1>
                    <ul>
                        <li>
                            <Inputed value={fullName} onChange= {this.handleChangeName} nome_campo= 'Nome Completo'/></li>
                        <li>
                            <MissInputed value={email} onChange= {this.handleChangeEmail} nome_campo= 'Email' match={match_email}  /></li>
                        <li>
                            <MissInputed value={pass} onChange= {this.handleChangePass} nome_campo= 'Senha' match={match_pass} type="password" /></li>
                        <li>
                            <MissInputed value={confirmPass} onChange= {this.handleChangePass2} nome_campo= 'Confirmação da Senha' match={match_pass} type="password"/></li>
                        <li>
                             <Inputed value={phone} onChange= {this.handleChangePhone} nome_campo= 'Telefone'/></li>
                        <li>
                            <DropdownInput value={service} onChange= {this.handleChangeService} nome_campo= 'Serviço' list={list_service}/></li>
                        <li>
                            <Inputed value={profession} onChange= {this.handleChangeProfession} nome_campo= 'Formação'/></li>
                        <li>
                            <DropdownInput value={$function} onChange= {this.handleChangeService} nome_campo= 'Função' list={list_function}/></li>
                    </ul>
                    {!match_email ? <h2> Email inválido</h2> : null}
                    {!match_pass ? <h2> Senhas incorretas</h2> : null}
                    <ButtonSubmit load={loading}> Solicitar Cadastro </ButtonSubmit>
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

Inputed.propTypes={
    nome_campo: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

class MissInputed extends Component{
    render(){
        const {value, onChange, nome_campo, match} = this.props;
        return(
            <>
            <Organization>
                <h2> {nome_campo} </h2>
            </Organization>
            <MissInput
                match={match}
                value= {value}
                onChange={onChange}/>
            </>
        )
    }
}

MissInputed.propTypes={
    value : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    nome_campo : PropTypes.string.isRequired,
    match : PropTypes.bool.isRequired
};

class DropdownInput extends Component{
    render(){
        const {value, onChange, nome_campo, list} = this.props;
        return(
            <>
                 <Organization>
                    <h2> {nome_campo} </h2>
                </Organization>
               <div>
                <Select value= {value} onChange={onChange}>
                    {list.map(item=>
                    <option key= {item}> {item} </option>
                    )}
                </Select>
                </div>
            </>
        )
    }
}

DropdownInput.propTypes={
    value : PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    nome_campo: PropTypes.string.isRequired,
    list: PropTypes.object.isRequired
}