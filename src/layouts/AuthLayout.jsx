import { Outlet } from "react-router-dom";
import Header from "../components/Header";



export default function AuthLayout() {
  

    return (
      <>
      <div className="bg-white">
       
      <Header isAuth={false}/>
      Auth Layout 
      <Outlet />
      </div>
  </>
    )
  }
  
   