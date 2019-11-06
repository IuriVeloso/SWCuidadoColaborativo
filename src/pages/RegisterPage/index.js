import React, {Component} from 'react';
import './styles.js';
import { Forms, Input, Organization } from './styles';
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
        match: true,
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
        loading: false,
    });

}

    render(){
        const {fullName, email, pass, confirmPass, phone, service, profession, $function, loading, match}= this.state;

        return(
                <Forms onSubmit={this.handleSubmit} >
                    <h1>Cuidado Colaborativo</h1>
                    <ul>
                        <li>
                        <Organization>
                            <h2> Nome Completo </h2>
                        </Organization>
                        <Input
                        match={match}
                        value= {fullName}
                        onChange={this.handleChangeName}
                        /></li>
                        <li>
                        <Organization>
                            <h2> Email </h2>
                        </Organization>
                        <Input
                        match={match}
                        value= {email}
                        onChange={this.handleChangeEmail}/></li>
                        <li>
                        <Organization>
                            <h2> Senha </h2>
                        </Organization>
                        <Input
                        match={match}
                        value= {pass}
                        onChange={this.handleChangePass}/></li>
                        <li>
                        <Organization>
                            <h2> Confirmação de Senha </h2>
                        </Organization>
                        <Input
                        match={match}
                        value= {confirmPass}
                        onChange={this.handleChangePass2}/></li>
                        <li>
                        <Organization>
                            <h2> Telefone </h2>
                        </Organization>
                        <Input
                        match={match}
                        value= {phone}
                        onChange={this.handleChangePhone}/></li>
                        <li>
                        <Organization>
                            <h2> Serviço </h2>
                        </Organization>
                        <Input
                        match={match}
                        value= {service}
                        onChange={this.handleChangeService}/></li>
                        <li>
                        <Organization>
                            <h2> Profissão </h2>
                        </Organization>
                        <Input
                        match={match}
                        value= {profession}
                        onChange={this.handleChangeProfession}/></li>
                        <li>
                        <Organization>
                            <h2> Função </h2>
                        </Organization>
                        <Input
                        match={match}
                        value= {$function}
                        onChange={this.handleChange}/></li>
                    </ul>
                    <ButtonSubmit load={loading}> Solicitar Cadastro </ButtonSubmit>
                </Forms>

        )
    }
}