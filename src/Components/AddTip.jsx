import React, { use } from 'react';
import logo from '/llogo.jpg'; 
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
const AddTip = () => {
     const {user,tips,setTips}=use(AuthContext);
    // console.log(user)
const addtip=e=>{
   
    e.preventDefault();
    const form=e.target;
    const formdata=new FormData(form);
    const data=Object.fromEntries(formdata.entries());
    fetch('https://garden-server-beta.vercel.app/sharedtips',{
        method:'post',
        headers:{
         "content-type":   "application/json"},
         body:JSON.stringify(data)
    })
    .then(res=>{ toast("Tip shared successfully",{
                type:"success",
                theme:"colored"
            })
            setTips(...tips,data)
        })
    .catch(err=> toast(err,{
                type:"error",
                theme:"colored"
            }))
    
}
  return (
    <div
      className="  justify-center  text-[#0B3D2C]">
     
      
      <div className="flex items-center justify-center gap-3 mt-6 w-5/6 mx-auto">
        <p className="badge text-lg bg-[#2A7D2E] h-8 rounded-3xl text-white">
          Garden Tip Submission
        </p>
        <img src={logo} alt="logo" className="h-[60px]" />
      </div>

     
      <form className=" bg-green-100 border-green-500 border-2 rounded-box p-10 mb-[120px] py-10 mt-6 w-5/6 mx-auto" onSubmit={addtip}>
     
        <div>
          <h1 className="text-3xl font-bold text-center mb-3">Share Your Garden Wisdom</h1>
          <p className="md:w-[70%] mx-auto text-center mb-6">
            Have a helpful gardening tip to share? Whether it's about composting, plant care, or indoor gardening — inspire others by contributing your green-thumb secrets! Fill out the form below to publish your tip to the community. 🌼
          </p>
        </div>

        {/* Form Fields */}
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-[#0B3D2C]">Name</legend>
            <input type="text" className="input w-full" placeholder="Name" name="name" defaultValue={user?.displayName||''} readOnly />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[#0B3D2C]">Email</legend>
            <input type="email" className="input w-full"   name="email" value={user?.email||''} readOnly />
          </fieldset>

          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-[#0B3D2C]">Title</legend>
            <input type="text" className="input w-full" placeholder="Title" name="title" />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[#0B3D2C]">Plant Type/Topic</legend>
            <input type="text" className="input w-full" placeholder="Plant Type/Topic" name="type" />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[#0B3D2C]">Difficulty Level</legend>
            <select className="select w-full" name="difficulty">
              <option disabled selected>Difficulty Level</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[#0B3D2C]">Description</legend>
            <input type="text" className="input w-full" placeholder="Description" name="description" />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[#0B3D2C]">Availability</legend>
            <select className="select w-full" name="availability">
              <option disabled selected>Availability</option>
              <option>Public</option>
              <option>Hidden</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[#0B3D2C]">Category</legend>
            <select className="select select-bordered w-full" name="category">
              <option disabled selected>Select a category</option>
              <option>Composting</option>
              <option>Plant Care</option>
              <option>Vertical Gardening</option>
              <option>Indoor Gardening</option>
              <option>Organic Fertilizer</option>
              <option>Pest Control</option>
              <option>Seed Starting</option>
              <option>Hydroponics</option>
            </select>
          </fieldset>

          <fieldset className="fieldset md:col-span-2">
            <legend className="fieldset-legend text-[#0B3D2C]">Image URL</legend>
            <input type="url" className="input w-full" placeholder="Image URL" name="image" />
          </fieldset>

          <button
            type="submit"
            className="btn w-full md:col-span-2 bg-green-950 border-green-400 border-2 text-white"
          >
            Share Tip
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTip;
