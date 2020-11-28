import React, { useState } from "react";
import "./Style.css";

const DisplayBeer = (props) => {
  // console.log(imageCount);
  return (
    <div className="main-container">
      {props.beer.map((beer, index) => {
        return (
          <div className="row-content">
            <div className="content-detail">
              <h3>{beer.name}</h3>
              <p>Style: {beer.style}</p>
              <p>Ounces: {beer.ounces}</p>
              <p>Alcohol by Volume: {beer.abv}</p>
              <p>International Bitterness Units: {beer.ibu}</p>
            </div>
            <div className="content-image">
              <img src={props.image[index % 5].image} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayBeer;
