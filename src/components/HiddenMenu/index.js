import React, {Component} from 'react';

import { Organization } from './styles.js';

export default class HiddenMenu extends Component{
    render(){
        return(
            <Organization show={this.props.show}>
                <ul>
                        <li>Usuários</li>
                        <li>Parceiros</li>
                        <li>Reuniões</li>
                        <li>Saiba Mais</li>
                        <li>Em destaque</li>
                </ul>
            </Organization>
        )};
}