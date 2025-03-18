import { VscAccount } from "react-icons/vsc";
import "./accountWidget.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

export const AccountWidget = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="cuenta">
      {user.userData ? (
        <div className="dropdown">
          <img src={user.userData.photoURL}></img>
          <div className="dropdown-content">
            <ul>
              <li>
                <Link to="/account">Mi cuenta</Link>
              </li>
              <li>
                <button onClick={logOut}></button>Cerrar sesion
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <VscAccount />
      )}
    </div>
  );
};
