const WeekList = ({days}) => {
  return (
    <div className="week-list-container">
      <p>You only have this day to lose weight.</p>
      <div className="week-list">
      {days.map((day) => (
        <div className='week-items' key={day.id}>
          {day.name} - {day.calories}
        </div>
      ))}
      </div>
    </div>
  )
}

export default WeekList