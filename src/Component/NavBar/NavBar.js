import React from "react";
// (1) 하위 URL 연결 링크를 삽입해주는 컴포넌트를 불러옵니다.
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingBasket,
  faPlusSquare,
  faList,
} from "@fortawesome/free-solid-svg-icons";
// (2) 스타일링을 위한 NavBar.css 파일을 연결합니다.
import "./NavBar.css";

//(3) 클래스형 컴포넌트를 선언합니다.
class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        {/* (4) 버튼을 클릭하면 /home 경로로 이동할 수 있도록 링크를 설정합니다. */}
        <Link to="/home">
          <button>
            <FontAwesomeIcon icon={faHome} /> Home
          </button>
        </Link>
        {/* (5) 버튼을 클릭하면 /shoppingList 경로로 이동할 수 있도록 링크를 설정합니다. */}
        <Link to="/shoppingList">
          <button>
            <FontAwesomeIcon icon={faShoppingBasket} /> Shopping List
          </button>
        </Link>
        {/* (6) 버튼을 클릭하면 /inMyFridgeList 경로로 이동할 수 있도록 링크를 설정합니다. */}
        <Link to="/inMyFridgeList">
          <button>
            <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
            In my Fridge
          </button>
        </Link>
        {/* (7) 버튼을 클릭하면 /myRecipes 경로로 이동할 수 있도록 링크를 설정합니다. */}
        <Link to="/myRecipes">
          <button>
            <FontAwesomeIcon icon={faList} /> My Recipes
          </button>
        </Link>
      </div>
    );
  }
}

export default NavBar;
