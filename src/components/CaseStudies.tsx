
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Clock, BarChart3 } from "lucide-react";

const caseStudies = [
  {
    title: "Financial Services Workflow Transformation",
    industry: "Financial Services",
    timeReduction: "87%",
    description: "A leading financial services company reduced their loan processing time from 3 days to 4 hours by implementing our AI workflow recommendations.",
    results: [
      "Reduced document processing time by 87%",
      "Improved accuracy of data extraction to 99.2%",
      "Saved 240+ employee hours per month",
      "Increased customer satisfaction by 35%"
    ],
    bgColor: "bg-ai-blue/5",
    accentColor: "border-ai-blue"
  },
  {
    title: "Healthcare Provider Document Management",
    industry: "Healthcare",
    timeReduction: "72%",
    description: "A regional healthcare provider transformed their patient documentation system with AI tools, reducing administrative workload and improving data accuracy.",
    results: [
      "Reduced documentation time by 72%",
      "Decreased errors in patient records by 58%",
      "Allowed practitioners to see 4 more patients daily",
      "ROI of 320% within first six months"
    ],
    bgColor: "bg-ai-purple/5",
    accentColor: "border-ai-purple"
  },
  {
    title: "Legal Firm Contract Analysis Overhaul",
    industry: "Legal",
    timeReduction: "91%",
    description: "A mid-sized law firm implemented AI-powered contract analysis, dramatically reducing review time while increasing accuracy of issue identification.",
    results: [
      "Decreased contract review time by 91%",
      "Improved issue detection accuracy by 68%",
      "Increased contract throughput by 340%",
      "Enabled expansion into new practice areas"
    ],
    bgColor: "bg-ai-cyan/5",
    accentColor: "border-ai-cyan"
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-lg text-gray-700">
            See how we've helped organizations across different industries transform their workflows with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className={`${study.bgColor} border-l-4 ${study.accentColor} hover-card`}>
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <Building2 className="text-gray-500 mr-2" size={16} />
                    <span className="text-sm text-gray-600">{study.industry}</span>
                  </div>
                  <div className="flex items-center bg-white px-2 py-1 rounded shadow-sm">
                    <Clock className="text-green-600 mr-1" size={14} />
                    <span className="text-sm font-bold text-green-600">{study.timeReduction} Faster</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">{study.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <BarChart3 className="mr-2" size={16} />
                    Key Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-gray-700">
                        • {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-ai-blue hover:text-ai-purple hover:bg-ai-blue/5">
                  Read Full Case Study <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
