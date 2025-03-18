import { createContext, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useError } from "../hooks/useError";
import { useLoading } from "../hooks/useLoading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export const AuthProvider = ({ children }) => {
  const { loadingFalse, loadingTrue } = useLoading();
  const { setError } = useError();
  const [user, setUser] = useState({ login: false, userData: null });
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    loadingTrue();
    try {
      const res = await signInWithPopup(auth, googleProvider); //abro el popup de google para iniciar sesion
      setUser({ login: true, userData: res.user }); //seteo el usua
      console.log(user);
      navigate("/home"); //redirigo al home
    } catch (error) {
      setError(error.message);
    } finally {
      loadingFalse();
    }
  };

  useEffect(() => {
    const persistenciaUsuario = onAuthStateChanged(auth, (currentUser) => {
      //onAuthStateChanged se ejecuta cuando se recarga, inicia o cierra sesion. Para guardar los datos

      setUser({ login: true, userData: currentUser });
      console.log(currentUser);
    });

    return () => persistenciaUsuario(); //desmonto el componente para evitar actualizaciones innecesarias
  }, []);

  const logOut = async () => {
    loadingTrue();
    try {
      await signOut(auth); //cierra la sesion del usuario
      setUser({ login: false, userData: null }); //seteo el usuario a null
      navigate("/"); //redirige al login
    } catch (error) {
      setError(error.message);
    } finally {
      loadingFalse();
    }
  };

  let value = {
    user,
    signInWithGoogle,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
