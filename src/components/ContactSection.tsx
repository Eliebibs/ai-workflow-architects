
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employeeCount: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, employeeCount: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Consultation Request Received",
      description: "We'll contact you within 24 hours to schedule your free consultation.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      employeeCount: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Workflows?
          </h2>
          <p className="text-lg text-gray-700">
            Schedule a free consultation with our AI workflow experts to discover how we can help your team work smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-1 space-y-6">
            <Card className="border-0 shadow-md bg-ai-blue/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="mt-1 mr-3 text-ai-blue" size={18} />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <a href="mailto:hello@aiworkflowarchitects.com" className="text-gray-600 hover:text-ai-blue">
                        hello@aiworkflowarchitects.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mt-1 mr-3 text-ai-blue" size={18} />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <a href="tel:+1-555-123-4567" className="text-gray-600 hover:text-ai-blue">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="mt-1 mr-3 text-ai-blue" size={18} />
                    <div>
                      <p className="font-medium">Office</p>
                      <address className="text-gray-600 not-italic">
                        123 AI Boulevard<br />
                        San Francisco, CA 94105
                      </address>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md bg-gradient-ai text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Custom AI solutions for your specific workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Expert-led training for your entire team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ongoing support during implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Measurable ROI on your AI investment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Schedule a Free Consultation</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="employeeCount" className="text-sm font-medium">
                        Company Size
                      </label>
                      <Select
                        value={formData.employeeCount}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger id="employeeCount">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501+">501+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      How can we help?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current workflows and challenges..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-ai-blue hover:bg-ai-purple text-white">
                    <Send className="mr-2" size={16} />
                    Schedule Consultation
                  </Button>
                </form>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  We respect your privacy and will never share your information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
