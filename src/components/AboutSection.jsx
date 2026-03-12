import { Bot, Cpu, Network, Cloud } from "lucide-react"

export const AboutSection = () => {
    const points = [
        {
            title: "Agentic AI & LLMs",
            desc: "Build autonomous AI agent systems using LangChain, LangGraph, and Model Context Protocol (MCP) with ReAct reasoning loops and multi-step task execution.",
            icon: Bot,
        },
        {
            title: "RAG & Semantic Search",
            desc: "Engineer Retrieval-Augmented Generation pipelines with vector embeddings, neural search, and tier-wise embedding support for context-aware enterprise AI agents.",
            icon: Cpu,
        },
        {
            title: "ML Pipelines & NLP",
            desc: "Design end-to-end ML pipelines covering data preprocessing, feature engineering, ensemble models, Explainable AI (XAI/SHAP), and computer vision with Scikit-learn.",
            icon: Network,
        },
        {
            title: "MLOps & Cloud Infrastructure",
            desc: "Deploy scalable FastAPI microservices with Redis caching, PostgreSQL, and AWS ECS/S3/ElastiCache. Integrate Google Gemini API and OpenAI-compatible LLM endpoints.",
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
                            AI / ML Engineer — Agentic AI · LangChain · RAG · MCP · MLOps
                        </h3>
                        <p className="text-muted-foreground">
                            AI/ML Engineer with hands-on production experience building autonomous AI agent systems,
                            Retrieval-Augmented Generation (RAG) pipelines, and scalable MLOps infrastructure.
                            Deep expertise in large language models (LLMs), neural search, vector embeddings, NLP,
                            and computer vision — backed by end-to-end project delivery from model development to
                            REST API deployment on AWS.
                            <br /><br />
                            I enjoy solving complex problems at the intersection of AI and engineering, building intelligent
                            systems that are reliable, production-ready, and impactful at scale.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="/assets/Rahageer_Saadman_Islam_CV_2026.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
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
