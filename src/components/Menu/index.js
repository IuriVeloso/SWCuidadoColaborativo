import React from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaBell, FaSearch, FaUserPlus} from 'react-icons/fa';
import { Organization } from './styles';

export default function Menu(){
    return(
        <Organization>
            <Link to="/adicionar-paciente" >  <FaUserPlus/> </Link> <Link to="/procurar-paciente"><FaSearch/> </Link> <FaBell/> <FaBars/>
        </Organization>
    );
}
