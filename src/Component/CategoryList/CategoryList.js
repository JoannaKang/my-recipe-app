import "./CategoryList.css";
import IngredientItem from "../IngredientItem/IngredientItem";

function CategoryList(props) {
  return (
    <div className="category-container">
      <div className="category-div">
        <h2>🥦 Veggies</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🥦 Veggies")}
        />
      </div>
      <div className="category-div">
        <h2>🥩 Meat</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🥩 Meat")}
        />
      </div>
      <div className="category-div">
        <h2>🐟 Fish</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🐟 Fish")}
        />
      </div>
      <div className="category-div">
        <h2>🥛 Dairy</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🥛 Dairy")}
        />
      </div>
      <div className="category-div">
        <h2>🍓 Fruit</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🍓 Fruit")}
        />
      </div>
      <div className="category-div">
        <h2>🥖 Bakery</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🥖 Bakery")}
        />
      </div>
      <div className="category-div">
        <h2>🍰 Dessert</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🍰 Dessert")}
        />
      </div>
      <div className="category-div">
        <h2>🍯 Sauce</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🍯 Sauce")}
        />
      </div>
      <div className="category-div">
        <h2>🧂 Spice</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🧂 Spice")}
        />
      </div>
      <div className="category-div">
        <h2>💫 etc</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "💫 etc")}
        />
      </div>
    </div>
  );
}

export default CategoryList;
