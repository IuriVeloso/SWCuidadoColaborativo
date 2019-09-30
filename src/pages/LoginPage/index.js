import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FiLoader} from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/logo.png';
import {Organization, Input, Form } from './styles.js';
import {Button, ButtonSubmit, Image} from '../../components/Components/styles';


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
                <Image src={logo} alt="logo"/>
                <Input
                match={match}
                type= 'text'
                placeholder= 'Email'
                value={email}
                onChange={this.handleEmailChange}
                 />

                <Input
                match={match}
                type ='password'
                placeholder="Senha"
                value={password}
                onChange={this.handlePassChange}
                />
                    <ButtonSubmit load={loading}>
                    {loading ? <FiLoader color="#FFF" size= "13"/> : "Login"}
                     </ButtonSubmit>
                <Organization>
                    <Link to="/cadastro" >  <Button> Solicitar cadastro  </Button></Link>
                    <Link to="/recuperacao-senha"> <Button> Recuperar senha </Button> </Link>
                </Organization>
            </Form>
        </>
        );
    }
}