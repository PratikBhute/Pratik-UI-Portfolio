import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building the foundation for a successful career in technology
            </p>
          </div>

          {/* Education Card */}
          <div className="slide-up">
            <div className="gradient-border hover-lift p-8 md:p-10 rounded-xl">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center pulse-glow">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium rounded-full">
                      Bachelor's Degree
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Bachelor of Engineering
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award size={16} className="text-accent" />
                      <span className="font-medium">Datta Meghe Institute of Engineering Technology and Research</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} className="text-accent" />
                      <span>R.T.M Nagpur University</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} className="text-accent" />
                      <span>Graduated: November 2020</span>
                    </div>
                  </div>

                  <div className="border-l-4 border-gradient-to-b from-primary to-accent pl-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Completed my Bachelor's degree in Engineering, laying a strong foundation in 
                      technical concepts, problem-solving methodologies, and analytical thinking. 
                      This educational background has been instrumental in my journey as a frontend developer, 
                      providing me with the systematic approach to software development and engineering principles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="slide-up mt-12 text-center" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-muted/50 to-muted/30 rounded-full px-8 py-4 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">2020</div>
                <div className="text-sm text-muted-foreground">Graduated</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">4+</div>
                <div className="text-sm text-muted-foreground">Years Since</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Education;