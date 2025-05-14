
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript (ES6+)", "C++", "Bash", "HTML5", "CSS3"]
    },
    {
      category: "ML/DL",
      skills: ["NumPy", "Pandas", "Matplotlib", "OpenCV", "Keras"]
    },
    {
      category: "Web Dev",
      skills: ["React.js", "Redux", "Django", "Tailwind CSS", "Material-UI"]
    },
    {
      category: "DevOps",
      skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      category: "Cloud",
      skills: ["GCP", "AWS (EC2, S3, IAM)"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "REST APIs", "Streamlit", "GitHub", "VSCode", "Postman", "Google Colab", "Jupyter Notebook"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-secondary/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="skill-badge">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
