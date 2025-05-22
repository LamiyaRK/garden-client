import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firesbase/Firesbase.config';

const AuthProvider = ({children}) => {
 const [user,setUser]=useState(null)
  const  handlelogin=(email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass);
    }
    const  handleregister=(email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass);
    }
     useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(Cuser)=>{
            setUser(Cuser)
           
        });
        return()=>{
            unSubscribe()
           
       
        }
    },[])
    const updateUserInfo=(updateData)=>{
        return updateProfile(auth.currentUser,updateData);

    }
    const hanldlogout=()=>{
        return   signOut(auth);
    }
  
    const userInfo={
 handlelogin,
 handleregister,
 user,
 setUser,
 hanldlogout,
 updateUserInfo
    }
    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;