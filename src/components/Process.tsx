
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Workflow Analysis",
    description: "We analyze your current workflows to identify opportunities for AI integration that will have the biggest impact.",
    benefits: [
      "Comprehensive analysis of existing processes",
      "Identification of bottlenecks and inefficiencies",
      "Prioritization of areas for transformation"
    ]
  },
  {
    number: "02",
    title: "AI Tool Selection",
    description: "We recommend the right AI tools for your specific needs, prioritizing tools that integrate well with your existing systems.",
    benefits: [
      "Curated recommendations from our AI tool database",
      "Compatibility assessment with your tech stack",
      "Cost-benefit analysis for each recommendation"
    ]
  },
  {
    number: "03",
    title: "Implementation Planning",
    description: "We create detailed implementation plans and documentation for your new AI-enhanced workflows.",
    benefits: [
      "Step-by-step implementation guides",
      "Custom workflow diagrams",
      "Integration specifications"
    ]
  },
  {
    number: "04",
    title: "Team Training",
    description: "We train your team on how to use the AI tools effectively and responsibly with hands-on guidance.",
    benefits: [
      "Interactive training sessions",
      "Hands-on practice with real scenarios",
      "Ongoing support during adoption phase"
    ]
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-gray-700">
            We follow a structured approach to help your organization adopt AI efficiently and effectively.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-ai-blue/20 hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="md:grid md:grid-cols-2 gap-8 items-center">
                <div className={`mb-8 md:mb-0 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative">
                    <div className="bg-white rounded-xl shadow-lg p-8 relative z-10 hover-card">
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-gray-200">{step.number}</span>
                        <h3 className="text-2xl font-bold mt-2">{step.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-6">{step.description}</p>
                      <ul className="space-y-3">
                        {step.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 rounded-full bg-green-50 p-1">
                              <Check className="h-4 w-4 text-green-600" />
                            </span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Decorative shape */}
                    <div className="absolute top-4 left-4 w-full h-full bg-ai-blue/10 rounded-xl -z-10"></div>
                  </div>
                </div>
                
                {/* Timeline node */}
                <div className="hidden md:flex items-center justify-center relative">
                  <div className="w-12 h-12 rounded-full bg-ai-blue text-white flex items-center justify-center font-bold z-10">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
