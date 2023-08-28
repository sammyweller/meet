const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;

    if (isNaN(value)) {
      setErrorAlert('The input is not a number');
    } else if (value > 50) {
      setErrorAlert('The maximum input is 50');
    } else if (value <= 0) {
      setErrorAlert('The minimum input is 1');
    } else {
      setErrorAlert('');
      setCurrentNOE(value);
    }

  };

  return (
    <div id="number-of-events" className="event-number">
      <input
        type="text"
        className="event-numberbox"
        defaultValue="32"
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
      />
    </div>
  );
};

export default NumberOfEvents;