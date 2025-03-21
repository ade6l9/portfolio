import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex justify-center">
      <div className="w-full max-w-7xl px-6 text-center flex flex-col justify-center">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm <span className="text-blue-400">Adelina Dautovic</span> 👋
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Computer Science Student | Full-Stack Developer <br />
          Passionate about solving problems, building clean web experiences, and creating things that matter.
        </motion.p>

        <a
          href="/Resume%20Microsoft.pdf"
          download
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
}
