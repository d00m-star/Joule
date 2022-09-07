export const FoodList = (props) => {
  return (
    <div className="food-list-container">
      <div className="food-list">
        {props.foodList.foodList.map((food) => (
          <div className='food-items' key={food.id}>
            <h4>{food.name}</h4>
            <ul>
              <li>Calories: {food.calories}</li>
              <li>Protein: {food.protein}</li>
              <li>Fats: {food.fats}</li>
              <li>Carbohydrates: {food.carbohydrates}</li>
            </ul>
            <button>Add</button>
            </div>
        ))}
      </div>
    </div>
  )
}
