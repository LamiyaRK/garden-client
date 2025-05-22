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

const router=createBrowserRouter([
  {
    path:'/',
    Component:HomeLayout,
    children:[
      {
        index:true,
        path:'/',
        Component:Home
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
        Component:AddTip
      },
      {
        path:'/Browse-tips',
        Component:TipsTable
      },
      {
        path:'/Browse-tips/:id',
        loader:({params})=>fetch(`http://localhost:3000/sharedtips/${params.id}`),
        Component:TipDetails
      }
    ]
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
