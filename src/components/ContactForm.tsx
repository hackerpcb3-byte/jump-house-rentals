import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    setFormData({ name: "", phone: "", email: "", date: "", message: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full font-body text-sm font-semibold mb-4">
            📞 Contáctanos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Listo Para tu Fiesta?
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Solicita tu cotización gratis. Respondemos en menos de 2 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">Teléfono</h4>
                  <p className="font-body text-muted-foreground">(123) 456-7890</p>
                  <p className="font-body text-muted-foreground">(123) 456-7891</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">Email</h4>
                  <p className="font-body text-muted-foreground">info@brincofiesta.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">Área de Servicio</h4>
                  <p className="font-body text-muted-foreground">Ciudad y alrededores (30km)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-success-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">Horario</h4>
                  <p className="font-body text-muted-foreground">Lunes a Domingo</p>
                  <p className="font-body text-muted-foreground">8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="border-border bg-card shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Nombre
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="font-body"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Teléfono
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(123) 456-7890"
                      className="font-body"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="font-body"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Fecha del Evento
                    </label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="font-body"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Mensaje
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos sobre tu evento..."
                    className="font-body min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display text-lg"
                >
                  Enviar Solicitud
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
