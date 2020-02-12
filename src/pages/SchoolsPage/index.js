import React, { Component } from 'react';



import Menu from '../../components/Menu/index';
import MenuAdmin from '../../components/Menu_admin/index';
import { Escola, Org1, Organization} from './styles';

export default class Homepage extends Component {
    state = {};

    render() {
        const admin = true;
        return ( 
            <>  
            <Organization>
                        <h1>Cuidado Colaborativo</h1>
                    </Organization>
                <Org1>
                   
                  
                        <Escola>
                            <h1>Escola Tia Dida</h1>
                            <h2> Endereço:</h2>
                            <h2> Telefone:</h2>
                            <h2> Horário de Funcionamento:</h2>
                            <h2> Site:</h2>
                        </Escola>
                        <Escola>
                            <h1>Escola Tia Dida</h1>
                            <h2> Endereço:</h2>
                            <h2> Telefone:</h2>
                            <h2> Horário de Funcionamento:</h2>
                            <h2> Site:</h2>
                        </Escola>
                        <Escola>
                            <h1>Escola Tia Dida</h1>
                            <h2> Endereço:</h2>
                            <h2> Telefone:</h2>
                            <h2> Horário de Funcionamento:</h2>
                            <h2> Site:</h2>
                        </Escola>
                        <Escola>
                            <h1>Escola Tia Dida</h1>
                            <h2> Endereço:</h2>
                            <h2> Telefone:</h2>
                            <h2> Horário de Funcionamento:</h2>
                            <h2> Site:</h2>
                        </Escola>

                      
                 
                    {admin ? <MenuAdmin /> : <Menu />}
                </Org1>
            </>
        );
    }
}
