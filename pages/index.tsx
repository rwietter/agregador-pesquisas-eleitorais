import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { data } from "../data/data";
import { isAfter, parseISO } from "date-fns";
import { Header } from "../components/header";

const Home: NextPage = () => {
  const date = new Date();

  return (
    <div className={styles.container}>
      <Head>
        <title>Agregador de Pesquisas | Central Política</title>
        <meta
          name="description"
          content="cronograma de pesquisas eleitorais na integra"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main}>
        {data.map((search) => {
          const datesKeys = Object.keys(search.dates);
          const { dates } = search as unknown as any;
          return (
            <div key={search.name} className={styles.search}>
              <h2>{search.name}</h2>
              <div>
                {datesKeys.map((dateKey) => {
                  const link = dates[dateKey].link;

                  const parsedDate = parseISO(
                    dateKey.split("/").reverse().join("-")
                  );
                  const after = isAfter(parsedDate, date);

                  return (
                    <>
                      {after ? (
                        <div
                          className={styles.after}
                          key={link}
                          style={{ border: `2px dotted ${search.color}` }}
                        >
                          <p>{dateKey}</p>
                        </div>
                      ) : (
                        <a
                          className={styles.before}
                          key={dateKey}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p>{dateKey}</p>
                        </a>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
