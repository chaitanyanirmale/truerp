import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Login } from './pages/Login.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { AddUser } from './pages/AddUser.jsx'
import { FinanceDashboard } from './pages/FinanceDashboard.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/finance-dashboard' element={<FinanceDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
