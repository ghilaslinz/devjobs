
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import { Container } from 'react-bootstrap';
import Jobs from './Jobs'
import JobsPage from './JobsPage';
function Home() {
  return (
    <div className=''>
     <Header />
     <JobsPage />
     
     
       {/*Annonce*/}
    </div>
  );
}

export default Home;
