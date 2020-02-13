import React, { Component } from 'react';



import Menu from '../../components/Menu/index';
import MenuAdmin from '../../components/Menu_admin/index';
import { CREAS, Org1, Organization} from './styles';

export default class CREASPage extends Component {
    state = {};

    render() {
        const admin = true;
        return ( 
            <>  
            <Organization>
                        <h1>Cuidado Colaborativo</h1>
                    </Organization>
                <Org1>
                   
                  
                        <CREAS>
                            <h1>Título</h1>
                            <h2> Endereço:</h2>
                            <h2> Telefone:</h2>
                            <h2> Horário de Funcionamento:</h2>
                            <h2> Site:</h2>
                        </CREAS>
                     

                      
                 
                    {admin ? <MenuAdmin /> : <Menu />}
                </Org1>
            </>
        );
    }
}