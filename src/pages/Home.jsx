const Home = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: 'url("https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/e7waraff45cbnn5j959r/%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B9%8C%20%E0%B8%9A%E0%B8%B2%E0%B8%99%E0%B8%B2%E0%B8%AE%E0%B8%B4%E0%B8%A5%E0%B8%A5%E0%B9%8C%20%E0%B9%81%E0%B8%B0%20%E0%B8%AA%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%99%E0%B9%82%E0%B8%81%E0%B8%A5%E0%B9%80%E0%B8%94%E0%B9%89%E0%B8%99%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%94%E0%B8%88%E0%B9%8C%20%E0%B8%AB%E0%B8%99%E0%B8%B6%E0%B9%88%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%99.jpg")',
      }}
    >
      <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6">
        <img
          src="/profile-image.png"
          alt="รูปโปรไฟล์ สวัสสัก เสฏฐีชัยวรา"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold text-white drop-shadow-lg">
        Hello, I'm <span className="text-blue-500">Sawassak</span>
      </h1>
      <p className="mt-4 text-lg text-white drop-shadow-lg">
        Studying for Front-End Developer | Web Designer
      </p>
      <a href="/projects" className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
        View My Work
      </a>
    </section>
  );
};

export default Home;