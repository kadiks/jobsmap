import React from 'react';
import styles from "../../styles/JobPannel.module.css";


const JobCard = (job) => {
    return (
        <div className={styles.job_card}>
            <h3> {job.title} </h3>
            <p> Languages: {job.keywords.map((keyword) => {
                return keyword.keyword + ' ';
            })}</p>
            <section>
                <p> Villes: {job.city} </p>
                <p> Date: {job.date} </p>
            </section>
        </div>
    );
};

export default JobCard;