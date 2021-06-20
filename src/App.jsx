import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";


function App() {
  return (
    <>
      
      <h2 className="mainheadingN"> All The series I've seen (Raja Usman)</h2>

      {Sdata.map((val) => {
        return (
          <Cards
            key={val.id}
            imgSrc={val.imgSrc}
            sname={val.sname}
            cname={val.cname}
            link={val.link}
          />
        );
      })}
      
      
    </>
  );
}

export default App;
