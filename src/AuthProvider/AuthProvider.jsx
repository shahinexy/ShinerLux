import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "./../Firebase/firebase.config";

export const authContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true)

  //create user
  const createUser = (email, pass) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // sign in user
  const signInUser = (email, pass) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // sign in with google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign in with gihub
  const gihubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //log out
  const LogOutUser = () => {
    return signOut(auth);
  };

  // update user
  const updateUser = (name, photo) => {
    
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // save or manage user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoader(false)
      } else {
        setUser(null);
        setLoader(false)
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    value: "shahin",
    user,
    setUser,
    createUser,
    signInUser,
    LogOutUser,
    googleSignIn,
    gihubSignIn,
    updateUser,
    loader
  };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
