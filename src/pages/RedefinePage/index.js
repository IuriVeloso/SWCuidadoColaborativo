import React, {Component} from 'react';
import './styles.js';
import { Forms, MissInput, } from './styles';
import {ButtonSubmit, Organization} from '../../components/styles'



export default class Register extends Component{
    state={
     
        pass:"",
        confirmPass:"",
        loading: false,
        error:[],
        match: true,
    };

handleChangePass= e =>
    this.setState({pass: e.target.value});

handleChangePass2= e =>
    this.setState({confirmPass: e.target.value})

 

    handleSubmit = e =>{
        e.preventDefault();
        this.setState({loading: true});
        if (this.state.pass !== this.state.confirmPass)
            this.setState({error: [...this.state.error, 'Senhas Diferentes'], match: false})
        else
            this.setState({error: [], match: true})
    
        console.log(this.state)
    
        this.setState({
            pass:"",
            confirmPass:"",
            loading: false,
        });
    }

    render(){
        const {pass, confirmPass, loading, match}= this.state;

        return(
        
                <Forms onSubmit={this.handleSubmit} >
                    <h1>Cuidado Colaborativo</h1>
                    <ul>
                       
                        <li>
                           
                            <MissInputed value={pass} onChange= {this.handleChangePass} nome_campo= 'Senha' match={match} /></li>
                        <li>
                            <MissInputed value={confirmPass} onChange= {this.handleChangePass2} nome_campo= 'Confirmação da Senha' match={match} /></li>
                        
                       
                    </ul>
                    <ButtonSubmit load={loading}> Redefinir Senha </ButtonSubmit>
                </Forms>

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
