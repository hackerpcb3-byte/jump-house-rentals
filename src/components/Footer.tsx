import { Facebook, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🏰</span>
              <span className="font-display text-2xl font-bold">
                Brinco<span className="text-primary">Fiesta</span>
              </span>
            </div>
            <p className="font-body text-card/70 max-w-md">
              Somos la empresa #1 en alquiler de casas de brinco. Más de 10 años 
              haciendo fiestas inolvidables para tu familia.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-2 font-body text-card/70">
              <li><a href="#productos" className="hover:text-primary transition-colors">Productos</a></li>
              <li><a href="#como-funciona" className="hover:text-primary transition-colors">Cómo Funciona</a></li>
              <li><a href="#testimonios" className="hover:text-primary transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="tel:+1234567890" 
                className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-card/20 pt-8 text-center">
          <p className="font-body text-card/50 text-sm">
            © 2026 BrincoFiesta. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
