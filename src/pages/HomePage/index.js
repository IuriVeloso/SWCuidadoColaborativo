import React, {Component} from 'react';
import Menu from '../../components/Menu/index';
import {Recentes, Org1, OrgSlider,Slider, ButtonUser, ButtonEvents} from './styles';
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
import {Link} from 'react-router-dom';
export default class Homepage extends Component{
    state= {

    }
    render(){
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
                    <IoIosArrowBack styles="font-size: 100px"/>
                        <Slider>
                            <h2> Evento A</h2>
                            <small> Local: </small>
                            <small> Endereço:</small>
                            <small> Descrição: </small>
                        </Slider>
                    <IoIosArrowForward/>
                </OrgSlider>
                <ButtonEvents type="button"> <Link to="/">Eventos </Link> </ButtonEvents>
                <Menu/>
            </Org1>
            </>
        )
    }
}