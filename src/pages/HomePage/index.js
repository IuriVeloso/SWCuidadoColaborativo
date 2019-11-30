import React, {Component} from 'react';
import Menu from '../../components/Menu/index';
import {Organization} from '../../components/styles';
import {Recentes} from './styles'


export default class Homepage extends Component{
    state= {

    }
    render(){
        return(
            <>
            <Organization>
                <h1> Usuários Recentes</h1>
                <Recentes>
                    <h1> Marcus Vinicius</h1>
                    <h2> Dona Marta</h2>
                    <small> Última atualização: 11 horas atrás </small>
                </Recentes>
                <Menu/>
                <h1> Próximos Eventos</h1>
            </Organization>
            </>
        )
    }
}