import dayjs from "dayjs";

export function getRemainingTime(birthday) {
  let customParseFormat = require("dayjs/plugin/customParseFormat");

  dayjs.extend(customParseFormat);
  var timestampDayjs = dayjs(birthday, "MM-DD-YYYY");
  const nowDayjs = dayjs();

  let birthdayArr = birthday.split("-");
  let currentYear = birthdayArr[2];
  if (timestampDayjs.isBefore(nowDayjs)) {
    timestampDayjs = dayjs(
      birthdayArr[0] +
        "-" +
        birthdayArr[1] +
        "-" +
        (parseInt(currentYear) + 1).toString(),
      "MM-DD-YYYY"
    );
  }

  return {
    // birthday: getBirthday(birthdayArr, nextYr),
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  };
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
  const seconds = timestampDayjs.diff(nowDayjs, "seconds") % 60;
  //return padWithZeros(seconds, 2);
  return seconds.toString()
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
  const minutes = timestampDayjs.diff(nowDayjs, "minutes") % 60;
  //return padWithZeros(minutes, 2);
  return minutes.toString()
}

function getRemainingHours(nowDayjs, timestampDayjs) {
  const hours = timestampDayjs.diff(nowDayjs, "hours") % 24;
  //return padWithZeros(hours, 2);
  return hours.toString()
}

function getRemainingDays(nowDayjs, timestampDayjs) {
  const days = timestampDayjs.diff(nowDayjs, "days");
  return days.toString();
}

function padWithZeros(number, minLength) {
  const numString = number.toString();
  if (numString >= minLength) return numString;
  return "0".repeat(minLength - numString.length) + numString;
}
