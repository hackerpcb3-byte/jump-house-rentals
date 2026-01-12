import ProductCard from "./ProductCard";
import waterSlide from "@/assets/water-slide.jpg";
import princessCastle from "@/assets/princess-castle.jpg";
import obstacleCourse from "@/assets/obstacle-course.jpg";
import heroBounceHouse from "@/assets/hero-bounce-house.jpg";

const products = [
  {
    image: heroBounceHouse,
    name: "Castillo Clásico",
    description: "El favorito de todos. Perfecto para cumpleaños y fiestas infantiles.",
    price: 150,
    capacity: 8,
    size: "4m x 4m",
    popular: true,
  },
  {
    image: waterSlide,
    name: "Tobogán Acuático",
    description: "¡Diversión refrescante! Ideal para fiestas de verano.",
    price: 250,
    capacity: 10,
    size: "6m x 4m",
  },
  {
    image: princessCastle,
    name: "Castillo de Princesas",
    description: "Mágico castillo rosa para las pequeñas princesas.",
    price: 180,
    capacity: 6,
    size: "4m x 3.5m",
  },
  {
    image: obstacleCourse,
    name: "Carrera de Obstáculos",
    description: "Aventura y competencia para los más activos.",
    price: 220,
    capacity: 12,
    size: "8m x 3m",
  },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full font-body text-sm font-semibold mb-4">
            🎈 Nuestros Productos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Elige tu Brincolin Favorito
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Tenemos opciones para todos los gustos y edades. Todos incluyen entrega, instalación y recogida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
