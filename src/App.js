import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './components/AddItems/AddItems';
import AllItems from './components/AllItems/AllItems';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LaptopDetails from './components/LaptopDetails/LaptopDetails';
import Login from './components/Login/Login';
import ManageInventories from './components/ManageInventories/ManageInventories';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NotFound from './components/NOtFound/NotFound';
import MyItems from './components/MyItems/MyItems';
import ManageItems from './components/ManageItems/ManageItems';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <LaptopDetails />
          </RequireAuth>
        } />
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>
        } >
          <Route index element={<AllItems />} />
          <Route path='allitems' element={<AllItems />} />
          <Route path='additems' element={<AddItems />} />
        </Route>
        <Route path='/manageitem' element={<ManageItems />} />
        <Route path='/myitems' element={<MyItems />} />
        <Route path='/additem' element={<AddItems />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position='top-center'
      />
    </div>
  );
}

export default App;
