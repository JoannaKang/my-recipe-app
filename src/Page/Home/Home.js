import React from "react";
import "./Home.css";

class Home extends React.Component {
  // (4) React.Component에 정의된 메서드를 호출하여 JSX 코드가 브라우저에 표시되도록 만듭니다.
  render() {
    return (
      <section className="home-container">
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
export default Home;
