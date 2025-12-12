import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Search, ShoppingCart, Eye } from "lucide-react";

const medications = [
  {
    id: 1,
    name: "Ibuprofeno 200mg",
    category: "Antiinflamatorio",
    price: 11.04,
    originalPrice: 15.99,
    discount: 15,
    image: "💊",
    stock: 50,
    description: "Alivia dolor y reduce la fiebre"
  },
  {
    id: 2,
    name: "Paracetamol 500mg",
    category: "Analgésico",
    price: 9.99,
    originalPrice: null,
    discount: null,
    image: "🟥",
    stock: 75,
    description: "Alivia dolor y reduce la fiebre"
  },
  {
    id: 3,
    name: "Amoxicilina 500mg",
    category: "Antibiótico",
    price: 16.65,
    originalPrice: 18.50,
    discount: 10,
    image: "🟪",
    stock: 30,
    description: "Tratamiento de infecciones bacterianas"
  },
  {
    id: 4,
    name: "Loratadina 10mg",
    category: "Antihistamínico",
    price: 7.50,
    originalPrice: null,
    discount: null,
    image: "🟦",
    stock: 42,
    description: "Tratamiento de alergias"
  },
  {
    id: 5,
    name: "Omeprazol 20mg",
    category: "Inhibidor de bomba de protones",
    price: 11.16,
    originalPrice: 14.95,
    discount: 25,
    image: "⚪",
    stock: 28,
    description: "Tratamiento de acidez estomacal"
  }
];

const topProducts = [
  { name: "Ibuprofeno 200mg", price: 12.99, image: "💊" },
  { name: "Paracetamol 500mg", price: 9.99, image: "🟥" },
  { name: "Amoxicilina 500mg", price: 18.50, image: "🟪" },
  { name: "Loratadina 10mg", price: 7.50, image: "🟦" },
  { name: "Omeprazol 20mg", price: 11.75, image: "⚪" }
];

interface PharmacyViewProps {
  onViewProductDetail?: (productId: number) => void;
}

export function PharmacyView({ onViewProductDetail }: PharmacyViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMedications, setFilteredMedications] = useState(medications);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = medications.filter(med => 
      med.name.toLowerCase().includes(value.toLowerCase()) ||
      med.category.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMedications(filtered);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-3xl font-bold text-gray-900">Vista de Medicamentos</h1>
      </div>

      {/* Search Bar */}
      <Card className="p-3 md:p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Buscar medicamento..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 pr-20 md:pr-24 bg-gray-50 border-gray-200"
          />
          <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 px-2 md:px-4 bg-blue-600 hover:bg-blue-700 text-xs md:text-sm">
            Buscar
          </Button>
        </div>
      </Card>

      {/* Mobile: Products First, then Top Products */}
      <div className="block lg:hidden space-y-4">
        {/* Products Grid Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredMedications.map((med) => (
            <Card key={med.id} className="p-3 hover:shadow-lg transition-shadow duration-200 relative">
              {/* Discount Badge */}
              {med.discount && (
                <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">
                  -{med.discount}%
                </Badge>
              )}
              
              {/* Product Image */}
              <div className="bg-gray-50 rounded-lg p-4 mb-3 flex items-center justify-center h-24">
                <span className="text-2xl">{med.image}</span>
              </div>
              
              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 text-sm">{med.name}</h3>
                <p className="text-xs text-blue-600">{med.category}</p>
                
                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-blue-600">
                    ${med.price}
                  </span>
                  {med.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      ${med.originalPrice}
                    </span>
                  )}
                </div>
                
                {/* Stock */}
                <p className="text-xs text-gray-500">Stock: {med.stock}</p>
                
                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-xs">
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Agregar
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="px-2"
                    onClick={() => onViewProductDetail?.(med.id)}
                  >
                    <Eye className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Most Purchased Products Mobile */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3 text-sm">Productos Más Comprados</h3>
          <div className="grid grid-cols-1 gap-2">
            {topProducts.slice(0, 3).map((product, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-sm">{product.image}</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-900">{product.name}</p>
                  <p className="text-xs font-bold text-blue-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6">
        {/* Products Grid Desktop */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredMedications.map((med) => (
              <Card key={med.id} className="p-4 hover:shadow-lg transition-shadow duration-200 relative">
                {/* Discount Badge */}
                {med.discount && (
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                    -{med.discount}%
                  </Badge>
                )}
                
                {/* Product Image */}
                <div className="bg-gray-50 rounded-lg p-6 mb-4 flex items-center justify-center h-32">
                  <span className="text-4xl">{med.image}</span>
                </div>
                
                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{med.name}</h3>
                  <p className="text-sm text-blue-600">{med.category}</p>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-blue-600">
                      ${med.price}
                    </span>
                    {med.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${med.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  {/* Stock */}
                  <p className="text-xs text-gray-500">Stock: {med.stock}</p>
                  
                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Agregar
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="px-3"
                      onClick={() => onViewProductDetail?.(med.id)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Most Purchased Products Sidebar Desktop */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-6">
            <h3 className="font-semibold text-gray-900 mb-4">Productos Más Comprados</h3>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-lg">{product.image}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm font-bold text-blue-600">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Medications Table - Mobile Optimized */}
      <Card className="p-3 md:p-6">
        <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Inventario Detallado</h3>
        
        {/* Mobile Card View */}
        <div className="block md:hidden space-y-3">
          <Card className="p-3 border-l-4 border-l-blue-500">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-gray-900 text-sm">Paracetamol</h4>
                <Badge variant="outline" className="text-xs">Analgésico</Badge>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div>Dosis: 500 mg</div>
                <div>Stock: 50</div>
                <div>Precio: $1.20</div>
                <div>Vence: 2025-12-31</div>
              </div>
              <p className="text-xs text-gray-600">Alivia dolor y reduce la fiebre.</p>
              <div className="pt-2">
                <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-xs">
                  Ver Detalles
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">NOMBRE</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">DOSIS</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">PRESENTACIÓN</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">CATEGORÍA</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">STOCK</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">PRECIO</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">VENCIMIENTO</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">DESCRIPCIÓN</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-900">Paracetamol</td>
                <td className="py-3 px-4 text-sm text-gray-600">500 mg</td>
                <td className="py-3 px-4 text-sm text-gray-600">Tabletas</td>
                <td className="py-3 px-4 text-sm text-gray-600">Analgésico</td>
                <td className="py-3 px-4 text-sm text-gray-600">50</td>
                <td className="py-3 px-4 text-sm text-gray-600">$/ 1.20</td>
                <td className="py-3 px-4 text-sm text-gray-600">2025-12-31</td>
                <td className="py-3 px-4 text-sm text-gray-600">Alivia dolor y reduce la fiebre.</td>
                <td className="py-3 px-4">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-xs px-3">
                    Ver Detalles
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}