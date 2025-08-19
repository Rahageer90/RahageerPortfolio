import { Terminal, Layers, Database, Cpu } from "lucide-react";

export const SkillsSection = () => {
  const skillsData = [
    {
      category: "Languages",
      icon: Terminal,
      skills: [
        { name: "Python", rating: 5 },
        { name: "PHP", rating: 4 },
        { name: "JavaScript", rating: 4 },
        { name: "HTML", rating: 5 },
        { name: "Tailwind CSS", rating: 5 },
      ],
    },
    {
      category: "Frameworks & Tools",
      icon: Layers,
      skills: [
        { name: "Django", rating: 5 },
        { name: "Laravel", rating: 4 },
        { name: "PyQt5", rating: 4 },
        { name: "MVC", rating: 5 },
        { name: "Pandas", rating: 5 },
        { name: "Matplotlib", rating: 4 },
        { name: "Git/GitHub", rating: 5 },
      ],
    },
    {
      category: "Databases",
      icon: Database,
      skills: [{ name: "MySQL", rating: 5 }],
    },
    {
      category: "Machine Learning & Other Skills",
      icon: Cpu,
      skills: [
        { name: "Data Preprocessing", rating: 5 },
        { name: "Supervised & Unsupervised Learning", rating: 5 },
        { name: "Data Visualization", rating: 4 },
        { name: "Explainable AI (LIME)", rating: 5 },
        { name: "OOP & DSA", rating: 5 },
        { name: "RESTful APIs", rating: 4 },
        { name: "Responsive UI Design", rating: 5 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0s' }}>
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, idx) => {
            const IconComp = category.icon;
            return (
              <div
                key={idx}
                className="gradient-border p-6 card-hover flex flex-col gap-4 opacity-0 animate-fade-in"
                style={{ animationDelay: `${idx * 0.3}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <IconComp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-col gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between py-1 opacity-0 animate-fade-in"
                      style={{ animationDelay: `${idx * 0.3 + sIdx * 0.1}s` }}
                    >
                      <span className="text-muted-foreground">{skill.name}</span>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i < skill.rating
                                ? "bg-primary"
                                : "bg-muted-foreground/40"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
