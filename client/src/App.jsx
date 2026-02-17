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
import { Profile } from './pages/Profile.jsx'
import { CreateInvoice } from './pages/CreateInvoice.jsx'
import { AddSalary } from './pages/AddSalary.jsx'
import { AddEmployee } from './pages/AddEmployee.jsx'
import { Features } from './pages/Features.jsx'
import { EmployeeList } from './pages/EmployeeList.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path='profile'  element={<Profile />} />
            <Route path='features' element={<Features />} />
            <Route path='finance' element={<FinanceDashboard />} />
            <Route path='general' element={<GeneralDashboard />} />
            <Route path='add-user' element={<AddUser />} />
            <Route path='user-list' element={<UserList />} />
            <Route path='add-expense' element={<AddExpense />} />
            <Route path='expense-list' element={<ExpenseList />} />
            <Route path='create-invoice' element={<CreateInvoice />} />
            <Route path='add-salary' element={<AddSalary />} />
            <Route path='add-employee' element={<AddEmployee />} />
            <Route path='employee-list' element={<EmployeeList />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
