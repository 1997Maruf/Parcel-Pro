import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //googlelogin
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  //Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Sign In
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google Sign In
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //update Profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //Logout
  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
           setUser(currentUser);
           setLoading(false);
       })
       return () =>{
           return unsubscribe();
       }
   },[])
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    updateUserProfile,
    googleSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
