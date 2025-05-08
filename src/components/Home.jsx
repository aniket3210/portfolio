import React from "react";

function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div
        className="w-full md:w-1/2 bg-yellow-400 flex flex-col items-center justify-center p-10 gap-4"
        data-aos="fade-right"
      >
        {/* Profile Image */}
        <img
          src="/portfolio/profile-pic.png"
          alt="Aniket Hedau"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl font-bold text-center">Aniket Hedau</h1>
        <p className="text-lg text-center">
          Infra Engineer | Web Developer | Software Enthusiast
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-4">
          <a
            href="https://github.com/aniket3210"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-3xl text-black hover:text-gray-800"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anik2711/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-3xl text-blue-600 hover:text-blue-800"></i>
          </a>
          <a href="mailto:anikethedau27@gmail.com" aria-label="Email">
            <i className="fas fa-envelope text-3xl text-red-600 hover:text-red-800"></i>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full md:w-1/2 flex flex-col items-center justify-center p-10 relative"
        style={{
          background: " #26C6DA",
          color: "white",
          overflow: "hidden",
        }}
        data-aos="fade-left"
      >
        {/* Glassmorphism Card */}
        <div className="bg-[#3adcf1] bg-opacity-20 backdrop-blur-lg p-4 text-justify rounded-2xl shadow-lg max-w-md">
          <h2 className="text-4xl font-extrabold mb-3 text-white animate-bounce">
            About Me
          </h2>
          <p className="text-lg text-white-400 font-light">
            Passionate about backend technologies and front-end development. I
            love solving complex infrastructure challenges and building seamless
            web experiences.
          </p>

          {/* Animated Wave Line */}
          <div className="mt-4 w-24 h-1 bg-white rounded-full animate-pulse"></div>

          <div className="mt-6 flex space-x-4 text-center text-[13px] justify-around">
            <a
              href="https://www.linkedin.com/in/anik2711/"
              target="_blank"
              className="px-6 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition duration-300 shadow-md"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/aniket3210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-md"
            >
              View Work
            </a>

            {/* Directly Linking to the PDF in the public folder */}
            <a
              href="https://drive.google.com/file/d/1ssxVNrg_DF6egner0BlU0jF053TQIrTg/view?usp=drive_link" 
              target="_blank"
              download="Aniket_Hedau.pdf"
              className="px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition duration-300 shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
