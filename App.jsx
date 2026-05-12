import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const technicalSkills = [
    { category: "Languages", items: "Java, Python, JavaScript" },
    { category: "Web Dev", items: "React.js, Node.js, Express.js, MongoDB, SQL" },
    { category: "AI/ML", items: "Machine Learning, Deep Learning, PyTorch" },
    { category: "Tools", items: "Git, GitHub, REST APIs, Razorpay, Socket.io" }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* Navbar - Name size increased & Underline fix */}
      <nav className="p-8 flex justify-between items-center max-w-6xl mx-auto uppercase tracking-tighter font-bold">
        <span className="text-2xl">Gauri Mishra</span> 
        <div className="space-x-8 flex items-center text-sm">
          <a href="https://github.com/gaurimishra3107" target="_blank" className="hover:underline decoration-2 underline-offset-8 transition-all">GitHub</a>
          <a href="https://leetcode.com/u/mishra_gaurii/" target="_blank" className="text-orange-500 hover:underline decoration-2 underline-offset-8 transition-all">LeetCode</a>
          <a href="mailto:gaurimishra3107@gmail.com" className="border-b-2 border-black pb-1 hover:text-gray-600 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section - Using My_Image.jpg */}
      <header className="px-8 py-20 max-w-6xl mx-auto border-b border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-none mb-6">
            Software <br /> <span className="text-gray-400 italic font-light">Engineer.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-md leading-relaxed">
            Building full-stack MERN applications and AI/ML models at Galgotias University.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="w-64 h-64 md:w-80 md:h-80 grayscale hover:grayscale-0 transition-all duration-500 rounded-full overflow-hidden border-4 border-black shadow-xl"
        >
          <img src="/My_Image.jpg" alt="Gauri Mishra" className="w-full h-full object-cover" />
        </motion.div>
      </header>

      {/* Skills Section */}
      <section className="px-8 py-32 max-w-6xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-16 underline underline-offset-8">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {technicalSkills.map((skill, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="border-l-2 border-black pl-6 hover:bg-gray-50 transition-colors py-4"
            >
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">{skill.category}</h3>
              <p className="text-3xl md:text-4xl font-medium tracking-tight">{skill.items}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section - Using homezy_image.png */}
      <section className="px-8 py-32 max-w-6xl mx-auto bg-[#fafafa]">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-16">Selected Work</h2>
        <div className="space-y-40">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1">
              <span className="text-gray-400 text-sm font-mono">01.</span>
              <h3 className="text-5xl font-bold tracking-tighter mt-4 italic">Homezy</h3>
              <p className="text-gray-500 mt-4 text-lg max-w-md italic">Full-stack property rental platform built with the MERN stack.</p>
            </div>
            <div className="flex-1 shadow-2xl rounded-lg overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-500">
              <img src="/homezy_image.png" alt="Homezy Project" className="w-full h-auto" />
            </div>
          </motion.div>

          {/* FemCare Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="border-t pt-20"
          >
            <span className="text-gray-400 text-sm font-mono">02.</span>
            <div className="flex items-center gap-4 mt-4">
              <h3 className="text-5xl font-bold tracking-tighter">FemCare</h3>
              <span className="px-3 py-1 bg-black text-white text-[10px] uppercase tracking-widest rounded-full animate-pulse">In Progress</span>
            </div>
            <p className="text-gray-500 mt-6 text-lg max-w-xl">
              Real-time campus delivery system for menstrual hygiene products using Socket.io and Razorpay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coding Stats Section - Using codolio_image.png */}
      <section className="px-8 py-32 bg-[#0a0a0a] text-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-12">
            <div>
              <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none">561</h2>
              <p className="text-orange-500 uppercase tracking-widest text-sm font-bold mt-2">Total Questions Solved</p>
            </div>
            <div className="flex gap-12">
              <div>
                <h4 className="text-4xl font-bold">150</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest">Active Days</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-orange-400">9</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest">Consistency Badges</p>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            className="flex-1 rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_50px_rgba(255,165,0,0.1)]"
          >
            <img src="/codolio_image.png" alt="Coding Progress" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
        </div>
      </section>

      <footer className="p-12 text-center text-gray-400 text-[10px] uppercase tracking-[0.4em]">
        © 2026 Gauri Mishra — Built for Impact
      </footer>
    </div>
  );
};

export default Portfolio;
