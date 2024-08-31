import React, { useState, useEffect } from 'react';
import './carload.css';

const CarLoading = () => {
  const [first, setFirst] = useState('loader2');
  const [second, setSecond] = useState('');

  useEffect(() => {
    const firstInterval = setInterval(() => {
      setFirst((prev) => (prev === '' ? 'loader2' : ''));
    }, 1000); // Adjusted the interval to 2000ms for better synchronization

    const secondInterval = setInterval(() => {
      setSecond((prev) => (prev === '' ? 'loader3' : ''));
    }, 1000); // Same interval for the second loader

    return () => {
      clearInterval(firstInterval);
      clearInterval(secondInterval);
    };
  }, []);

  return (
    <div className='position-absolute w-100 h-100 general-car-loader'>
      <div className="shadow loader-holder bg-white rounded">
        <div className={first}></div>
        <div className={second}></div>
        <h6 style={{fontSize:"", visibility:""}} className='text-center pt-2'>Loading car...</h6>
      </div>
    </div>
  );
};

export default CarLoading;
