import { VscAccount } from "react-icons/vsc";
import "./accountWidget.css";
// import { useContext } from "react";
// import { AuthContext } from "../../../context/AuthContext";
// import { Link } from "react-router-dom";

export const AccountWidget = () => {
  // const { user, logOut } = useContext(AuthContext);

  return (
    <div className="cuenta">
      <VscAccount />
    </div>
  );
};
