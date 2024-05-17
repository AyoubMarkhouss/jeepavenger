import AnimatedTimer from "@/components/Animatedtimer";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Head from "next/head";

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
        <AnimatedTimer/>
        <Form />

        <Footer />
      </main>
    </>
  );
}
