import React, { useState, useEffect } from 'react';

function TimerApp() {
  const [seconds, setSeconds] = useState(0);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
      
    }, 1000); 

    //  cleanup function 
    return () => {
        clearInterval(intervalId);
    };
  }, []); 

  return (
    <div>
      <h3>Timer: {seconds} seconds</h3>
    </div>
  );
}

export default TimerApp;
