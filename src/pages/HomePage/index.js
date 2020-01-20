import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import MenuSlider from '../../components/Carousel_Events/index.js';
import Menu from '../../components/Menu/index';
import MenuAdmin from '../../components/Menu_admin/index'
import {Recentes,Org1, OrgSlider, ButtonUser, ButtonEvents} from './styles';


export default class Homepage extends Component{
    state= {

    }
    render(){
        const admin = true;
        return(
            <>
            <Org1>
                <h1> Usuários Recentes</h1>
                <Recentes>
                    <h1> Marcus Vinicius</h1>
                    <h1> Dona Marta</h1>
                    <small> Última atualização: 11 horas atrás </small>
                </Recentes>
                <Recentes>
                    <h1> João Marcelo</h1>
                    <h1> Dona Marta</h1>
                    <small> Última atualização: 1 dia atrás </small>
                </Recentes>
                <Recentes>
                    <h1> Vitor (Joca)</h1>
                    <h1> Pavão</h1>
                    <small> Última atualização: 2 dias atrás </small>
                </Recentes>
                <ButtonUser> <Link to="/">Usuários </Link></ButtonUser>
                <h1> Próximos Eventos</h1>
                <OrgSlider>
                    <MenuSlider/>
                </OrgSlider>
                <ButtonEvents type="button"> <Link to="/">Eventos </Link> </ButtonEvents>
             {admin ? <MenuAdmin/>:<Menu/>}
            </Org1>
            </>
        )
    } 
}