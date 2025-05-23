
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCategory from '@/components/ProductCategory';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ProductCategory 
        id="boxes"
        title="Premium Packaging Boxes"
        description="Our high-visibility packaging boxes are designed to make your products stand out on the shelf. From luxury rigid boxes to custom printed folding cartons, we offer packaging solutions that enhance your brand's presence and protect your products."
        imageSrc="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
        alt="Premium packaging boxes"
      />
      <ProductCategory 
        id="bottles"
        title="Custom Bottles & Containers"
        description="Elevate your skincare, makeup, and beauty products with our elegant bottle designs. Our containers are engineered for both visual appeal and functional excellence, ensuring your products remain fresh while making a powerful visual statement."
        imageSrc="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
        alt="Custom bottles and containers"
        reversed={true}
      />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
