import React, { useEffect, useState } from 'react';
import scoot from './assets/logos/pod.svg';
import './JobsDetails.css';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import firebase from './firebase';
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
import { Link, useHistory, useParams } from "react-router-dom";
function JobDetails() {
  const [jobsDetails, setJobsDetails] = useState([]);
  const { id } = useParams();

  // function that fix the logo Path
  function fixImagePath(path) {
    if (!path) {
      return "";
    }
    return path.startsWith('./') ? path.slice(1) : path;
  }
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

      const job = data.find((job) => job.id.toString() === id);


      setJobsDetails(job);
      console.log('jobsDetails:', job); // Add this line
    };

    fetchData();
  }, [id]);
  return (
<div>
    <Header />
<div  style={{ backgroundColor : '#F2F2F2' }}  className="row d-flex justify-content-center">
    <div  className="col-md-5 col-11 ">
      <Card  className="card mb-3 ">
        <div  className="row no-gutters align-items-center ">
          <div style={{ maxWidth: '140px', width: '100%' }}  className="col-12 col-md-4 text-center center-image-mobile">
          <img style={{ borderRadius:'10px', padding:'8px', background: `${jobsDetails.logoBackground}` }} src={jobsDetails.company && logos[jobsDetails.company.toLowerCase()]} className="card-img pt-3 pt-md-1" alt="Logo" />


          </div>

          <div  className="col-12 col-md-8">
          <Card.Body style={{ margin: '0px' }}>
  <div className="company-info">
    <div className="company-details">
      <Card.Title>{jobsDetails.company}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {jobsDetails.website}
      </Card.Subtitle>
    </div>
 {/*   <div>
      <a
        href="#"
        style={{
          backgroundColor: '#EAEBF2',
          border: '1px solid #D1D4F0',
          color: '#5964E0',
        }}
        className="btn btn-primary mt-3 mt-md-0 mb-3 mb-md-0"
      >
        Company Site
      </a>
      </div>*/}
  </div>
</Card.Body>

          </div>
        </div>
      </Card>

    <Card className="p-4"  style={{backgroundColor:'#FFFFFF'}}>
      <div  className="d-flex justify-content-between">
      <div>
    <div className="d-flex justify-content-start"> 
      <Card.Subtitle className="mb-2 text-muted">2d ago . </Card.Subtitle> 
      <Card.Subtitle className="mb-2 text-muted">  </Card.Subtitle> 
      <Card.Subtitle className="mb-2 text-muted">&nbsp; Full Time</Card.Subtitle>

      
      </div>
      <Card.Title>{jobsDetails.position}</Card.Title>
      <Card.Text style={{  color:'#5964E0', fontSize: '14px', fontWeight: 'bold'}}>{jobsDetails.location}</Card.Text>

      </div>

      <div>
                <a href={jobsDetails.apply} className="btn btn-primary mt-3 mt-md-0 mb-3 mb-md-0">
                Apply Now
                </a>
      </div>

     
      </div>
      <div  className="mt-5">
               {jobsDetails.description}
      </div>
      <Card.Subtitle className="mb-2 mt-3"> Requirements </Card.Subtitle> 

      <Card.Text>
  {jobsDetails.requirements && (
    <div>
      {jobsDetails.requirements.content}
      {jobsDetails.requirements.items && (
        <ul>
          {jobsDetails.requirements.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )}
</Card.Text>

         <Card.Subtitle className="mb-2"> What You Will Do</Card.Subtitle> 


         <Card.Text>
        
         {jobsDetails.role && (
    <div>
      <p>{jobsDetails.requirements.role}</p>
      {jobsDetails.role.items && (
        <ol>
          {jobsDetails.role.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  )}
         </Card.Text>

    </Card>

     
    </div>
    </div>
    </div>
  );
}

export default JobDetails
