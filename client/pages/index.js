import Head from "next/head";
import LandingHero from "../components/landing/LandingHero";
import Features from "../components/landing/Features";
import Pricing from "../components/landing/Pricing";
import SkillsLogos from "../components/landing/SkillsLogos";
import CTA from "../components/landing/CTA";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";
import SlideOver from "../components/SlideOver";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Web & App Development | Sam Morgan</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <LandingHero />
      <Features />
      <CTA />
      <Pricing />
      <SkillsLogos />
      <Contact />
      <Footer />
      <SlideOver />
    </div>
  );
}
