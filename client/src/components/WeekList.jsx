const WeekList = ({days}) => {
  return (
    <div className="day-list-container">
      <p>You only have this day to lose weight.</p>
    <div className="day-list">
      {days.map((day) => (
        <div className='day-items' key={day.id}>
          <h3>{day.name} - {day.calories}</h3>
          </div>
      ))}
    </div>
  </div>
  )
}

export default WeekList