import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";


export const Dashboard = () => {
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
