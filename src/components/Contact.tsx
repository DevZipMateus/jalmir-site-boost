import { Phone, Mail, Clock, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Entre em contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para atender você e cuidar da sua piscina
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-soft border-primary/20">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Telefone</h3>
                      <a 
                        href="tel:+5519998843237"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (19) 99884-3237
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">E-mail</h3>
                      <a 
                        href="mailto:jalmirpiscinas@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        jalmirpiscinas@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Endereço</h3>
                      <p className="text-muted-foreground">
                        Rua Manoel Lopes Cruz, 220<br />
                        Indaiatuba - SP
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Horário de funcionamento</h3>
                      <p className="text-muted-foreground">
                        Segunda a sexta: 8h às 18h<br />
                        Sábados: 8h às 12h
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-soft border-primary/20 bg-gradient-water text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Solicite um orçamento</h3>
                  <p className="mb-6 opacity-95">
                    Entre em contato pelo WhatsApp e receba um orçamento personalizado 
                    para suas necessidades.
                  </p>
                  <a 
                    href="https://wa.me/5519998843237"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button 
                      size="lg"
                      className="w-full bg-background text-primary hover:bg-background/90 shadow-soft"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Falar no WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Nossas redes sociais</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://wa.me/5519998843237"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
