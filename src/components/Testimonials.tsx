import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Augusto Toledo",
      rating: 5,
      text: "Serviço nota 1000!!! Atendimento profissional e eficiente!!",
    },
    {
      name: "Geraldo",
      rating: 5,
      text: "Jalmir me salvou e salvou meu aquecedor... craque no q faz .. serviço perfeito",
    },
    {
      name: "Bernadete Mendonça",
      rating: 5,
      text: "Pessoal comprometido, competentes ! Super indico .",
    },
    {
      name: "Carla Grotto",
      rating: 5,
      text: "Excelentes profissionais e atendimento impecável. Minha piscina está sempre linda e é elogiada por todos. Além disso, eles são pessoas maravilhosas!",
    },
  ];

  return (
    <section id="depoimentos" className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground px-4">
            Depoimentos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
