const Skills = () => {
  return (
    <section className="p-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="space-y-4">
        <li>
          <p className="font-semibold">React</p>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full w-[70%]"></div>
          </div>
        </li>
        <li>
          <p className="font-semibold">Tailwind CSS</p>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full w-[80%]"></div>
          </div>
        </li>
        <li>
          <p className="font-semibold">JavaScript</p>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full w-[60%]"></div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Skills
