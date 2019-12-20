import React from 'react';
import {FaBars, FaBell, FaSearch, FaUserPlus, FaAddressCard} from 'react-icons/fa';
import { Organization } from '../Menu/styles';

export default function MenuAdmin(){
    return(
        <Organization>
            <FaAddressCard/> <FaUserPlus/> <FaSearch/> <FaBell/> <FaBars/>
        </Organization>
    );
}