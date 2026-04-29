import { useState } from "react"
import { Header } from "../../components/HomeComponents/Header";
import { Hero } from "../../components/HomeComponents/Hero";
import { About } from "../../components/HomeComponents/About";
import { Features } from "../../components/HomeComponents/Features";
import { Testimonials } from "../../components/HomeComponents/Testimonials";
import { Stats } from "../../components/HomeComponents/Stats";
import { Services } from "../../components/HomeComponents/Services";
import { Pricing } from "../../components/HomeComponents/Pricing";
import { FAQ } from "../../components/HomeComponents/FAQ";
import { CallToAction } from "../../components/HomeComponents/CallToAction";
import { Industries } from "../../components/HomeComponents/Industries";
import { Client } from "../../components/HomeComponents/Client";
import { Contact } from "../../components/HomeComponents/Contact";
import { Footer } from "../../components/HomeComponents/Footer";

export const Home = () => {
  return (
    <div className='bg-white mx-2'>
      <Header />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Stats />
      <Services />
      <Pricing />
      <FAQ />
      <CallToAction /> 
      <Industries />
      <Client />
      <Contact />
      <Footer />
      <a href="#" id="scroll-top" className='text-center bg-blue-900 p-2 px-3 rounded-full text-2xl text-white fixed bottom-0 right-0 m-4'><i className="bi bi-arrow-up-short"></i></a>
  </div>
  )
}
