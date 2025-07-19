import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useAppContext } from "@/contaxt/AppContext";

const Hero = () => {
  const { personalInfo, experience, socialLinks, scrollToSection } =
    useAppContext();
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-10"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl floating-animation"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-xl floating-animation"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="relative mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-accent p-1 pulse-glow">
              <div className="w-full h-full text-white rounded-full bg-background flex items-center justify-center text-4xl font-bold gradient-text">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="h-27 object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="slide-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
          </div>

          <div className="slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-xl md:text-2xl text-muted-foreground mb-6 overflow-hidden">
              <span className="inline-block border-r-2 border-primary animate-typewriter pr-2">
                {personalInfo.title} | React | Angular | UI Developer
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className="slide-up flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <MapPin size={16} />
              <a
                href='#'
                target="_blank"
                rel="noopener noreferrer"
              >
                {personalInfo.location}
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <Phone size={16} />
              <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}>
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <Mail size={16} />
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
          </div>

          {/* Summary */}
          <div
            className="slide-up max-w-3xl mx-auto mb-8"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Skilled Frontend Developer with{" "}
              <span className="gradient-text font-semibold">
                {experience} years of experience
              </span>{" "}
              in crafting responsive and interactive user interfaces using React
              and Angular. {personalInfo.summary}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="slide-up flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationDelay: "1s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground hover-lift"
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted hover-lift"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="slide-up flex justify-center gap-6 mt-8"
            style={{ animationDelay: "1.2s" }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : "_self"}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : ""}
                className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
