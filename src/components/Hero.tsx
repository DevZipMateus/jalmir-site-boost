import { Button } from "@/components/ui/button";
import { Droplets } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Piscina cristalina" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/60"></div>
      </div>
      
      {/* Animated Water Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 backdrop-blur-sm">
            <Droplets className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">Mais de 10 anos de experiência</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-water bg-clip-text text-transparent px-4">
            Jalmir Piscinas
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Especialistas em equipamentos, instalação e manutenção de piscinas em Indaiatuba e região
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-water hover:opacity-90 transition-opacity shadow-soft text-base md:text-lg px-6 py-5 md:px-8 md:py-6 w-full sm:w-auto"
            >
              Solicitar orçamento
            </Button>
            <a 
              href="https://wa.me/5519998843237"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all text-base md:text-lg px-6 py-5 md:px-8 md:py-6 w-full"
              >
                WhatsApp
              </Button>
            </a>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto px-4">
            <div className="text-center p-4 md:p-6 rounded-xl bg-background/50 backdrop-blur-sm shadow-soft">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm md:text-base text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="text-center p-4 md:p-6 rounded-xl bg-background/50 backdrop-blur-sm shadow-soft">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm md:text-base text-muted-foreground">Satisfação garantida</div>
            </div>
            <div className="text-center p-4 md:p-6 rounded-xl bg-background/50 backdrop-blur-sm shadow-soft">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">✓</div>
              <div className="text-sm md:text-base text-muted-foreground">Suporte técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
