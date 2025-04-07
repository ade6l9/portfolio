import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-white"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-400">About Me</h2>
        <p className="text-lg text-gray-300">
          I'm a Computer Science student with a Math minor at Hunter College. I
          enjoy building efficient, full-stack applications, and I love clean
          UI/UX. I'm experienced in C++, JavaScript, React, Firebase, and more.
        </p>
        <p className="text-lg text-gray-300 mt-4">
          Passionate about solving problems, clean design, and building
          scalable web apps.
        </p>
        <ul className="mt-6 space-y-2 text-gray-400 list-disc pl-6">
          <li>Languages: C++, JavaScript, Python, Dart, SQL</li>
          <li>Frameworks: React, Express, Flutter, Node.js</li>
          <li>Tools: Firebase, Git, Figma, PostgreSQL</li>
          <li>Always open to learning new things — reach out with ideas!</li>
        </ul>
      </motion.div>
    </section>
  );
}
