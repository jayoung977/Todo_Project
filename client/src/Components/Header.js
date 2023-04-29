import "../styles/Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <div className="Header">
        <FontAwesomeIcon icon={faSync} spin />
        <span className="HeaderStr"> My Todo App</span>
      </div>
    </>
  );
};

export default Header;
