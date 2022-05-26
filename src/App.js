import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Header from './component/shared/Header';
import Register from './pages/Login/Register';
import AddProduct from './pages/ManageProduct/AddProduct';
import ManageProduct from './pages/ManageProduct/ManageProduct';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './pages/Login/RequireAuth';
import Purchase from './pages/Home/Purchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>

        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        
        <Route path='product/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
          }>
        </Route>

        <Route path='manage-product' element={
          <RequireAuth>
            <ManageProduct></ManageProduct>
          </RequireAuth>
        }>
        </Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
          }>
        </Route>

        {/* <Route path='purchase/' element={
            <RequireAuth>
                <Purchase></Purchase>
            </RequireAuth>
          }>

        </Route> */}
        
        {/* <Route path='manage-product' element={<ManageProduct></ManageProduct>}></Route> */}
        
      </Routes>
    </div>
  );
}

export default App;



// Client Repo:  https://github.com/programming-hero-web-course1/manufacturer-website-client-side-masud1989 