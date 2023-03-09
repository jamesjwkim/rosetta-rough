import './App.css';
import Footer from './Footer.js'
import Navbar from './Navbar.js'
import Dashboard from './Dashboard.js'
import Description from './Description.js'

function App() {
  return (
    <div>
      <Navbar />
      <h2>Explore the UW Faculty’s Scholarship and Collaborations across the World</h2>
      <Dashboard />  
      <Description />
      <Footer />
    </div>
  );
}

export default App;
