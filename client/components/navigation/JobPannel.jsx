import React, { useState, useEffect } from 'react';

import { getOffers } from '../../utils/api';

import JobCard from './JobCard';

import styles from "../../styles/JobPannel.module.css";


const JobPannel = (dptNum) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getOffers(dptNum).then((data) => {
      setJobs(data);
    })
  }, []);

  return (
    <div className={styles.job_pannel}>
      <h2 className="job_pannel__title">Apperçu des offres</h2>
      {jobs.map((job, index) => {
        return <JobCard key={index} {...job} />
      })}
    </div>
  );
};

export default JobPannel;