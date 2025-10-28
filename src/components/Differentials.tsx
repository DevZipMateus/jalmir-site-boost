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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Por que escolher a Jalmir Piscinas?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diferenciais que fazem toda a diferença no cuidado com sua piscina
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <div 
                key={index}
                className="flex gap-6 p-8 rounded-xl bg-gradient-light shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-water rounded-xl flex items-center justify-center shadow-soft">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={equipmentInstallation} 
                alt="Casa de máquina profissional para piscina" 
                className="w-full h-auto rounded-2xl shadow-soft"
              />
            </div>
            <div className="order-1 md:order-2 p-8 bg-primary/5 rounded-2xl border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Assistência técnica especializada
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Oferecemos suporte completo: troca de areia do filtro, reparo em motores, 
                reparos na válvula seletora e todo o suporte necessário para manter sua piscina 
                sempre em perfeito funcionamento.
              </p>
              <div className="inline-flex items-center gap-2 text-primary font-medium">
                <Headphones className="w-5 h-5" />
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
