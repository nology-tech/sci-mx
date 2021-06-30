import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import HeroProductSection from "../../components/HeroProductSection/HeroProductSection";
import styles from "./LandingPage.module.scss";
import HeroSocials from "../../components/HeroSocials/HeroSocials";

const LandingPage = () => {
  return (
    <main className={styles.container}>
      <HeroSection />
      <HeroProductSection />
      {/* <HeroSocials /> */}
    </main>
  );
};

export default LandingPage;
