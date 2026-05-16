import { motion } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import { Code2, Database, Globe, Cpu } from "lucide-react";

export default function App() {

  const [loading, setLoading] = useState(true);

useEffect(() => {

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

}, []);

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center overflow-hidden">

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: [0, 1.3, 1],
            rotate: 360,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="w-40 h-40 border border-cyan-400 rounded-3xl
          backdrop-blur-xl bg-white/10 shadow-[0_0_80px_cyan]"
        />

      </div>
    );
  }

  return (
  <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

    {/* ANIMATED BACKGROUND */}

    <div className="absolute inset-0 -z-10">

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

    </div>

    {/* NAVBAR */}

<nav className="fixed top-0 left-0 w-full z-50
backdrop-blur-xl bg-black/20 border-b border-white/10">

  <div className="max-w-7xl mx-auto
  px-6 py-4 flex items-center
  justify-between">

    {/* LOGO */}

    <div className="flex items-center gap-4">

      <img
        src="/logo.png"
        alt="logo"
        className="w-14 h-14 rounded-full
        border border-cyan-400
        shadow-[0_0_25px_cyan]"
      />

      <h1 className="text-4xl font-bold text-cyan-400">
        Ritik.dev
      </h1>

    </div>

    {/* NAV LINKS */}

    <ul className="flex gap-10 text-xl font-medium">

      <li className="hover:text-cyan-400 duration-300 cursor-pointer">
        Home
      </li>

      <li className="hover:text-cyan-400 duration-300 cursor-pointer">
        About
      </li>

      <li className="hover:text-cyan-400 duration-300 cursor-pointer">
        Skills
      </li>

      <li className="hover:text-cyan-400 duration-300 cursor-pointer">
        Projects
      </li>

      <li className="hover:text-cyan-400 duration-300 cursor-pointer">
        Contact
      </li>

    </ul>

  </div>

</nav>


    {/* HERO */}
    {/* ABOUT SECTION */}
    {/* SKILLS SECTION */}
    {/* PROJECT SECTION */}
    {/* CONTACT SECTION */}
    {/* FOOTER */}

<footer className="px-6 py-10 border-t border-white/10">

  <div className="max-w-7xl mx-auto flex
  flex-col md:flex-row justify-between
  items-center gap-6">

    {/* LEFT */}

    <div>

      <h2 className="text-3xl font-bold text-cyan-400">
        Ritik.dev
      </h2>

      <p className="text-gray-400 mt-2">
        Building futuristic digital experiences 🚀
      </p>

    </div>

    {/* RIGHT */}

    <div className="flex gap-5 flex-wrap">

      <button className="px-6 py-3 rounded-2xl
      bg-white/10 border border-white/10
      hover:bg-cyan-400 hover:text-black
      duration-300">

        GitHub

      </button>

      <button className="px-6 py-3 rounded-2xl
      bg-white/10 border border-white/10
      hover:bg-cyan-400 hover:text-black
      duration-300">

        LinkedIn

      </button>

      <button className="px-6 py-3 rounded-2xl
      bg-white/10 border border-white/10
      hover:bg-cyan-400 hover:text-black
      duration-300">

        Instagram

      </button>

    </div>

  </div>

</footer>

<section className="min-h-screen px-6 py-24 flex items-center justify-center">

  <motion.div
    initial={{ opacity:0, y:100 }}
    whileInView={{ opacity:1, y:0 }}
    transition={{ duration:1 }}
    className="max-w-5xl w-full backdrop-blur-xl
    bg-white/10 border border-white/10
    rounded-[40px] p-10 md:p-20"
  >

    <h2 className="text-6xl font-bold text-center
    text-cyan-400 mb-16">

      Contact Me

    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* LEFT */}


      <div>

        <h3 className="text-3xl font-bold mb-6">
          Let's Build Something Amazing 🚀
        </h3>

        <p className="text-gray-300 leading-8 text-lg">
          <div className="mt-8 space-y-4 text-lg">

  <div className="mt-8 space-y-5 text-lg">

  <a
    href="mailto:yourmail@gmail.com"
    className="block text-cyan-400 hover:text-cyan-300 duration-300"
  >
    📧 yourmail@gmail.com
  </a>

  <a
    href="tel:+919876543210"
    className="block text-cyan-400 hover:text-cyan-300 duration-300"
  >
    📱 +91 9876543210
  </a>

  <a
    href="https://wa.me/919876543210"
    target="_blank"
    className="block text-green-400 hover:text-green-300 duration-300"
  >
    💬 WhatsApp Chat
  </a>

  <a
    href="https://instagram.com/yourusername"
    target="_blank"
    className="block text-pink-400 hover:text-pink-300 duration-300"
  >
    📸 Instagram
  </a>

  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    className="block text-blue-400 hover:text-blue-300 duration-300"
  >
    💼 LinkedIn
  </a>

  <a
    href="https://github.com/yourusername"
    target="_blank"
    className="block text-gray-300 hover:text-white duration-300"
  >
    💻 GitHub
  </a>

</div>

</div>

          Open for collaborations, internships,
          futuristic ideas and premium digital experiences.

        </p>

      </div>

      {/* RIGHT */}

      <form className="space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-5 rounded-2xl
          bg-white/10 border border-white/10
          outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-5 rounded-2xl
          bg-white/10 border border-white/10
          outline-none"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-5 rounded-2xl
          bg-white/10 border border-white/10
          outline-none resize-none"
        />

        <button
          className="px-10 py-4 rounded-2xl
          bg-cyan-400 text-black font-bold
          hover:scale-110 duration-300"
        >

          Send Message

        </button>

      </form>

    </div>

  </motion.div>

</section>

<section className="min-h-screen px-6 py-24 flex items-center justify-center">

  <div className="max-w-7xl w-full">

    <motion.h2
      initial={{ opacity:0, y:80 }}
      whileInView={{ opacity:1, y:0 }}
      transition={{ duration:1 }}
      className="text-6xl font-bold text-center mb-20 text-cyan-400"
    >
      Featured Projects
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* PROJECT CARD 1 */}

      <motion.div
        whileHover={{ scale:1.03 }}
        className="relative overflow-hidden rounded-[40px]
        backdrop-blur-xl bg-white/10 border border-white/10
        p-10"
      >

        {/* GLOW */}

        <div className="absolute top-0 right-0 w-40 h-40
        bg-cyan-400/20 blur-[80px] rounded-full"></div>

        <h3 className="text-4xl font-bold mb-6">
          AI Portfolio Assistant
        </h3>

        <p className="text-gray-300 leading-8 text-lg">

          Futuristic AI-powered portfolio assistant with
          immersive animations, smart interactions and
          premium user experience.

        </p>

        <div className="flex flex-wrap gap-4 mt-8">

          <span className="px-4 py-2 rounded-xl bg-cyan-400/20">
            React
          </span>

          <span className="px-4 py-2 rounded-xl bg-cyan-400/20">
            Tailwind
          </span>

          <span className="px-4 py-2 rounded-xl bg-cyan-400/20">
            Framer Motion
          </span>

        </div>

        <div className="mt-10 flex gap-5">

          <button className="px-6 py-3 rounded-2xl
          bg-cyan-400 text-black font-bold hover:scale-110 duration-300">

            Live Demo

          </button>

          <button className="px-6 py-3 rounded-2xl
          border border-cyan-400 text-cyan-400
          hover:bg-cyan-400 hover:text-black duration-300">

            GitHub

          </button>

        </div>

      </motion.div>

      {/* PROJECT CARD 2 */}

      <motion.div
        whileHover={{ scale:1.03 }}
        className="relative overflow-hidden rounded-[40px]
        backdrop-blur-xl bg-white/10 border border-white/10
        p-10"
      >

        <div className="absolute bottom-0 left-0 w-40 h-40
        bg-purple-400/20 blur-[80px] rounded-full"></div>

        <h3 className="text-4xl font-bold mb-6">
          Data Engineering Dashboard
        </h3>

        <p className="text-gray-300 leading-8 text-lg">

          Modern analytics dashboard focused on data
          visualization, cloud integration and scalable
          engineering workflow concepts.

        </p>

        <div className="flex flex-wrap gap-4 mt-8">

          <span className="px-4 py-2 rounded-xl bg-purple-400/20">
            Python
          </span>

          <span className="px-4 py-2 rounded-xl bg-purple-400/20">
            SQL
          </span>

          <span className="px-4 py-2 rounded-xl bg-purple-400/20">
            MongoDB
          </span>

        </div>

        <div className="mt-10 flex gap-5">

          <button className="px-6 py-3 rounded-2xl
          bg-purple-400 text-black font-bold hover:scale-110 duration-300">

            Live Demo

          </button>

          <button className="px-6 py-3 rounded-2xl
          border border-purple-400 text-purple-400
          hover:bg-purple-400 hover:text-black duration-300">

            GitHub

          </button>

        </div>

      </motion.div>

    </div>

  </div>

</section>

<section className="min-h-screen px-6 py-24 flex items-center justify-center">

  <div className="max-w-7xl w-full">

    <motion.h2
      initial={{ opacity:0, y:80 }}
      whileInView={{ opacity:1, y:0 }}
      transition={{ duration:1 }}
      className="text-6xl font-bold text-center mb-20 text-cyan-400"
    >
      Skills & Technologies
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}

      <motion.div
        whileHover={{ scale:1.05 }}
        className="backdrop-blur-xl bg-white/10 border border-white/10
        rounded-[35px] p-10 relative overflow-hidden"
      >

        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400"></div>

        <h3 className="text-4xl font-bold mb-8">
          Frontend
        </h3>

        <div className="flex flex-wrap gap-4">

          <span className="px-5 py-3 rounded-2xl bg-cyan-400/20">
            React
          </span>

          <span className="px-5 py-3 rounded-2xl bg-cyan-400/20">
            Tailwind
          </span>

          <span className="px-5 py-3 rounded-2xl bg-cyan-400/20">
            JavaScript
          </span>

          <span className="px-5 py-3 rounded-2xl bg-cyan-400/20">
            HTML
          </span>

          <span className="px-5 py-3 rounded-2xl bg-cyan-400/20">
            CSS
          </span>

        </div>

      </motion.div>

      {/* CARD 2 */}

      <motion.div
        whileHover={{ scale:1.05 }}
        className="backdrop-blur-xl bg-white/10 border border-white/10
        rounded-[35px] p-10 relative overflow-hidden"
      >

        <div className="absolute top-0 left-0 w-full h-1 bg-purple-400"></div>

        <h3 className="text-4xl font-bold mb-8">
          Backend & Data
        </h3>

        <div className="flex flex-wrap gap-4">

          <span className="px-5 py-3 rounded-2xl bg-purple-400/20">
            Python
          </span>

          <span className="px-5 py-3 rounded-2xl bg-purple-400/20">
            SQL
          </span>

          <span className="px-5 py-3 rounded-2xl bg-purple-400/20">
            MongoDB
          </span>

          <span className="px-5 py-3 rounded-2xl bg-purple-400/20">
            APIs
          </span>

          <span className="px-5 py-3 rounded-2xl bg-purple-400/20">
            Data Engineering
          </span>

        </div>

      </motion.div>

      {/* CARD 3 */}

      <motion.div
        whileHover={{ scale:1.05 }}
        className="backdrop-blur-xl bg-white/10 border border-white/10
        rounded-[35px] p-10 relative overflow-hidden"
      >

        <div className="absolute top-0 left-0 w-full h-1 bg-pink-400"></div>

        <h3 className="text-4xl font-bold mb-8">
          Tools & Future
        </h3>

        <div className="flex flex-wrap gap-4">

          <span className="px-5 py-3 rounded-2xl bg-pink-400/20">
            GitHub
          </span>

          <span className="px-5 py-3 rounded-2xl bg-pink-400/20">
            VS Code
          </span>

          <span className="px-5 py-3 rounded-2xl bg-pink-400/20">
            AI
          </span>

          <span className="px-5 py-3 rounded-2xl bg-pink-400/20">
            Cloud
          </span>

          <span className="px-5 py-3 rounded-2xl bg-pink-400/20">
            Automation
          </span>

        </div>

      </motion.div>

    </div>

  </div>

</section>

<section className="min-h-screen flex items-center justify-center px-6 py-20">

  <motion.div
    initial={{ opacity:0, y:100 }}
    whileInView={{ opacity:1, y:0 }}
    transition={{ duration:1 }}
    className="max-w-6xl w-full grid md:grid-cols-2 gap-10"
  >

    {/* LEFT */}

    <div className="backdrop-blur-xl bg-white/10 border border-white/10
    rounded-[30px] p-10">

      <h2 className="text-5xl font-bold mb-8 text-cyan-400">
        About Me
      </h2>

      <p className="text-gray-300 leading-9 text-lg">

        I am an aspiring Data Engineer passionate about
        futuristic technology, AI systems, cloud computing,
        immersive web experiences and scalable applications.

        My goal is to build premium digital products and
        intelligent systems that combine aesthetics with power.

      </p>

    </div>

    {/* RIGHT */}

    <div className="grid grid-cols-2 gap-6">

      <div className="backdrop-blur-xl bg-white/10 border border-white/10
      rounded-3xl p-8 hover:scale-105 duration-300">

        <h3 className="text-4xl font-bold text-cyan-400">
          10+
        </h3>

        <p className="mt-4 text-gray-300">
          Technologies Exploring
        </p>

      </div>

      <div className="backdrop-blur-xl bg-white/10 border border-white/10
      rounded-3xl p-8 hover:scale-105 duration-300">

        <h3 className="text-4xl font-bold text-purple-400">
          AI
        </h3>

        <p className="mt-4 text-gray-300">
          Future Vision
        </p>

      </div>

      <div className="backdrop-blur-xl bg-white/10 border border-white/10
      rounded-3xl p-8 hover:scale-105 duration-300">

        <h3 className="text-4xl font-bold text-pink-400">
          Web
        </h3>

        <p className="mt-4 text-gray-300">
          Premium Interfaces
        </p>

      </div>

      <div className="backdrop-blur-xl bg-white/10 border border-white/10
      rounded-3xl p-8 hover:scale-105 duration-300">

        <h3 className="text-4xl font-bold text-cyan-300">
          Data
        </h3>

        <p className="mt-4 text-gray-300">
          Engineering Path
        </p>

      </div>

    </div>

  </motion.div>

</section>

    <section className="h-screen flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity:0, y:100 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1.5 }}
        className="backdrop-blur-xl bg-white/10 border border-white/10
        rounded-[40px] p-12 md:p-20 text-center shadow-2xl
        max-w-5xl relative overflow-hidden"
      >

        {/* FLOATING ICONS */}

        <motion.div
          animate={{ y:[0,-20,0] }}
          transition={{ duration:4, repeat:Infinity }}
          className="absolute top-5 left-5 md:left-10"
        >
          <Code2 size={40} className="text-cyan-400" />
        </motion.div>

        <motion.div
          animate={{ y:[0,20,0] }}
          transition={{ duration:5, repeat:Infinity }}
          className="absolute top-5 right-5 md:right-10"
        >
          <Database size={40} className="text-purple-400" />
        </motion.div>

        <motion.div
          animate={{ y:[0,-15,0] }}
          transition={{ duration:6, repeat:Infinity }}
          className="absolute bottom-5 left-5 md:left-10"
        >
          <Globe size={40} className="text-pink-400" />
        </motion.div>

        <motion.div
          animate={{ y:[0,15,0] }}
          transition={{ duration:4, repeat:Infinity }}
          className="absolute bottom-5 right-5 md:right-10"
        >
          <Cpu size={40} className="text-cyan-300" />
        </motion.div>

        {/* CONTENT */}
        <motion.img
  initial={{ scale:0 }}
  animate={{ scale:1 }}
  transition={{ duration:1 }}
  src="profile.png"
  alt="profile"
  className="w-44 h-44 rounded-full mx-auto mb-10
  border-4 border-cyan-400 object-contain
  shadow-[0_0_60px_cyan]"
/>
<motion.h1
  initial={{ scale:0.5 }}
  animate={{ scale:1 }}
  transition={{ duration:1 }}
  className="text-5xl md:text-8xl font-bold mb-6"
>
  Ritik Mishra
</motion.h1>
      

        <h2 className="text-cyan-400 text-2xl md:text-4xl mb-8">
           Data Engineer & AI Builder
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-9 max-w-3xl mx-auto">

          Building futuristic digital experiences with modern
          web technologies, immersive interfaces, AI concepts
          and premium motion design.

        </p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">

          <button className="px-10 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-110 duration-300">

            Explore Portfolio

          </button>

          <button className="px-10 py-4 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black duration-300">

            Download CV

          </button>

        </div>

      </motion.div>

    </section>

  </div>
  )

}


