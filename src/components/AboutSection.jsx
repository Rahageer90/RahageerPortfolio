import { Layers, Cpu, Monitor, Cloud } from "lucide-react"

export const AboutSection = () => {
    const points = [
        {
            title: "Web Development",
            desc: "Build secure, responsive, and full-stack web applications using PHP, Laravel, Django, MySQL, and Tailwind CSS.",
            icon: Layers,
        },
        {
            title: "Machine Learning & AI",
            desc: "Develop ML pipelines, perform data preprocessing, feature engineering, and implement hybrid ensemble models with interpretability using LIME.",
            icon: Cpu,
        },
        {
            title: "Desktop Application Development",
            desc: "Create interactive desktop apps with Python and PyQt5, featuring responsive UI, error handling, and event-driven architecture.",
            icon: Monitor,
        },
        {
            title: "Cloud Deployment & API Integration",
            desc: "Deploy web applications on cloud platforms like Render, integrate OAuth 2.0 authentication, and work with RESTful APIs.",
            icon: Cloud,
        },
    ]

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> 
                            Passionate Software Developer and Data Scientist
                        </h3>
                        <p className="text-muted-foreground">
                            Results-driven Data Scientist and Software Engineer experienced in developing, deploying, and optimizing 
                            machine learning pipelines using Python, Scikit-learn, and LIME for explainable model interpretation. 
                            Skilled in data preprocessing, feature engineering, model evaluation, and integrating predictive models into scalable software systems. 
                            Proficient in system design, MVC architecture, SDLC, SQL database management, and RESTful API 
                            integration, with proven ability to design robust backend logic and responsive frontends. Experienced in 
                            cloud deployment using Render and Netlify, delivering end-to-end, data-driven applications that combine 
                            analytical precision with engineering excellence.racy.
                            <br /><br />
                            I enjoy learning new technologies, debugging complex problems, and building solutions that balance performance, usability, and scalability. Beyond coding, I actively take part in volunteer initiatives, as I believe in using my skills and time to create positive social impact.   
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="/assets/Rahageer_Oct2025_Portfolio.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right Column (4 Key Cards) */}
                    <div className="grid grid-cols-1 gap-6">
                        {points.map((item, idx) => {
                            const IconComp = item.icon;
                            return (
                                <div key={idx} className="gradient-border p-6 card-hover animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <IconComp className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg">{item.title}</h4>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
