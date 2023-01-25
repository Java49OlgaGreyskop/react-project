import React from 'react';
import { Timer } from './components/Timer';


function App() {
  const [time, setTime] = React.useState(new Date());
  const flexColumn: React.CSSProperties = { display: "flex", flexDirection: "column" }
  const flexRow: React.CSSProperties = { display: "flex", flexDirection: "row" , 
  justifyContent: "space-around", width: "50vw", marginTop: "4vh"}
  function tick() {
    console.log("tick");
    setTime(new Date());
}
React.useEffect(()=>{
    const interval = setInterval(tick, 1000);
    return ()=>clearInterval(interval);
}, [])

  return <div style={flexColumn}>
    <div style={flexRow}>
      <Timer cityOrCountry="London" time ={time}></Timer>
      <Timer cityOrCountry="Paris" time ={time}></Timer>
    </div>
    <div style={flexRow}>
      <Timer cityOrCountry="India" time ={time}></Timer>
      <Timer cityOrCountry="Cuba" time ={time}></Timer>
    </div>

  </div>

}

export default App;