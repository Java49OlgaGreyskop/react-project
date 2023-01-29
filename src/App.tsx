import React from 'react';
import {  getRandomMatrix, getRandomNumber, getRandomArrayElement, getRandomDate,  } from './components/utils/random';


function App() {
  
console.log (getRandomNumber(1,6,false, true))
console.log (getRandomMatrix(10,5,1,10))
console.log(getRandomArrayElement([1,2,3,5,1000, "abc","cccCAGe"]))
console.log(getRandomDate(1990,2005))
 
 return <div >
    
  </div>

}

export default App;
