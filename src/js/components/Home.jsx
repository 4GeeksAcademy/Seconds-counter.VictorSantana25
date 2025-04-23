import React, { useState, useEffect, useRef } from 'react';
import SecondsCounter from './SecondsCounter.jsx';

const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const handleStart = () => setRunning(true);
  const handlePause = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setRunning(false);
  };

  return (
    <div className="container text-center mt-5">
      <SecondsCounter seconds={seconds} />
      <div className="mt-4 d-flex justify-content-center gap-3">
        <button className="btn btn-success btn-sm" onClick={handleStart}>Iniciar</button>
        <button className="btn btn-danger btn-sm" onClick={handlePause}>Detener</button>
        <button className="btn btn-warning btn-sm" onClick={handleReset}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Home;
