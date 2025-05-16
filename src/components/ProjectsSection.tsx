
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Crop Disease Detection",
      description: "A computer vision system that detects crop diseases by analyzing leaf images and environmental data, providing actionable recommendations for farmers.",
      technologies: ["Python", "OpenCV", "PyTorch", "React.js", "Streamlit"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000",
    },
    {
      title: "Crypto Tracker Website",
      description: "Real-time cryptocurrency tracking platform displaying live prices, trends, and market cap data with responsive design and optimized performance.",
      technologies: ["React.js", "Tailwind CSS", "Chart.js", "CoinGecko API"],
      link: "https://crypto-ten-snowy.vercel.app",
      github: "https://github.com/sahildando/crypto",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1000",
    },
    {
      title: "Air Quality Prediction Model",
      description: "ML model that predicts air quality index using weather and pollutant data, with data cleaning, feature engineering, and model evaluation.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1000",
    },
    {
      title: "EcoSavvy: Carbon Footprint Calculator",
      description: "Full-stack application to compute carbon emissions from household to industrial level with rankings and eco-friendly practice advisories.",
      technologies: ["Node.js", "Express", "React.js", "Tailwind CSS"],
      link: "https://eco-savvy-carbon-emission-tracker.vercel.app//",
      github: "https://github.com/sahildando/eco-savvy-footprint-tracker.git",
      image: "https://decode6.org/wp-content/uploads/2023/04/Carbon-Footprint_01.jpg",
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="skill-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.link && (
                  <Button asChild variant="secondary" size="sm">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
