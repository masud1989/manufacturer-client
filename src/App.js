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
import Users from './pages/Dashboard/Users/Users';
import DashboardHome from './pages/Dashboard/DashboardHome';
import AddReview from './pages/Dashboard/Reviews/AddReview';
import Blogs from './pages/Home/Blogs';
import Portfolio from './pages/Home/Portfolio';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        
        <Route path='product/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
          }>
        </Route>

{/* Nested Route Starts here=============================================== */}
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
          }>
            <Route index element={<DashboardHome></DashboardHome>}></Route>
            <Route path='manage-product' element={<ManageProduct></ManageProduct>}></Route>
            <Route path='users' element={<Users></Users>}></Route>
            <Route path='add-review' element={<AddReview></AddReview>} ></Route>
        </Route>

        <Route path='users' element={
          <RequireAuth>
            <Users></Users>
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
// Client Live Site:  https://hand-tools-center.web.app

//Server Repo: https://github.com/programming-hero-web-course1/manufacturer-website-server-side-masud1989
// Server Live Site:  https://obscure-hamlet-59270.herokuapp.com/


//Admin User: 
// email: test3@test.com
//Password: 123456