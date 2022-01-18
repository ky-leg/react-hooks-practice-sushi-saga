import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState("")
  const [money, setMoney] = useState(100)
  const [plates, setPlates] = useState([])
  

  

  useEffect(() => {
    fetch(`${API}`)
    .then(r => r.json())
    .then(r => setSushi(r))
    }, [])

    function ateSushi(sushi){
      setMoney(money - sushi.price)
      setPlates([...plates, sushi])
    }

  console.log("in APP", sushi)

  return (
    <div className="app">
      <SushiContainer sushis={sushi} ateSushi={ateSushi} money={money}/>
      <Table money={money} plates={plates}/>
    </div>
  );
}

export default App;
