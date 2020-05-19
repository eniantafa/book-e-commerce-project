import React, { Component }  from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export default class Slider extends Component {
   
    render() {
      return (
        <AwesomeSlider animation="cubeAnimation" autoplay="true" >
        
        <div data-src="img/book-slider4.jpg" />
        <div data-src="img/book-slider1.jpg" />
       

        <div data-src="img/book-slider3.jpg" />
        

      </AwesomeSlider>
      );
    }
  }