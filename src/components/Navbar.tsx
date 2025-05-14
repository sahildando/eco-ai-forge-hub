
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-md" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-primary">
          Sahil Sharma
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#education" className="hover:text-primary transition-colors">Education</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-3 items-center">
            <a href="https://github.com/sahildando" target="_blank" rel="noopener noreferrer">
              <Github className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/sahil-sharma-664207244/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="social-icon" />
            </a>
            <a href="https://x.com/TheBlackHerald7" target="_blank" rel="noopener noreferrer">
              <Twitter className="social-icon" />
            </a>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a href="#about" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>About</a>
            <a href="#skills" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Projects</a>
            <a href="#education" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Education</a>
            <a href="#contact" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
            
            <div className="flex gap-4 py-2">
              <a href="https://github.com/sahildando" target="_blank" rel="noopener noreferrer">
                <Github className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/sahil-sharma-664207244/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="social-icon" />
              </a>
              <a href="https://x.com/TheBlackHerald7" target="_blank" rel="noopener noreferrer">
                <Twitter className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
