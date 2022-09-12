export const FoodList = ({foodList, foods, setFoods}) => {

  
  
  return (
    <div className="food-list-container">
      <div className="food-list">
        {foodList.map((food) => (
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
            <button onClick={()=>setFoods([...foods, food])}>Add to Day</button>
            </div>
        ))}
      </div>
    </div>
  )
}
