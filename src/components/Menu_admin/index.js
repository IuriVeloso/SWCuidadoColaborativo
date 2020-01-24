import React from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaBell, FaSearch, FaUserPlus, FaAddressCard} from 'react-icons/fa';
import { Organization } from '../Menu/styles';


export default function MenuAdmin(){
    return(
        <Organization>
            <FaAddressCard/> < Link to="/adicionar-paciente">  <FaUserPlus/> </Link>  <Link to="/procurar-paciente"><FaSearch/> </Link> <FaBell/> <FaBars/>
        </Organization>
    );
}