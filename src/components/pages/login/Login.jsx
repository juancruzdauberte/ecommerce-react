// import "./login.css";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//   const { user, loginWithGoogle, error } = useContext(AuthContext);
//   const navigate = useNavigate();

//   return (
//     <div>
//       {user && (
//         <button onClick={loginWithGoogle}>Iniciar sesión con Google</button>
//       )}
//       {error && <p style={{ color: "red" }}>{error.message}</p>}
//     </div>
//   );
// };
