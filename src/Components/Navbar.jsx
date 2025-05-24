import React, { use } from 'react';
import logo from '/logo.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { FaMoon, FaSun } from 'react-icons/fa';
import { AiFillSun } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip'
const Navbar = () => {
 
  const {user,hanldlogout,setUser,theme,setTheme}=use(AuthContext);
 // console.log(user)
    const list=<>
      <NavLink to='/'> <li><a>Home</a></li></NavLink> 
   {user&& <NavLink to='/Share-a-garden-tip'><li><a> Share a Garden Tip</a></li></NavLink> }  
     <NavLink to='/Browse-tips'>  <li><a> Browse Tips</a></li></NavLink>
     <NavLink to='/explore-gardeners' > <li><a> Explore Gardeners</a></li></NavLink>  
 {user&&<NavLink to={`/My-tips/${user?.email}`}> <li><a> My Tips </a></li></NavLink> }  
           
    </>
  // console.log(theme)
   const handleTheme=()=>{
    if(theme==false)
    setTheme(true)
  else
  setTheme(false)
   }
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
           <div class="navbar  bg-[#0B3D2C]  shadow-sm text-white">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 md:p-2 shadow text bg-[#0B3D2C]">
        {list}
      </ul>
    </div>
   <div className='flex items-center relative'>
  <div > <img src={logo} className='w-[60px] md:w-[120px] p-0'></img></div>
     <a class="absolute left-10 md:left-20 text-4xl"> Verdantia</a>
   </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 ">
       {list}
    </ul>
  </div>
 
 {!user?<div class="navbar-end flex  gap-3 md:pr-5">

{theme?<button className='btn' onClick={handleTheme}><AiFillSun size={24} /></button>:<button className='btn' onClick={handleTheme}><FaMoon/></button>}
 <Link to='/login'><a class="btn text-[#0B3D2C] hover:text-white hover:bg-[#2A7D2E]">Login</a></Link>   
  <Link to='/register'><a class="btn text-[#0B3D2C] hover:text-white hover:bg-[#2A7D2E]">Sign Up</a></Link>   
  </div>:  
  <div className="navbar-end flex items-center gap-3 md:pr-5">

  {/* Theme Toggle */}
  <button className="btn" onClick={handleTheme}>
    {theme ? <AiFillSun size={24} /> : <FaMoon />}
  </button>

  {/* Profile Dropdown */}
  <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
     <a data-tooltip-id="my-tooltip"
  data-tooltip-content={user?.displayName}
  data-tooltip-place="top"> <img alt="User Avatar" src={user?.photoURL} /></a>  
      </div>
    </div>

    {/* Dropdown Content */}
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
    >
     
      <li>
        <button className="btn bg-[#0B3D2C] text-white w-full" onClick={handleLogout}>
          Logout
        </button>
      </li>
    </ul>
  </div>
  <Tooltip id="my-tooltip" />
</div>

} 
</div>
        </div>
    );
};

export default Navbar;