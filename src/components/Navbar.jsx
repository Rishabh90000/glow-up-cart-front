
import React, { useState } from 'react';
import { User } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">PackagePro</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="/#products" className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">Products</a>
            <a href="/#boxes" className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">Boxes</a>
            <a href="/#bottles" className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">Bottles</a>
            <a href="/#contact" className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="rounded-full w-10 h-10 flex items-center justify-center bg-secondary hover:bg-secondary/80 transition-colors">
              <User className="h-5 w-5" />
              <span className="sr-only">User Profile</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">Menu</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md p-2 text-gray-900 hover:bg-gray-100"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <nav className="p-4">
              <div className="space-y-4">
                <a 
                  href="/#products" 
                  className="block text-lg font-medium transition-colors hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </a>
                <a 
                  href="/#boxes" 
                  className="block text-lg font-medium transition-colors hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Boxes
                </a>
                <a 
                  href="/#bottles" 
                  className="block text-lg font-medium transition-colors hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bottles
                </a>
                <a 
                  href="/#contact" 
                  className="block text-lg font-medium transition-colors hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
