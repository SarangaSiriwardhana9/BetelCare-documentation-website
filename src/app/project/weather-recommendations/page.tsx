// src/app/project/weather-recommendations/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Cloud, Check, ExternalLink, Droplets, Thermometer, Shield, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WeatherRecommendationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-green-50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Link 
                href="/" 
                className="inline-flex items-center text-sm font-medium mb-6 group"
                style={{ color: 'var(--color-primary)' }}
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-foreground)' }}>
                Weather Recommendations System
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Smart climate-based advisory system that helps betel farmers optimize watering, fertilizing, and protective measures based on current and forecasted weather conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with animated elements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/weather-recommendations.png" // Use your actual image path
                alt="Weather Recommendations System"
                width={1000}
                height={700}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-transparent" />
              
              {/* Animated weather icons */}
              <motion.div 
                className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-sm rounded-full"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  repeatType: "reverse" 
                }}
              >
                <Cloud className="h-8 w-8" style={{ color: 'var(--color-primary-light)' }} />
              </motion.div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm md:text-base">
                  The system provides location-specific advice using real-time weather data from multiple sources including OpenMeteo and the Sri Lanka Department of Meteorology.
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: 'var(--color-primary-light)' }}>
                  <Cloud className="w-4 h-4 mr-2" />
                  Climate-Adaptive Technology
                </div>
                
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                
                <div className="space-y-8 mb-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                      <Droplets className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Watering Recommendations</h3>
                      <p className="text-gray-600">
                        The system analyzes rainfall patterns and soil moisture to provide specific watering schedules (no watering, water once, or water twice) optimized for betel cultivation.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
                      <Thermometer className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Fertilizer Timing</h3>
                      <p className="text-gray-600">
                        Based on weather conditions, the system determines the most effective days for fertilizer application to maximize nutrient absorption and minimize runoff.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Protection Measures</h3>
                      <p className="text-gray-600">
                        During extreme weather events, the system suggests protective actions such as installing shade structures or improving drainage to safeguard crops.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">User-Friendly Alerts</h3>
                      <p className="text-gray-600">
                        The app sends timely notifications about significant weather changes, allowing farmers to take preventive actions before adverse conditions impact their crops.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Model Accuracy</h3>
                  <div className="space-y-3">
                    {[
                      { model: "Watering Model", accuracy: "99.6%" },
                      { model: "Fertilizer Model", accuracy: "97.7%" },
                      { model: "Protection Model", accuracy: "99.8%" }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.model}</span>
                        <span className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{stat.accuracy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Additional Details */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">System Architecture</h3>
                <p className="text-gray-600 mb-6">
                  Our weather recommendation system consists of five interconnected modules working together to provide actionable insights based on weather data.
                </p>
                
                <h4 className="font-medium mb-3" style={{ color: 'var(--color-primary-dark)' }}>Key Components</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Weather Display Module for intuitive data visualization",
                    "Alerts Module for critical weather event notifications",
                    "Data Collection Module for historical and real-time data",
                    "Machine Learning Sub-module with Random Forest models",
                    "Recommendation Generation Module for actionable advice"
                  ].map((component, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-600">{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Data Sources & Integration</h3>
                <p className="text-gray-600 mb-6">
                  The system integrates multiple data sources to provide comprehensive and accurate recommendations tailored to local conditions.
                </p>
                
                <div className="space-y-4">
                  {[
                    { source: "Weather APIs", details: "Real-time data from OpenMeteo" },
                    { source: "Historical Records", details: "Sri Lanka Department of Meteorology archives" },
                    { source: "Traditional Knowledge", details: "Insights from experienced local farmers" },
                    { source: "Field Observations", details: "On-site validation data collection" }
                  ].map((data, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{data.source}</p>
                      <p className="text-gray-600 text-sm">{data.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-2xl font-bold">Field Testing Results</h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: 'var(--color-primary-light)' }}>
                <Cloud className="w-4 h-4 mr-2" />
                Validated Across 3 Regions
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "Water Usage Reduction", value: "23.7%", icon: <Droplets className="h-6 w-6" /> },
                { metric: "Fertilizer Efficiency", value: "31.2%", icon: <Thermometer className="h-6 w-6" /> },
                { metric: "Weather Damage Prevention", value: "76.4%", icon: <Shield className="h-6 w-6" /> },
                { metric: "User Satisfaction", value: "92%", icon: <Smartphone className="h-6 w-6" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-full mb-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                    {stat.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-1" style={{ color: 'var(--color-foreground)' }}>{stat.metric}</h4>
                  <p className="text-2xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Research</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive documentation and research findings on the weather recommendations system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/documents"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              View Research Documentation
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              Contact Our Team
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}