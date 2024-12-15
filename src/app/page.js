import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/aboutus/About";
import Program from "@/components/program/Program";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aubria Studio</title>
      </Head>

      <main>
        <Navbar />
        <Hero />
        <About />
        <Program />
        <Footer />
      </main>
    </div>
  );
}
