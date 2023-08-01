export const SetTheMonth = ({ month, setMonth }) => {
  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <>
      <h1>Select the month you were born in</h1>
      <select
        value={month}
        onChange={handleChange}
        style={{
          backgroundColor: "#e0948a",
          width: "154px",
          fontSize: "22px"
        }}
      >
        <option value="" disabled selected hidden>Select Month</option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </>
  );
};
