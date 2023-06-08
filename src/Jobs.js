import React, { useEffect,useState } from 'react';

import './Jobs.css';
import Card from 'react-bootstrap/Card';

import firebase from './firebase';
import { Link, useHistory } from "react-router-dom";
// Import the logos
import logo_scoot from './assets/logos/scoot.svg';
import logo_blogr from './assets/logos/blogr.svg';
import logo_coffeeroasters from './assets/logos/coffeeroasters.svg';
import logo_creative from './assets/logos/creative.svg';
import logo_crowdfund from './assets/logos/crowdfund.svg';
import logo_maker from './assets/logos/maker.svg';
import logo_mastercraft from './assets/logos/mastercraft.svg';
import logo_officelite from './assets/logos/officelite.svg';
import logo_pod from './assets/logos/pod.svg';
import logo_pomodoro from './assets/logos/pomodoro.svg';
import logo_typemaster from './assets/logos/typemaster.svg';
import logo_vector from './assets/logos/vector.svg';
export default function Jobs({ searchText, locationText, fullTimeOnly }) {
  const [jobs, setJobs] = useState([]);
 /* const logoContext = require.context('./assets/logos', true, /\.svg$/);
  const getLogoImage = (path) => {
    const imageName = path.replace('./assets/logos/', '');
    return logoContext(`./${imageName}`).default;
  };
  */
 // Map the company names to the logos

const logos = {
  "scoot": logo_scoot,
  "blogr": logo_blogr,
  "coffeeroasters": logo_coffeeroasters,
  "creative": logo_creative,
  "crowdfund": logo_crowdfund,
  "maker": logo_maker,
  "mastercraft": logo_mastercraft,
  "office lite": logo_officelite,
  "pod": logo_pod,
  "pomodoro": logo_pomodoro,
  "typemaster": logo_typemaster,
  "vector": logo_vector,
};

  useEffect(() => {
    const fetchData = async () => {
      const database = firebase.database();
      const snapshot = await database.ref('/').once('value');
      const data = snapshot.val();
      setJobs(data);
      console.log(data);
    };

    fetchData();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearchText =
      job.title?.toLowerCase().includes(searchText?.toLowerCase() ?? '') ||
      job.company?.toLowerCase().includes(searchText?.toLowerCase() ?? '');
    const matchesLocation = job.location?.toLowerCase().includes(locationText?.toLowerCase() ?? '');
    const matchesFullTime = !fullTimeOnly || (job.contract && job.contract === 'Full Time');

    return matchesSearchText && matchesLocation && matchesFullTime;
    
  });
 
  
  return (

  <div className="py-5">
  
    <div  className="container" style={{
      /*  width: '65%',
      display: 'block',
      marginLeft: 'auto',
    marginRight: 'auto'*/ }}>
    <div className="row hidden-md-up">
    {filteredJobs.map((job) =>
    <div key={job.id} className="col-12 col-sm-6 col-md-4">
  <Link to={`/jobdetails/${job.id}`}  style={{ textDecoration: 'none'}}      >	
  <Card style={{ width: '' ,padding: '20px',marginBottom: '50px'}}>
   
  <Card.Body>
  <div className="icon" style={{
    display: 'inline-block',
    zIndex: '1',
    position: 'absolute', top:'-30px', left:'40px'
}}>  <img style={{
 width : '50px', height: '50px',borderRadius:'10px',padding:'8px', background :`${job.logoBackground}`
}} 
src={logos[job.company.toLowerCase()]}

 alt="Logo"/> </div>
  <div className="d-flex justify-content-start"> 
  <Card.Subtitle className="mb-2 text-muted">{job.postedAt} . </Card.Subtitle> 
  <Card.Subtitle className="mb-2 text-muted">  </Card.Subtitle> 
  <Card.Subtitle className="mb-2 text-muted">&nbsp; {job.contract}</Card.Subtitle>
  </div>
    <Card.Title>{job.position}</Card.Title>
    
    <Card.Subtitle style={{ paddingTop: '10px' }} className="mb-2 text-muted">{job.company}</Card.Subtitle> 
    
    <Card.Text style={{ paddingTop: '20px' , color:'#5964E0', fontSize: '14px', fontWeight: 'bold'}}>{job.location}</Card.Text>
  
  </Card.Body>
</Card>
</Link>
    
</div>
  )}


    </div>
    </div>
    </div>
    

    
  )
}
