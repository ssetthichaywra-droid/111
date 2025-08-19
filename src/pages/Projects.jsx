const Projects = () => {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">[ชื่อโปรเจกต์]</h3>
          <p>[คำอธิบายสั้น ๆ]</p>
          <a href="#" className="text-blue-500 hover:underline">ดูเพิ่มเติม</a>
        </div>
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">[ชื่อโปรเจกต์]</h3>
          <p>[คำอธิบายสั้น ๆ]</p>
          <a href="#" className="text-blue-500 hover:underline">ดูเพิ่มเติม</a>
        </div>
      </div>
    </section>
  )
}

export default Projects
