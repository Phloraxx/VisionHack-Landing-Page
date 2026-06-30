"use client";


import Navbar from "../component/Navbar";
import Hero from "./_components/Hero";
import Countdown from "./_components/Countdown";
import Innovation from "./_components/Innovation";
import Kudumbashree from "./_components/Kudumbashree";
import Impact from "./_components/Impact";
import Classroom from "./_components/Classroom";
import Calendar from "./_components/Calendar";
import Bulit from "./_components/bulit";
import Leadership from "./_components/leadership";
import Qa from "./_components/qa";
import Footer from "../component/Footer";
import VisualEffects from "./_components/VisualEffects";

export default function Homepage() {
  return (
    <>
      {/* Visual backdrops & decorative components */}
      <VisualEffects />

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Countdown Timer Section */}
      <Countdown />

      {/* Reimagining Community Innovation Section */}
      <Innovation />

      {/* Next-Generation Kudumbashree Section */}
      <Kudumbashree />

      {/* Built on Impact, Measured in Lives Section */}
      <Impact />

      {/* A Journey from Classroom to Deployment Section */}
      <Classroom />

      {/* Calendar Section */}
      <Calendar />

      {/* Curious Builders Section */}
      <Bulit />

      {/* Leadership Section */}
      <Leadership />

      {/* Questions, Answered Section */}
      <Qa />

      {/* Footer Section */}
      <Footer />
    </>
  );
}
