
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Building2, Clock, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    id: "financial-services",
    title: "Financial Services Workflow Transformation",
    industry: "Financial Services",
    timeReduction: "87%",
    description: "A leading financial services company reduced their loan processing time from 3 days to 4 hours by implementing our AI workflow recommendations.",
    challenge: "The company was struggling with manual document processing, which resulted in slow loan approval times, frequent errors, and customer dissatisfaction. Their legacy systems required staff to manually review and extract data from various documents, causing significant bottlenecks.",
    solution: "We analyzed their workflow and implemented an AI-powered document processing system that could automatically extract, validate, and classify information from loan applications and supporting documents. We integrated this with their existing CRM and created custom dashboards for monitoring.",
    approach: [
      "Conducted a comprehensive workflow analysis to identify bottlenecks",
      "Customized an OCR and NLP solution for document processing",
      "Developed automated validation rules to flag potential issues",
      "Created an integration layer with their existing systems",
      "Trained their team on using the new AI-powered workflow"
    ],
    results: [
      "Reduced document processing time by 87%",
      "Improved accuracy of data extraction to 99.2%",
      "Saved 240+ employee hours per month",
      "Increased customer satisfaction by 35%"
    ],
    testimonial: {
      quote: "The transformation of our loan processing workflow has been nothing short of revolutionary. What used to take days now takes hours, with fewer errors and happier customers.",
      author: "Sarah Johnson",
      title: "VP of Operations, Financial Services Inc."
    },
    bgColor: "bg-ai-blue/5",
    accentColor: "border-ai-blue"
  },
  {
    id: "healthcare",
    title: "Healthcare Provider Document Management",
    industry: "Healthcare",
    timeReduction: "72%",
    description: "A regional healthcare provider transformed their patient documentation system with AI tools, reducing administrative workload and improving data accuracy.",
    challenge: "The healthcare provider was facing mounting pressure from increasing documentation requirements. Medical practitioners were spending more time on paperwork than with patients, leading to burnout and reduced quality of care.",
    solution: "We designed an AI-assisted documentation workflow that included speech-to-text transcription of patient consultations, automated form filling, and integrated clinical decision support tools that worked within their existing EHR system.",
    approach: [
      "Mapped the current documentation workflow to identify pain points",
      "Selected appropriate AI tools for voice recognition and natural language processing",
      "Developed templates and structured data capture methods",
      "Created an integration with their Electronic Health Record system",
      "Provided comprehensive training for all clinical staff"
    ],
    results: [
      "Reduced documentation time by 72%",
      "Decreased errors in patient records by 58%",
      "Allowed practitioners to see 4 more patients daily",
      "ROI of 320% within first six months"
    ],
    testimonial: {
      quote: "Our practitioners now spend more time with patients and less time on paperwork. The AI workflow solution has transformed how we operate and improved both staff satisfaction and patient care.",
      author: "Dr. Michael Chen",
      title: "Chief Medical Officer, Regional Health Partners"
    },
    bgColor: "bg-ai-purple/5",
    accentColor: "border-ai-purple"
  },
  {
    id: "legal",
    title: "Legal Firm Contract Analysis Overhaul",
    industry: "Legal",
    timeReduction: "91%",
    description: "A mid-sized law firm implemented AI-powered contract analysis, dramatically reducing review time while increasing accuracy of issue identification.",
    challenge: "The law firm was struggling to efficiently review large volumes of contracts during due diligence processes. Junior associates were spending countless hours on routine contract review, increasing costs for clients and reducing the firm's competitiveness.",
    solution: "We implemented an AI-powered contract analysis system that could automatically review and flag important clauses, inconsistencies, and potential risks. The system was trained on the firm's previous work to ensure alignment with their specific practice areas.",
    approach: [
      "Analyzed their existing contract review methodology and pain points",
      "Customized an AI-powered document analysis platform for legal contracts",
      "Created specialized models for different contract types they commonly handle",
      "Developed an intuitive interface for lawyers to review AI-identified issues",
      "Trained legal staff on effective collaboration with AI tools"
    ],
    results: [
      "Decreased contract review time by 91%",
      "Improved issue detection accuracy by 68%",
      "Increased contract throughput by 340%",
      "Enabled expansion into new practice areas"
    ],
    testimonial: {
      quote: "The AI contract analysis system has transformed our practice. We can now take on larger deals and provide more value to clients at competitive rates, all while maintaining the highest quality of work.",
      author: "Patricia Rivera",
      title: "Managing Partner, Rivera & Associates"
    },
    bgColor: "bg-ai-cyan/5",
    accentColor: "border-ai-cyan"
  }
];

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find(study => study.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Case Study Not Found</h1>
          <p className="mt-4">The case study you're looking for doesn't exist.</p>
          <Button className="mt-8" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <Link to="/#case-studies" className="inline-flex items-center text-ai-blue hover:text-ai-purple mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to All Case Studies
        </Link>

        <div className={`border-l-4 ${caseStudy.accentColor} ${caseStudy.bgColor} p-6 rounded-r-lg mb-8`}>
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center">
              <Building2 className="text-gray-500 mr-2" size={16} />
              <span className="text-sm text-gray-600">{caseStudy.industry}</span>
            </div>
            <div className="flex items-center bg-white px-2 py-1 rounded shadow-sm">
              <Clock className="text-green-600 mr-1" size={14} />
              <span className="text-sm font-bold text-green-600">{caseStudy.timeReduction} Faster</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{caseStudy.title}</h1>
          <p className="text-lg text-gray-700">{caseStudy.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-700">{caseStudy.challenge}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Our Solution</h2>
            <p className="text-gray-700">{caseStudy.solution}</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Our Approach</h2>
          <ul className="space-y-3">
            {caseStudy.approach.map((step, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2 rounded-full bg-ai-blue/10 p-1 text-ai-blue font-bold">
                  {idx + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <BarChart3 className="mr-2" size={20} />
            Key Results
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {caseStudy.results.map((result, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">{result}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${caseStudy.bgColor} p-6 rounded-lg border ${caseStudy.accentColor} mb-12`}>
          <blockquote className="text-xl italic text-gray-700 mb-4">
            "{caseStudy.testimonial.quote}"
          </blockquote>
          <div className="flex items-center">
            <div className="ml-4">
              <p className="font-bold">{caseStudy.testimonial.author}</p>
              <p className="text-sm text-gray-600">{caseStudy.testimonial.title}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to transform your workflows?</h2>
          <Button size="lg" className="bg-ai-blue hover:bg-ai-purple transition-colors" asChild>
            <a href="/#contact">Schedule a Consultation</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
