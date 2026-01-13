import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, PartyPopper, MapPin, Phone, User, Mail } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productPrice: number;
}

const ReservationModal = ({ isOpen, onClose, productName, productPrice }: ReservationModalProps) => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast({
        title: "Fecha requerida",
        description: "Por favor selecciona una fecha para tu evento.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Reserva enviada! 🎉",
      description: `Tu solicitud para ${productName} ha sido recibida. Te contactaremos pronto.`,
    });

    setFormData({ name: "", email: "", phone: "", address: "", message: "" });
    setDate(undefined);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-md border-primary/20">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-primary flex items-center gap-2">
            <PartyPopper className="h-6 w-6 text-accent" />
            Reservar {productName}
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground">
            Completa el formulario para reservar. Precio: <span className="font-bold text-secondary">${productPrice}/día</span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body flex items-center gap-1">
                <User className="h-4 w-4 text-secondary" />
                Nombre
              </Label>
              <Input
                id="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="font-body border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="font-body flex items-center gap-1">
                <Phone className="h-4 w-4 text-secondary" />
                Teléfono
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Tu teléfono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="font-body border-primary/20 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-body flex items-center gap-1">
              <Mail className="h-4 w-4 text-secondary" />
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="font-body border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-body flex items-center gap-1">
              <CalendarIcon className="h-4 w-4 text-secondary" />
              Fecha del evento
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-body border-primary/20",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP", { locale: es }) : "Selecciona una fecha"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="font-body flex items-center gap-1">
              <MapPin className="h-4 w-4 text-secondary" />
              Dirección del evento
            </Label>
            <Input
              id="address"
              placeholder="Dirección donde se entregará"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
              className="font-body border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-body">
              Mensaje adicional (opcional)
            </Label>
            <Textarea
              id="message"
              placeholder="¿Alguna indicación especial?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="font-body border-primary/20 focus:border-primary resize-none"
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 font-display border-muted-foreground/30"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-display"
            >
              Confirmar Reserva
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
