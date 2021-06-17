import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import HeroProductSection from "../../components/HeroProductSection/HeroProductSection";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <main className={styles.container}>
      <HeroSection />
      <HeroProductSection />
    </main>
  );
};

export default LandingPage;
