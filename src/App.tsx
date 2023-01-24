import React from 'react';
import { Input } from './components/Input';
import { Timer } from './components/Timer';





function App() {
  const properties: React.CSSProperties = {
    display: "flex", flexWrap: "wrap"
  }
  const [cities, SetCities] = React.useState<string[]>([])
  function creatingDivs(value: string): string {
    const cities: string[] = value.split("#");
    let res = '';
    SetCities(cities.slice());
    if (cities.length % 2 !== 0) {
      res = "error with a proper message";
    }
    else {

      getDivs;

    }
    return res;
  }
  function getDivs(cities: string[]): JSX.Element[] {
    return cities.map(cities => <div style={{
      display: "flex", flexDirection: "column",
      justifyContent: "space-around", width: "50vw", marginTop: "4vh"
    }}>
      <Timer cityOrCountry="London"></Timer>
      <Timer cityOrCountry="Paris"></Timer>
    </div>)
  }
   return <section>
   <Input placeHolder={`“enter cities/countries separated by #`}inputProcess={creatingDivs}></Input>
   </section>
}


export default App;