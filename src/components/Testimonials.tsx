
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "AI Workflow Architects transformed how our sales team works. We're now using AI tools that have cut our prospecting time in half and improved our conversion rates by 28%.",
    author: "Sarah Johnson",
    position: "VP of Sales",
    company: "TechVision Inc.",
    avatar: "S"
  },
  {
    quote: "Their AI workflow design process was eye-opening. They identified inefficiencies we didn't even realize we had and implemented solutions that are saving us over 30 hours per week.",
    author: "Michael Chen",
    position: "COO",
    company: "Innovate Manufacturing",
    avatar: "M"
  },
  {
    quote: "The training they provided was excellent. Our team went from skeptical about AI to enthusiastically adopting tools that have made their jobs easier and more productive.",
    author: "Rachel Patel",
    position: "HR Director",
    company: "Global Finance Group",
    avatar: "R"
  },
  {
    quote: "Working with AI Workflow Architects gave us a competitive edge. Their industry knowledge combined with AI expertise helped us implement solutions that were perfect for our specific needs.",
    author: "David Wilson",
    position: "CTO",
    company: "HealthTech Solutions",
    avatar: "D"
  },
  {
    quote: "Their team didn't just recommend AI tools—they redesigned our entire workflow to maximize the impact. The ROI has been incredible, over 400% in the first year alone.",
    author: "Alexandra Rodriguez",
    position: "Marketing Director",
    company: "Consumer Brands Inc.",
    avatar: "A"
  }
];

const colors = [
  "bg-ai-blue",
  "bg-ai-purple",
  "bg-ai-pink",
  "bg-ai-cyan",
  "bg-green-600"
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-700">
            Hear from the organizations that have transformed their workflows with our AI consulting services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="mb-6">
                <Quote size={48} className="text-ai-blue/20" />
              </div>
              <p className="text-xl md:text-2xl text-gray-800 italic mb-8">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full ${colors[activeIndex % colors.length]} text-white flex items-center justify-center font-bold text-lg mr-4`}>
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[activeIndex].author}</h4>
                  <p className="text-gray-600">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-ai-blue" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
