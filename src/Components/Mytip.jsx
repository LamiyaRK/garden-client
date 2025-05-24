import React, { use, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const Mytip = ({da,data,setData}) => {
    const {_id,image,title,category,availability,difficulty,type}=da
     const {tips,setTips}=use(AuthContext)
    
   const deleteTip=()=>{
    

          Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    
    fetch(`https://garden-server-beta.vercel.app/sharedtips/${_id}`,{
        method:'delete'
    }).then( res=>{
         res.json()
       
    }).then(tiip=>{
 Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
         const remainingtips= data.filter(tipi=>tipi._id!=_id);
        setData( remainingtips)
        console.log(remainingtips) 
      
    }).catch(err=>{
        toast(err,{
                type:"error",
                theme:"colored"
                         })
    })
  }

    })
  
   }
  
    return (
         <tr className='text-green-950'>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>
        <td>
         {type}
          <br />
          <span
  className={`badge badge-ghost badge-sm ${
    difficulty === 'Easy'
      ? 'bg-success'
      : difficulty === 'Medium'
      ? 'bg-warning'
      : 'bg-error'
  }`}
>
  {difficulty}
</span>
        </td>
        <td><span className={`flex items-center  justify-center badge badge-ghost badge-md ${
    availability=== 'Public'
      ? 'bg-success': 'bg-error'
  }`}>{availability}</span></td>
        <th > 
          <div className='flex flex-col gap-2'>
         <Link to={`/updateTip/${_id}`}> <button className="btn bg-black btn-xs text-white w-full "><FaEdit/> Update</button></Link>  
       <button className="btn btn-error btn-xs text-white  "  onClick={deleteTip}><AiFillDelete /> Delete</button> 
          </div>
        </th>
      </tr>
    
    );
};

export default Mytip;