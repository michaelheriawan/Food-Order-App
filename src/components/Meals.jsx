import { useContext } from "react";
import Button from "../Util/Button";
import { CartContext } from "../store/food-order-context";

export default function Meals({ meals, isLoading, loadingText, fallbackText }) {
  const { addItemToCart } = useContext(CartContext);
  return (
    <>
      {isLoading && <p className="fallback-text">{loadingText}</p>}
      {!isLoading && meals.length === 0 && <p>{fallbackText}</p>}
      {!isLoading &&
        meals.length > 0 &&
        meals.map((meal) => (
          <div className="meal-item" key={meal.id}>
            <img src={`http://localhost:3000/${meal.image}`} alt="food img" />
            <span className="article">
              <h3>{meal.name}</h3>
              <p className="meal-item-price">${meal.price}</p>
              <p className="meal-item-description">{meal.description}</p>
              <Button
                className="meal-item-actions button"
                text="Add to Cart"
                onClick={() =>
                  addItemToCart({
                    id: meal.id,
                    name: meal.name,
                    price: meal.price,
                  })
                }
              />
            </span>
          </div>
        ))}
    </>
  );
}
