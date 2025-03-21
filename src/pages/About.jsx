export default function About() {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex justify-center">
      <div className="w-full max-w-7xl px-6 text-center flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold">About Me</h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-300 max-w-3xl mx-auto">
          I'm Adelina Dautovic, a Computer Science student with a Math minor at Hunter College. 
          I have experience in full-stack development, software design, and data structures.
          My goal is to build efficient and meaningful solutions that enhance user experience.
        </p>

        <div className="mt-8 text-left max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">🛠 Technical Skills</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Languages: C++, JavaScript, Python, Dart, SQL</li>
            <li>Frameworks: React, Flutter, Express, Node.js</li>
            <li>Tools: Firebase, PostgreSQL, Git, Vercel, Figma</li>
            <li>Concepts: Software Design, Data Structures, Web Security</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-400 mt-6 mb-2">💡 What I Love Working On</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Full-stack web applications with authentication & real-time features</li>
            <li>Problem-solving through data structures & algorithms</li>
            <li>Clean, responsive, and modern UI/UX design</li>
            <li>Scalable web solutions using Firebase & cloud services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
