import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🏰</span>
            <span className="font-display text-2xl font-bold text-foreground">
              Brinco<span className="text-secondary">Fiesta</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#productos" className="font-body text-foreground hover:text-secondary transition-colors">
              Productos
            </a>
            <a href="#como-funciona" className="font-body text-foreground hover:text-secondary transition-colors">
              Cómo Funciona
            </a>
            <a href="#testimonios" className="font-body text-foreground hover:text-secondary transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="font-body text-foreground hover:text-secondary transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-foreground font-body">
              <Phone className="h-4 w-4 text-secondary" />
              (123) 456-7890
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-display">
              ¡Reserva Ahora!
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#productos" className="font-body text-foreground hover:text-secondary transition-colors">
              Productos
            </a>
            <a href="#como-funciona" className="font-body text-foreground hover:text-secondary transition-colors">
              Cómo Funciona
            </a>
            <a href="#testimonios" className="font-body text-foreground hover:text-secondary transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="font-body text-foreground hover:text-secondary transition-colors">
              Contacto
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-foreground font-body">
              <Phone className="h-4 w-4 text-secondary" />
              (123) 456-7890
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-display w-full">
              ¡Reserva Ahora!
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
