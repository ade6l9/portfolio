import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpeg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
        
        {/* Profile Picture */}
        <img
          src={profilePic}
          alt="Adelina"
          className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-full border-4 border-blue-500 shadow-md"
        />

        {/* Text Section */}
        <div className="text-center md:text-left space-y-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="text-blue-400">Adelina Dautovic</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Computer Science Student | Full-Stack Developer
          </motion.p>

          <a
            href="/Resume%20Microsoft.pdf"
            download
            className="inline-block px-5 py-2 border border-blue-400 text-blue-400 rounded-md font-semibold hover:bg-blue-400 hover:text-white transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
