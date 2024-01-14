import React from "react";
import Navbar from "./Components/Navpar";
import Data from "./Components/Data";
import Card from './Components/Card'
const myCards = Data.map((data) => {
  return <Card
  key={data.id}
  {...data} 
  />;
});
// console.log(myCards)
function App() {
  return (
    <>
      <Navbar />
    <div className="container">
      {myCards}
    </div>
    </>
  );
}

export default App;
