import { Button } from "@/components/ui/button";
import { Star, Shield, Clock } from "lucide-react";
import heroBounceHouse from "@/assets/hero-bounce-house.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBounceHouse})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full mb-6 animate-bounce">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-body text-sm font-semibold">#1 en Alquiler de Brincolines</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-card mb-6 leading-tight">
            ¡Haz de tu Fiesta una 
            <span className="text-primary block">Aventura Inolvidable!</span>
          </h1>

          <p className="font-body text-xl text-card/90 mb-8 leading-relaxed">
            Alquila las mejores casas de brinco para cumpleaños, fiestas infantiles 
            y eventos especiales. Entrega, instalación y recogida incluidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-display text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Ver Catálogo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-card text-card bg-card/10 hover:bg-card hover:text-foreground font-display text-lg px-8 py-6 backdrop-blur-sm"
            >
              Solicitar Cotización
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-card/90">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-body text-sm">100% Seguros</span>
            </div>
            <div className="flex items-center gap-2 text-card/90">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-body text-sm">Entrega Puntual</span>
            </div>
            <div className="flex items-center gap-2 text-card/90">
              <Star className="h-5 w-5 text-primary fill-primary" />
              <span className="font-body text-sm">+500 Eventos Exitosos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl animate-float">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl">🎉</span>
            </div>
            <div>
              <p className="font-display font-bold text-foreground">Desde $150/día</p>
              <p className="font-body text-sm text-muted-foreground">Todo incluido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
