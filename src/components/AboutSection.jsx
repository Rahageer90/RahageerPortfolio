import { Bot, Cpu, Network, Cloud } from "lucide-react"

export const AboutSection = () => {
    const points = [
        {
            title: "Agentic AI & LLMs",
            desc: "Architect autonomous agent systems using LangChain, LangGraph, and Model Context Protocol (MCP). Shipped 11+ production-ready tools (e.g., neural search, verification, and computer vision) using ReAct reasoning loops.",
            icon: Bot,
        },
        {
            title: "RAG & Semantic Search",
            desc: "Engineer Retrieval-Augmented Generation pipelines with vector embeddings, multi-step evidence reconciliation, and robust fallback data retrieval mechanisms for enterprise verification.",
            icon: Cpu,
        },
        {
            title: "ML Pipelines & Interpretability",
            desc: "Develop ensemble ML models (classification & anomaly detection) with Explainable AI (XAI / LIME-driven) interpretability to secure network traffic and validate clinical datasets.",
            icon: Network,
        },
        {
            title: "MLOps & Analytics",
            desc: "Deploy FastAPI REST endpoints with Redis caching and AWS infrastructure. Engineer AIops metrics to monitor agent performance, tool call volumes, and contextual skill gains.",
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
                            I am a hands-on AI/ML Engineer specializing in building autonomous AI agents, production-grade 
                            Retrieval-Augmented Generation (RAG) pipelines, and robust MLOps infrastructure. I design and 
                            deploy enterprise-grade Agentic systems that solve complex workflows—from multi-tool marketing 
                            automations and document/presentation generators to security intrusion detection networks.
                            <br /><br />
                            I enjoy bridging the gap between raw models and scalable software engineering, deploying robust 
                            FastAPI microservices, vector databases, and real-time monitoring structures on AWS and Docker environments.
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
