import React, {Component} from 'react';
import './styles.js';
import { Forms, Input } from './styles';
import {ButtonSubmit} from '../../components/Components/styles'


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
    };

handleChangeName= e =>{
    this.setState({fullName: e.target.value});
};

handleChangeEmail= e =>{
    this.setState({email: e.target.value})
};

handleChangePass= e =>{
    this.setState({pass: e.target.value});
};

handleChangePass2= e =>{
    this.setState({confirmPass: e.target.value})

};

handleChangePhone= e =>{
    this.setState({phone: e.target.value});
};

handleChangeService= e =>{
    this.setState({service: e.target.value})
};

handleChangeProfession= e =>{
    this.setState({profession: e.target.value});
};

handleChangeFunction= e =>{
    this.setState({function : e.target.value})
};

handleSubmit = e =>{
    e.preventDefault();
    this.setState({loading: true});
    if (this.state.pass !== this.state.confirmPass)
        this.setState({error: [...this.state.error, "Senhas Diferentes"]})
    else


    console.log(this.state)

    this.setState({
        fullName: "",
        email:"",
        pass:"",
        confirmPass:"",
        phone:"",
        service:"",
        profession: "",
        function:"",
        loading: false});

}

    render(){
        const {fullName, email, pass, confirmPass, phone, service, profession, $function, loading}= this.state;

        return(
                <Forms onSubmit={this.handleSubmit} >
                    <ul>
                        <li><Input
                        placeholder="Nome Completo"
                        value= {fullName}
                        onChange={this.handleChangeName}
                        /></li>
                        <li><Input placeholder= "Email"
                        value= {email}
                        onChange={this.handleChangeEmail}/></li>
                        <li><Input placeholder= "Senha"
                        value= {pass}
                        onChange={this.handleChangePass}/></li>
                        <li><Input placeholder= "Confirmação de Senha"
                        value= {confirmPass}
                        onChange={this.handleChangePass2}/></li>
                        <li><Input placeholder= "Telefone"
                        value= {phone}
                        onChange={this.handleChangePhone}/></li>
                        <li><Input placeholder= "Serviço"
                        value= {service}
                        onChange={this.handleChangeService}/></li>
                        <li><Input placeholder= "Profissão"
                        value= {profession}
                        onChange={this.handleChangeProfession}/></li>
                        <li><Input placeholder= "Função"
                        value= {$function}
                        onChange={this.handleChange}/></li>
                    </ul>
                    <ButtonSubmit load={loading}> Solicitar Cadastro </ButtonSubmit>
                </Forms>

        )
    }
}