import { createContext, useState } from "react";
import { PropTypes } from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from './../Firebase/firebase.config';

export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    //create user
    const createUser =(email, pass)=>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const authInfo = {value:'shahin', user, setUser, createUser}
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