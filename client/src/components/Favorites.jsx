const Favorites = ({foods}) => {
  return (
    <div className="food-list-container">
      <div className="food-list">
        {foods.map((food) => (
          <div className='food-items' key={food.id}>
            <h3>{food.name}</h3>
            <div className="food-dropdown">
            <ul>
              <li>Calories: {food.calories}</li>
              <li>Protein: {food.protein}</li>
              <li>Fats: {food.fats}</li>
              <li>Carbohydrates: {food.carbohydrates}</li>
            </ul>
            </div>
            </div>
        ))}
      </div>
    </div>
  )
        }
      
export default Favorites