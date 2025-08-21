const Projects = () => {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">[React to Render]</h3>
          <p>[แนะนำ บริษัทการ์ดเกม ที่นึงที่มีเงินเข้าตลอดทั้งปี]</p>
        </div>
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">[เว็บไซต์อาหารการกินจากตลาดนัดและข้างทาง]</h3>
          <p>[นําเสนอร้านอาหารและอาหารที่ขายตามตลาดนัดหรือร้านข้างทาง โดยเน้นที่ความหลากหลายของเมนู
และราคาที่เข้าถึงได้]</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
