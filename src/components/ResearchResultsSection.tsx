"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { BarChart3, LineChart, PieChart, TrendingUp, ArrowRight, Users } from "lucide-react";
import Link from "next/link";

export default function ResearchResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const results = [
    { 
      icon: <BarChart3 className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
      title: "Water Usage Reduction", 
      value: "23.7%", 
      description: "Less water consumed with optimal scheduling" 
    },
    { 
      icon: <LineChart className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
      title: "Fertilizer Efficiency", 
      value: "31.2%", 
      description: "Reduction in fertilizer wastage" 
    },
    { 
      icon: <PieChart className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
      title: "Crop Damage Prevention", 
      value: "76.4%", 
      description: "Reduction in weather-related damage" 
    },
    { 
      icon: <TrendingUp className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
      title: "Market Price Prediction", 
      value: "87.4%", 
      description: "Accuracy in price forecasting" 
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-green-50" />
        <svg className="absolute top-0 right-0 h-full w-48" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
          <polygon points="0,0 100,0 100,100" fill="var(--color-primary)" fillOpacity="0.05" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-base font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary)' }}>
              Research Impact
            </h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Proven Results Through Field Testing
            </h3>
            
            <p className="text-lg text-gray-600 mb-8">
              Our research demonstrates significant improvements in farming efficiency, resource utilization, 
              and crop yield across test sites in Kurunegala, Puttalam, and Anamaduwa regions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center mb-3">
                    {result.icon}
                    <h4 className="ml-2 font-medium text-gray-900">{result.title}</h4>
                  </div>
                  <p className="text-3xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>{result.value}</p>
                  <p className="text-gray-600 text-sm mt-1">{result.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10"
            >
              <Link 
                href="/documents" 
                className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
                style={{ color: 'var(--color-primary-dark)' }}
              >
                View the complete research documentation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/banner2.png"
                alt="BetelCare research results visualization"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-gray-100 max-w-xs"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                  <Users className="w-5 h-5" />
                </div>
                <p className="ml-3 font-medium">Farmer Feedback</p>
              </div>
              <p className="text-gray-600 text-sm">
                &quot;Younger farmers were more receptive to adopting the technology compared to older ones, but all appreciated the local language support.&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}