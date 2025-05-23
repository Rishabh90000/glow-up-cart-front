
import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-bold leading-tight tracking-tighter">
              <span className="text-primary">Premium Packaging</span> for Bold Brands
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-[600px]">
              Elevate your products with our trendy high-visibility packaging solutions. 
              Stand out on the shelf with custom boxes and bottles designed for impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#products" className="btn-primary">
                Explore Products
              </a>
              <a href="#contact" className="btn-secondary">
                Get a Quote
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in-delay-1">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-30 blur-xl"></div>
            <div className="relative bg-white p-4 rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                  alt="Premium packaging products" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in-delay-2">
          <div className="space-y-2">
            <p className="text-3xl font-bold text-primary">500+</p>
            <p className="text-sm text-gray-500">Happy Clients</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-primary">12k+</p>
            <p className="text-sm text-gray-500">Products Sold</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-primary">99%</p>
            <p className="text-sm text-gray-500">Client Satisfaction</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-primary">24/7</p>
            <p className="text-sm text-gray-500">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
