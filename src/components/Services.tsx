import { Wrench, Package, Waves, Zap, Sun, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import equipmentInstallation from "@/assets/equipment-installation.jpg";
import poolLighting from "@/assets/pool-lighting.jpg";
import poolHeating from "@/assets/pool-heating.jpg";
import serviceFilter from "@/assets/service-filter.jpg";
import servicePump from "@/assets/service-pump.jpg";
import serviceHydraulic from "@/assets/service-hydraulic.jpg";
import productHeater from "@/assets/product-heater.jpg";
import productChlorine from "@/assets/product-chlorine.jpg";
import productLed from "@/assets/product-led.jpg";
import vinylLinerInstallation from "@/assets/vinyl-liner-installation.jpg";

const Services = () => {
  const products = [
    { name: "Trocador de calor", icon: Zap, image: productHeater },
    { name: "Filtros", icon: Filter, image: serviceFilter },
    { name: "Motores", icon: Wrench, image: servicePump },
    { name: "Aquecimento solar", icon: Sun, image: poolHeating },
    { name: "Comando para o sistema MMZ", icon: Zap, image: equipmentInstallation },
    { name: "Dispositivos", icon: Package, image: equipmentInstallation },
    { name: "Lâmpadas LED", icon: Zap, image: productLed },
    { name: "Comando RGB com controle", icon: Zap, image: poolLighting },
    { name: "Cascata", icon: Waves, image: poolLighting },
    { name: "Gerador de cloro a base de sal", icon: Filter, image: productChlorine },
  ];

  const services = [
    {
      title: "Montagem de casa de máquina",
      description: "Instalação completa da parte hidráulica",
      icon: Wrench,
      image: serviceHydraulic,
    },
    {
      title: "Instalação de LEDs",
      description: "Iluminação profissional para sua piscina",
      icon: Zap,
      image: productLed,
    },
    {
      title: "Instalação de trocador de calor",
      description: "Sistema de aquecimento eficiente",
      icon: Zap,
      image: productHeater,
    },
    {
      title: "Instalação de filtros",
      description: "Sistema de filtragem completo",
      icon: Filter,
      image: serviceFilter,
    },
    {
      title: "Instalação de gerador de cloro",
      description: "Tratamento automático da água",
      icon: Filter,
      image: productChlorine,
    },
    {
      title: "Instalação de motobomba",
      description: "Circulação adequada da água",
      icon: Wrench,
      image: servicePump,
    },
    {
      title: "Venda e Instalação de Bolsão de Vinil",
      description: "Revestimento completo em vinil para sua piscina",
      icon: Waves,
      image: vinylLinerInstallation,
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
                    className="shadow-soft border-primary/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    </div>
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
                    className="shadow-soft border-primary/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent"></div>
                      <div className="absolute bottom-2 left-2 w-8 h-8 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <product.icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <CardContent className="pt-4 pb-4">
                      <p className="font-medium text-sm md:text-base text-foreground">{product.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Gallery Section */}
          <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-fade-in px-4">
            <div className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-glow transition-all duration-300">
              <img 
                src={equipmentInstallation} 
                alt="Instalação profissional de equipamentos para piscina" 
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4 md:p-6">
                <p className="text-primary-foreground font-semibold text-sm md:text-base">Equipamentos de qualidade</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-glow transition-all duration-300">
              <img 
                src={poolLighting} 
                alt="Iluminação LED para piscina ao anoitecer" 
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4 md:p-6">
                <p className="text-primary-foreground font-semibold text-sm md:text-base">Iluminação LED</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <img 
                src={poolHeating} 
                alt="Sistema de aquecimento solar para piscina" 
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4 md:p-6">
                <p className="text-primary-foreground font-semibold text-sm md:text-base">Aquecimento solar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
