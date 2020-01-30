import React, {Component} from 'react';
import './styles.js';
import { Forms, Input } from './styles';
import PropTypes from 'prop-types';
import * as EmailValidator from 'email-validator';
import {ButtonSubmit, Organization} from '../../components/styles'



export default class Register extends Component{
    state={
       
        email:"",
        match: true,
        loading: false,
        error:[],

       
    }; 



handleChange=  (e) =>{
    this.setState({ [e.target.name]: e.target.value})
};

handleSubmit = async e =>{
    e.preventDefault();
    this.setState({loading: true});

    const email = this.state;

    if (!EmailValidator.validate(this.state.email))
        this.setState({match: false});
        

    else{
        this.setState({match: true, loading:false, email: ''});
        return alert("E-mail enviado");
    }
  };


    render(){
        const {email, loading, match}= this.state;

        return(
                <>
               
                <Forms onSubmit={this.handleSubmit}>
                    <h1>Cuidado Colaborativo</h1>
                      
                        <Inputed match={match} type='text'  nomeCampo='' value={email} handleChange={(email)=>this.handleChange(email)} name='email' />
             
                     {!match ? <h2> Email inválido</h2> : null}

                  <ButtonSubmit   > Enviar Email </ButtonSubmit>
               
              
                  
             

                </Forms>

            </>
        )
    }
}

class Inputed extends Component {
    render(){
        const {match, type, value, handleChange, name, nomeCampo} = this.props;
        return(
            <>
                <Organization>
                    <h2> {nomeCampo} </h2>
                </Organization>
                <Input
                    match={match}
                    type= {type}
                    value={value}
                    onChange={handleChange}
                    name={name}
                    placeholder="Digite o e-mail cadastrado"
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