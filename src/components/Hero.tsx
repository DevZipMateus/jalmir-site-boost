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
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95"></div>
      </div>
      
      {/* Animated Water Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Droplets className="w-4 h-4" />
            <span className="text-sm font-medium">Mais de 10 anos de experiência</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-water bg-clip-text text-transparent">
            Jalmir Piscinas
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Especialistas em equipamentos, instalação e manutenção de piscinas em Indaiatuba e região
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-water hover:opacity-90 transition-opacity shadow-soft text-lg px-8 py-6"
            >
              Solicitar orçamento
            </Button>
            <a 
              href="https://wa.me/5519998843237"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all text-lg px-8 py-6"
              >
                WhatsApp
              </Button>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm shadow-soft">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm shadow-soft">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Satisfação garantida</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm shadow-soft">
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground">Suporte técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
