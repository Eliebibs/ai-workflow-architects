
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, BookOpen, Users, LineChart, FileSearch, Award } from "lucide-react";

const services = [
  {
    title: "AI Workflow Design",
    description: "We analyze your current workflows and redesign them with AI tools to maximize efficiency and output quality.",
    icon: PenTool,
    color: "text-ai-purple",
    bgColor: "bg-ai-purple/10",
  },
  {
    title: "AI Tool Recommendations",
    description: "Get personalized recommendations for AI tools that match your specific business needs and processes.",
    icon: FileSearch,
    color: "text-ai-blue",
    bgColor: "bg-ai-blue/10",
  },
  {
    title: "Employee Training",
    description: "We train your team on how to use AI tools effectively and safely, ensuring proper adoption across your organization.",
    icon: Users,
    color: "text-ai-cyan",
    bgColor: "bg-ai-cyan/10",
  },
  {
    title: "AI Implementation Guides",
    description: "Custom documentation that walks your team through implementation steps for new AI-enhanced workflows.",
    icon: BookOpen,
    color: "text-ai-pink",
    bgColor: "bg-ai-pink/10",
  },
  {
    title: "ROI Measurement",
    description: "Track and measure the impact of AI adoption on your business metrics with our custom analytics framework.",
    icon: LineChart,
    color: "text-green-600",
    bgColor: "bg-green-600/10",
  },
  {
    title: "Best Practices Consulting",
    description: "Ongoing consulting to ensure your organization adopts AI responsibly and effectively with the latest best practices.",
    icon: Award,
    color: "text-amber-600",
    bgColor: "bg-amber-600/10",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="gradient-text">AI Services</span>
          </h2>
          <p className="text-lg text-gray-700">
            We help companies adopt AI tools and processes that transform how they work, 
            making teams more productive and businesses more competitive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-card border shadow-sm">
              <CardHeader>
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`${service.color}`} size={24} />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
