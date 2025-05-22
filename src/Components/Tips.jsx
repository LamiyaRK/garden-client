import React from 'react';
import { Link } from 'react-router';

const Tips = ({tip}) => {
    const {image,title,category}=tip;
    
    return (
       
            <tr className='border-green-400 text-green-950 '>
        <td>
          <div className="flex items-center gap-3 w-full ">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={`${image}||https://i.ibb.co/Q1rBJZD/fresh-red-tomatoes.jpg`} />
              </div>
            </div>
           </div>
        </td>
        <td>
         {title}
         
        </td>
        <td>
          {category}
         
        </td>
        <th>
      <Link to={`/Browse-tips/${tip._id}`}><button className="btn btn-ghost btn-xs bg-green-950 border-green-400 border-2 text-white">See More</button></Link>    
        </th>
      </tr>
        
    );
};

export default Tips;