import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these PIZZA Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/download (1).jpg"
              text="Best Pizza in the pakistan"
              label="Waiting"
              path="/services"
            />
            <CardItem
              src="images/download (2).jpg"
              text="Best Pizza Ever is on Facebook"
              label="Waiting"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/download.jpg"
              text="These 6 Places in Islamabad Serves Some of the Best Pizzas"
              label="Waiting"
              path="/services"
            />
            <CardItem
              src="images/pizza.png"
              text="The Best Pizza - Find Pizza for Delivery or Pizza Near Me"
              label="Waiting"
              path="/products"
            />
            <CardItem
              src="images/images (1).jpg"
              text="The Best Pizza - Find Pizza for Delivery or Pizza Near Me"
              label="Waiting"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
