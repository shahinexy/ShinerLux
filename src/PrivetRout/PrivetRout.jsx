import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';

const PrivetRout = ({children}) => {
    const {user,loader} = useContext(authContext)

    const location = useLocation()

    if(loader){
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if(user) {
        return children;
    }
    return <Navigate to={'/login'} state={location.pathname}></Navigate>;
};

PrivetRout.propTypes ={
    children: PropTypes.node
}

export default PrivetRout;