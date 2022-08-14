// (1) 리액트 라이브러리를 불러옵니다
import React from "react";
// (2) 컴포넌트 스타일링을 위한 MyRecipe.css 파일을 연결합니다.
import "./MyRecipes.css";

// (3) 클래스형 컴포넌트를 선언합니다.
class MyRecipes extends React.Component {
  // (4) React.Component에 정의된 메서드를 호출하여 JSX 코드가 브라우저에 표시되도록 만듭니다.
  render() {
    return (
      // (5) section 태그의 클래스 이름을 "my-recipe-container"로 지정합니다.
      <section className="my-recipe-container">
        {/* (6) 페이지의 타이틀 텍스트를 삽입합니다. */}
        <h1>My Recipes</h1>
      </section>
    );
  }
}

// (6) 클래스를 외부에서도 사용할 수 있도록 내보냅니다.
export default MyRecipes;
