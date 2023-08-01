import dayjs from "dayjs";

export const SetTheYear = ({
  month,
  day,
  setBirthday,
  submitted,
  setSubmitted,
}) => {
  const nowDayjs = dayjs();
  setBirthday(month + "-" + day + "-" + nowDayjs.year());
  setSubmitted(!submitted);
  return;
};
