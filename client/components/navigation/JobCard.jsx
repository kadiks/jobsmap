import React from 'react';
import styles from "../../styles/JobPannel.module.css";


const JobCard = (job) => {
  return (
    <div className={styles.job_card}>
      <p>Intitulé :{job.title}</p>
      <p>Description : {job.description}</p>
      <p> Date: {job.date} </p>
      <p>Technos : {job.keywords.map((keyword) => {
        return keyword.keyword + ' ';
      })}</p>
      <p> Lien : {job.link} </p>
    </div>
  );
};

export default JobCard;