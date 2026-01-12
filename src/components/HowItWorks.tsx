import { CalendarCheck, Truck, PartyPopper, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "1. Reserva",
    description: "Elige tu brincolin favorito y selecciona la fecha de tu evento.",
  },
  {
    icon: Truck,
    title: "2. Entrega",
    description: "Llegamos a tu ubicación y realizamos la instalación completa.",
  },
  {
    icon: PartyPopper,
    title: "3. ¡Diversión!",
    description: "Disfruta de tu evento mientras los niños se divierten.",
  },
  {
    icon: ThumbsUp,
    title: "4. Recogida",
    description: "Al finalizar, recogemos todo. ¡Sin preocupaciones!",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary-foreground bg-primary px-4 py-2 rounded-full font-body text-sm font-semibold mb-4">
            ✨ Proceso Simple
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Alquilar un brincolin nunca fue tan fácil. En 4 simples pasos tendrás la fiesta perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
              )}
              
              <div className="relative z-10 mx-auto w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <step.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="font-body text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
