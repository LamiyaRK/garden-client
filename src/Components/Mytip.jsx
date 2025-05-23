import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

const Mytip = ({da}) => {
    const {image,title,category,availability,difficulty,type}=da
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
            <button className="btn bg-black btn-xs text-white "><FaEdit/> Update</button>
           <button className="btn btn-error btn-xs text-white  "><AiFillDelete /> Delete</button>
          </div>
        </th>
      </tr>
    
    );
};

export default Mytip;