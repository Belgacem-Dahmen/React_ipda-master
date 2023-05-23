import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";



export default function AuthLayout() {
  

    return (
      <>
      <div className="bg-white">
       
      <Header isAuth={false}/>
      <Sidebar />
      <Outlet />
      </div>
  </>
    )
  }
  
   