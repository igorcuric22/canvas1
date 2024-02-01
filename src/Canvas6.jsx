import React, { useState, useEffect } from 'react';

const Canvas6 = () => {
  const [countdown, setCountdown] = useState(5);

//   useEffect(() => {
//     const countdownInterval = setInterval(() => {
//       // Decrease the countdown value every second
//       setCountdown((prevCountdown) => prevCountdown - 1);
//     }, 1000);

//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(countdownInterval);
//   }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    // Use setTimeout to reset the countdown after it reaches 0
    
      setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown + 1); // Reset the countdown to 5 seconds
      }, 1000); // Delay before resetting (2 seconds)
    
  }, [countdown]); // Effect re-runs whenever countdown changes

  return (
    <div>
      <h2>Countdown: {countdown}</h2>
    </div>
  );
};



export default Canvas6;