import './App.css';
import { Scholar } from './scholars'
import { Home } from './Homepage'
import { Publications } from './Publications'
import  SinglePublication from "./SinglePublication";
import { Routes, Route, Navigate, useNavigate, Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/scholars' element={<Scholar />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/publications/result/:id' element={<SinglePublication />}/>
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
