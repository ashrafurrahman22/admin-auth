import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../firebase.init';
import getToken from '../Hooks/getToken';

const AdminAuth = () => {
    const [user,loading,error] = useAuthState(auth)
    const [admin,setAdmin] = useState(true)
    const location  = useLocation()
    


    useEffect(()=> {
        fetch(`http://localhost:5000/users/${user?.email}`,getToken)
        .then(res=>res.json())
        .then(data =>setAdmin(data.admin) )
      },[])


    if(!admin){
        return <Navigate to="/" state={{from:location}} />
    }
    return <Outlet/>
};

export default AdminAuth;