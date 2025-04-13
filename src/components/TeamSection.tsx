// TeamSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

 
const team = [
  {
    name: "Eshan Imesh",
    role: " Associate Software Engineer",
    image: "/member4.jpg",  
    bio: "Software engineering undergraduate at SLIIT",
    github: "https://github.com/ImeshR",
    linkedin: "https://linkedin.com/in/username1",
    email: "mailto:member1@example.com"
  },
  {
    name: "Saranga Siriwardhana",
    role: "junior full stack developer",
    image: "/member1.jpeg",
    bio: " Software engineering undergraduate at SLIIT",
    github: "https://github.com/SarangaSiriwardhana9",
    linkedin: "https://linkedin.com/in/username2",
    email: "lasindusaranga99@gmail.com"
  },
  {
    name: "Umesh Dewasinghe",
    role: "Trainee AI/ML Engineer",
    image: "/member3.jpg",
    bio: "Software engineering undergraduate at SLIIT",
    github: "https://github.com/username3",
    linkedin: "https://linkedin.com/in/username3",
    email: "mailto:member3@example.com"
  },
  {
    name: "Kavindi Fernando",
    role: "Trainee Business Analyst",
    image: "/member2.jpeg",
    bio: " Software engineering undergraduate at SLIIT",
    github: "https://github.com/username4",
    linkedin: "https://linkedin.com/in/username4",
    email: "mailto:member4@example.com"
  }
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary)' }}>
            Our Team
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the Researchers
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            A dedicated group of four researchers combining expertise in machine learning, 
            mobile development, data science, and agricultural knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all text-center"
            >
              <div className="relative mx-auto w-32 h-32 mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
              <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-primary)' }}>{member.role}</p>
              <p className="text-gray-600 text-sm mb-5">{member.bio}</p>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Github className="h-5 w-5 text-gray-600" />
                </a>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-gray-600" />
                </a>
                <a 
                  href={member.email}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Mail className="h-5 w-5 text-gray-600" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}