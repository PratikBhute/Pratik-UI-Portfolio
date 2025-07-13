import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Intersection Observer for slide-up animations
    const observeElements = () => {
      const elements = document.querySelectorAll(".slide-up");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).style.animationPlayState =
                "running";
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => {
        (el as HTMLElement).style.animationPlayState = "paused";
        observer.observe(el);
      });
    };

    // Delay to ensure DOM is ready
    setTimeout(observeElements, 100);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />

      {/* Footer */}
      {/* <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Pratik Bhute. Crafted with passion and code.
            </p>
            <div className="mt-4">
              <span className="gradient-text font-medium">
                Frontend Developer | React | Angular | UI Developer
              </span>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Index;
