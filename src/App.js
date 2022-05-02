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

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <LaptopDetails />
          </RequireAuth>
        } />
        <Route path='/manageinventories' element={<ManageInventories />} >
          <Route index element={<AllItems />} />
          <Route path='allitems' element={<AllItems />} />
          <Route path='additems' element={<AddItems />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
