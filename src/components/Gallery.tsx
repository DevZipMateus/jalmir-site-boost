import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";
import galleryFilters1 from "@/assets/gallery-filters-1.jpg";
import galleryFilterInstallation from "@/assets/gallery-filter-installation.jpg";
import galleryBlueFilter from "@/assets/gallery-blue-filter.jpg";
import galleryFilterSetup from "@/assets/gallery-filter-setup.jpg";
import galleryFilterSystem from "@/assets/gallery-filter-system.jpg";
import galleryPumps from "@/assets/gallery-pumps.jpg";
import galleryHeaterInstallation from "@/assets/gallery-heater-installation.jpg";
import galleryPoolPump from "@/assets/gallery-pool-pump.jpg";
import galleryHeatPumpId80 from "@/assets/gallery-heat-pump-id80.jpg";
import galleryValvesSystem from "@/assets/gallery-valves-system.jpg";
import galleryFilterConnection from "@/assets/gallery-filter-connection.jpg";
import galleryHeatPumpInstalled from "@/assets/gallery-heat-pump-installed.jpg";

const galleryImages = [
  { src: gallery1, alt: "Bomba de Calor Full Inverter Industek" },
  { src: gallery2, alt: "Gerador de Cloro - Tratamento a base de sal" },
  { src: gallery3, alt: "Piscina limpa e cristalina com aquecimento solar" },
  { src: gallery4, alt: "Piscina residencial com paisagismo completo" },
  { src: gallery5, alt: "Bomba de Calor RV100 Full Inverter" },
  { src: gallery6, alt: "Linha completa de Bombas de Calor Industek" },
  { src: gallery7, alt: "Bomba de Calor ID200 Industek" },
  { src: gallery8, alt: "Bomba de Calor RV25 com controle por app" },
  { src: galleryFilters1, alt: "Filtros Sodramar instalados" },
  { src: galleryFilterInstallation, alt: "Instalação de filtro com sistema hidráulico" },
  { src: galleryBlueFilter, alt: "Filtro Syl'50 instalado" },
  { src: galleryFilterSetup, alt: "Sistema de filtragem FM 40" },
  { src: galleryFilterSystem, alt: "Sistema de filtragem completo com válvulas" },
  { src: galleryPumps, alt: "Bombas de piscina instaladas" },
  { src: galleryHeaterInstallation, alt: "Bomba de Calor ID 80 em instalação" },
  { src: galleryPoolPump, alt: "Bomba de piscina Hydropass instalada" },
  { src: galleryHeatPumpId80, alt: "Bomba de Calor Industek ID 80 instalada" },
  { src: galleryValvesSystem, alt: "Sistema de válvulas e filtragem Jacuzzi" },
  { src: galleryFilterConnection, alt: "Conexões hidráulicas de filtro" },
  { src: galleryHeatPumpInstalled, alt: "Bomba de Calor ID 80 instalada em área externa" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent px-4">
            Galeria de Produtos e Serviços
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Conheça nossos equipamentos e resultados de nossos trabalhos
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div
                      className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-2">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
