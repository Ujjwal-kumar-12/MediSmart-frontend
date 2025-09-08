import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../utils/constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from real patients who trust MediSmart for their healthcare needs.
          </p>
        </div>
        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.hospital}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  ({testimonial.rating}/5)
                </span>
              </div>

              <div className="relative">
                <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic pl-4">
                  {testimonial.comment}
                </p>
              </div>

              <div className="mt-4 text-right">
                <span className="text-xs text-gray-500">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
            <Star className="h-5 w-5 text-yellow-400 fill-current mr-2" />
            <span className="text-lg font-semibold text-gray-900">4.8/5</span>
            <span className="text-gray-600 ml-2">Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;