
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Check, ExternalLink, TrendingUp, LineChart, DollarSign, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MarketPredictionPage() {
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
                Market Prediction System
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Data-driven price forecasting that empowers betel farmers to maximize profits by identifying the optimal timing and markets for selling their produce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with animated overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/market-prediction.png"  
                alt="Market Prediction System"
                width={1000}
                height={700}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm md:text-base">
                  The market prediction system analyzes local market trends to help farmers maximize their economic returns.
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
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 bg-yellow-400"  >
                  <ShoppingCart className="w-4 h-4 mr-2 text-black" />
                  Price Forecasting Technology
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
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Price Prediction</h3>
                      <p className="text-gray-600">
                        The system predicts betel leaf prices based on leaf type, size, quality grade, and seasonal context, giving farmers vital information for decision-making.
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
                      <ShoppingCart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Market Recommendations</h3>
                      <p className="text-gray-600">
                        By analyzing data from major regional markets (Apaladeniya, Kuliyapitiya, and Naiwala), the system identifies the most profitable nearby markets for selling produce.
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
                      <LineChart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Seasonal Insights</h3>
                      <p className="text-gray-600">
                        The system accounts for seasonal factors and historical price trends to help farmers anticipate market fluctuations and plan harvests strategically.
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
                      <h3 className="text-xl font-medium mb-2">Multi-Platform Access</h3>
                      <p className="text-gray-600">
                        Farmers can access market predictions through both the Flutter mobile app and a WhatsApp chatbot, ensuring accessibility even in areas with limited connectivity.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Prediction Performance</h3>
                  <div className="space-y-3">
                    {[
                      { metric: "Overall price prediction accuracy", value: "87.4%" },
                      { metric: "F1-Score", value: "86.9%" },
                      { metric: "Profit improvement for farmers", value: "23.5%" }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.metric}</span>
                        <span className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{stat.value}</span>
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
                <h3 className="text-2xl font-bold mb-4">Technical Implementation</h3>
                <p className="text-gray-600 mb-6">
                  Our market prediction system uses XGBoost machine learning models deployed on a scalable backend to ensure reliable predictions even during peak usage periods.
                </p>
                
                <h4 className="font-medium mb-3" style={{ color: 'var(--color-primary-dark)' }}>Key Technologies</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "XGBoost machine learning model",
                    "Python Flask backend on Railway.app",
                    "Feature engineering for market variables",
                    "WhatsApp API integration for chatbot",
                    "Multi-language support (Sinhala, Tamil, English)"
                  ].map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-600">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Feature Engineering</h3>
                <p className="text-gray-600 mb-6">
                  The accuracy of our market predictions is enhanced through specialized feature engineering that accounts for complex market dynamics.
                </p>
                
                <div className="space-y-4">
                  {[
                    { feature: "Leaf Density Index", description: "Calculates quality-to-weight ratio for pricing" },
                    { feature: "Historical Price Deviation", description: "Measures market volatility for risk assessment" },
                    { feature: "Seasonal Adjustment Factors", description: "Accounts for predictable annual price cycles" },
                    { feature: "Market Competition Index", description: "Estimates buyer competition at different markets" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{item.feature}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-2xl font-bold">Economic Impact</h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)', color: 'var(--color-accent)' }}>
                <DollarSign className="w-4 h-4 mr-2" />
                Field-Validated Results
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "Average Income Increase", value: "21%", icon: <DollarSign className="h-6 w-6" /> },
                { metric: "Market Selection Accuracy", value: "92%", icon: <ShoppingCart className="h-6 w-6" /> },
                { metric: "Time Saved on Market Research", value: "8.5 hrs/week", icon: <TrendingUp className="h-6 w-6" /> },
                { metric: "Farmer Adoption Rate", value: "84%", icon: <Smartphone className="h-6 w-6" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-full mb-4" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
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
            Explore our comprehensive documentation and research findings on the market prediction system.
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