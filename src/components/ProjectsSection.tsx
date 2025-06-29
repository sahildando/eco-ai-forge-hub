
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// No changes to import or component declaration...

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Crop Disease Detection",
      description: "A system that detects crop diseases by analyzing leaf images and environmental data, providing actionable recommendations for farmers.",
      technologies: ["Python", "C++", "PyTorch", "Jupyter Notebook", "Streamlit"],
      link: "#",
      github: "https://github.com/sahildando/AI-Crop-Disease-Prediction.git",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000",
    },
    {
      title: "Football Analytics",
      description: "A ML model that analyze and compare players,teams,clubs and their analytics.",
      technologies: ["Python", "Numpy", "Maplotlib", "Pandas", "Streamlit"],
      link: "https://mclachapp.streamlit.app/",
      image: "https://i.pinimg.com/1200x/6e/e5/4b/6ee54b819db74b79dbc6e84afbf46cdb.jpg",
    },
    {
      title: "Background image remover",
      description: "A professional-grade web application built with Python that leverages machine learning to perform automated image background removal..",
      technologies: ["Python", "Streamlit"],
      link: "https://sahildando-llm-project-bg-remove-nwpg7f.streamlit.app/",
      github: "https://github.com/sahildando/LLM-Project.git",
      image: "https://raw.githubusercontent.com/nadermx/backgroundremover/main/examplefiles/backgroundremoverexample.png",
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
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Streamlit"],
      link: "https://aqi-index-sahil-sharma.streamlit.app/",
      github: "https://github.com/sahildando/AQI-INDEX.git",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1000",
    },
    {
      title: "EcoSavvy: Carbon Footprint Calculator",
      description: "A react based application to compute carbon emissions from household to industrial level with rankings and eco-friendly practice advisories.",
      technologies: ["Postman", "Chart.js", "React.js", "Tailwind CSS"],
      link: "https://eco-savvy-carbon-emission-tracker.vercel.app//",
      github: "https://github.com/sahildando/eco-savvy-footprint-tracker.git",
      image: "https://decode6.org/wp-content/uploads/2023/04/Carbon-Footprint_01.jpg",
    },
    {
      title: "F1 Music Insight with data Driven Analytics",
      description: "A system that has data driven insights of champions who win which grand prix plus their teams and franchise and how the legacy and team has performed over the years.",
      technologies: ["React", "Typescript", "Threejs", "Chartjs", "shadcdn", "MUI"],
      link: "https://project-psi-sage-67.vercel.app/",
      github: "https://github.com/sahildando/project",
      image: "https://images.app.goo.gl/D9iNKGweBkcz8mTf9",
    },
    {
      title: "UFC-Analysis with 2-d Animation",
      description: "A system that analyze the weight measures of UFC fighters and their wins and losses, KOs and fan following.",
      technologies: ["React", "Typescript", "Threejs", "Chartjs", "shadcdn", "MUI"],
      link: "https://ufc-3d-stats-hub.vercel.app/",
      github: "https://github.com/sahildando/ufc-3d-stats-hub",
      image: "https://images.app.goo.gl/5U6XSt6XkYUGRtmNA",
    },
    {
      title: "Football Data Insights",
      description: "A system that provides European football data analytics: top scorers, defenders, strikers, midfielders, club legacy and league winners.",
      technologies: ["React", "Typescript", "Threejs", "Chartjs", "shadcdn", "MUI"],
      link: "https://football-united.vercel.app/",
      github: "https://github.com/sahildando/footy-insight-arena",
      image: "https://images.app.goo.gl/7s2tKDWL5FqxoeCeA",
    },
    {
      title: "Music Universal",
      description: "A system that provides all Hollywood singers' albums, awards, fan following, most streamed songs and comparisons.",
      technologies: ["React", "Typescript", "Threejs", "Chartjs", "shadcdn", "MUI"],
      link: "https://musicverse-ai-chronicles.vercel.app/",
      github: "https://github.com/sahildando/musicverse-ai-chronicles",
      image: "https://images.app.goo.gl/Zk4UypbbLnTcJYuX6",
    },
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
