import React from "react";

function Projects() {
  const projects = [
    {
      title: "Gradient Color Generator - HTML, CSS, JavaScript",
      width: "100%",
      img: "/portfolio/gradient-color-project.png",
      desc: "The Gradient Color Generator is a simple yet interactive web application that allows users to create and preview gradient backgrounds dynamically. Users can select different colors to generate a linear gradient and copy the corresponding CSS code for use in their own projects.",
      link: "https://aniket3210.github.io/Background-Gradient-Color-Generator/",
    },
    {
      title: "EventHub",
      width: "100%",
      img: "/portfolio/event-hub-project.png",
      desc: "EventHub 🎟️✨ EventHub is a modern event booking platform built with React, Tailwind CSS, and Framer Motion. It offers a visually stunning, smooth, and responsive UI where users can explore, book, and manage events effortlessly. With interactive animations and a sleek design, it provides a seamless experience for both attendees and event hosts. 🚀",
      link: "https://event-hub-phi.vercel.app/",
    },
    {
      title: "Freako Ecom",
      width: "100%",
      img: "/portfolio/freako-ecom.png",
      desc: "Freako Ecom is a modern and stylish e-commerce website built with React and Tailwind CSS, offering a seamless shopping experience with a sleek UI, smooth interactions and a responsive design.",
      link: "https://freako.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-[#21c5d4]" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-md">
          Projects & Demos
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <a
              key={idx}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 cursor-pointer"
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-black">{proj.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{proj.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
