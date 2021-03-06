import Head from "next/head";
import styles from "/styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mission}>
          <h2 className={styles.title}>Mission</h2>

          <p className={styles.description}>
            Rechercher un métier dans la programmation lorsqu'on se reconverti
            professionnellement est souvent impressionant :
          </p>

          <ul className={styles.description}>
            <li>- on ne sait pas quelle branche du métier choisir</li>
            <li>
              - on se demande si la branche choisie permet de trouver un boulot
              dans sa région
            </li>
            <li>
              - les formations nous persuadent que leur choix de technologies
              (langages) est le meilleur, mais comment en être sûr·e ?
            </li>
          </ul>
        </div>

        <h2 className={styles.title}>Philosophie</h2>
        <p className={styles.description}>
          Nous voulions créer un projet à impact social et apprendre de
          nouvelles compétences en programmation par la même occasion. Ce projet
          est open source et si vous voulez y contribuer, n'hésitez à contacter
          l'un de nous.
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.linkedin.com/in/yousra-h-919ba0198/"
            className={styles.card}
          >
            <h2>Yousra H (Développeuse Next.js / React) &rarr;</h2>
            {/* <img
              src="/photo.jpg"
              width={100}
              height={100}
              
              className={styles.image}
            /> */}
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Adeline S (Développeuse Node.JS / Express) &rarr;</h2>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Gregory H (Développeur Node.JS / Express) &rarr;</h2>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Jénaïc C (Développeur Next.js / React) &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
