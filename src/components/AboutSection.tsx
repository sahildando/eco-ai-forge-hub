
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg">
              I'm a passionate developer currently pursuing my Bachelor of Technology in Computer Science & Mathematics
              at MITS-DU, Gwalior. My journey in tech spans across both frontend and backend development, with a special
              focus on machine learning and computer vision.
            </p>
            <p className="text-lg">
              I love solving complex problems and building applications that make a difference. Whether it's creating
              intuitive user interfaces with React or developing sophisticated algorithms for AI applications, I'm
              always eager to learn and improve my skills.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me working on personal growth, writing articles on Medium and Dev Community,
              or volunteering for local NGOs like Naye Pankh and Tarre Zammen Foundation.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="skill-badge">Fitness</Badge>
                <Badge variant="outline" className="skill-badge">Productivity</Badge>
                <Badge variant="outline" className="skill-badge">Personal Growth</Badge>
                <Badge variant="outline" className="skill-badge">Podcasts</Badge>
                <Badge variant="outline" className="skill-badge">Writing</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="skill-badge">Team Collaboration</Badge>
                <Badge variant="outline" className="skill-badge">Time Management</Badge>
                <Badge variant="outline" className="skill-badge">Problem-solving</Badge>
                <Badge variant="outline" className="skill-badge">Communication</Badge>
                <Badge variant="outline" className="skill-badge">Adaptability</Badge>
                <Badge variant="outline" className="skill-badge">Critical Thinking</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
