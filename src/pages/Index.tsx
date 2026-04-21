import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Academic } from "@/components/site/Academic";
import { Promo } from "@/components/site/Promo";
import { ProcessFlow } from "@/components/site/ProcessFlow";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Academic />
      <ProcessFlow />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;
