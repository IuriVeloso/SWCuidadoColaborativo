import React from 'react';
import { Link } from 'react-router-dom';

import MenuSlider from '../../components/Carousel_Events/index.js';
import Menu from '../../components/Menu/index';
import MenuAdmin from '../../components/Menu_admin/index';
import { Recentes, Org1, OrgSlider, ButtonEvents } from './styles';
import { Button } from '../../components/styles';

export default function Homepage() {
    const admin = true;
    return (
        <>
            <Org1>
                <br />
                <h1> Usuários Recentes</h1>
                <br />
                <Link to="/usuário">
                    <Recentes>
                        <h1> Marcus Vinicius</h1>
                        <h2> Dona Marta</h2>
                        <small> 11 horas atrás </small>
                    </Recentes>
                </Link>
                <Recentes>
                    <h1> João Marcelo</h1>
                    <h2> Dona Marta</h2>
                    <small> 1 dia atrás </small>
                </Recentes>
                <Recentes>
                    <h1> Vitor (Joca)</h1>
                    <h2> Pavão</h2>
                    <small> 2 dias atrás </small>
                </Recentes>
                <Link to="/procurar-usuário">
                    <Button>Usuários </Button>
                </Link>
                <h1> Próximos Eventos</h1>
                <OrgSlider>
                    <MenuSlider />
                </OrgSlider>
                <Link to="/">
                    <ButtonEvents type="button">Eventos</ButtonEvents>
                </Link>
                {admin ? <MenuAdmin /> : <Menu />}
            </Org1>
        </>
    );
}
