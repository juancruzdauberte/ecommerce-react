import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export const MyAccount = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <section>
      <h2>Mi cuenta</h2>
      <section>
        <div>
          <img src={user.userData.photoURL} alt="foto de perfil" />
        </div>
        <button onClick={logOut}>Cerrar</button>
      </section>
    </section>
  );
};
