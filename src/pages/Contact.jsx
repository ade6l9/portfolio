import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-2xl text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Contact Me</h2>

        <p className="text-lg mb-2">
          📧{" "}
          <a
            href="mailto:adelinadau@gmail.com"
            className="text-blue-400 underline"
          >
            adelinadau@gmail.com
          </a>
        </p>

        <p className="text-lg mb-2">
          🔗{" "}
          <a
            href="https://github.com/ade6l9"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ade6l9
          </a>
        </p>

        <p className="text-lg mb-4">
          💼{" "}
          <a
            href="https://www.linkedin.com/in/adelinadautovic"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/adelinadautovic
          </a>
        </p>

        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          I'm open to collaborations, internships, or just learning something
          new. If you’ve got something interesting — let’s connect! 🚀
        </p>
      </motion.div>
    </section>
  );
}
