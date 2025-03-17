import { createContext } from "react";
import { useLoading } from "../hooks/useLoading";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { useState, useEffect } from "react";
import { useError } from "../hooks/useError";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { loadingTrue, loadingFalse } = useLoading();
  const [user, setUser] = useState(null);
  const { error, setError } = useError();

  async function loginWithGoogle() {
    loadingTrue();
    try {
      const signIn = await signInWithPopup(auth, googleProvider);
      setUser(signIn.user);
      console.log("Usuario autenticado:", signIn.user);
    } catch (error) {
      setError(error);
    } finally {
      loadingFalse();
    }
  }

  async function logOut() {
    loadingTrue();
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      setError(error);
    } finally {
      loadingFalse();
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      loadingFalse();
    });

    return () => unsubscribe();
  }, []);

  let value = {
    loginWithGoogle,
    logOut,
    user,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
