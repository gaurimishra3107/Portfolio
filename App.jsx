import React from 'react';

const Portfolio = () => {
  const technicalSkills = [
    { category: "Languages", items: "Java, Python, JavaScript" },
    { category: "Web Dev", items: "React.js, Node.js, Express.js, MongoDB, SQL" },
    { category: "AI/ML", items: "Machine Learning, Deep Learning, PyTorch" },
    { category: "Tools", items: "Git, GitHub, REST APIs, Razorpay, Socket.io" }
  ];

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111] font-sans selection:bg-black selection:text-white">

      <nav className="p-8 flex justify-between items-center max-w-6xl mx-auto uppercase tracking-tighter text-sm font-bold">
        <span>Gauri Mishra</span>
        <div className="space-x-8">
          <a href="https://github.com/gaurimishra3107" target="_blank">GitHub</a>
          <a href="mailto:gaurimishra3107@gmail.com">Contact</a>
        </div>
      </nav>

      <header className="px-8 py-24 max-w-6xl mx-auto border-b border-gray-100">
        <h1 className="text-7xl md:text-9xl font-medium tracking-tighter leading-none mb-12">
          Software <br /> Engineer.
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <p className="text-xl text-gray-500 max-w-md leading-relaxed">
            Specializing in Full-Stack development and AI/ML. Currently building 
            efficient solutions at Galgotias University while mastering DSA.
          </p>
          <div className="text-right">
            <span className="text-4xl font-light italic text-gray-400">CGPA 8.8</span>
          </div>
        </div>
      </header>

      <section className="px-8 py-32 max-w-6xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-16">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {technicalSkills.map((skill, i) => (
            <div key={i} className="border-l border-black pl-6 py-2">
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">{skill.category}</h3>
              <p className="text-3xl md:text-4xl font-medium tracking-tight">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-32 bg-[#0a0a0a] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-10 md:mb-0">
            <h2 className="text-6xl font-bold tracking-tighter">540+ Problems</h2>
            <p className="text-gray-400 mt-2 uppercase tracking-widest text-sm">Solved on LeetCode & GFG</p>
          </div>
          <div className="text-center md:text-right">
            <h2 className="text-6xl font-bold tracking-tighter text-blue-500">9+ Badges</h2>
            <p className="text-gray-400 mt-2 uppercase tracking-widest text-sm">Consistency & Achievements</p>
          </div>
        </div>
      </section>

      <section className="px-8 py-32 max-w-6xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-16">Featured Projects</h2>
        <div className="space-y-32">
          <div>
            <span className="text-gray-400 text-sm">01.</span>
            <h3 className="text-5xl font-bold tracking-tighter mt-4">FemCare</h3>
            <p className="text-gray-500 mt-4 text-lg max-w-xl">A real-time campus delivery system with Razorpay and ML-based demand prediction.</p>
          </div>
          <div>
            <span className="text-gray-400 text-sm">02.</span>
            <h3 className="text-5xl font-bold tracking-tighter mt-4 italic">Homezy</h3>
            <p className="text-gray-500 mt-4 text-lg max-w-xl">Full-stack property rental platform using the MERN stack.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 text-center text-gray-400 text-xs uppercase tracking-widest mt-20 border-t border-gray-100">
        Built with React & Vercel — Gauri Mishra 2026
      </footer>
    </div>
  );
};

export default Portfolio;
