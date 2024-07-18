import React, { useState, useEffect } from 'react';

const NumberLoading = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => {
        const nextNumber = prevNumber + 1;
        return nextNumber > 149 ? 149 : nextNumber; // Limit number to 200
      });
    },20); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="number-loading fs-1">
      <span className="number">{number} million kilometres away from this bad boy.(thats like so far)</span>
    </div>
  );
};

export default NumberLoading;
