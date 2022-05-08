import React from "react";
import pizzaImgPath from "../../assets/7.1 pizza.jpg";
import classes from "./PizzaImage.css";

const PizzaImage = () => (
  <div className={classes.PizzaContainer}>
    <img src={pizzaImgPath} className={classes.PizzaImg} />
  </div>
);
export default PizzaImage;
