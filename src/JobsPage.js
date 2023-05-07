import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Jobs from './Jobs';
import { Container } from 'react-bootstrap';
const JobsPage = () => {
  const [searchText, setSearchText] = useState('');
  const [locationText, setLocationText] = useState('');
  const [fullTimeOnly, setFullTimeOnly] = useState(false);

  return (
    <Container>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        locationText={locationText}
        setLocationText={setLocationText}
        fullTimeOnly={fullTimeOnly}
        setFullTimeOnly={setFullTimeOnly}
      />
      <Jobs
        searchText={searchText}
        locationText={locationText}
        fullTimeOnly={fullTimeOnly}
      />
    </Container>
  );
};

export default JobsPage;
