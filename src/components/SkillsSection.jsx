import { Terminal, Layers, Database, Cpu } from "lucide-react";

export const SkillsSection = () => {
  const skillsData = [
    {
      category: "AI / ML Core",
      icon: Cpu,
      skills: [
        { name: "LangChain & LangGraph", rating: 5 },
        { name: "Model Context Protocol (MCP)", rating: 5 },
        { name: "RAG & Vector Embeddings", rating: 5 },
        { name: "LLMs & Generative AI", rating: 5 },
        { name: "Computer Vision", rating: 4 },
        { name: "Explainable AI (XAI / SHAP)", rating: 4 },
      ],
    },
    {
      category: "ML Libraries & APIs",
      icon: Layers,
      skills: [
        { name: "Scikit-learn", rating: 5 },
        { name: "Pandas & NumPy", rating: 5 },
        { name: "Google Gemini API", rating: 5 },
        { name: "Serper / Tavily / NewsAPI", rating: 4 },
        { name: "FastAPI & REST API", rating: 5 },
        { name: "Git / GitHub", rating: 5 },
      ],
    },
    {
      category: "Databases & Infrastructure",
      icon: Database,
      skills: [
        { name: "PostgreSQL", rating: 4 },
        { name: "Redis", rating: 4 },
        { name: "Vector Databases", rating: 4 },
      ],
    },
    {
      category: "MLOps & Cloud",
      icon: Terminal,
      skills: [
        { name: "Python (98.5%)", rating: 5 },
        { name: "Docker & Kubernetes", rating: 4 },
        { name: "AWS (ECS, S3, ElastiCache, RDS)", rating: 4 },
        { name: "CI/CD for ML", rating: 4 },
        { name: "Semantic Search", rating: 5 },
        { name: "NLP & Anomaly Detection", rating: 4 },
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
