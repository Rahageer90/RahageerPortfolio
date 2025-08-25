import { Github, ExternalLink } from "lucide-react";

export const ProjectSection = () => {
  const projects = [
    {
      title: "Undergraduate Thesis: Hybrid Learning-Based Intrusion Detection",
      description: `Built an end-to-end ML pipeline with data cleaning, feature scaling, and leakage prevention. Achieved >97% accuracy and 0.998 ROC AUC using hybrid ensemble models with LIME explainability.`,
      github: "",
      live: "",
    },
    {
      title: "NotesApp with To-Do List",
      description: `Integrated Google OAuth 2.0 authentication into a cloud-deployed PHP app (Render & Aiven MySQL). Gained experience in secure authentication, API integration, cloud deployment, and debugging production issues.`,
      github: "https://github.com/Rahageer90/Notesapp-in-PHP",
      live: "https://notesapp-in-php.onrender.com/",
    },
    {
      title: "Calculator App – Python, PyQt5",
      description: `Engineered a calculator application using responsive grid-based layouts, custom UI styling, and event-driven architecture. Integrated error handling for robust performance and smooth user experience.`,
      github: "https://github.com/Rahageer90/CalcAppPython",
      live: "",
    },
    {
      title: "E-commerce Bookstore App – PHP, MySQL, Tailwind CSS",
      description: `Developed complete e-commerce platform with user registration, product catalog, wishlist and shopping cart functionality. Implemented secure user authentication, smart cart system, category filtering, and optimized database operations.`,
      github: "https://github.com/Rahageer90/ecommerce_app",
      live: "",
    },
        {
      title: "Diabetes Detector App – Python, Streamlit, XGBoost",
      description: `Built a machine learning web app predicting diabetes risk using patient data; performed EDA, feature engineering, and trained the best model, XGBClassifier pipeline achieving ~74% test accuracy. Designed a responsive, mobile-friendly UI and deployed publicly via Streamlit Cloud.`,
      github: "https://github.com/Rahageer90/Diabetes_Prediction",
      live: "https://diaapplication.streamlit.app/",
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
