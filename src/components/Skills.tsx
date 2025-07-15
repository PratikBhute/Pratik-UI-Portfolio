import { useAppContext } from "@/contaxt/AppContext";
import { Code } from "lucide-react";

const Skills = () => {
  const { experience, skillCategories } = useAppContext();

  const softSkills = [
    "Effective Communication",
    "Presentation",
    "Collaboration & Team Leadership",
    "Strategic Task Planning",
    "Analytical Thinking",
    "Problem Solving",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web
              applications
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="slide-up gradient-border hover-lift p-6 rounded-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`flex items-start p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}
                >
                  {category.icon}
                  <h5 className="text-lg ml-4 font-semibold text-white">
                    {category.title}
                  </h5>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="tech-pill">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Highlight */}
          <div
            className="slide-up text-center mb-16"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-8 py-4 border border-primary/20">
              <Code className="w-8 h-8 text-primary" />
              <div>
                {/* MODIFIED: Using the dynamic 'experience' state variable */}
                <div className="text-3xl font-bold gradient-text">
                  {experience}
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="slide-up" style={{ animationDelay: "0.7s" }}>
            <div className="gradient-border p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="gradient-text">Soft Skills</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-[-1]"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl z-[-1]"></div>
    </section>
  );
};

export default Skills;
