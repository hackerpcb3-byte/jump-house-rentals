import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "María González",
    event: "Cumpleaños de 5 años",
    text: "¡Los niños lo pasaron increíble! El brincolin estaba impecable y la instalación fue super rápida. Definitivamente los volveré a contratar.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    event: "Fiesta de fin de curso",
    text: "Excelente servicio. Puntuales, profesionales y el precio muy accesible. La carrera de obstáculos fue todo un éxito con los pequeños.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    event: "Primera comunión",
    text: "El castillo de princesas hizo que mi hija y sus amigas tuvieran el mejor día de sus vidas. ¡Gracias por hacer su sueño realidad!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-secondary via-secondary to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-card/20 text-card px-4 py-2 rounded-full font-body text-sm font-semibold mb-4">
            💬 Testimonios
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-card mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="font-body text-card/80 text-lg max-w-2xl mx-auto">
            Más de 500 familias felices confían en nosotros para sus celebraciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-none shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary mb-4" />
                
                <p className="font-body text-card-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                
                <div>
                  <p className="font-display font-bold text-card-foreground">{testimonial.name}</p>
                  <p className="font-body text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
