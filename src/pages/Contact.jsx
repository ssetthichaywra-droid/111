const Contact = () => {
  return (
    <section className="p-10 max-w-3xl mx-auto text-center bg-black text-gray-300">
      <h2 className="text-3xl font-bold mb-8 text-white">Contact</h2>

      <div className="space-y-6 mb-8">
        {/* Email Section */}
        <div className="flex items-center justify-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l-7.997 3.998A2 2 0 010 12V6a2 2 0 012.003-2.003zM22 6a2 2 0 01-2 2h-9.998l-7.997 4.002A2 2 0 010 18V6a2 2 0 012-2h20zm0 12a2 2 0 01-2-2v-6a2 2 0 012-2h0a2 2 0 012 2v6a2 2 0 01-2 2z" />
          </svg>
          <a href="mailto:ssetthichaywra@gmail.com" className="hover:text-white transition-colors">
            ssetthichaywra@gmail.com
          </a>
        </div>

        {/* Phone Section */}
        <div className="flex items-center justify-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.454 10.982l-2.015-2.015a1 1 0 00-1.414 0L6 10.437a1 1 0 000 1.414l3.015 3.015a1 1 0 001.414 0l2.015-2.015a1 1 0 000-1.414z" />
            <path d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
            <path d="M19.999 9.882A9.002 9.002 0 0012 3a9 9 0 00-7.999 5.882c-.89.176-1.554.96-1.554 1.954V18a2 2 0 002 2h15a2 2 0 002-2v-6.164c0-.994-.664-1.778-1.554-1.954zM20 18H4v-6.118a1.002 1.002 0 01.999-1.001A7.002 7.002 0 0112 5a7 7 0 017.001 5.881A1.002 1.002 0 0120 11.882z" />
          </svg>
          <span>+66 0858502190</span>
        </div>
      </div>

      <div className="flex justify-center gap-8">
        {/* LinkedIn Section */}
        <a href="https://www.linkedin.com/in/0858502190" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4.502-3.368-4.502 0v5.604h-3v-11h3v1.765c1.396-2.586 7.994-2.586 7.994 0v9.235z" />
          </svg>
          <span>LinkedIn</span>
        </a>

        {/* GitHub Section */}
        <a href="https://github.com/ssetthichaywra-droid" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.864 8.163 6.848 9.492.5.09.682-.218.682-.483 0-.238-.009-.875-.014-1.714-2.782.605-3.372-1.341-3.372-1.341-.454-1.154-1.11-1.464-1.11-1.464-.908-.619.069-.607.069-.607 1.002.07 1.531 1.03 1.531 1.03.89 1.527 2.336 1.085 2.903.832.09-.648.348-1.085.635-1.335-2.22-.252-4.555-1.11-4.555-4.943 0-1.09.389-1.98.98-2.673-.099-.251-.427-1.264.093-2.646 0 0 .8-.255 2.62 1.026A9.155 9.155 0 0112 6.822c.86.002 1.718.113 2.536.33 1.82-1.281 2.618-1.026 2.618-1.026.52 1.382.192 2.395.093 2.646.59.693.979 1.583.979 2.673 0 3.84-2.335 4.686-4.565 4.935.359.309.678.917.678 1.85 0 1.34-.012 2.42-.012 2.753 0 .265.181.573.687.485C20.147 20.158 23 16.419 23 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <span>GitHub: ssetthichaywra-droid</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;