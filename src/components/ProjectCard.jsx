import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg mx-auto"
    >
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="mt-2 text-gray-300">{description}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-5 py-2 border border-blue-400 text-blue-400 rounded-md font-medium text-sm hover:bg-blue-400 hover:text-white transition duration-300"
      >
        View Project →
      </a>
    </motion.div>
  );
}
