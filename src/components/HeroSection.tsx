
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          
          {/* Left Content */}
          <div className="flex flex-col items-start space-y-6 max-w-3xl">
            <p className="text-primary animate-slide-in-left [animation-delay:200ms]">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold animate-slide-in-left [animation-delay:300ms]">
              Sahil Sharma.
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground animate-slide-in-left [animation-delay:400ms]">
              I build things for the web and AI.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl animate-slide-in-left [animation-delay:500ms]">
              I'm a Computer Science & Mathematics student specializing in full-stack development,
              machine learning, and computer vision. Currently focused on building accessible,
              human-centered products at the intersection of AI and web technologies.
            </p>
            <div className="flex gap-4 animate-slide-in-left [animation-delay:600ms]">
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="w-full flex justify-center pt-20 animate-bounce">
              <a href="#about" aria-label="Scroll to About section">
                <ArrowDownCircle className="h-10 w-10 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <img
              src="https://raw.githubusercontent.com/sahildando/eco-ai-forge-hub/main/src/components/IMG_20250306_150305_748.webp"
              alt="Sahil's Portrait"
              className="w-80 h-80 rounded-full object-cover border-4 border-primary shadow-xl transition duration-500 group-hover:shadow-primary animate-glow"
            />
            {/* Optional glitter glow */}
            <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
