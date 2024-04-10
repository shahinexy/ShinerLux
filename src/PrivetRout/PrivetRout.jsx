import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from 'prop-types';

const PrivetRout = ({children}) => {
    const {user,loader} = useContext(authContext)
    if(loader){
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if(user) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>;
};

PrivetRout.propTypes ={
    children: PropTypes.node
}

export default PrivetRout;