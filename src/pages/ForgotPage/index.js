import React, {Component} from 'react';
import './styles.js';
import { Forms, Input } from './styles';
import {ButtonSubmit, Organization} from '../../components/styles'



export default class Register extends Component{
    state={
       
        email:"",
       match: true,
        loading: false,
        error:[],
       
    }; 

alerta = () =>{
    alert("E-mail enviado!")
};

handleChangeEmail= e =>{
    this.setState({email: e.target.value})
};

handleSubmit = e =>{
    e.preventDefault();
    this.setState({loading: true});
    if (this.state.pass !== this.state.confirmPass)
        this.setState({error: [...this.state.error, "Senhas Diferentes"]})
    else


    console.log(this.state)

    this.setState({
       
        email:"",
       
        loading: false,
    });

}

    render(){
        const {email, loading, match}= this.state;

        return(
                <>
               
                <Forms onSubmit={this.handleSubmit}>
                    <h1>Cuidado Colaborativo</h1>
                    <ul>
                       
                      
                        <li>
                            <br>
                            </br>
                            <br>
                            </br>
                            <br>
                            </br>
                        <Organization>
                           
                           
                        </Organization>
                        <Input
                        placeholder="Digite seu e-mail cadastrado"
                        match={match}
                        value= {email}
                        onChange={this.handleChangeEmail}/></li>
                        
                     
                    </ul>

            
                 
                  <ButtonSubmit onClick={this.alerta} load={loading}> Enviar Email </ButtonSubmit>
             

                </Forms>

            </>
        )
    }
}