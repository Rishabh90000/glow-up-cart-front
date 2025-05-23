
import React from 'react';

interface ProductProps {
  name: string;
  category: string;
  image: string;
  description: string;
}

const products: ProductProps[] = [
  {
    name: "Elite Series Box",
    category: "Premium Packaging",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Luxury packaging boxes with unique finish and custom branding."
  },
  {
    name: "Skincare Bottles",
    category: "Cosmetics",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Sleek, modern bottles perfect for premium skincare products."
  },
  {
    name: "Makeup Containers",
    category: "Beauty Products",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    description: "High-visibility containers for makeup and beauty products."
  },
  {
    name: "Eco-Friendly Boxes",
    category: "Sustainable Packaging",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Environmentally conscious packaging solutions that don't compromise on style."
  }
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most popular packaging solutions that combine aesthetic appeal with practical functionality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card group"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                animation: 'fadeIn 0.5s ease-out forwards'
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full py-2 bg-white text-primary font-medium rounded-md shadow-lg hover:bg-primary hover:text-white transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-accent font-medium">{product.category}</p>
                <h3 className="font-bold text-xl mt-1">{product.name}</h3>
                <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn-primary">View All Products</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
