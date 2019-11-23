import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FiLoader} from 'react-icons/fi';

import api from '../../services/api';
import {Input, Form } from './styles.js';
import {Button, ButtonSubmit, Organization} from '../../components/styles';


export default class Login extends Component{
    state={
        email:'',
        password: '',
        loading: false,
        match: true,
    };

handleEmailChange= e =>{
    this.setState({email: e.target.value});
};

handlePassChange= e =>{
   this.setState({password: e.target.value})
};

handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading: true})

    const teste= await api.get('./repos/facebook/react');

    const email = this.state.email;

    console.log(this.state, teste);

    if (email === '1234')
        this.setState({match: false});
    else
        this.setState({match: true});
    this.setState({
        email:'',
        password: '',
        loading: false,
    })
};

    render(){
        const {email, loading, password, match}= this.state;

    return(
        <>
            <Form onSubmit={this.handleSubmit} >
                <h1> Cuidado Colaborativo</h1>
                <Organization>
                    <h2> Email: </h2>
                </Organization>
                <Input
                match={match}
                type= 'text'
                value={email}
                onChange={this.handleEmailChange}
                 />
                <Organization>
                    <h2> Senha: </h2>
                    <Link to="/recuperacao-senha"> Esqueceu a senha? </Link>
                </Organization>
                <Input
                match={match}
                type ='password'
                value={password}
                onChange={this.handlePassChange}
                />
                <Link to="/home"> <ButtonSubmit load={loading}>
                    {loading ? <FiLoader color="#FFF" size= "13"/> : "Login"}
                </ButtonSubmit> </Link>
                <h3> Não possui cadastro? </h3>
                <Link to="/cadastro" >  <Button> Solicitar cadastro  </Button></Link>
            </Form>
        </>
        );
    }
}