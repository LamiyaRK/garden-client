import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Components/Loader';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext)
    const loc=useLocation();
   // console.log(loc)
   if(loading)
   {
    return<Loader></Loader>
   }
    if(!user)
    {
      return <Navigate to='/login' state={loc.pathname}></Navigate>
        
    }
    return children;
};

export default PrivateRoute;