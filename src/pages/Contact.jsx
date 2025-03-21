export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex justify-center">
      <div className="w-full max-w-7xl px-6 text-center flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg sm:text-xl mb-2">📧 Email: <a href="mailto:adelinadau@gmail.com" className="text-blue-400 underline">adelinadau@gmail.com</a></p>
        <p className="text-lg sm:text-xl mb-2">🔗 GitHub: <a href="https://github.com/ade6l9" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">github.com/ade6l9</a></p>
        <p className="text-lg sm:text-xl mb-4">📄 <a href="/Resume%20Microsoft.pdf" download className="text-blue-400 underline">Download My Resume</a></p>

        <p className="text-md sm:text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          I’m open to collaborations, software development roles, and internships.
          I’m also always open to learning about new tools, ideas, or technologies—if you have something interesting to share or build,
          reach out! I'd love to hear it.
        </p>
      </div>
    </div>
  );
}
