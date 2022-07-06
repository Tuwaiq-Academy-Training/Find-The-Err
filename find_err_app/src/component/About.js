
import React, { useState, useEffect } from "react";

function About() {
 const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <div className='background'>
      <h1 className='resize center'>{count}</h1>
    </div>
  );
}

export default About;
