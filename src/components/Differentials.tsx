import { Shield, Clock, ThumbsUp, Headphones } from "lucide-react";
import equipmentInstallation from "@/assets/equipment-installation.jpg";

const Differentials = () => {
  const items = [
    {
      icon: Shield,
      title: "Qualidade garantida",
      description: "Trabalhamos apenas com equipamentos de primeira linha e garantia estendida",
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Respeitamos seu tempo com agendamentos precisos e prazos cumpridos",
    },
    {
      icon: ThumbsUp,
      title: "Atendimento personalizado",
      description: "Cada cliente é único e recebe soluções sob medida para suas necessidades",
    },
    {
      icon: Headphones,
      title: "Suporte contínuo",
      description: "Estamos sempre disponíveis para dúvidas e assistência técnica",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground px-4">
              Por que escolher a Jalmir Piscinas?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Diferenciais que fazem toda a diferença no cuidado com sua piscina
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 px-4">
            {items.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 md:p-8 rounded-xl bg-gradient-light shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-water rounded-xl flex items-center justify-center shadow-soft">
                    <item.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-6 md:gap-8 items-center px-4">
            <div className="order-2 lg:order-1">
              <img 
                src={equipmentInstallation} 
                alt="Casa de máquina profissional para piscina" 
                className="w-full h-auto rounded-2xl shadow-soft"
              />
            </div>
            <div className="order-1 lg:order-2 p-6 md:p-8 bg-primary/5 rounded-2xl border border-primary/20">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-foreground">
                Assistência técnica especializada
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                Oferecemos suporte completo: troca de areia do filtro, reparo em motores, 
                reparos na válvula seletora e todo o suporte necessário para manter sua piscina 
                sempre em perfeito funcionamento.
              </p>
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm md:text-base">
                <Headphones className="w-4 h-4 md:w-5 md:h-5" />
                <span>Atendimento direto com o cliente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
