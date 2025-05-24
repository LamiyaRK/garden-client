import React, { use } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Login = () => {
    const {user,setUser,handlelogin}=use(AuthContext)
    const loc=useLocation();
    console.log(loc)
    const navigate=useNavigate()
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, pass } = Object.fromEntries(formData.entries());

    handlelogin(email, pass)
      .then(res => {
        Swal.fire({
          title: 'Login Successful!',
          icon: 'success',
        });
        navigate(location.state || '/');
      })
      .catch(err =>
        toast(err.message || 'Login failed', {
          type: 'error',
          theme: 'colored',
        })
      );
  };
    return (
        <div className='flex justify-center  '>
            <form class="fieldset bg-green-100 border-green-500 rounded-box w-sm border p-10 my-[120px] py-10" onSubmit={handleLogin}>
  <h1 className='text-3xl text-center text-[#0B3D2C] mb-6 font-semibold'>Login</h1>

  
  <input type="email" class="input mb-3" placeholder="Email" name='email' />


  <input type="password" class="input" placeholder="Password" name='pass' />

  <button class="btn bg-[#0B3D2C] text-white mt-3 border-2 ">Login</button>
  <button className='btn bg-[#0B3D2C] text-white mt-3  flex items-center'><FaGoogle/> Login With Google</button>
  <p className='text-[#0B3D2C] '>Don't have an accout?<Link to='/register' className='underline'><span className='font-semibold text-md'>Register</span></Link></p>
</form>
        </div>
    );
};

export default Login;