
import './App.css';
import { Routes, Route, Switch } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';
import { Container } from 'react-bootstrap';
import Home from './Home'
import JobDetails from './JobDetails'
function App() {
  return (
    <div className=''>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobdetails/:id" element={<JobDetails />} />
          
       </Routes>
       {/*Annonce*/}
    </div>
  );
}

export default App;
