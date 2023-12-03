"use client"

import { Hero } from "_components";
import heroHome from "_helpers/img/landingpage.png";
import firstImg from "_helpers/img/collection/IMG-20230818-WA0006.jpg";

export { LandingHero };

const LandingHero = () => {
  return (
    <Hero imgSrc={heroHome.src} givenAlt={"Landing Image"} />
  )
};