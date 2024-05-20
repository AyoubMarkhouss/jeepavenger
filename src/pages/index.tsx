import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import Head from "next/head";

import Form from "@/components/Form";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Jeep Avenger - Inscription" />
        <link rel="icon" href="/logo-jeep-black.png" />
        <title>Freedom Of Choice</title>
        <meta property="og:image" content="/logo-jeep-black.png" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Form />

        <Footer />
      </main>
    </>
  );
}
