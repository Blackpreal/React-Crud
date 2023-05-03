import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Menu from './Components/MenuBar/Menu';
import AddUser from './Pages/AddUser/AddUser';
import EditUser from './Pages/EditUser/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="">
       <Menu />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
