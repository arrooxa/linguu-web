import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import FinalCta from "@/components/FinalCta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
