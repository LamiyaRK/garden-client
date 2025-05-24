import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomeLayout from './Layouts/HomeLayout.jsx'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import AddTip from './Components/AddTip.jsx'
import TipsTable from './Components/TipsTable.jsx'
import TipDetails from './Components/TipDetails.jsx'
import MyTips from './Components/MyTips.jsx'
import UpdateTip from './Components/UpdateTip.jsx'
import ExploreGardeners from './Components/ExploreGardeners.jsx'
import Error from './Components/Error.jsx'
import PrivateRoute from './Routes/PrivateRoute.jsx'
import Loader from './Components/Loader.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    Component:HomeLayout,
    children:[
      {
        index:true,
        path:'/',
        Component:Home,
       
      },
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/register',
        Component:Register
      },
      {
        path:'/Share-a-garden-tip',
        element:<PrivateRoute><AddTip></AddTip></PrivateRoute>,
       
      },
      {
        path:'/Browse-tips',
        loader:()=> fetch('http://localhost:3000/sharedtips'),
        Component:TipsTable,
        hydrateFallbackElement:<Loader></Loader>
      },
      {
        path:'/Browse-tips/:id',
        loader:({params})=>fetch(`http://localhost:3000/sharedtips/${params.id}`),
       element:<PrivateRoute><TipDetails></TipDetails></PrivateRoute>,
       hydrateFallbackElement:<Loader></Loader>
      },
      {
        path:'/My-tips/:email',
        loader:({params})=>fetch(`http://localhost:3000/sharedtips/email/${params.email}`),
       element:<PrivateRoute><MyTips></MyTips></PrivateRoute>,
       hydrateFallbackElement:<Loader></Loader>
      },
      {
        path:'/updateTip/:id',
         loader:({params})=>fetch(`http://localhost:3000/sharedtips/${params.id}`),
        element:<PrivateRoute><UpdateTip></UpdateTip></PrivateRoute>,
        hydrateFallbackElement:<Loader></Loader>
      },{
        path:'/explore-gardeners',
        loader:()=>fetch('http://localhost:3000/gardeners'),
        Component:ExploreGardeners,
        hydrateFallbackElement:<Loader></Loader>
      },
      
    ]
  },
  {
        path:"/*",
        Component:Error
      }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
   <RouterProvider router={router}>
    <App />
    </RouterProvider>
 </AuthProvider>
  </StrictMode>,
)
