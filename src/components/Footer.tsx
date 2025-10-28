import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jalmir Piscinas</h3>
            <p className="text-secondary-foreground/80 text-sm">
              Mais de 10 anos de experiência em equipamentos, instalação e manutenção de piscinas em Indaiatuba e região.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/5519998843237" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  (19) 99884-3237
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:jalmirpiscinas@gmail.com" className="hover:text-accent transition-colors">
                  jalmirpiscinas@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  Rua Manoel Lopes Cruz, 220<br />
                  Indaiatuba - SP
                </span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Segunda a Sexta</p>
                  <p className="font-medium text-secondary-foreground">8:00 às 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2 ml-6">
                <div>
                  <p>Sábado</p>
                  <p className="font-medium text-secondary-foreground">8:00 às 12:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/5519998843237" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Jalmir Piscinas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
