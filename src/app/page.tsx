import CallToAction from "@/section/calltoaction";
import Companies from "@/section/companies";
import Features from "@/section/features";
import Footer from "@/section/footer";
import Header from "@/section/header";
import Hero from "@/section/hero";
import Pricing from "@/section/pricing";
import Testimonial from "@/section/testimonial";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Pricing />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
