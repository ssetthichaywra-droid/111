const Skills = () => {
  return (
    <section className="p-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="space-y-4">
        <li>
          <div className="flex items-center gap-2">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
              alt="React Icon" 
              className="w-6 h-6" 
            />
            <p className="font-semibold mb-2">React</p>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full w-[40%]"></div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
              alt="Tailwind CSS Icon" 
              className="w-6 h-6" 
            />
            <p className="font-semibold mb-2">Tailwind CSS</p>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full w-[50%]"></div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
              alt="JavaScript Icon" 
              className="w-6 h-6" 
            />
            <p className="font-semibold mb-2">JavaScript</p>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full w-[30%]"></div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Skills;