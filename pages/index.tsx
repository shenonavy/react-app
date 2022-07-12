import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "./home/index";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>React App</title>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="React App - Shafran" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>

      <main>
        <Main />
      </main>
    </div>
  );
};

export default Home;
