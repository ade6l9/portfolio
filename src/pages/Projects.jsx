import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Gear Grid (In Progress)",
    description:
      "A social car platform where users can RSVP to events, showcase builds, and connect with car enthusiasts.",
    link: "https://safianahmed.github.io/geargrid-proj/",
  },
  {
    title: "Grid Maker",
    description:
      "An interactive tool to dynamically add/remove rows and customize cells in a grid layout.",
    link: "https://ade6l9.github.io/Grid-Maker/",
  },
  {
    title: "Bank of React",
    description:
      "A simulated banking app built in React that allows deposits, withdrawals, and balance tracking.",
    link: "https://ade6l9.github.io/bank-of-react/",
  },
  {
    title: "Pot Patrol (Paused)",
    description:
      "A prototype pothole reporting app for users to report road damage and upload images for the community.",
    link: "https://ade6l9.github.io/Pot-Patrol/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
