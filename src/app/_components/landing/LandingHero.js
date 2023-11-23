"use client"

import Hero from "@/components/Hero"
import heroHome from "@/img/landingpage.png";
import firstImg from "@/img/collection/IMG-20230818-WA0006.jpg";

export { LandingHero };

const LandingHero = () => {
  return (
    <Hero imgSrc={heroHome.src} givenAlt={"Landing Image"} />
  )
};