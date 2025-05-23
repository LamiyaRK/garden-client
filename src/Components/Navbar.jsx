import React, { use } from 'react';
import logo from '/logo.png'
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
const Navbar = () => {
  const {user,hanldlogout,setUser}=use(AuthContext);
 // console.log(user)
    const list=<>
      <Link to='/'> <li><a>Home</a></li></Link> 
      <Link to='/Share-a-garden-tip'><li><a> Share a Garden Tip</a></li></Link> 
     <Link to='/Browse-tips'>  <li><a> Browse Tips</a></li></Link>
     <Link to='/explore-gardeners' > <li><a> Explore Gardeners</a></li></Link>  
      <Link to={`/My-tips/${user?.email}`}> <li><a> My Tips </a></li></Link>   
           
    </>
   // console.log(user)
    const handleLogout=()=>{
      hanldlogout().then(res=>{
        Swal.fire({
          title: "Logout Successful!",
          icon: "success",
          draggable: true
          
        });
       
      }).catch(err=>{
         toast(err,{
                    type:"error",
                    theme:"colored"
                });
      })
    }
   
    return (
        <div >
           <div class="navbar bg-[#0B3D2C] shadow-sm text-white">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow text-xl bg-[#0B3D2C]">
        {list}
      </ul>
    </div>
   <div className='flex items-center relative'>
  <div > <img src={logo} className='w-[120px]'></img></div>
     <a class="  absolute left-20 text-4xl"> Verdantia</a>
   </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 text-xl">
       {list}
    </ul>
  </div>
 {!user?<div class="navbar-end flex gap-3 pr-5">
 <Link to='/login'><a class="btn text-[#0B3D2C] hover:text-white hover:bg-[#2A7D2E]">Login</a></Link>   
  <Link to='/register'><a class="btn text-[#0B3D2C] hover:text-white hover:bg-[#2A7D2E]">Sign Up</a></Link>   
  </div>:  
  <div class="navbar-end flex gap-3 pr-5">
  <div className="dropdown dropdown-end text-green-950  ">
  <div className='group'>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoURL} />
        </div>
        
      </div>
      <p className=' text-white opacity-0 group-hover:opacity-100 '>{user.displayName}</p>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       
        <li><button className='btn bg-[#0B3D2C] text-white ' onClick={handleLogout}>Logout</button></li>
      </ul>
      </div>
      </div>  
} 
</div>
        </div>
    );
};

export default Navbar;