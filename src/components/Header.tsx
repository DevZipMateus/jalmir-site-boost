import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isVitrinePage = location.pathname === "/vitrine";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isVitrinePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const goToVitrine = () => {
    navigate("/vitrine");
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isVitrinePage
          ? "bg-background/95 backdrop-blur-md shadow-soft" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button 
            onClick={() => isVitrinePage ? navigate("/") : scrollToSection("hero")}
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
            <button 
              onClick={goToVitrine}
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors font-medium"
            >
              Vitrine
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
          <nav className="md:hidden absolute top-full left-0 right-0 py-6 border-t border-border/50 bg-background/98 backdrop-blur-lg shadow-xl animate-fade-in">
            <div className="flex flex-col gap-2 px-4">
              <button 
                onClick={() => scrollToSection("sobre")}
                className="text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium text-left px-6 py-3.5 rounded-xl border border-transparent hover:border-primary/20"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection("servicos")}
                className="text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium text-left px-6 py-3.5 rounded-xl border border-transparent hover:border-primary/20"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection("diferenciais")}
                className="text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium text-left px-6 py-3.5 rounded-xl border border-transparent hover:border-primary/20"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection("galeria")}
                className="text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium text-left px-6 py-3.5 rounded-xl border border-transparent hover:border-primary/20"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection("depoimentos")}
                className="text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium text-left px-6 py-3.5 rounded-xl border border-transparent hover:border-primary/20"
              >
                Depoimentos
              </button>
              <button 
                onClick={goToVitrine}
                className="text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium text-left px-6 py-3.5 rounded-xl border border-transparent hover:border-primary/20"
              >
                Vitrine
              </button>
              <div className="mt-2">
                <Button 
                  onClick={() => scrollToSection("contato")}
                  className="w-full bg-gradient-water hover:opacity-90 transition-opacity shadow-soft py-3.5 rounded-xl font-semibold"
                >
                  Contato
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
