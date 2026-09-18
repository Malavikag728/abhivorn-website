import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Solutions from "@/components/home/Solutions";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Industries from "@/components/home/Industries";
import Statistics from "@/components/home/Statistics";
import ProvenResults from "@/components/home/ProvenResults";
import Technology from "@/components/home/Technology";
import DevelopmentProcess from "@/components/home/DevelopmentProcess";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <Hero />
        <Solutions />
        <WhyChooseUs />
        <Industries />
        <Statistics />
        <ProvenResults />
        <Technology />
        <DevelopmentProcess />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}