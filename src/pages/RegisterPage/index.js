import React, {Component} from 'react';
import { Forms, MissInput, Select } from './styles';
import {ButtonSubmit, Organization, Input} from '../../components/styles'


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

    //criar verificador de email

    this.setState({error: [], match: true})

    console.log(this.state)

    this.setState({
        pass:"",
        confirmPass:"",
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
                            <MissInputed value={pass} onChange= {this.handleChangePass} nome_campo= 'Senha' match={match_pass} /></li>
                        <li>
                            <MissInputed value={confirmPass} onChange= {this.handleChangePass2} nome_campo= 'Confirmação da Senha' match={match_pass} /></li>
                        <li>
                             <Inputed value={phone} onChange= {this.handleChangePhone} nome_campo= 'Telefone'/></li>
                        <li>
                            <DropdownInput value={service} onChange= {this.handleChangeService} nome_campo= 'Serviço' list={list_service}/></li>
                        <li>
                            <Inputed value={profession} onChange= {this.handleChangeProfession} nome_campo= 'Formação'/></li>
                        <li>
                            <DropdownInput value={$function} onChange= {this.handleChangeService} nome_campo= 'Função' list={list_function}/></li>
                    </ul>
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

class DropdownInput extends Component{
    render(){
        const {value, onChange, nome_campo, list} = this.props;
        return(
            <>
                 <Organization>
                    <h2> {nome_campo} </h2>
                </Organization>
                <Select value= {value} onChange={onChange}>
                    {list.map(item=>
                    <option key= {item}> {item} </option>
                    )}
                </Select>
            </>
        )
    }
}