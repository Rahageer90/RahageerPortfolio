import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

export const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState("enterprise");

  const enterpriseProjects = [
    {
      title: "NGO Agentic Decision Support & Verification Suite",
      description: "Designed and shipped 11 custom MCP-based AI tools integrated into a core generative platform. Engineered neural search, multi-source info verification, research queries, and real-time news retrieval. Integrated computer vision tools for image analysis, enabling agents to execute complex, multi-modal decision workflows autonomously.",
      tags: ["Python", "FastAPI", "MCP", "Vector Databases", "Google Gemini API", "LangChain"],
    },
    {
      title: "Autonomous Agentic Marketing & Trend Intelligence Server",
      description: "Built and shipped an autonomous Marketing MCP server comprised of four core tools: trend monitoring for real-time market tracking, automated competitive intelligence, content recommendation engines, and temporal scheduling context. Enabled agents to run marketing campaigns and analytics loops from end-to-end.",
      tags: ["Python", "FastAPI", "MCP", "NewsAPI", "Serper API", "Docker"],
    },
    {
      title: "Dynamic Presentation & Seaborn Reporting Engine",
      description: "Extended a document generator MCP server with programmatic PowerPoint generation capabilities. Developed custom Seaborn charting integrations and engineered 4 tailored visual templates (corporate, minimal, data-heavy, creative) allowing agents to compile professional analytics decks automatically.",
      tags: ["Python", "MCP", "Python-pptx", "Seaborn", "Vector Databases"],
    },
    {
      title: "Dashboard File Categorization & AIops Metrics System",
      description: "Architected structured file management layouts (PDFs, DOCX, images) to persist agent-generated files per board. Designed and shipped the AIops Maturity Metrics system to analyze agent run proficiency by tracking completed guided cycles, tool call volumes, and contextual skill gains.",
      tags: ["Python", "FastAPI", "Docker", "Data Analytics"],
    },
  ];

  const coreProjects = [
    {
      title: "Fact-Check Agent — Autonomous Verification System",
      description: "Architected a full-stack agentic AI system for autonomous claim verification, orchestrating multiple LLM providers (Google Gemini API) with real-time data retrieval. Engineered 2 MCP-based tools: a Serper API-based web_search and a News API-based news_search, each with fallback mechanisms. Built a ReAct agent loop with LangChain for multi-step reasoning: query decomposition, evidence retrieval, cross-source reconciliation, and confidence-scored verdict generation.",
      github: "https://github.com/Rahageer90/fact_check_agent",
      tags: ["React", "FastAPI", "LangChain", "MCP", "Google Gemini API", "Serper API", "NewsAPI"],
    },
    {
      title: "Undergraduate Thesis: Hybrid Learning-Based Intrusion Detection Framework with LIME-Driven Interpretability",
      description: "Developed ensemble ML models (classification + anomaly detection) to identify malicious network traffic patterns across multiple attack categories. Implemented Explainable AI (XAI) techniques — feature importance analysis and LIME-based model interpretability — ensuring transparent decision-making critical for security applications.",
      github: "https://github.com/Rahageer90/ML_EXAi_-Integrated_IDS_Project",
      tags: ["Python", "Scikit-learn", "LIME / XAI", "Pandas", "NumPy", "Jupyter Notebook"],
    },
    {
      title: "Healthcare ML — Diabetes Risk Prediction System",
      description: "Engineered a supervised ML model for diabetes risk assessment: full pipeline covering data cleaning, feature engineering, model selection, and statistical validation. Deployed publicly via Streamlit Cloud.",
      github: "https://github.com/Rahageer90/Diabetes_Prediction",
      live: "https://diaapplication.streamlit.app/",
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    },
    {
      title: "SpaceX Falcon 9 Landing Prediction — Applied Data Science Capstone",
      description: "Developed a machine learning model to predict successful landing of SpaceX Falcon 9’s first stage with 83.33% accuracy using Logistic Regression, SVM, and Decision Tree. Performed SQL-based data wrangling and EDA. Built an interactive Plotly Dash dashboard for exploratory analysis.",
      github: "https://github.com/Rahageer90/Coursera_Applied_DataScience_Capstone",
      tags: ["Python", "Scikit-learn", "SQL", "Plotly Dash", "Folium"],
    },
  ];

  const projectsToDisplay = activeTab === "enterprise" ? enterpriseProjects : coreProjects;

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0s" }}
        >
          My <span className="text-primary">Projects</span>
        </h2>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12 opacity-0 animate-fade-in-delay-1">
          <div className="inline-flex rounded-full p-1 bg-card/60 border border-border/80 backdrop-blur-md shadow-sm">
            <button
              onClick={() => setActiveTab("enterprise")}
              className={`px-5 py-2 sm:px-6 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "enterprise"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Enterprise Solutions
            </button>
            <button
              onClick={() => setActiveTab("core")}
              className={`px-5 py-2 sm:px-6 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "core"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Core ML & Research
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[500px]">
          {projectsToDisplay.map((project, idx) => (
            <div
              key={`${activeTab}-${idx}`}
              className="gradient-border p-6 card-hover flex flex-col gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <h3 className="text-lg font-semibold text-left">{project.title}</h3>
              <p className="text-muted-foreground text-sm text-left leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(project.github || project.live) && (
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button flex items-center gap-2 text-xs sm:text-sm transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button flex items-center gap-2 text-xs sm:text-sm transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                    >
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
