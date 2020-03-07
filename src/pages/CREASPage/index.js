import React, { Component } from 'react';



import Menu from '../../components/Menu/index';
import MenuAdmin from '../../components/Menu_admin/index';
import { CREAS, Org1, Organization} from './styles';

export default class CREASPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           nome:''
        };
    }
    handleChangeNome = e => this.setState({ nome: e.target.value });

    render() {
        const {nome}=this.state;
        const admin = true;
        return ( 
            <>  
            <Organization>
                        <h1>Cuidado Colaborativo</h1>
                    </Organization>
                <Org1>
                   
                  
                        <CREAS>
                            <h1>{nome}</h1>
                            <h2> Tipo de local:</h2>
                            <h2> Telefone:</h2>
                            <h2> Horário de funcionamento:</h2>
                            <h2> Dias de funcionamento:</h2>
                            <h2> Site:</h2>
                            <h2> Lista de espera:</h2>
                            <h2> Endereço:</h2>
                        </CREAS>
                     

                      
                 
                    {admin ? <MenuAdmin /> : <Menu />}
                </Org1>
            </>
        );
    }
}