
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "The packaging solutions provided by PackagePro completely transformed our brand's shelf presence. Our sales increased by 30% after the redesign!",
    author: "Sarah Johnson",
    company: "Glow Cosmetics"
  },
  {
    quote: "Working with PackagePro was seamless from concept to delivery. The quality of their bottles exceeded our expectations and our customers love them.",
    author: "Michael Chen",
    company: "Pure Elements Skincare"
  },
  {
    quote: "The custom packaging boxes designed for our premium product line perfectly capture our brand essence. The attention to detail is remarkable.",
    author: "Emma Rodriguez",
    company: "Luxe Beauty Co."
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what brands have to say about our packaging solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="space-y-4">
                <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
