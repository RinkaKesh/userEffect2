import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [count, setCount] = useState(5);

  let decrementCount;
  let timer;
  

  useEffect(() => {

    decrementCount = () => {
        setCount((prevcount)=>{
            if(prevcount==1){
                clearTimeout(timer)
            }
            return prevcount-1
        })
      };
     timer = setTimeout(decrementCount, 1000); 


   
  }, []);

  return (
    <div>
      <h1>Timer Component</h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default TimerComponent;
