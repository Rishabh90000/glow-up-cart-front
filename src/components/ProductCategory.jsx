
import React from 'react';
import { cn } from "@/lib/utils";

const ProductCategory = ({ 
  title, 
  description, 
  imageSrc, 
  alt, 
  reversed = false,
  id 
}) => {
  return (
    <section id={id} className="section bg-white">
      <div className="container-custom">
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center",
          reversed && "md:flex md:flex-row-reverse"
        )}>
          <div className="space-y-6">
            <h2 className="font-bold text-gray-900">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
            <a href="#contact" className="inline-flex items-center text-primary hover:underline font-medium">
              Request Custom Design
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-70 blur-xl"></div>
            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src={imageSrc}
                alt={alt}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
