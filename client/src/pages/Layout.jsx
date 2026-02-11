import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="ml-64 mt-14 p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}
