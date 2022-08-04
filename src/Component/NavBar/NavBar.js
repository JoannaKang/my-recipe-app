import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingBasket,
  faPlusSquare,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <button>
        <Link to="/shoppingList">
          <FontAwesomeIcon icon={faShoppingBasket} /> Shopping List
        </Link>
      </button>
      <button>
        <Link to="/inMyFridgeList">
          <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
          In my Fridge
        </Link>
      </button>
    </div>
  );
};

export default NavBar;
