import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarIcon,
  PartyPopper,
  MapPin,
  Phone,
  User,
  Mail,
  Clock,
  Truck,
  Sparkles,
} from "lucide-react";
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

const DELIVERY_ZONES = [
  { id: "centro", label: "Zona Centro", fee: 0 },
  { id: "norte", label: "Zona Norte", fee: 15 },
  { id: "sur", label: "Zona Sur", fee: 20 },
  { id: "metropolitana", label: "Área Metropolitana", fee: 35 },
];

const HOUR_OPTIONS = [
  { value: "4", label: "4 horas", multiplier: 0.6 },
  { value: "6", label: "6 horas", multiplier: 0.8 },
  { value: "8", label: "8 horas (día completo)", multiplier: 1 },
  { value: "24", label: "24 horas", multiplier: 1.4 },
];

const EXTRAS = [
  { id: "popcorn", label: "🍿 Máquina de Popcorn", price: 45 },
  { id: "cotton", label: "🍭 Máquina de Algodón de Azúcar", price: 50 },
  { id: "snowcone", label: "🧊 Máquina de Raspados", price: 40 },
  { id: "tables", label: "🪑 Mesas y sillas (paquete 10 niños)", price: 30 },
  { id: "generator", label: "⚡ Generador eléctrico", price: 60 },
];

const PACKAGE_DISCOUNT = 0.1; // 10% off extras when 2+ selected

const ReservationModal = ({ isOpen, onClose, productName, productPrice }: ReservationModalProps) => {
  const [date, setDate] = useState<Date>();
  const [hours, setHours] = useState("8");
  const [zone, setZone] = useState("centro");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const pricing = useMemo(() => {
    const hourOpt = HOUR_OPTIONS.find((h) => h.value === hours)!;
    const rentalCost = Math.round(productPrice * hourOpt.multiplier);
    const deliveryFee = DELIVERY_ZONES.find((z) => z.id === zone)?.fee ?? 0;
    const extrasSubtotal = EXTRAS.filter((e) => selectedExtras.includes(e.id)).reduce(
      (sum, e) => sum + e.price,
      0,
    );
    const extrasDiscount = selectedExtras.length >= 2 ? extrasSubtotal * PACKAGE_DISCOUNT : 0;
    const total = rentalCost + deliveryFee + extrasSubtotal - extrasDiscount;
    return { rentalCost, deliveryFee, extrasSubtotal, extrasDiscount, total };
  }, [productPrice, hours, zone, selectedExtras]);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

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
      description: `${productName} • Total: $${pricing.total}. Te contactaremos pronto.`,
    });
    setFormData({ name: "", email: "", phone: "", address: "", message: "" });
    setSelectedExtras([]);
    setHours("8");
    setZone("centro");
    setDate(undefined);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-md border-primary/20 rounded-3xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-primary flex items-center gap-2">
            <PartyPopper className="h-6 w-6 text-accent" />
            Reservar {productName}
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground">
            Personaliza tu reserva y mira el precio en tiempo real.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          {/* Datos personales */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body flex items-center gap-1">
                <User className="h-4 w-4 text-secondary" /> Nombre
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
                <Phone className="h-4 w-4 text-secondary" /> Teléfono
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
              <Mail className="h-4 w-4 text-secondary" /> Email
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

          {/* Fecha y horas */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-body flex items-center gap-1">
                <CalendarIcon className="h-4 w-4 text-secondary" /> Fecha
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    type="button"
                    className={cn(
                      "w-full justify-start text-left font-body border-primary/20",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: es }) : "Selecciona"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label className="font-body flex items-center gap-1">
                <Clock className="h-4 w-4 text-secondary" /> Duración
              </Label>
              <Select value={hours} onValueChange={setHours}>
                <SelectTrigger className="font-body border-primary/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {HOUR_OPTIONS.map((h) => (
                    <SelectItem key={h.value} value={h.value}>
                      {h.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Dirección y zona */}
          <div className="space-y-2">
            <Label htmlFor="address" className="font-body flex items-center gap-1">
              <MapPin className="h-4 w-4 text-secondary" /> Dirección del evento
            </Label>
            <Input
              id="address"
              placeholder="Calle, número, colonia"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
              className="font-body border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-body flex items-center gap-1">
              <Truck className="h-4 w-4 text-secondary" /> Zona de entrega
            </Label>
            <Select value={zone} onValueChange={setZone}>
              <SelectTrigger className="font-body border-primary/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DELIVERY_ZONES.map((z) => (
                  <SelectItem key={z.id} value={z.id}>
                    {z.label} {z.fee > 0 ? `(+$${z.fee})` : "(gratis)"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Extras */}
          <div className="space-y-3 rounded-2xl border border-accent/30 bg-accent/5 p-4">
            <div className="flex items-center justify-between">
              <Label className="font-display text-base flex items-center gap-1 text-accent">
                <Sparkles className="h-4 w-4" /> Agrega extras a tu fiesta
              </Label>
              <span className="text-xs font-body text-muted-foreground">
                2+ extras: 10% off
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {EXTRAS.map((extra) => (
                <label
                  key={extra.id}
                  className="flex items-center justify-between gap-3 rounded-xl bg-background/60 px-3 py-2 cursor-pointer hover:bg-background transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={selectedExtras.includes(extra.id)}
                      onCheckedChange={() => toggleExtra(extra.id)}
                    />
                    <span className="font-body text-sm">{extra.label}</span>
                  </div>
                  <span className="font-display text-sm text-secondary">+${extra.price}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Mensaje */}
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
              rows={2}
            />
          </div>

          {/* Resumen de precio */}
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-4 space-y-2">
            <h4 className="font-display text-base text-foreground">Resumen</h4>
            <div className="space-y-1 font-body text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Alquiler ({HOUR_OPTIONS.find((h) => h.value === hours)?.label})
                </span>
                <span>${pricing.rentalCost}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Entrega</span>
                <span>{pricing.deliveryFee === 0 ? "Gratis" : `$${pricing.deliveryFee}`}</span>
              </div>
              {pricing.extrasSubtotal > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Extras</span>
                  <span>${pricing.extrasSubtotal}</span>
                </div>
              )}
              {pricing.extrasDiscount > 0 && (
                <div className="flex justify-between text-success">
                  <span>Descuento paquete (-10%)</span>
                  <span>-${pricing.extrasDiscount.toFixed(0)}</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-primary/20 font-display text-lg">
                <span>Total</span>
                <span className="text-primary">${pricing.total.toFixed(0)}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
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
              Confirmar (${pricing.total.toFixed(0)})
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
