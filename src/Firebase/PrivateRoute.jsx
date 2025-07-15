import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return (
            <div className="flex items-center mx-auto loading loading-infinity loading-xl"></div>
        );
    }
    if (!user) {
      return <Navigate state={location?.pathname} to="/login"></Navigate>;
    }
    
    return children;
};

export default PrivateRoute;