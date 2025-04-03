
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20 md:py-28">
      {/* Abstract Background Elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-ai-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-40 w-72 h-72 bg-ai-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block py-1 px-3 text-sm font-semibold bg-ai-blue/10 text-ai-blue rounded-full mb-4">
                AI Transformation Experts
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your <span className="gradient-text">Workflow</span> With AI
              </h1>
              <p className="mt-6 text-lg text-gray-700 md:pr-10">
                We help businesses adopt AI safely and effectively. Our team analyzes your workflows, 
                recommends the right AI tools, and trains your team to use them - maximizing productivity 
                and innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-ai-blue hover:bg-ai-purple text-white text-lg py-6 px-8">
                <a href="#contact" className="flex items-center">
                  Get Started <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button variant="outline" className="border-ai-blue text-ai-blue hover:bg-ai-blue/10 text-lg py-6 px-8">
                <a href="#case-studies">See Case Studies</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-ai-blue text-white flex items-center justify-center font-bold">T</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-ai-purple text-white flex items-center justify-center font-bold">M</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-ai-cyan text-white flex items-center justify-center font-bold">S</div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Trusted by 200+</span> companies across industries
              </p>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-lg">
            <div className="animate-float relative z-10 bg-white rounded-xl shadow-xl p-6">
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 mb-4">
                <h3 className="font-bold text-gray-800 mb-2">AI Workflow Transformation</h3>
                <div className="h-2 w-3/4 bg-ai-blue rounded-full"></div>
                <div className="mt-3 h-2 w-1/2 bg-ai-purple/70 rounded-full"></div>
                <div className="mt-3 h-2 w-5/6 bg-ai-cyan/70 rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                  <h4 className="font-medium text-sm text-gray-700">Before AI</h4>
                  <p className="text-xs text-red-500 mt-1">8 hours</p>
                </div>
                <div className="p-4 border border-blue-100 rounded-lg bg-blue-50">
                  <h4 className="font-medium text-sm text-gray-700">After AI</h4>
                  <p className="text-xs text-green-500 mt-1">45 minutes</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-ai-blue/10 rounded-lg flex items-center">
                <div className="w-8 h-8 rounded-full bg-ai-blue flex items-center justify-center text-white mr-3">
                  +
                </div>
                <p className="text-sm font-medium">94% time savings with AI workflows</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 -left-4 w-24 h-24 bg-ai-pink/30 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute bottom-10 -right-4 w-36 h-36 bg-ai-blue/20 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-10 bg-black/10 blur-xl rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
