import './App.css';
import { Scholars } from './scholars'
import { Home } from './Homepage'
import { Routes, Route, Navigate, useNavigate, Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path='/home' element={<Home />} />
          <Route path='/scholars' element={<Scholars />} />
          <Route path='*' element={<Navigate to='/home' />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
