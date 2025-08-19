import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight break-words">
            <span className="block opacity-0 animate-fade-in">Hi I'm</span>
            <span className="block sm:inline text-primary opacity-0 animate-fade-in-delay-1">
              Rahageer
            </span>
            <span className="block sm:inline text-gradient sm:ml-2 opacity-0 animate-fade-in-delay-2">
              Saadman
            </span>
            <span className="block sm:inline text-gradient sm:ml-2 opacity-0 animate-fade-in-delay-3">
              Islam
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            A passionate Software Engineer and Data Science enthusiast who loves
            turning ideas into scalable software and data-driven solutions
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
