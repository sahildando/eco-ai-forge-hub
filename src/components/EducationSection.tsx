
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const educationItems = [
    {
      institution: "MITS-DU, Gwalior, Madhya Pradesh",
      degree: "Bachelor of Technology – Computer Science & Mathematics",
      duration: "2022-2026",
      type: "education"
    },
    {
      institution: "St. Paul's School, Gwalior, Madhya Pradesh",
      degree: "High School",
      duration: "2008-2022",
      type: "education"
    }
  ];

  const certifications = [
    {
      title: "Deep Learning Specialization",
      issuer: "Andrew Ng, Coursera",
      type: "certification"
    },
    {
      title: "Docker & Kubernetes: The Complete Guide",
      issuer: "Udemy",
      type: "certification"
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM/Coursera",
      type: "certification"
    },
    {
      title: "DevOps Fundamentals",
      issuer: "Linux Foundation",
      type: "certification"
    }
  ];

  const achievements = [
    {
      title: "Competitive Programming",
      description: "Solved 500+ problems on LeetCode, Codeforces, and GeeksForGeeks",
      type: "achievement"
    },
    {
      title: "SIH Hackathon",
      description: "Selected for the 2nd round",
      type: "achievement"
    },
    {
      title: "GDSC Campus Ambassador Program",
      description: "Advanced to the 3rd level",
      type: "achievement"
    }
  ];

  const volunteerWork = [
    {
      organization: "IMUN and UNESCO",
      role: "Remote Volunteer",
      description: "Contributing remotely to organizational initiatives",
      type: "volunteer"
    },
    {
      organization: "Naye Pankh Foundation",
      role: "Fundraiser",
      description: "Raising funds for local NGO initiatives",
      type: "volunteer"
    },
    {
      organization: "Tarre Zammen Foundation",
      role: "Fundraiser",
      description: "Supporting community development projects",
      type: "volunteer"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            {educationItems.map((item, index) => (
              <Card key={index} className="bg-secondary/50 border-gray-700">
                <CardHeader>
                  <CardTitle>{item.degree}</CardTitle>
                  <CardDescription>{item.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{item.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-secondary/50 border-gray-700">
                <CardHeader>
                  <CardTitle>{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-secondary/50 border-gray-700">
                <CardHeader>
                  <CardTitle>{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Volunteer Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {volunteerWork.map((work, index) => (
              <Card key={index} className="bg-secondary/50 border-gray-700">
                <CardHeader>
                  <CardTitle>{work.organization}</CardTitle>
                  <CardDescription>{work.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
