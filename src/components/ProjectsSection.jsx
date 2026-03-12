import { Github, ExternalLink } from "lucide-react";

export const ProjectSection = () => {
  const projects = [
    {
      title: "Fact-Check Agent — Autonomous Multi-Source Verification System",
      description: `Architected a full-stack agentic AI system for autonomous claim verification using LangChain ReAct agents and Google Gemini API. Engineered 6+ MCP-based tools (neural search, news aggregation via NewsAPI, web search via Serper API, structured claim validation) with fallback mechanisms. Features multi-step reasoning: query decomposition, evidence retrieval, cross-source reconciliation, and confidence-scored verdict generation.`,
      github: "https://github.com/Rahageer90/fact_check_agent",
      live: "",
    },
    {
      title: "Explainable AI — Integrated Network Intrusion Detection System",
      description: `Developed ensemble ML models (classification + anomaly detection) to identify malicious network traffic patterns across multiple attack categories. Implemented XAI techniques — SHAP feature importance and model interpretability — ensuring transparent decision-making for security applications. Delivered complete ML pipeline: data preprocessing, feature engineering, training, cross-validation, and hyperparameter tuning.`,
      github: "https://github.com/Rahageer90/ML_EXAi_-Integrated_IDS_Project",
      live: "",
    },
    {
      title: "Healthcare ML — Diabetes Risk Prediction System",
      description: `Engineered a supervised ML model for diabetes risk assessment with full pipeline covering data cleaning, feature engineering, model selection, and statistical validation. Applied cross-validation and hyperparameter tuning to maximize generalizability and reliability of predictions on clinical datasets. Deployed publicly via Streamlit Cloud.`,
      github: "https://github.com/Rahageer90/Diabetes_Prediction",
      live: "https://diaapplication.streamlit.app/",
    },
    {
      title: "SpaceX Falcon 9 Landing Prediction — Applied Data Science Capstone",
      description: `Developed a machine learning model to predict successful landing of SpaceX Falcon 9’s first stage with 83.33% accuracy using Logistic Regression, SVM, and Decision Tree. Performed SQL-based data wrangling and EDA to identify key factors (payload mass, launch site, orbit type). Built an interactive Plotly Dash dashboard for exploratory analysis.`,
      github: "https://github.com/Rahageer90/Coursera_Applied_DataScience_Capstone",
      live: "",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0s" }}
        >
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="gradient-border p-6 card-hover flex flex-col gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-muted-foreground text-sm">{project.description}</p>

              <div className="flex gap-3 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                  >
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
