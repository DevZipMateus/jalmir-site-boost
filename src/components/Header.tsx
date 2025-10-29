import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-soft" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 transition-transform hover:scale-105"
          >
            <img src={logo} alt="Jalmir Piscinas" className="h-10 md:h-12 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("servicos")}
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("diferenciais")}
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors font-medium"
            >
              Diferenciais
            </button>
            <Button 
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-water hover:opacity-90 transition-opacity shadow-soft text-sm lg:text-base"
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("sobre")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left px-4 py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection("servicos")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left px-4 py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection("diferenciais")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left px-4 py-2"
              >
                Diferenciais
              </button>
              <Button 
                onClick={() => scrollToSection("contato")}
                className="bg-gradient-water hover:opacity-90 mx-4"
              >
                Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
