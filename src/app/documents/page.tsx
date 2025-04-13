
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, ArrowLeft, Download, ExternalLink, BookOpen, PresentationIcon, ClipboardList, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

 
const documentCategories = [
  {
    title: "Research Proposal",
    description: "Our initial project proposal documents outlining objectives, methodology, and expected outcomes.",
    icon: <FileText className="w-6 h-6" />,
    color: "#4CAF50",
    bgColor: "rgba(76, 175, 80, 0.1)",
    documents: [
      {
        title: "Proposal Reports",
        description: "Individual reports from all 4 team members",
        link: "https://drive.google.com/drive/folders/your-proposal-folder-id",
      }
    ]
  },
  {
    title: "Presentations",
    description: "Slides and materials from our project presentations throughout the research timeline.",
    icon: <PresentationIcon className="w-6 h-6" />,
    color: "#2196F3",
    bgColor: "rgba(33, 150, 243, 0.1)",
    documents: [
      {
        title: "Proposal Presentation",
        description: "Initial project pitch presentation",
        link: "https://docs.google.com/presentation/d/your-proposal-presentation-id",
      },
      {
        title: "Progress Presentation 1",
        description: "First milestone results and findings",
        link: "https://docs.google.com/presentation/d/your-progress1-presentation-id",
      },
      {
        title: "Progress Presentation 2",
        description: "Second milestone results and updates",
        link: "https://docs.google.com/presentation/d/your-progress2-presentation-id",
      }
    ]
  },
  {
    title: "Log Books",
    description: "Detailed tracking of research activities, experiments, and meeting minutes from all team members.",
    icon: <ClipboardList className="w-6 h-6" />,
    color: "#FF9800",
    bgColor: "rgba(255, 152, 0, 0.1)",
    documents: [
      {
        title: "Team Log Books",
        description: "Weekly logs from all 4 team members",
        link: "https://drive.google.com/drive/folders/your-logbooks-folder-id",
      }
    ]
  },
  {
    title: "Final Reports",
    description: "Comprehensive documentation of our complete research findings, methodology, results, and conclusions.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "#F44336",
    bgColor: "rgba(244, 67, 54, 0.1)",
    documents: [
      {
        title: "Final Reports",
        description: "Complete documentation of research findings",
        link: "https://drive.google.com/drive/folders/your-final-reports-folder-id",
      }
    ]
  },
  {
    title: "Research Paper",
    description: "Our published academic paper presenting the key findings and innovations of our BetelCare project.",
    icon: <FileText className="w-6 h-6" />,
    color: "#9C27B0",
    bgColor: "rgba(156, 39, 176, 0.1)",
    documents: [
      {
        title: "Published Paper",
        description: "Academic publication of our research",
        link: "https://docs.google.com/document/d/your-paper-id",
      }
    ]
  },
  {
    title: "Team Information",
    description: "Details about our research team members, roles, and contributions to the BetelCare project.",
    icon: <Users className="w-6 h-6" />,
    color: "#00BCD4",
    bgColor: "rgba(0, 188, 212, 0.1)",
    documents: [
      {
        title: "Team Profiles",
        description: "Information about all 4 team members",
        link: "https://docs.google.com/document/d/your-team-profiles-id",
      }
    ]
  }
];

export default function DocumentsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-b from-green-200/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-b from-blue-200/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm font-medium mb-6 group"
              style={{ color: 'var(--color-primary)' }}
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4" 
              style={{ color: 'var(--color-foreground)' }}
            >
              Research Documents
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Access all documentation related to our BetelCare research project, from initial proposals to final reports.
            </motion.p>
            
    
          </div>
        </div>
      </section>

      {/* Document Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 + (categoryIndex * 0.1) }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="p-3 rounded-xl" 
                      style={{ backgroundColor: category.bgColor, color: category.color }}
                    >
                      {category.icon}
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                      {category.documents.length} {category.documents.length === 1 ? 'document' : 'documents'}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--color-foreground)' }}>{category.title}</h2>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">{category.description}</p>
                  
                  <div className="space-y-4">
                    {category.documents.map((doc, docIndex) => (
                      <div key={docIndex} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                        <h3 className="font-medium mb-1" style={{ color: category.color }}>{doc.title}</h3>
                        <p className="text-gray-500 text-sm mb-3">{doc.description}</p>
                        <a 
                          href={doc.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium group"
                          style={{ color: category.color }}
                        >
                          View Documents
                          <ExternalLink className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download All Section */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/document-pattern.png" 
            alt="Pattern" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Download Complete Research Package</h2>
              <p className="text-gray-300 max-w-2xl">
                Get all our research documents in a single download, including proposals, presentations, reports, and published papers.
              </p>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(46, 125, 50, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/your-full-package-id/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-4 rounded-xl font-medium shadow-lg text-white"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Package (PDF, 24MB)
            </motion.a>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>How to Cite Our Research</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        If you&apos;re using our research in your academic work, please use the following citation format.
      </p>
    </div>
    
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
      <p className="font-mono text-sm text-gray-700 p-6 bg-white border border-gray-200 rounded-lg mb-6 leading-relaxed">
        Ranawaka, W.E.I., Dewasinghe, U.H., Fernando, B.K.M., Siriwardhana, E.A.L.S., Kasthuriarachchi, S., & Weerasinghe, L. (2025). BetelCare: Development of an AI-Powered Application for Sri Lankan Betel Farmers. <em>Journal of Agricultural Technology</em>. Department of Information Technology, Sri Lanka Institute of Information Technology, Malabe, Sri Lanka.
      </p>
      
      <div className="flex justify-end">
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              "Ranawaka, W.E.I., Dewasinghe, U.H., Fernando, B.K.M., Siriwardhana, E.A.L.S., Kasthuriarachchi, S., & Weerasinghe, L. (2025). BetelCare: Development of an AI-Powered Application for Sri Lankan Betel Farmers. Journal of Agricultural Technology. Department of Information Technology, Sri Lanka Institute of Information Technology, Malabe, Sri Lanka."
            );
            // You can replace this with a toast notification if available
            alert("Citation copied to clipboard!");
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
          style={{ color: 'var(--color-primary)', backgroundColor: 'rgba(76, 175, 80, 0.1)' }}
        >
          Copy Citation
        </button>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}