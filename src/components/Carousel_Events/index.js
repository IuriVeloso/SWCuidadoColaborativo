import React, {Component} from 'react';

import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
import {Slider, SliderNext, SliderPrev} from './styles';

export default class MenuSlider extends Component{
    state ={
        index_slide: 0,
        verify_begin: true,
        verify_end: false,
        carrousel_data: [['Evento A','Casa','Lá', 'Desc1'], ['Evento B','Apto','Aqui','Desc2'], ['Evento C','Onde','Acolá','Desc3']]
    }

    IndexRise = async e =>{
        e.preventDefault();
        const index = this.state.index_slide;
        if (index < 2)
            this.setState({index_slide: index+1})
        if (index === 1)
            this.setState({verify_end: true})

        console.log(this.state)
        this.setState({verify_begin: false})
    }

    IndexDown = async e =>{
        e.preventDefault();
        const index = this.state.index_slide;
        if (index > 0)
            this.setState({index_slide: index-1})
        if (index === 1)
            this.setState({verify_begin: true})

        this.setState({verify_end: false})
    }

    render(){
        const data = this.state.carrousel_data[this.state.index_slide];
        return(
            <>
               <SliderPrev onClick={this.IndexDown} beginn={this.state.verify_begin}> <IoIosArrowBack/> </SliderPrev>
                        <Slider>
                            <h1 > {data[0]}</h1>
                            <small> Local:{data[1]} </small>
                            <small> Endereço:{data[2]}</small>
                            <small> Descrição:{data[3]} </small>
                        </Slider>
                <SliderNext onClick={this.IndexRise} ending={this.state.verify_end}> <IoIosArrowForward /> </SliderNext>
            </>
        );
    }
}