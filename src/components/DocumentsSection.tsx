// DocumentsSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Download, File, FileSpreadsheet, Book, FileCode } from "lucide-react";
import Link from "next/link";

const documents = [
  {
    title: "Project Proposal",
    description: "Initial research project proposal including problem statement and objectives.",
    icon: <FileText className="h-10 w-10" />,
    link: "/documents/project-proposal.pdf",
    color: "var(--color-primary-light)"
  },
  {
    title: "Progress Presentation 1",
    description: "First milestone presentation covering initial implementation and findings.",
    icon: <File className="h-10 w-10" />,
    link: "/documents/progress-presentation-1.pdf",
    color: "var(--color-primary-dark)" 
  },
  {
    title: "Progress Presentation 2",
    description: "Second milestone presentation with updated results and adjustments.",
    icon: <File className="h-10 w-10" />,
    link: "/documents/progress-presentation-2.pdf",
    color: "var(--color-primary-dark)"
  },
  {
    title: "Research Paper",
    description: "Academic paper detailing the methodology, experiments, and outcomes.",
    icon: <Book className="h-10 w-10" />,
    link: "/documents/research-paper.pdf",
    color: "var(--color-accent)"
  },
  {
    title: "Final Reports",
    description: "Comprehensive documentation of the entire research project.",
    icon: <FileSpreadsheet className="h-10 w-10" />,
    link: "/documents/final-reports.pdf",
    color: "var(--color-primary)"
  },
  {
    title: "Log Books",
    description: "Detailed records of research activities and experiments.",
    icon: <FileCode className="h-10 w-10" />,
    link: "/documents/log-books.pdf",
    color: "var(--color-primary-light)"
  }
];

export default function DocumentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary)' }}>
            Research Documentation
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Project Documents
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Access our comprehensive collection of research documents, presentations, and reports 
            that detail the development and findings of the BetelCare project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl   p-8  transition-all relative overflow-hidden group"
            >
              {/* Decorative corner */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 rotate-45 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300"
                style={{ backgroundColor: doc.color, opacity: 0.1 }}
              />
              
              <div className="relative">
                <div className="mb-5">
                  <div style={{ color: doc.color }}>{doc.icon}</div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{doc.title}</h4>
                <p className="text-gray-600 mb-6">{doc.description}</p>
                
                <Link 
                  href={doc.link} 
                  className="inline-flex items-center gap-2 font-medium text-sm hover:gap-3 transition-all"
                  style={{ color: doc.color }}
                >
                  Download document
                  <Download className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/documents" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-lg text-white transition-transform hover:scale-105"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            View All Documents
            <FileText className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}