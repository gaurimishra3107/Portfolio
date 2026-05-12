import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const technicalSkills = [
    { category: "Languages", items: "Java, Python, JavaScript" },
    { category: "Web Dev", items: "React.js, Node.js, Express.js, MongoDB, SQL" },
    { category: "AI/ML", items: "Machine Learning, Deep Learning, PyTorch" },
    { category: "Tools", items: "Git, GitHub, REST APIs, Razorpay, Socket.io" }
  ];

  // Animation Variants for Scroll Transition
  const fadeInVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111] font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="p-8 flex justify-between items-center max-w-6xl mx-auto uppercase tracking-tighter text-sm font-bold">
        <span>Gauri Mishra</span>
        <div className="space-x-8 flex items-center">
          <a href="https://github.com/gaurimishra3107" target="_blank" className="hover:line-through">GitHub</a>
          <a href="https://leetcode.com/u/mishra_gaurii/" target="_blank" className="text-orange-500 hover:line-through">LeetCode</a>
          <a href="mailto:gaurimishra3107@gmail.com" className="border-b border-black">Contact</a>
        </div>
      </nav>

      {/* Hero Section with Photo */}
      <header className="px-8 py-20 max-w-6xl mx-auto border-b border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-none mb-6">
            Software <br /> <span className="text-gray-400 italic font-light">Engineer.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-md leading-relaxed">
            Building full-stack MERN applications and AI/ML models. Final year student at Galgotias University.
          </p>
        </motion.div>
        
        {/* Profile Image Added Here */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          className="w-64 h-64 md:w-80 md:h-80 grayscale hover:grayscale-0 transition-all duration-500 rounded-full overflow-hidden border-4 border-black"
        >
          <img src="/My_Image.jpg" alt="Gauri Mishra" className="w-full h-full object-cover" />
        </motion.div>
      </header>

      {/* Skills Section with Slide-in Transition */}
      <section className="px-8 py-32 max-w-6xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-16 underline underline-offset-8">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {technicalSkills.map((skill, i) => (
            <motion.div 
              key={i} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.5 }} 
              variants={fadeInVariant}
              className="border-l-2 border-black pl-6"
            >
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">{skill.category}</h3>
              <p className="text-3xl md:text-4xl font-medium tracking-tight">{skill.items}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects with Screenshot */}
      <section className="px-8 py-32 max-w-6xl mx-auto bg-[#fafafa]">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-16">Selected Work</h2>
        <div className="space-y-40">
          
          {/* Homezy with Interface Screenshot */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1">
              <span className="text-gray-400 text-sm">01.</span>
              <h3 className="text-5xl font-bold tracking-tighter mt-4 italic">Homezy</h3>
              <p className="text-gray-500 mt-4 text-lg max-w-md italic">MERN Stack Property Rental Platform with secure listings and bookings.</p>
            </div>
            <div className="flex-1 shadow-2xl rounded-lg overflow-hidden border border-gray-200">
              <img src="/image_eeae35.jpg" alt="Homezy Interface" className="w-full h-auto" />
            </div>
          </motion.div>

          {/* FemCare (In Progress) */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}
            className="border-t pt-20"
          >
            <span className="text-gray-400 text-sm">02.</span>
            <div className="flex items-center gap-4 mt-4">
              <h3 className="text-5xl font-bold tracking-tighter">FemCare</h3>
              <span className="px-3 py-1 bg-black text-white text-xs uppercase tracking-widest rounded-full mt-2">In Progress</span>
            </div>
            <p className="text-gray-500 mt-6 text-lg max-w-xl">
              Campus Menstrual Care Delivery System. Integrating Razorpay, Socket.io, and Machine Learning for demand forecasting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-8 py-32 bg-[#0a0a0a] text-white overflow-hidden">
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12"
        >
          <div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">540+</h2>
            <p className="text-gray-400 uppercase tracking-widest text-sm">DSA Problems Solved</p>
          </div>
          <div className="h-20 w-[1px] bg-gray-800 hidden md:block"></div>
          <div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-orange-500">9+</h2>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Badges on LeetCode</p>
          </div>
        </motion.div>
      </section>

      <footer className="p-8 text-center text-gray-400 text-xs uppercase tracking-widest mt-20">
        © 2026 Gauri Mishra — Built with React & Motion
      </footer>
    </div>
  );
};

export default Portfolio;
