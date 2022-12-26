import Head from "next/head";
import Image from "next/image";
import Divider from "../components/Divider";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sugam Palav &mdash; Developer</title>
        <meta
          name="description"
          content="Sugam Palav Portfolio for Web Developer"
        />

        <link
          type="image/png"
          sizes="16x16"
          rel="icon"
          href="/icons8-seal-16.png"
        />
        <link
          type="image/png"
          sizes="32x32"
          rel="icon"
          href="/icons8-seal-32.png"
        />
        <link
          type="image/png"
          sizes="96x96"
          rel="icon"
          href="/icons8-seal-96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="/icons8-seal-72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons8-seal-96.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="76x76"
          href="/icons8-seal-76.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="icons8-seal-70.png"
        />

        <meta
          name="application-name"
          content="Sugam Palav developer portfolio"
        />
      </Head>

      <main>
        <Hero />
        <Divider />
        <Projects />
      </main>
    </div>
  );
}
