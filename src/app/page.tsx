import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Architecture from "@/components/Architecture";
import DataModel from "@/components/DataModel";
import Security from "@/components/Security";
import Delivery from "@/components/Delivery";
import Scalability from "@/components/Scalability";
import Tradeoffs from "@/components/Tradeoffs";
import CaseStudies from "@/components/CaseStudies";
import WorkingModel from "@/components/WorkingModel";
import Ownership from "@/components/Ownership";
import Commercial from "@/components/Commercial";
import Questions from "@/components/Questions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Architecture />
        <DataModel />
        <Security />
        <Delivery />
        <Scalability />
        <Tradeoffs />
        <CaseStudies />
        <WorkingModel />
        <Ownership />
        <Commercial />
        <Questions />
      </main>
      <Footer />
    </>
  );
}
