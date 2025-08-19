import { Award } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    { title: "Data Analysis with Python", issuer: "IBM" },
    { title: "Data Science Orientation", issuer: "IBM" },
    { title: "Databases and SQL for Data Science with Python", issuer: "IBM" },
    { title: "Python Project for Data Science", issuer: "IBM" },
    { title: "Data Science Methodology", issuer: "IBM" },
    { title: "Python App Development Masterclass App Development Bootcamp", issuer: "Udemy" },
    { title: "Python for Data Science, AI & Development", issuer: "IBM" },
    { title: "Tools for Data Science", issuer: "IBM" },
  ];

  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0s" }}
        >
          My <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="gradient-border p-6 card-hover flex flex-col items-center text-center justify-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              <div className="p-3 rounded-full bg-primary/10 mb-2 flex-shrink-0">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-lg">{cert.title}</h4>
              <p className="text-muted-foreground text-sm">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
