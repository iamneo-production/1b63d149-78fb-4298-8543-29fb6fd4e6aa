import logo from './logo.svg';
import './App.css';
// import Frontpage from './pages/Frontpage'/;
import ULogin from './pages/ULogin';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Registrationpage from './pages/Registrationpage';

function App() {
  return (

      <Router> 
            <Routes>
              {<Route path="/" element={<ULogin/>}> </Route>}
              {<Route path="/Registrationpage" element={<Registrationpage />}/>}
            </Routes>
            
      </Router>
  );
}

export default App;
