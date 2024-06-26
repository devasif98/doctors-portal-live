import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn= ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const updateUser = (userInfo) =>{
    return updateProfile(auth.currentUser, userInfo);
  }

  const logOut = () =>{
    setLoading(true)
    return signOut(auth);
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log('user observing');
        setUser(currentUser);
        setLoading(false)
    });
    return () => unSubscribe();
  },[])

  const authInfo = {
    createUser,
    signIn,
    logOut,
    user,
    updateUser,
    loading,
    auth,
    googleSignIn
    
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
