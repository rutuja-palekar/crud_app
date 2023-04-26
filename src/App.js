import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Task from './components/Task';
import User from './components/User';
import Nopage from './components/Nopage';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<Login />}></Route>
            <Route path='Home' element={<Home />}></Route>
            <Route path='Task' element={<Task />}></Route>
            <Route path='User' element={<User />}></Route>
            <Route path='Login' element={<Login />}></Route>
            <Route path='*' element={<Nopage />}></Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;