import React, { use, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Register = () => {
    const {handleregister,setUser,updateUserInfo,goSignup}=use(AuthContext)
   const navigate=useNavigate()

    const handleRegister=e=>{
        e.preventDefault()
        const form=e.target;
        const formdata=new FormData(form)
        const result=Object.fromEntries(formdata.entries())
     const {email,pass,photo,name}=result;
     handleregister(email,pass)
     .then(res=>{
     
         Swal.fire({
         title: "Registration Compeleted Successfully!",
         icon: "success",
         draggable: true
         
       });
      updateUserInfo({ displayName:name, photoURL: photo})
        .then(()=>{
            setUser({...res.user,displayName:name,photURL:photo}).catch(err=>{
                toast(err,{
            type:"error",
            theme:"colored"
        });
                setUser(res.user)
            })
            })
       navigate('/');

     })
     .catch(err=>{
        toast(err,{
            type:"error",
            theme:"colored"
        });
     })
    }
    const gRegister=()=>{
        goSignup().then(res => {
                Swal.fire({
                  title: 'Registration Successful!',
                  icon: 'success',
                });
                navigate( '/');
              })
              .catch(err =>
                toast(err.message || 'Login failed', {
                  type: 'error',
                  theme: 'colored',
                })
              );
          };
    
    return (
        <div>
              <div className='flex justify-center  '>
                        <form class="fieldset bg-green-100 border-green-500 border rounded-box w-md p-10 my-[120px] py-10" onSubmit={handleRegister}>
              <h1 className='text-3xl text-center text-[#0B3D2C] mb-6 font-semibold'>Register</h1>
             <input type="text" class="input mb-3 w-full " placeholder="Name" name='name' required />
             <input type="url" class="input mb-3 w-full " placeholder="Photo URL" name='photo'  required/>
            <input type="email" class="input mb-3 w-full " placeholder="Email" name='email' required/>
            <input type="password"  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$" class="input w-full " placeholder="Password" name='pass' required/>
            
              <button class="btn bg-[#0B3D2C] text-white mt-3 ">Register</button>
              <button className='btn bg-[#0B3D2C] text-white mt-3  flex items-center' onClick={gRegister}><FaGoogle/> Register With Google</button>
              <p className='text-[#0B3D2C] '>Already have an account?<Link to='/login' className='underline'><span className='font-semibold text-md'>Login</span></Link></p>
             
            </form>
                    </div>
        </div>
    );
};

export default Register;