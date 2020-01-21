import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Forms, Text, Posi, Organization, Input, Box } from './styles.js';
import {Button, ButtonSubmit,  } from '../../components/styles';


export default class Register extends Component{
    state={
        pacient:"",
        nis:"",
        any:"",
        loading: false,
        error:[],
      
    };

handleChangePacient= e =>
    this.setState({pacient: e.target.value});

handleChangeNis= e =>
    this.setState({nis: e.target.value});

handleChangeAny= e =>
    this.setState({any: e.target.value});

    render(){
        const {pacient, any, nis, loading} = this.state;
        return(
                <Forms onSubmit={this.handleSubmit} > 
                    
                <Organization>
                <ul>  <li>
                            <Text>Paciente </Text>
                       </li>
                        <li>
                            <Text>Nome: {this.pacient}</Text>
                       </li>
                        <li>
                             <Text>Nis: {this.nis} </Text>
                        </li>     
                      
                    </ul>
                    <Posi>
                          <Link to=""> Mais informações </Link>
                    </Posi>
 
                   <Box>
                   <ul>
                        <li>
                            <Inputed value={any} onChange= {this.handleChangeAny} nome_campo= ''/></li>
                        

                    </ul>

                    </Box>
                   
                    
                   

                   </Organization>
                  
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