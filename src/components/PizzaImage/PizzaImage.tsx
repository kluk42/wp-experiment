import React from 'react';
import pizzaImgPath from '../../assets/7.1 pizza.jpg';
import ReactLogo from '../../assets/ReactLogo.svg';
import './PizzaImage.css';

const PizzaImage = () => (
  <div className={'PizzaContainer'}>
    <img src={pizzaImgPath} className={'PizzaImg'} alt="pizza" />
    <ReactLogo className={'PizzaImg'} />
  </div>
);
export default PizzaImage;
