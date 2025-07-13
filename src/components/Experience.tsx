import { Briefcase, Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Engineer",
      project: "AVA+ Michelangelo (AI Web Tool)",
      company: "Ascendion Technologies Pvt Ltd",
      location: "Hyderabad",
      duration: "01/2024 - Present",
      type: "Current Role",
      achievements: [
        "Designed and developed a responsive UI using React, focusing on user-friendliness and alignment with client specifications",
        "Built reusable and modular UI components using libraries like React-Strap, enabling efficient routing and MSAL-based authentication",
        "Integrated a real-time canvas editor, allowing users to create wireframes seamlessly converted to code by AI",
        "Ensured robust API integration with back-end systems to enable real-time data generation from AI LLM modules"
      ],
      technologies: ["React", "React-Strap", "MSAL", "RESTful APIs", "AI Integration"]
    },
    {
      title: "Frontend Engineer",
      project: "Huron Research Suite (HRS V12)",
      company: "HURON | Ascendion Technologies",
      location: "Remote",
      duration: "11/2022 - 01/2024",
      type: "Previous Role",
      achievements: [
        "Developed features in the Conflict of Interest (COI) module to streamline compliance and user workflows",
        "Enhanced dashboard usability with hyperlink IDs for seamless navigation to detailed information",
        "Reduced critical bugs by 30% through timely debugging and collaboration with QA teams",
        "Delivered agile solutions, adhering to sprint timelines and improving team velocity"
      ],
      technologies: ["React", "JavaScript", "Agile", "QA Collaboration"]
    },
    {
      title: "Frontend Engineer",
      project: "Integrated Banking Solution (IBS) Modernization",
      company: "FIS Global | Ascendion Technologies",
      location: "Remote",
      duration: "02/2022 - 09/2022",
      type: "Previous Role",
      achievements: [
        "Modernised the UI layer by transitioning from IE compatibility to support modern browsers using Angular 12",
        "Enhanced user interactions with AJAX calls and callback functions, ensuring responsiveness",
        "Constructed modular form components with Angular Formly that improved code maintainability",
        "Transformed the user experience by minimising load times from 5 seconds down to under 2 seconds",
        "Implemented data validation logic and custom mappings, ensuring a 95% reduction in manual intervention"
      ],
      technologies: ["Angular 12", "Angular Formly", "AJAX", "Performance Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Professional Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Journey through innovative projects and impactful solutions
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="slide-up relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background hidden md:block pulse-glow"></div>
                  
                  {/* Experience Card */}
                  <div className="md:ml-20 gradient-border hover-lift">
                    <div className="p-6 md:p-8">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {exp.type === "Current Role" ? (
                              <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-medium rounded-full">
                                Current Role
                              </span>
                            ) : (
                              <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                                Previous Role
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                            {exp.title}
                          </h3>
                          <h4 className="text-lg font-semibold gradient-text mb-2">
                            {exp.project}
                          </h4>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building size={14} />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold mb-4 text-foreground">Key Achievements</h5>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h5 className="text-lg font-semibold mb-4 text-foreground">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="tech-pill">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements Section */}
          <div className="slide-up mt-20" style={{ animationDelay: '0.8s' }}>
            <div className="gradient-border p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="gradient-text">Key Achievements & Contributions</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                    <span className="text-2xl font-bold text-primary-foreground">95%</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Manual Intervention Reduction</h4>
                  <p className="text-sm text-muted-foreground">Implemented data validation logic reducing manual work</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                    <span className="text-2xl font-bold text-primary-foreground">30%</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Bug Reduction</h4>
                  <p className="text-sm text-muted-foreground">Reduced critical bugs through collaboration and debugging</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                    <span className="text-xl font-bold text-primary-foreground">2s</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Load Time Optimization</h4>
                  <p className="text-sm text-muted-foreground">Improved load times from 5 seconds to under 2 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Experience;