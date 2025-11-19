import { Wrench, Package, Waves, Zap, Sun, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const products = [
    { name: "Trocador de calor", icon: Zap },
    { name: "Filtros", icon: Filter },
    { name: "Motores", icon: Wrench },
    { name: "Aquecimento solar", icon: Sun },
    { name: "Comando para o sistema MMZ", icon: Zap },
    { name: "Dispositivos", icon: Package },
    { name: "Lâmpadas LED", icon: Zap },
    { name: "Comando RGB com controle", icon: Zap },
    { name: "Cascata", icon: Waves },
    { name: "Gerador de cloro a base de sal", icon: Filter },
  ];

  const services = [
    {
      title: "Montagem de casa de máquina",
      description: "Instalação completa da parte hidráulica",
      icon: Wrench,
    },
    {
      title: "Instalação de LEDs",
      description: "Iluminação profissional para sua piscina",
      icon: Zap,
    },
    {
      title: "Instalação de trocador de calor",
      description: "Sistema de aquecimento eficiente",
      icon: Zap,
    },
    {
      title: "Instalação de filtros",
      description: "Sistema de filtragem completo",
      icon: Filter,
    },
    {
      title: "Instalação de gerador de cloro",
      description: "Tratamento automático da água",
      icon: Filter,
    },
    {
      title: "Instalação de motobomba",
      description: "Circulação adequada da água",
      icon: Wrench,
    },
    {
      title: "Venda e Instalação de Bolsão de Vinil",
      description: "Revestimento completo em vinil para sua piscina",
      icon: Waves,
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground px-4">
              Nossos serviços
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Soluções completas em equipamentos e assistência técnica para piscinas
            </p>
          </div>

          <Tabs defaultValue="servicos" className="w-full px-4">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 md:mb-12">
              <TabsTrigger value="servicos" className="text-sm md:text-base">Serviços</TabsTrigger>
              <TabsTrigger value="produtos" className="text-sm md:text-base">Produtos</TabsTrigger>
            </TabsList>

            <TabsContent value="servicos" className="animate-fade-in">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {services.map((service, index) => (
                  <Card 
                    key={index}
                    className="shadow-soft border-primary/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-water rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="produtos" className="animate-fade-in">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {products.map((product, index) => (
                  <Card 
                    key={index}
                    className="shadow-soft border-primary/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="pt-6 pb-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-water rounded-lg flex items-center justify-center flex-shrink-0">
                        <product.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <p className="font-medium text-sm md:text-base text-foreground">{product.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Services;
