const WeekList = ({days}) => {
  return (
    <div className="day-list-container">
    <div className="day-list">
      {days.map((day) => (
        <div className='day-items' key={day.id}>
          <h3>{day.name}</h3>
          <div className="day-dropdown">
          <ul>
            <li>Calories: {day.calories}</li>
            <li>Protein: {day.protein}</li>
            <li>Fats: {day.fats}</li>
            <li>Carbohydrates: {day.carbohydrates}</li>
          </ul>
          </div>
          </div>
      ))}
    </div>
  </div>
  )
}

export default WeekList