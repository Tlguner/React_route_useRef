import React, { useEffect, useState, useRef } from "react";

function Refdemo() {
  let [name, setName] = useState("Veli");
  let nVar = 0;
  let rVar = useRef(10);

  useEffect(() => {
    console.log(name);
    console.log(nVar);
    console.log(rVar);
  });

  return (
    <div className="refdemo">
      <h1>UseRefdemo</h1>
      <h1>{name}</h1>
      <button
        onClick={() => {
          setName("Ali");
          nVar = 1;
          rVar.current = 20;
        }}
      >
        change name
      </button>
    </div>
  );
}

export default Refdemo;
