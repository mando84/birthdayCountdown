import { useContext, useEffect } from "react";
import { BirthdayContext } from "../context/BirthdayContext";
import { getRemainingTime } from "../Utils/CountDownTimerUtils.js";
import { getBirthdaySpelled } from "../Utils/getBirthdaySpelled";
import dayjs from "dayjs";
import "./CountdownTimer.css";

export function CountdownTimer() {
  const { birthday, day, month, submitted, remainingTime, setRemainingTime } =
    useContext(BirthdayContext);

  const nowDayjs = dayjs();
  const timestampDayjs = dayjs(birthday, "MM-DD-YYYY");

  useEffect(() => {
    if (birthday.length === 10) {
      updateRemainingTime(birthday);
      const intervalId = setInterval(() => {
        updateRemainingTime(birthday);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [birthday]);

  function updateRemainingTime(birthday) {
    setRemainingTime(getRemainingTime(birthday));
  }

  if (timestampDayjs.date() === nowDayjs.date() && submitted) {
    return (
      <div className="countdown-timer">
        <span> HAPPY BIRTHDAY!!! WOOOO!!!</span>
      </div>
    );
  } else if (submitted) {
    return (
      <>
        <div className="countdown-timer" >
          <span>{remainingTime.days}</span>
          <span>{Number(remainingTime.days) !== 1 ? "Days" : "Day"}</span>
        </div>
      

      <div className="countdown-timer" style={{height:"50px"}}>
        <span className="two-numbers">{remainingTime.hours}</span>
        <span>{Number(remainingTime.hours) !== 1 ? "Hours" : "Hour"}</span>
      </div> 
      

      <div className="countdown-timer" style={{heigth:"50px"}}>
        <span className="two-numbers">{remainingTime.minutes}</span>
        <span>{Number(remainingTime.minutes) !== 1 ? "Minutes" : "Minute"}</span>
      </div> 
      

      <div className="countdown-timer" style={{height:"50px"}}>
        <span className="two-numbers">{remainingTime.seconds}</span>
        <span>{Number(remainingTime.seconds) !== 1 ? "Seconds" : "Second"}</span>
      </div> 
      
        
        <h1 style={{fontSize:'50px'}}>{getBirthdaySpelled(month, day)}</h1>
      </>
    );
  }
}
