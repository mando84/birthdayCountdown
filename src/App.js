import "./App.css";
import { DateInput } from "./components/DateInput";
import { CountdownTimer } from "./components/CountdownTimer";
import { BirthdayContext } from "./context/BirthdayContext";
import { useState } from "react";
import { defaultRemainingTime } from "./Utils/defaultRemainingTime";

function App() {
  const [birthday, setBirthday] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  return (
    <>
      <div className="App">
        <BirthdayContext.Provider
          value={{
            day,
            setDay,
            month,
            setMonth,
            year,
            setYear,
            birthday,
            setBirthday,
            submitted,
            setSubmitted,
            remainingTime,
            setRemainingTime,
            defaultRemainingTime,
          }}
        >
          <h1 style={{fontSize:"50px"}}>BIRTHDAY COUNTDOWN TIMER</h1>
          <DateInput />
          <CountdownTimer />
        </BirthdayContext.Provider>
      </div>
    </>
  );
}

export default App;
