import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Menu from '../../components/Menu/index';
import MenuAdmin from '../../components/Menu_admin/index';
import { Parceiro, Org1, Organization, Coluna1, Coluna2} from './styles';

export default class Partners extends Component {
    state = {};

    render() {
        const admin = true;
        return ( 
            <>  
            <Organization>
                        <h1>Cuidado Colaborativo</h1>
                    </Organization>
                <Org1>

                    <Coluna1>
                      <Link to="/CAPSI">
                        <Parceiro>
                            <h1>CAPSi</h1>
                        </Parceiro>
                    </Link>
                    <Link to="/CREAS/CRAS">
                        <Parceiro>
                            <h1>CREAS/CRAS</h1>
                        </Parceiro>
                    </Link>
                    <Link to="/CF/CMS">
                        <Parceiro>
                            <h1>CF/CMS</h1>
                        </Parceiro>
                    </Link>
                    
                    </Coluna1>

                    <Coluna2>
                    <Link to="/escolas-e-creches">
                        <Parceiro>
                            <h1>Escolas/Creche</h1>
                        </Parceiro>
                    </Link>
                    <Link to="/ONGs">
                        <Parceiro>
                            <h1>ONG'S</h1>
                        </Parceiro>
                    </Link>
                       <Link to="/capes-adulto">
                        <Parceiro>
                            <h1>Capes Adulto</h1>
                        </Parceiro>
                    </Link>
                    </Coluna2>
                    {admin ? <MenuAdmin /> : <Menu />}
                </Org1>
            </>
        );
    }
}
