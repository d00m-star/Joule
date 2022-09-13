const Favorites = ({foods}) => {
  return (
    <div className="favorite-list-container">
      <div className="favorite-list">
        {foods.map((food) => (
          <div className='favorite-items' key={food.id}>
            <h3>{food.name}</h3>
              <p>Calories: {food.calories}</p>
              <p>Protein: {food.protein}</p>
              <p>Fats: {food.fats}</p>
              <p>Carbohydrates: {food.carbohydrates}</p>
            </div>
        ))}
      </div>
    </div>
  )
        }
      
export default Favorites