
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-secondary/30 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© {currentYear} Sahil Sharma. All rights reserved.</p>
          </div>
          <div className="flex items-center">
            <p className="text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" />  by Sahil using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
