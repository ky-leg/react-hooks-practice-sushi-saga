import React, {useState} from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";



function SushiContainer({sushis, ateSushi, money}) {
  const [range, setRange] = useState([1,4])
  

  if (!sushis){
    return (
      <h2>making sushi!</h2>
    )
  }

  function onClick(){
    setRange(range.map(bound => bound+4))
  }

  

  console.log()


  return (
    <div className="belt">
      {sushis.filter(sushi=> {return sushi.id>=range[0] && sushi.id<=range[1]})
      .map(sushi => (
        <Sushi 
        key = {sushi.id}
        sushi={sushi}
        ateSushi={(sushi) => ateSushi(sushi)}
        money={money}/>
      ))}
      <MoreButton onClick={onClick} />
    </div>
  );
}

export default SushiContainer;
