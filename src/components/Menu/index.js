import React from 'react';
import {FaBars, FaBell, FaSearch, FaUserPlus} from 'react-icons/fa';
import { Organization } from './styles';

export default function Menu(){
    return(
        <Organization>
            <FaUserPlus/> <FaSearch/> <FaBell/> <FaBars/>
        </Organization>
    );
}