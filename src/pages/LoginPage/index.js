import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as EmailValidator from 'email-validator';
import {FiLoader} from 'react-icons/fi';

import api from '../../services/api';
import {Input, Form } from './styles.js';
import {Button, ButtonSubmit, Organization} from '../../components/styles';


export default class Login extends Component{
    state={
        email:'',
        password: '',
        loading: false,
        match_email: true,
        match_password: true
    };

handleChange= (e) =>{
    this.setState({ [e.target.name]: e.target.value})
};

handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading: true})

    const teste= await api.get('');

    const email = this.state.email;

    console.log(teste);

    if (!EmailValidator.validate(email))
        this.setState({match_email: false});
    else
        this.setState({match_email: true});

    this.setState({
        email:'',
        password: '',
        loading: false,
    })
};

    render(){
        const {email, loading, password, match_email, match_password}= this.state;

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
            <Link to="/cadastro" > <Button type="button">  Solicitar cadastro  </Button></Link>

                <Inputed match={match_email} type='text' nomeCampo='Email:' value={email} handleChange={(email)=>this.handleChange(email)} name='email' />
                <Inputed match={match_password} type='password' nomeCampo='Senha:' value={password} handleChange={(password)=>this.handleChange(password)} name='password'/>
                <ButtonSubmit load={loading} >
                    <Link to='/home'>
                        {loading ? <FiLoader color="#FFF" size= "13"/> : "Login"}
                    </Link>
                </ButtonSubmit>
                {!match_email ? <h2> Email inválido</h2> : null}
                <h3> Não possui cadastro? </h3>
                <Link to="/cadastro" >
                    <Button type="button">  Solicitar cadastro </Button>
                </Link>

            </Form>
        </>
        );
    }
}

class Inputed extends Component {
    render(){
        const {match, type, value, handleChange, name, nomeCampo} = this.props;
        return(
            <>
                <Organization>
                    <h2> {nomeCampo} </h2>
                    {type === 'password' ? <Link to="/recuperacao-senha"> Esqueceu a senha? </Link> : null}
                </Organization>
                <Input
                    match={match}
                    type= {type}
                    value={value}
                    onChange={handleChange}
                    name={name}
                />
            </>
        )}
}

Inputed.propTypes={
    match: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};