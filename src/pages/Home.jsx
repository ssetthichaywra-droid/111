const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl font-bold">Hello, I'm <span className="text-blue-500">Sawassak</span></h1>
      <p className="mt-4 text-lg text-gray-600">Studying for Front-End Developer | Web Designer</p>
      <a href="/projects" className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
        View My Work
      </a>
    </section>
  )
}

export default Home
