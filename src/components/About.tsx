import { Heart, Users, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutPool from "@/assets/about-pool.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground px-4">
              Nossa história
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Uma empresa familiar dedicada à qualidade e satisfação do cliente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 items-center">
            <div className="space-y-4 md:space-y-6 animate-slide-in px-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-foreground">Quem somos</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Começamos em 2007 com limpeza de piscinas e, através das indicações de clientes satisfeitos, 
                  fomos crescendo e nos capacitando para entender melhor a necessidade de cada cliente.
                </p>
              </div>
              
              <div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Em 2014, formalizamos a empresa Jalmir Piscinas, passando a atender um público maior. 
                  Com novos parceiros e fornecedores, expandimos para suporte e assistência técnica, 
                  moldando nossos serviços para atender cada cliente de forma individualizada.
                </p>
              </div>

              <div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Hoje, oferecemos troca de areia do filtro, reparo em motores e todo o suporte necessário. 
                  O contato direto com nossos clientes nos fez entender suas necessidades, 
                  permitindo-nos avançar e atender Indaiatuba e região com venda de equipamentos e assistência técnica especializada.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 animate-fade-in px-4">
              <img 
                src={aboutPool} 
                alt="Piscina limpa e bem cuidada pela Jalmir Piscinas" 
                className="w-full h-auto rounded-2xl shadow-soft"
              />
              <div className="grid grid-cols-2 gap-3 md:gap-4">
              <Card className="shadow-soft border-primary/20 hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Compromisso</h4>
                  <p className="text-sm text-muted-foreground">
                    Qualidade em cada serviço
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-primary/20 hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Empresa familiar</h4>
                  <p className="text-sm text-muted-foreground">
                    Atendimento personalizado
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-primary/20 hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Experiência</h4>
                  <p className="text-sm text-muted-foreground">
                    Mais de 10 anos no mercado
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-primary/20 hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Visão</h4>
                  <p className="text-sm text-muted-foreground">
                    Referência em qualidade
                  </p>
                </CardContent>
              </Card>
              </div>
            </div>
          </div>

          <div className="bg-gradient-water rounded-2xl p-6 md:p-8 lg:p-12 text-center text-primary-foreground shadow-soft mx-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Nossa missão</h3>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed opacity-95">
              Ser referência no mercado de piscinas, destacando a qualidade e satisfação do cliente. 
              Nosso trabalho é realizado de maneira profissional em Indaiatuba e região, 
              com o compromisso de oferecer serviços de qualidade, mantendo e expandindo nossa carteira 
              de clientes através da fidelização.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
