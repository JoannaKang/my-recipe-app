import React from "react";
import "./MyRecipes.css";

class MyRecipes extends React.Component {
  render() {
    return (
      <section className="my-recipe-container">
        <h1>My Recipes</h1>
      </section>
    );
  }
}

// (6) 클래스를 외부에서도 사용할 수 있도록 내보냅니다.
export default MyRecipes;
