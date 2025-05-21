This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
.repomixignore
eslint.config.mjs
next.config.ts
package.json
postcss.config.js
public/file.svg
public/globe.svg
public/next.svg
public/vercel.svg
public/window.svg
README.md
repomix.config.json
src/app/documents/page.tsx
src/app/globals.css
src/app/layout.tsx
src/app/page.tsx
src/app/project/disease-detection/page.tsx
src/app/project/harvest-prediction/page.tsx
src/app/project/market-prediction/page.tsx
src/app/project/weather-recommendations/page.tsx
src/app/tailwind.css
src/components/AboutSection.tsx
src/components/Banner.tsx
src/components/ContactSection.tsx
src/components/DocumentsSection.tsx
src/components/FeaturesSection.tsx
src/components/Footer.tsx
src/components/Header.tsx
src/components/ResearchResultsSection.tsx
src/components/TeamSection.tsx
src/lib/utils.ts
tsconfig.json
```

# Files

## File: .repomixignore
````
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/

ui/
components/ui
````

## File: repomix.config.json
````json
{
  "$schema": "https://repomix.com/schemas/latest/schema.json",
  "input": {
    "maxFileSize": 52428800
  },
  "output": {
    "filePath": "repomix-output.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "files": true,
    "removeComments": false,
    "removeEmptyLines": false,
    "compress": false,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "copyToClipboard": false,
    "git": {
      "sortByChanges": true,
      "sortByChangesMaxCommits": 100,
      "includeDiffs": false
    }
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: eslint.config.mjs
````
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
````

## File: postcss.config.js
````javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
````

## File: public/file.svg
````
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: public/globe.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: public/next.svg
````
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: public/vercel.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: public/window.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: src/app/tailwind.css
````css
@import 'tailwindcss';

@plugin 'tailwindcss-animate';

@theme {
  --color-primary: #2E7D32;
  --color-primary-light: #4CAF50;
  --color-primary-dark: #1B5E20;
  --color-accent: #FFD700;
  --color-background: #ffffff;
  --color-foreground: #171717;
}
````

## File: src/components/ContactSection.tsx
````typescript
// ContactSection.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // For now, we'll just simulate a successful submission
    setFormSubmitted(true);
  };

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
            Get In Touch
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Have questions about our research or interested in collaboration? 
            We&apos;d love to hear from you. Reach out to our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                      <MapPin className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600 mt-1">Srilanka Institute Of Information Technology <br />Malabe, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                      <Mail className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600 mt-1">betelcare@research.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                      <Phone className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600 mt-1">+94 77 334 6523</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h5 className="font-medium text-gray-900 mb-3">Research Areas</h5>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Computer Vision", "Mobile Development", "Agricultural Tech", "Data Science"].map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              {formSubmitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                    <CheckCircle className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-gray-900">Message Sent!</h3>
                  <p className="mt-2 text-gray-600">
                    Thank you for contacting us. We&apos;ll get back to you as soon as possible.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Send Message
                      <Send className="ml-2 -mr-1 h-5 w-5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
````

## File: src/components/Footer.tsx
````typescript
// Footer.tsx
"use client";

import Link from "next/link";
import { Leaf, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">Betel</span>
                <span style={{ color: 'var(--color-accent)' }}>Care</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              An AI-powered mobile application designed to help Sri Lankan betel farmers improve crop yield,
              manage diseases, predict market prices, and receive weather-based recommendations.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:betelcare@research.edu" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Research", href: "/research" },
                { name: "Documents", href: "/documents" },
                { name: "Team", href: "/team" },
                { name: "Contact", href: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Project Details */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Project Details</h3>
            <ul className="space-y-3">
              {[
                { name: "Disease Detection", href: "/project/disease-detection" },
                { name: "Harvest Prediction", href: "/project/harvest-prediction" },
                { name: "Market Prediction", href: "/project/market-prediction" },
                { name: "Weather Based Recommendations", href: "/project/weather-recommendations" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BetelCare Research Project. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 md:mt-0 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
````

## File: src/components/TeamSection.tsx
````typescript
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
````

## File: src/lib/utils.ts
````typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class values into a single string, with intelligent
 * handling of Tailwind CSS conflicts using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
````

## File: package.json
````json
{
  "name": "betel-research-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-dialog": "^1.1.7",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-progress": "^1.1.3",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-tabs": "^1.1.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.6.5",
    "lucide-react": "^0.487.0",
    "next": "15.3.0",
    "next-mdx-remote": "^5.0.0",
    "next-themes": "^0.4.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.5.0",
    "react-intersection-observer": "^9.16.0",
    "react-markdown": "^10.1.0",
    "remark-gfm": "^4.0.1",
    "sonner": "^2.0.3",
    "tailwind-merge": "^3.2.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@shadcn/ui": "^0.0.4",
    "@tailwindcss/postcss": "^4.1.3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.21",
    "eslint": "^9",
    "eslint-config-next": "15.3.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^4.1.3",
    "typescript": "^5"
  }
}
````

## File: README.md
````markdown
# BetelCare - Smart Farming Solution

A comprehensive web platform for the BetelCare research project, showcasing an AI-powered mobile application designed specifically for Sri Lankan betel farmers.

## Project Overview

**BetelCare** is a machine learning-powered mobile application developed to support betel farmers by offering real-time insights, predictive analytics, and interactive assistance. This repository contains the web platform built with **Next.js** that showcases the research, features, and documentation of the BetelCare project.

## Key Features

- **Harvest Prediction**: AI-powered yield forecasting for optimized planning  
- **Disease Detection**: Early identification of leaf issues with CNN technology  
- **Market Insights**: Data-driven price predictions for maximum profit  
- **Weather Recommendations**: Climate-based farming advice for better yields  

## Technology Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS  
- **UI Components**: Shadcn UI, Framer Motion, Lucide Icons  
- **Mobile App**: Flutter, TensorFlow Lite  
- **Backend**: Flask, Python  
- **Machine Learning**: TensorFlow, PyTorch, Scikit-learn  

## Research Team

**Students**:  
- W.E.I. Ranawaka  
- U.H. Dewasinghe  
- B.K.M. Fernando  
- E.A.L.S. Siriwardhana  

**Supervisors**:  
- Sanvitha Kasthuriarachchi  
- Lokesha Weerasinghe  

**Institution**:  
- Sri Lanka Institute of Information Technology  

## Getting Started

### Prerequisites

- Node.js 18.x or later  
- npm or yarn  

### Installation

Clone the repository  
```bash
git clone https://github.com/your-username/betelcare-web.git
cd betelcare-web
```

Install dependencies  
```bash
npm install
# or
yarn install
```

Run the development server  
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
betelcare-web/
│
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # Reusable UI components
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
│
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## Deployment

The project is deployed on **Vercel**. Any changes pushed to the `main` branch are automatically deployed.

## Research Paper

A comprehensive research paper detailing our findings, methodology, and results is available in the **Documents** section of the website.

## License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

## Acknowledgements

- Department of Information Technology, SLIIT  
- Sri Lankan betel farmers for their valuable feedback and participation  
- Sri Lanka Department of Meteorology for weather data
````

## File: src/app/documents/page.tsx
````typescript
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
                className="bg-white rounded-2xl  border border-black/10 overflow-hidden hover:shadow-sm transition-shadow duration-300"
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
````

## File: src/app/globals.css
````css
@import './tailwind.css';

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-sans, Arial, Helvetica, sans-serif);
}

/* Force light mode regardless of system preferences */
html {
  color-scheme: light;
}
````

## File: src/app/page.tsx
````typescript
// src/app/page.tsx
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ResearchResultsSection from "@/components/ResearchResultsSection";
import DocumentsSection from "@/components/DocumentsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="home">
        <Banner />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="results">
        <ResearchResultsSection />
      </div>
      <div id="documents">
        <DocumentsSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
````

## File: src/app/project/disease-detection/page.tsx
````typescript
// src/app/project/disease-detection/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf, Check, ExternalLink, AlertTriangle, Search, Microscope, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DiseaseDetectionPage() {
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
                Disease Detection System
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Advanced computer vision technology for early detection of diseases and pests in betel leaves, enabling timely intervention and reducing crop losses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with animated border */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 border-4 rounded-2xl border-primary-light/30 animate-pulse" />
              <Image
                src="/disease-detection.png"
                alt="Disease Detection System"
                width={1000}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm md:text-base">
                  The CNN model can detect various diseases including brown spots, bacterial leaf blight, and pest infestations.
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
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary-dark)' }}>
                  <Leaf className="w-4 h-4 mr-2" />
                  Convolutional Neural Networks
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
                      <Search className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Image Analysis</h3>
                      <p className="text-gray-600">
                        Farmers capture images of betel leaves using their smartphone camera. Our CNN model processes these images through multiple convolutional layers to extract features indicative of disease or pest presence.
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
                      <Microscope className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Disease Identification</h3>
                      <p className="text-gray-600">
                        The system accurately identifies common betel leaf conditions including brown spots, bacterial leaf blight, and pest infestations like fireflies and two-spotted spider mites.
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
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Treatment Recommendations</h3>
                      <p className="text-gray-600">
                        Upon detection, the system provides tailored treatment recommendations including appropriate pesticides, dosages, and application methods based on the severity of the issue.
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
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Outbreak Mapping</h3>
                      <p className="text-gray-600">
                        Geospatial tools using Google Maps SDK visualize disease outbreaks across farms, enabling community-level preventive measures against spreading infections.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Technical Performance</h3>
                  <div className="space-y-3">
                    {[
                      { metric: "Disease detection accuracy", value: "94.3%" },
                      { metric: "Processing time per image", value: "< 2 seconds" },
                      { metric: "Supported disease types", value: "12+" }
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
                <h3 className="text-2xl font-bold mb-4">Implementation Details</h3>
                <p className="text-gray-600 mb-6">
                  Our disease detection system is built on TensorFlow and deployed to mobile devices using TensorFlow Lite for efficient on-device inference, even in areas with limited connectivity.
                </p>
                
                <h4 className="font-medium mb-3" style={{ color: 'var(--color-primary-dark)' }}>Key Technologies</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Convolutional Neural Networks (CNN)",
                    "TensorFlow & TensorFlow Lite",
                    "Image preprocessing techniques",
                    "Google Maps SDK for geospatial visualization",
                    "Rule-based treatment recommendation system"
                  ].map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-600">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Research Impact</h3>
                <p className="text-gray-600 mb-6">
                  Our disease detection system has shown significant benefits for betel farmers in our test regions, with measurable improvements in early intervention and reduced crop losses.
                </p>
                
                <div className="space-y-4">
                  {[
                    { metric: "Reduction in disease-related crop loss", value: "68%" },
                    { metric: "Decrease in pesticide usage", value: "42%" },
                    { metric: "Earlier disease detection", value: "7-10 days" },
                    { metric: "Farmer adoption rate", value: "76%" }
                  ].map((impact, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">{impact.metric}</span>
                        <span className="text-lg font-bold" style={{ color: 'var(--color-primary-dark)' }}>{impact.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Research</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive documentation and research findings on the disease detection system.
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
````

## File: src/app/project/harvest-prediction/page.tsx
````typescript
// src/app/project/harvest-prediction/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, BarChart, Check, ExternalLink, Calendar, Tractor, Map, LineChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HarvestPredictionPage() {
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
                Harvest Prediction System
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                AI-powered yield forecasting technology that helps betel farmers plan their harvest schedule, optimize labor requirements, and maximize productivity.
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
                src="/harvest-prediction.png"
                alt="Harvest Prediction System"
                width={1000}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm md:text-base">
                  Advanced machine learning models predict optimal harvest times and yield for three betel leaf types: P-Type, KT-Type, and RKT-Type.
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
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary-dark)' }}>
                  <BarChart className="w-4 h-4 mr-2" />
                  Machine Learning Algorithms
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
                      <Map className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Field Area Calculation</h3>
                      <p className="text-gray-600">
                        Farmers can measure their field size using either map-based pointing or GPS-based walkaround. This crucial data is used as a primary input for yield predictions.
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
                      <BarChart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Yield Prediction</h3>
                      <p className="text-gray-600">
                        Our algorithms process multiple inputs including field area, planting month, soil type, weather data, and historical yields to generate accurate harvest predictions.
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
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Harvest Scheduling</h3>
                      <p className="text-gray-600">
                        The system recommends optimal harvesting dates based on leaf maturity and predicted weather conditions, helping farmers plan their activities effectively.
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
                      <Tractor className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Labor Optimization</h3>
                      <p className="text-gray-600">
                        Based on forecasted yield, the system estimates labor requirements, enabling farmers to allocate resources efficiently and reduce operational costs.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Prediction Accuracy</h3>
                  <div className="space-y-3">
                    {[
                      { leafType: "P-Type", accuracy: "94.95%" },
                      { leafType: "KT-Type", accuracy: "88.89%" },
                      { leafType: "RKT-Type", accuracy: "66.67%" }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.leafType} prediction accuracy</span>
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
                <h3 className="text-2xl font-bold mb-4">Machine Learning Methodology</h3>
                <p className="text-gray-600 mb-6">
                  Our harvest prediction system leverages multiple machine learning algorithms, with XGBoost emerging as the best-performing model due to its high accuracy and generalization capabilities.
                </p>
                
                <h4 className="font-medium mb-3" style={{ color: 'var(--color-primary-dark)' }}>Models Evaluated</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "XGBoost (primary model)",
                    "Random Forest",
                    "Gradient Boosting",
                    "Ensemble learning (Voting Regressor)",
                    "Feature engineering for enhanced predictions"
                  ].map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-600">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Data Sources</h3>
                <p className="text-gray-600 mb-6">
                  The system utilizes diverse data sources to generate highly accurate predictions across different betel leaf varieties and growing conditions.
                </p>
                
                <div className="space-y-4">
                  {[
                    { dataType: "Historical weather data", source: "Sri Lanka Meteorology Department" },
                    { dataType: "Soil classification", source: "Three main soil types in growing regions" },
                    { dataType: "Harvest records", source: "Farmer-provided historical data" },
                    { dataType: "Field measurements", source: "GPS and map-based calculations" }
                  ].map((data, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{data.dataType}</p>
                      <p className="text-gray-600 text-sm">{data.source}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-2xl font-bold">Performance Impact</h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary-dark)' }}>
                <LineChart className="w-4 h-4 mr-2" />
                Field-Tested Results
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "Labor Cost Reduction", value: "31%", icon: <Tractor className="h-6 w-6" /> },
                { metric: "Resource Planning Accuracy", value: "89%", icon: <Calendar className="h-6 w-6" /> },
                { metric: "Yield Improvement", value: "24%", icon: <BarChart className="h-6 w-6" /> },
                { metric: "Weather Adaptation Success", value: "78%", icon: <LineChart className="h-6 w-6" /> }
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
            Explore our comprehensive documentation and research findings on the harvest prediction system.
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
````

## File: src/app/project/market-prediction/page.tsx
````typescript
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
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
````

## File: src/app/project/weather-recommendations/page.tsx
````typescript
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
                src="/weather-recommendations.png"
                alt="Weather Recommendations System"
                width={1000}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
````

## File: src/components/AboutSection.tsx
````typescript
// AboutSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/banner3.png"
                alt="Betel leaf farming in Sri Lanka"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-3 gap-4">
                {[
                  { value: "94.95%", label: "P-Type Accuracy" },
                  { value: "88.89%", label: "KT-Type Accuracy" },
                  { value: "87.4%", label: "Market Prediction" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-white font-bold text-2xl">{stat.value}</p>
                    <p className="text-white/80 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative element */}
            <div 
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full z-10" 
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-sm font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary)' }}>
              About the Project
            </h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Sri Lankan Betel Farmers
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              BetelCare is an innovative Flutter application designed specifically for betel farmers in Sri Lanka. 
              We&apos;re bridging the gap between traditional farming techniques and modern data-driven agriculture.
            </p>
            
            <div className="mt-8 space-y-4">
              {[
                "Developed for the Puttalam, Anamaduwa, and Kurunegala regions",
                "Fully available in Sinhala language for easy understanding",
                "Combines AI technology with traditional farming knowledge",
                "Increases productivity and reduces resource wastage"
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mt-1 mr-3" style={{ color: 'var(--color-primary)' }} />
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Link 
                href="/research" 
                className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
                style={{ color: 'var(--color-primary-dark)' }}
              >
                Learn more about our research
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
````

## File: src/components/Banner.tsx
````typescript
// Banner.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, BarChart, Cloud, ShoppingCart } from "lucide-react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { 
      title: "Harvest Prediction", 
      description: "AI-powered yield forecasting for optimized planning", 
      icon: <BarChart className="w-6 h-6" />,
      delay: 0.6
    },
    { 
      title: "Disease Detection", 
      description: "Early identification of leaf issues with CNN technology", 
      icon: <Leaf className="w-6 h-6" />,
      delay: 0.7
    },
    { 
      title: "Market Insights", 
      description: "Data-driven price predictions for maximum profit", 
      icon: <ShoppingCart className="w-6 h-6" />,
      delay: 0.8
    },
    { 
      title: "Weather Based Recommendations", 
      description: "Climate-based farming advice for better yields", 
      icon: <Cloud className="w-6 h-6" />,
      delay: 0.9
    }
  ];

  return (
    <div ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner1.png"
          alt="BetelCare Banner"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover brightness-[0.6]"
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        
        {/* Overlay with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
        <div className="absolute inset-0 opacity-20 z-5" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
             }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen py-20 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="pt-16 md:pt-20 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                x: isVisible ? 0 : -50 
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 md:mb-6 rounded-full text-xs md:text-sm font-medium text-white border border-white/20 backdrop-blur-sm" 
                   style={{ backgroundColor: 'rgba(46, 125, 50, 0.3)' }}>
                <span className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-white">
                  <Leaf className="w-2 h-2 md:w-3 md:h-3" style={{ color: 'var(--color-primary)' }} />
                </span>
                Research Project 2025
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 tracking-tight">
                <span className="block">Betel<span style={{ color: 'var(--color-accent)' }}>Care</span></span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 md:mt-2 font-normal text-white/80">Smart Farming Solution</span>
              </h1>
              
              <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl">
                An AI-powered application designed specifically for Sri Lankan betel farmers, combining advanced machine learning with traditional farming knowledge.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(46, 125, 50, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="/research"
                  className="px-4 md:px-6 py-2.5 md:py-3.5 text-sm md:text-base text-white font-medium rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  Explore Research
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  whileTap={{ scale: 0.95 }}
                  href="/documents"
                  className="px-4 md:px-6 py-2.5 md:py-3.5 text-sm md:text-base text-white backdrop-blur-sm border border-white/30 font-medium rounded-lg shadow-lg transition-all flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  View Documents
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Feature cards with hover effect - desktop */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : 30 
                }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)",
                  backgroundColor: 'rgba(255, 255, 255, 0.15)'
                }}
                className="backdrop-blur-sm border border-white/20 p-6 rounded-xl transition-all"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-200 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile feature grid - optimized for smaller screens */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:hidden mt-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : 20 
                }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="backdrop-blur-sm border border-white/20 p-3 sm:p-4 rounded-lg"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg mb-1.5 sm:mb-2 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <div className="w-4 h-4 sm:w-5 sm:h-5">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on smaller screens where space is limited */}
      <motion.div 
        className="hidden sm:block absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/70 text-xs md:text-sm font-medium">Scroll to explore</p>
          <div className="w-6 h-10 md:w-8 md:h-12 rounded-full border-2 border-white/50 flex justify-center">
            <motion.div 
              className="w-1 h-2 md:h-3 bg-white rounded-full mt-2"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                y: [0, 4, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
````

## File: src/components/DocumentsSection.tsx
````typescript
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
````

## File: src/components/FeaturesSection.tsx
````typescript
// FeaturesSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, BarChart, Cloud, ShoppingCart, Users, Smartphone } from "lucide-react";

const features = [
  {
    name: "Disease Detection",
    description: "Utilizes Convolutional Neural Networks to identify diseases and pests affecting betel leaves with high accuracy.",
    icon: <Leaf className="h-6 w-6 text-white" />,
    color: "var(--color-primary)"
  },
  {
    name: "Harvest Prediction",
    description: "Predicts optimal harvest times and yield quantities for three betel leaf types using advanced machine learning algorithms.",
    icon: <BarChart className="h-6 w-6 text-white" />,
    color: "var(--color-primary-dark)"
  },
  {
    name: "Market Prediction",
    description: "Analyzes market trends to help farmers decide the best time to sell their harvested betel leaves for maximum profit.",
    icon: <ShoppingCart className="h-6 w-6 text-white" />,
    color: "var(--color-accent)"
  },
  {
    name: "Weather Recommendations",
    description: "Provides location-specific advice on watering, fertilizing, and protection measures based on real-time weather data.",
    icon: <Cloud className="h-6 w-6 text-white" />,
    color: "var(--color-primary-light)"
  },
  {
    name: "Sinhala Language",
    description: "Built entirely in Sinhala language to ensure easy understanding and accessibility for local betel farmers.",
    icon: <Users className="h-6 w-6 text-white" />,
    color: "var(--color-primary)"
  },
  {
    name: "Mobile Accessibility",
    description: "Built using Flutter for both Android and iOS, with support for low-connectivity areas through WhatsApp integration.",
    icon: <Smartphone className="h-6 w-6 text-white" />,
    color: "var(--color-primary-dark)"
  }
];

export default function FeaturesSection() {
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
            Key Features
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Four Integrated AI-Powered Systems
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Our comprehensive solution addresses the most critical challenges faced by betel farmers through 
            innovative technology and data-driven approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl   p-8 border border-gray-100 hover:shadow-sm transition-all"
            >
              <div 
                className="w-12 h-12 rounded-lg mb-5 flex items-center justify-center"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
````

## File: src/components/Header.tsx
````typescript
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown, Leaf, BarChart, Cloud, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Features", href: "/#features" },
  { name: "Results", href: "/#results" },
  { 
    name: "Project Details", 
    href: "#",
    icon: <Leaf className="w-4 h-4" />,
    submenu: [
      { name: "Disease Detection", href: "/project/disease-detection", icon: <Leaf className="w-4 h-4" /> },
      { name: "Harvest Prediction", href: "/project/harvest-prediction", icon: <BarChart className="w-4 h-4" /> },
      { name: "Market Prediction", href: "/project/market-prediction", icon: <ShoppingCart className="w-4 h-4" /> },
      { name: "Weather Based Recommendations", href: "/project/weather-recommendations", icon: <Cloud className="w-4 h-4" /> }
    ]
  },
  { name: "Documents", href: "/#documents" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      
      // Close mobile menu if open
      setSheetOpen(false);
      
      // If we're not on the home page, navigate to home page first
      if (!isHomePage) {
        window.location.href = href;
        return;
      }
      
      // If we're already on the home page, just scroll to the element
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
          : isHomePage ? "bg-transparent py-6" : "bg-white/95 backdrop-blur-md shadow-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link 
              href="/" 
              onClick={(e) => scrollToSection(e, '/')}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                <span style={{ color: 'var(--color-primary-dark)' }}>Betel</span>
                <span style={{ color: 'var(--color-accent)' }}>Care</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="relative flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.submenu ? (
                  <div 
                    className="group flex items-center"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className="flex items-center hover:text-primary-light transition-colors font-medium"
                      style={{ color: scrolled || !isHomePage ? 'var(--color-foreground)' : 'white' }}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-1 w-60 rounded-xl overflow-hidden shadow-xl bg-white ring-1 ring-black/5"
                        >
                          <div className="py-1">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 border-l-2 border-transparent hover:border-primary transition-all"
                                style={{ color: 'var(--color-foreground)' }}
                              >
                                <div className="p-1 rounded-md" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                                  {subitem.icon}
                                </div>
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="relative hover:text-primary-light transition-colors font-medium group"
                    style={{ color: scrolled || !isHomePage ? 'var(--color-foreground)' : 'white' }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-light transition-all group-hover:w-full"></span>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button with Sheet */}
          <div className="md:hidden flex items-center">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                  style={{ color: scrolled || !isHomePage ? 'var(--color-primary-dark)' : 'white' }}
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] max-w-md p-0">
                {/* Adding the required SheetTitle for accessibility */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold tracking-tight">
                        <span style={{ color: 'var(--color-primary-dark)' }}>Betel</span>
                        <span style={{ color: 'var(--color-accent)' }}>Care</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-auto py-4 px-2">
                    <nav className="space-y-1">
                      {navItems.map((item) => (
                        <div key={item.name} className="py-1">
                          {item.submenu ? (
                            <Accordion type="single" collapsible className="border-none">
                              <AccordionItem value={item.name} className="border-none">
                                <AccordionTrigger className="py-3 px-4 hover:bg-gray-50 rounded-lg no-underline">
                                  <span className="text-base font-medium" style={{ color: 'var(--color-foreground)' }}>{item.name}</span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-1 pb-3 px-2">
                                  <div className="flex flex-col space-y-1 ml-2">
                                    {item.submenu.map((subitem) => (
                                      <Link
                                        key={subitem.name}
                                        href={subitem.href}
                                        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 rounded-lg border-l-2 border-transparent hover:border-primary-light transition-all"
                                        style={{ color: 'var(--color-foreground)' }}
                                        onClick={() => setSheetOpen(false)}
                                      >
                                        <div className="p-1 rounded-md" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                                          {subitem.icon}
                                        </div>
                                        {subitem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={(e) => scrollToSection(e, item.href)}
                              className="flex items-center gap-3 px-4 py-3 text-base font-medium hover:text-primary-light hover:bg-gray-50 rounded-lg transition-colors"
                              style={{ color: 'var(--color-foreground)' }}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                  
                  <div className="p-6 border-t mt-auto">
                    <Link
                      href="/#contact"
                      onClick={(e) => scrollToSection(e, '/#contact')}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium text-white"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
````

## File: src/components/ResearchResultsSection.tsx
````typescript
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
````

## File: next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true  
  }
};

export default nextConfig;
````

## File: src/app/layout.tsx
````typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BetelCare Research",
  description: "AI-Powered App for Sri Lankan Betel Farmers",
  icons: [
    { rel: "icon", url: "/leaf.png" },
    { rel: "shortcut icon", url: "/leaf.png" },
    { rel: "apple-touch-icon", url: "/leaf.png" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* This is a fallback in case the metadata approach doesn't work */}
        <link rel="icon" href="/leaf.png" />
        <link rel="shortcut icon" href="/leaf.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
````
