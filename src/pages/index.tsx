import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Form from "@/components/Form";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Jeep Avenger - Formulaire" />
        <link rel="icon" href="/logo-jeep-black.png" />
        <title>Jeep Avenger</title>
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
