import { BirthdayContext } from "../context/BirthdayContext";
import { useContext } from "react";
import "./DateInput.css";
import { SetTheMonth } from "../Utils/SetTheMonth";
import { SetTheDay } from "../Utils/SetTheDay";
import { SetTheYear } from "../Utils/SetTheYear";
import { defaultRemainingTime } from "../Utils/defaultRemainingTime";

export function DateInput() {

  const onMouseLeave = e => {
    e.target.style.background = "#e0948a"
    e.target.style.borderRadius = "5px"
  }

  const onMouseEnter = e => {
    e.target.style.background = "#FAA4A4"
    e.target.style.borderRadius = "3px"
  }

  const {
    submitted,
    setSubmitted,
    setRemainingTime,
    setBirthday,
    birthday,
    setDay,
    day,
    month,
    setMonth,
    setYear,
    year,
  } = useContext(BirthdayContext);

  if (submitted) {
    return (
      <>
        <button
          style={{ backgroundColor: "#e0948a",
          fontSize:"22px",
          borderRadius: 5,
          overflow: "hidden",
          marginBottom: "30px"
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
          className="btn"
          backgroundcolor="pink"
          onClick={(event) => {
            setBirthday("");
            setMonth("");
            setYear("");
            setDay("");
            setRemainingTime(defaultRemainingTime);
            setSubmitted(false);
          }}
        >
          Reset
        </button>
      </>
    );
  } else if (month === "") {
    return <SetTheMonth month={month} setMonth={setMonth} />;
  } else if (day === "") {
    return (
      <SetTheDay
        month={month}
        day={day}
        setDay={setDay}
        setSubmitted={setSubmitted}
      />
    );
  } else if (year === "") {
    return (
      <SetTheYear
        month={month}
        day={day}
        setBirthday={setBirthday}
        birthday={birthday}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />
    );
  }
}
