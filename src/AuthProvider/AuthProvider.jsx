import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../Firebase/firebase.config';

export const authContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    //create user
    const createUser =(email, pass)=>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    // sign in user 
    const signInUser = (email, pass)=>{
        return signInWithEmailAndPassword(auth,email, pass)
    }

    // sign in with google 
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    //log out
    const LogOutUser = () =>{
        return signOut(auth)
    }


    // save or manage user 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
        })
        return () =>{
            unSubscribe()
        }
    },[])

    const authInfo = {value:'shahin', user, setUser, createUser, signInUser, LogOutUser, googleSignIn}
    return (
        <div>
            <authContext.Provider value={authInfo}>{children}</authContext.Provider>
        </div>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node,
}

export default AuthProvider;