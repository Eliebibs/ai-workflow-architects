
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">AI Workflow Architects</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="font-medium hover:text-ai-blue transition">Services</a>
          <a href="#process" className="font-medium hover:text-ai-blue transition">Our Process</a>
          <a href="#case-studies" className="font-medium hover:text-ai-blue transition">Case Studies</a>
          <a href="#testimonials" className="font-medium hover:text-ai-blue transition">Testimonials</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-ai-blue hover:bg-ai-purple transition-colors">
            <a href="#contact">Schedule Consultation</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute left-0 right-0 p-4 z-50">
          <div className="flex flex-col space-y-4">
            <a
              href="#services"
              className="font-medium hover:text-ai-blue transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#process"
              className="font-medium hover:text-ai-blue transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Process
            </a>
            <a
              href="#case-studies"
              className="font-medium hover:text-ai-blue transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </a>
            <a
              href="#testimonials"
              className="font-medium hover:text-ai-blue transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button className="bg-ai-blue hover:bg-ai-purple transition-colors w-full">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
