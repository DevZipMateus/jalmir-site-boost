import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import testimonialCarla from "@/assets/testimonial-carla.png";
import testimonialGeraldo from "@/assets/testimonial-geraldo.png";
import testimonialAugusto from "@/assets/testimonial-augusto.png";
import testimonialBernadete from "@/assets/testimonial-bernadete.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carla Grotto",
      image: testimonialCarla,
      rating: 5,
      text: "Excelentes profissionais e atendimento impecável. Minha piscina está sempre linda e é elogiada por todos. Além disso, eles são pessoas maravilhosas!",
    },
    {
      name: "Geraldo",
      image: testimonialGeraldo,
      rating: 5,
      text: "Jalmir me salvou e salvou meu aquecedor... craque no q faz .. serviço perfeito",
    },
    {
      name: "Augusto Toledo",
      image: testimonialAugusto,
      rating: 5,
      text: "Serviço nota 1000!!! Atendimento profissional e eficiente!!",
    },
    {
      name: "Bernadete Mendonça",
      image: testimonialBernadete,
      rating: 5,
      text: "Pessoal comprometido, competentes ! Super indico .",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Depoimentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src={testimonial.image}
                  alt={`Depoimento de ${testimonial.name}`}
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
