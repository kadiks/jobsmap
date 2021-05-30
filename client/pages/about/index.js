import Head from "next/head";
import Image from "next/image";
import styles from "/styles/About.module.css";

export default function About() {
  return (
    <div className="m-auto; flex; flex-col; justify-center; items-center; h-screen; min-h-screen; pt-0; pr-2">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex; flex-col; justify-center; items-center; flex-auto; pt-20; pr-0">

        <div className="bg-gray-50; font-serif; open-sans">
          <h2 className={styles.title}>
            Mission
          </h2>
          <div className={styles.cardAbout}>

          <p className={styles.description}>
          Rechercher un métier dans la programmation lorsqu'on se reconverti professionnellement est souvent impressionant :
          </p>

          <ul className={styles.description}>

              <li>
              - on ne sait pas quelle branche du métier choisir
              </li>
              <li>
              - on se demande si la branche choisie permet de trouver un boulot dans sa région
              </li>
              <li>
              - les formations nous persuadent que leur choix de technologies (langages) est le meilleur, mais comment en être sûr·e ?
              </li>

          </ul>
          </div>

          <h2 className={styles.title}>
              Philosophie
          </h2>

        <div className={styles.cardAbout}>
          

        <p className={styles.description}>Nous voulions créer un projet à impact social et apprendre de nouvelles compétences en programmation par la même occasion.
        Ce projet est open source et si vous voulez y contribuer, n'hésitez à contacter l'un de nous. 
        </p>

        </div>
        </div>

        <div className={styles.grid}>

          <a href="https://www.linkedin.com/in/yousra-h-919ba0198/" className=" border-solid; border-black;m-4; p-6; text-center; no-underline">
            <Image src="/Yousra.jpg"  width={100} height={100} className={styles.image}/>
            <h2>Yousra H (Développeuse Next.js / React) &rarr;</h2>
          </a>

          <a href="https://www.linkedin.com/in/julie-desvaux/" className={styles.card}>
            <Image src="/Julie.jpg"  width={100} height={100} className={styles.image}/>
            <h2>Julie Desvaux (Développeuse Next.js / React) &rarr;</h2>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <Image src="/Adeline.jpg"  width={100} height={100} className={styles.image}/>
            <h2>Adeline S (Développeuse Node.JS / Express) &rarr;</h2>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <Image src="/Gregory.jpg"  width={100} height={100} className={styles.image}/>
            <h2>Gregory H (Développeur Node.JS / Express) &rarr;</h2>
          </a>

          <a href="https://www.linkedin.com/in/jenaiccambre/" className={styles.card}>
            <Image src="/Jenaic.jpg"  width={100} height={100} className={styles.image}/>
            <h2>Jénaïc C (Développeur Next.js / React) &rarr;</h2>
          </a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  );
}
