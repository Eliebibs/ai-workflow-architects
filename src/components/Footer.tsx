
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Linkedin, Twitter, Youtube } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Newsletter Subscription Successful",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">AI Workflow Architects</h3>
            <p className="text-gray-300">
              Transforming businesses through strategic AI workflow design and implementation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-ai-blue transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ai-blue transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ai-blue transition">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ai-blue transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white">AI Workflow Design</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">AI Tool Recommendations</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Employee Training</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Implementation Guides</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">ROI Measurement</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">AI Tool Database</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Webinars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">AI Safety Guidelines</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Get the latest AI workflow insights and tips delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="rounded-r-none text-gray-900"
                  required
                />
                <Button type="submit" className="rounded-l-none bg-ai-blue hover:bg-ai-purple">
                  <ArrowRight size={16} />
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AI Workflow Architects. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
