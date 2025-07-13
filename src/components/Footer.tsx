import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="py-8 border-t border-border">
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
          {/* Social Links */}
          <div className="pt-8">
            <div className="flex gap-4 justify-center items-center">
              <a
                href="https://linkedin.com/in/pratikbhute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform hover-lift"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/pratikbhute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform hover-lift"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:pratik.bhute07@gmail.com"
                className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform hover-lift"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
