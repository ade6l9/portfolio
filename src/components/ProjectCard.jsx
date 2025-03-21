import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-2 text-gray-300">{description}</p>
      <a 
        href={link} 
        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        target="_blank" 
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </motion.div>
  );
}
