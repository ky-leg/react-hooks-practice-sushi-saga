import React from "react";

import { useState } from "react/cjs/react.development";


function Sushi({sushi, ateSushi, money}) {
  const [isEaten, setIsEaten] = useState(false)
  // console.log(sushi)

  const {img_url, price, name} = sushi

  function onClick(){
    console.log(money>=price)
    
    if (money>=price && !isEaten){ 
      if (!isEaten){
        setIsEaten(true)
      }
      ateSushi(sushi)}
    else {
      if (isEaten){
        alert("You can't eat that again!")
      }
      if (money>=price)
      alert("Out of money :(")
    }
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={onClick}>
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
