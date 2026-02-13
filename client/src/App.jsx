import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Login } from './pages/Login.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { AddUser } from './pages/AddUser.jsx'
import { FinanceDashboard } from './pages/FinanceDashboard.jsx'
import { GeneralDashboard } from './pages/GeneralDashboard.jsx'
import { UserList } from './pages/UserList.jsx'
import { AddExpense } from './pages/AddExpense.jsx'
import { ExpenseList } from './pages/ExpenseList.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path='finance' element={<FinanceDashboard />} />
            <Route path='general' element={<GeneralDashboard />} />
            <Route path='user' element={<AddUser />} />
            <Route path='user-list' element={<UserList />} />
            <Route path='add-expense' element={<AddExpense />} />
            <Route path='expense-list' element={<ExpenseList />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
