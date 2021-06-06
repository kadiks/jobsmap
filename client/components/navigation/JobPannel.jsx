import React, { useState } from 'react';
import JobCard from './JobCard';

import styles from "../../styles/JobPannel.module.css";


const JobPannel = () => {
    const [jobs, setJobs] = useState([{ title: "Dev Front", city: "Paris", date: "2021-06-06", keywords: [{ keyword: 'Javascript', count: 42 }, { keyword: 'PHP', count: 42 },] }, { title: "Dev Fullstack", city: "Nantes", date: "2021-06-06", keywords: [{ keyword: 'C++', count: 42 }, { keyword: 'Java', count: 42 },] }, { title: "Dev Backend", city: "Toulouse", date: "2021-06-06", keywords: [{ keyword: 'Javascript', count: 42 }, { keyword: 'Python', count: 42 },] }, { title: "Dev Frontend ", city: "Paris", date: "2021-06-06", keywords: [{ keyword: 'React', count: 42 }, { keyword: 'Javascript', count: 42 },] }, { title: "Dev Front", city: "Paris", date: "2021-06-06", keywords: [{ keyword: 'Javascript', count: 42 }, { keyword: 'PHP', count: 42 },] }, { title: "Dev Fullstack", city: "Nantes", date: "2021-06-06", keywords: [{ keyword: 'C++', count: 42 }, { keyword: 'Java', count: 42 },] }, { title: "Dev Backend", city: "Toulouse", date: "2021-06-06", keywords: [{ keyword: 'Javascript', count: 42 }, { keyword: 'Python', count: 42 },] }, { title: "Dev Frontend ", city: "Paris", date: "2021-06-06", keywords: [{ keyword: 'React', count: 42 }, { keyword: 'Javascript', count: 42 },] }, { title: "Dev Front", city: "Paris", date: "2021-06-06", keywords: [{ keyword: 'Javascript', count: 42 }, { keyword: 'PHP', count: 42 },] }, { title: "Dev Fullstack", city: "Nantes", date: "2021-06-06", keywords: [{ keyword: 'C++', count: 42 }, { keyword: 'Java', count: 42 },] }, { title: "Dev Backend", city: "Toulouse", date: "2021-06-06", keywords: [{ keyword: 'Javascript', count: 42 }, { keyword: 'Python', count: 42 },] }, { title: "Dev Frontend ", city: "Paris", date: "2021-06-06", keywords: [{ keyword: 'React', count: 42 }, { keyword: 'Javascript', count: 42 },] }]);

    return (
        <div className={styles.job_pannel}>
            <h2 className="job_pannel__title">Offres d'emploi à: VILLE</h2>
            {jobs.map((job, index) => {
                return <JobCard key={index} {...job} />
            })}
        </div>
    );
};

export default JobPannel;