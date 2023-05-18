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
          <Route path='/openalex/build_old' element={<Home />} />
          <Route path='/openalex/build_old/scholars' element={<Scholar />} />
          <Route path='/openalex/build_old/publications' element={<Publications />} />
          <Route path='/publications/result/:id' element={<SinglePublication />}/>
          <Route path='*' element={<Navigate to='/openalex/build_old' />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
