"use client";
import { useEffect, useState } from "react";
const DealsCounter = () => {
  const [counter, setCounter] = useState({
    days: 28,
    hours: 18,
    minutes: 43,
    seconds: 34,
  });
  useEffect(() => {
    setInterval(() => {
      setCounter((counter) => {
        return {
          ...counter,
          seconds: counter.seconds > 0 ? counter.seconds - 1 : 60,
        };
      });
    }, 1000);
  }, []);
  return (
    <div className="grid grid-cols-2 items-center justify-center gap-4">
      <div className="p-4 rounded shadow border text-center text-lg font-bold">
        <h4>{counter.days}</h4>
        <span>Days</span>
      </div>
      <div className="p-4 rounded shadow border text-center text-lg font-bold">
        <h4>{counter.hours}</h4>
        <span>Hours</span>
      </div>
      <div className="p-4 rounded shadow border text-center text-lg font-bold">
        <h4>{counter.minutes}</h4>
        <span>Minutes</span>
      </div>
      <div className="p-4 rounded shadow border text-center text-lg font-bold">
        <h4>{counter.seconds}</h4>
        <span>Seconds</span>
      </div>
    </div>
  );
};
export default DealsCounter;
