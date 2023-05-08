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
          <Route path='/home' element={<Home />} />
          <Route path='/scholars' element={<Scholar />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/publications/result/:id' element={<SinglePublication />}/>
          <Route path='*' element={<Navigate to='/home' />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
