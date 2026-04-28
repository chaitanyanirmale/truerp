import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Login } from './pages/Home/Login.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { AddUser } from './pages/User/AddUser.jsx'
import { FinanceDashboard } from './pages/Home/FinanceDashboard.jsx'
import { GeneralDashboard } from './pages/Home/GeneralDashboard.jsx'
import { UserList } from './pages/User/UserList.jsx'
import { AddExpense } from './pages/Expanse/AddExpense.jsx'
import { ExpenseList } from './pages/Expanse/ExpenseList.jsx'
import { Profile } from './pages/User/Profile.jsx'
import { CreateInvoice } from './pages/Invoices/CreateInvoice.jsx'
import { AddSalary } from './pages/Salary/AddSalary.jsx'
import { AddEmployee } from './pages/Salary/AddEmployee.jsx'
import { Features } from './pages/Home/Features.jsx'
import { EmployeeList } from './pages/Salary/EmployeeList.jsx'
import { SalaryList } from './pages/Salary/SalaryList.jsx'
import { CreateSO } from './pages/CreateSO.jsx'
import { AIFeatures } from './pages/AI/AIFeatures.jsx'
import { SOList } from './pages/SOList.jsx'
import { InvoiceList } from './pages/Invoices/InvoiceList.jsx'
import { SupplierPayment } from './pages/Purchase/SupplierPayment.jsx'
import { AddPurchase } from './pages/Purchase/AddPurchase.jsx'
import { AddNewItem } from './pages/Items/AddNewItem.jsx'
import { MainCategory } from './pages/Items/MainCategory.jsx'
import { SubCategory } from './pages/Items/SubCategory.jsx'
import { ItemList } from './pages/Items/ItemList.jsx'
import { ManageUnits } from './pages/Items/ManageUnits.jsx'
import { AddSupplierProduct } from './pages/Items/AddSupplierProduct.jsx'
import { GRR } from './pages/GRR.jsx'
import { GRRList } from './pages/GRRList.jsx'
import { ViewPurchaseBill } from './pages/Purchase/ViewPurchaseBill.jsx'
import { PartPayment } from './pages/Purchase/PartPayment.jsx'
import { CreatePO } from './pages/Purchase/CreatePO.jsx'
import { POList } from './pages/Purchase/POList.jsx'
import { AddMachinery } from './pages/Quality/AddMachinery.jsx'
import { MachineryList } from './pages/Quality/MachineryList.jsx'
import { QuickLinks } from './pages/Home/QuickLinks.jsx'
import { Enquiries } from './pages/Quality/Enquiries.jsx'
import { User } from './pages/User/User.jsx'
import { BillsOfSupply } from './pages/BillsOfSupply.jsx'
import { ItemDetails } from './pages/Items/ItemDetails.jsx'
import { AiDemandForecasting } from './pages/AI/AiDemandForecasting.jsx'
import { SmartInventory } from './pages/AI/SmartInventory.jsx'
import { CostingAndProfit } from './pages/AI/CostingAndProfit.jsx'
import { ViewSalary } from './pages/Salary/ViewSalary.jsx'
import { EditSalary } from './pages/Salary/EditSalary.jsx'
import { CreateBOM } from './pages/Invoices/CreateBOM.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />          
          <Route path='/login' element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path='profile'  element={<Profile />} />
            <Route path='features' element={<Features />} />
            <Route path='quick-links' element={<QuickLinks />} />
            <Route path='finance' element={<FinanceDashboard />} />
            <Route path='general' element={<GeneralDashboard />} />
            <Route path='aifeatures' element={<AIFeatures />} />
            <Route path='add-user' element={<AddUser />} />
            <Route path='user/:id' element={<User />} />
            <Route path='user-list' element={<UserList />} />
            <Route path='add-expense' element={<AddExpense />} />
            <Route path='expense-list' element={<ExpenseList />} />
            <Route path='supplier-payment' element={<SupplierPayment />} />
            <Route path='create-invoice' element={<CreateInvoice />} />
            <Route path='invoice-list' element={<InvoiceList />} />
            <Route path='create-bom/:id' element={<CreateBOM />} />
            <Route path='add-salary' element={<AddSalary />} />
            <Route path='salary-list' element={<SalaryList />} />
            <Route path='view-salary/:id' element={<ViewSalary />} />
            <Route path='edit-salary/:id' element={<EditSalary />} />
            <Route path='add-employee' element={<AddEmployee />} />
            <Route path='employee-list' element={<EmployeeList />} />
            <Route path='create-so' element={<CreateSO />} />
            <Route path='so-list' element={<SOList />} />
            <Route path='create-po' element={<CreatePO />} />
            <Route path='po-list' element={<POList />} />
            <Route path='add-purchase' element={<AddPurchase />} />
            <Route path='add-item' element={<AddNewItem />} />
            <Route path='main-cat' element={<MainCategory />} />
            <Route path='sub-cat' element={<SubCategory />} />
            <Route path='items-list' element={<ItemList />} />
            <Route path='item-details/:id' element={<ItemDetails />} />
            <Route path='manage-units' element={<ManageUnits />} />
            <Route path='addSupplierwiseProduct/:id' element={<AddSupplierProduct />} />
            <Route path='grr' element={<GRR />} />
            <Route path='grr-list' element={<GRRList  />} />
            <Route path='viewPurchaseBill/:id' element={<ViewPurchaseBill  />} />
            <Route path='partPayment/:id' element={<PartPayment  />} />
            <Route path='add-machinery' element={<AddMachinery  />} />
            <Route path='machinery-list' element={<MachineryList  />} />
            <Route path='enquiries' element={<Enquiries  />} />
            <Route path='demand-forecasting' element={<AiDemandForecasting  />} />
            <Route path='smart-inventory' element={<SmartInventory  />} />
            <Route path='costing-profit' element={<CostingAndProfit  />} />
          </Route>
          <Route path='/billsofsupply/:id' element={<BillsOfSupply />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
