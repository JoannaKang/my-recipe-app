// (1) 리액트 라이브러리를 불러옵니다
import React from "react";
// (2) 컴포넌트 스타일링을 위한 MyRecipe.css 파일을 연결합니다.
import "./Home.css";

// (3) 클래스형 컴포넌트를 선언합니다.
class Home extends React.Component {
  // (4) React.Component에 정의된 메서드를 호출하여 JSX 코드가 브라우저에 표시되도록 만듭니다.
  render() {
    return (
      // (5) section 태그의 클래스 이름을 "home-container"로 지정합니다.
      <section className="home-container">
        {/* (6) 페이지의 타이틀 텍스트를 "Home" 이라고 삽입합니다. */}
        <h1>Home</h1>
        {/* (7) 상위 컴포넌트로 전달받은 item 이라는 props 배열을 순회하며 category, quantity를 표시합니다. */}
        {this.props.items.map((item, index) => {
          return (
            <div key={index}>
              {item.category} {item.quantity}
            </div>
          );
        })}
      </section>
    );
  }
}
// (8) 클래스를 파일 외부에서 사용할 수 있도록 내보내줍니다.
export default Home;
