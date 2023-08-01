export function getBirthdaySpelled(month, day) {
  let m = "";
  let d = "";

  if (month === "01") {
    m = "January";
  } else if (month === "02") {
    m = "February";
  } else if (month === "03") {
    m = "March";
  } else if (month === "04") {
    m = "April";
  } else if (month === "05") {
    m = "May";
  } else if (month === "06") {
    m = "June";
  } else if (month === "07") {
    m = "July";
  } else if (month === "08") {
    m = "August";
  } else if (month === "09") {
    m = "September";
  } else if (month === "10") {
    m = "October";
  } else if (month === "11") {
    m = "November";
  } else if (month === "12") {
    m = "December";
  }

  if (day === "01") {
    d = "First";
  } else if (day === "02") {
    d = "Second";
  } else if (day === "03") {
    d = "Third";
  } else if (day === "04") {
    d = "Fourth";
  } else if (day === "05") {
    d = "Fifth";
  } else if (day === "06") {
    d = "Sixth";
  } else if (day === "07") {
    d = "Seventh";
  } else if (day === "08") {
    d = "Eighth";
  } else if (day === "09") {
    d = "Ninth";
  } else if (day === "10") {
    d = "Tenth";
  } else if (day === "11") {
    d = "Eleventh";
  } else if (day === "12") {
    d = "Twelveth";
  } else if (day === "13") {
    d = "Thirteenth";
  } else if (day === "14") {
    d = "Fourteenth";
  } else if (day === "15") {
    d = "Fifteenth";
  } else if (day === "16") {
    d = "Sixteenth";
  } else if (day === "17") {
    d = "Seventeenth";
  } else if (day === "18") {
    d = "Eighteenth";
  } else if (day === "19") {
    d = "Nineteenth";
  } else if (day === "20") {
    d = "Twentieth";
  } else if (day === "21") {
    d = "Twenty-First";
  } else if (day === "22") {
    d = "Twenty Second";
  } else if (day === "23") {
    d = "Twenty Third";
  } else if (day === "24") {
    d = "Twenty Fourth";
  } else if (day === "25") {
    d = "Twenty Fifth";
  } else if (day === "26") {
    d = "Twenty Sixth";
  } else if (day === "27") {
    d = "Twenty Seventh";
  } else if (day === "28") {
    d = "Twenty Eighth";
  } else if (day === "29") {
    d = "Twenty Ninth";
  } else if (day === "30") {
    d = "Thirtieth";
  } else if (day === "31") {
    d = "Thirty First";
  }

  return "Until the " + d + " of " + m;
}
