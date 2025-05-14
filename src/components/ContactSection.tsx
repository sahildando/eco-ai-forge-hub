
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg">
              I'm currently looking for new opportunities to collaborate on exciting projects.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>sahildandotiya0604@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 8305680511</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Gwalior, Madhya Pradesh, India</span>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/sahildando" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/sahil-sharma-664207244/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://x.com/TheBlackHerald7" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/50 rounded-lg p-6 border border-gray-700">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-secondary border border-gray-700 focus:border-primary focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 rounded-md bg-secondary border border-gray-700 focus:border-primary focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-secondary border border-gray-700 focus:border-primary focus:outline-none"
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-md bg-secondary border border-gray-700 focus:border-primary focus:outline-none resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
