import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  return (
    <div>
      <button onClick={signInWithGoogle}>Iniciar sesion con google</button>
    </div>
  );
};
