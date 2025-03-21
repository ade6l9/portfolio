import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Gear Grid (In Progress)",
    description: "A social car platform where users can RSVP to events, showcase builds, and connect with car enthusiasts.",
    link: "https://safianahmed.github.io/home"
  },
  {
    title: "Grid Maker",
    description: "An interactive web tool that lets users dynamically add/remove rows, change cell colors, and customize grids.",
    link: "https://ade6l9.github.io/Grid-Maker/"
  },
  {
    title: "Bank of React",
    description: "A simulated banking app built in React that allows deposits, withdrawals, and balance tracking.",
    link: "https://ade6l9.github.io/bank-of-react/"
  },
  {
    title: "Pot Patrol (Paused)",
    description: "A prototype pothole reporting app for users to report road damage and upload images for the community.",
    link: "https://ade6l9.github.io/Pot-Patrol/"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex justify-center">
      <div className="w-full max-w-7xl px-6 text-center flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
