import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Ruler } from "lucide-react";
import ReservationModal from "./ReservationModal";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: string;
  popular?: boolean;
}

const ProductCard = ({ image, name, description, price, capacity, size, popular }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="group overflow-hidden border-border bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {popular && (
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-display">
              ⭐ Popular
            </Badge>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6">
          <h3 className="font-display text-xl font-bold text-card-foreground mb-2">{name}</h3>
          <p className="font-body text-muted-foreground text-sm mb-4">{description}</p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-secondary" />
              <span className="font-body">{capacity} niños</span>
            </div>
            <div className="flex items-center gap-1">
              <Ruler className="h-4 w-4 text-secondary" />
              <span className="font-body">{size}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex items-center justify-between">
          <div>
            <span className="font-display text-2xl font-bold text-secondary">${price}</span>
            <span className="font-body text-muted-foreground text-sm">/día</span>
          </div>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-display"
          >
            Reservar
          </Button>
        </CardFooter>
      </Card>

      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={name}
        productPrice={price}
      />
    </>
  );
};

export default ProductCard;
