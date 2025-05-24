import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firesbase/Firesbase.config';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const provider=new GoogleAuthProvider();
 const [user,setUser]=useState(null)
  const [tips,setTips]=useState([]);
  const [theme,setTheme]=useState(false)
  const [loading,setLoading]=useState(true);
  const  handlelogin=(email,pass)=>{
    setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass);
    }
    const  handleregister=(email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass);
    }
     useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(Cuser)=>{
            setUser(Cuser)
            setLoading(false)
           
        });
        return()=>{
            unSubscribe()
           
       
        }
    },[])

     useEffect(()=>{
            fetch('https://garden-server-beta.vercel.app/sharedtips').
            then(res=>res.json())
            .then(data=>{
                setTips(data)
               
            
               })
            .catch(err=>{
                toast(err,{
                                type:"error",
                                theme:"colored"
                            })
            })
        },[])
      const goSignup=()=>{
        return signInWithPopup(auth,provider);
      }
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
 updateUserInfo,
 tips,
 setTips,
 theme,
 setTheme,
 loading,
 setLoading,
 goSignup
 
    }
    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;