import React from "react";

function Skills() {
  const skills = [
    { name: "HTML5", img: "/portfolio/Html.webp", width: "49%" },
    { name: "CSS3", img: "/portfolio/CSS.jpg", width: "47%" },
    { name: "React", img: "/portfolio/react.png", width: "30%" },
    { name: "JavaScript", img: "/portfolio/javascript.png", width: "34%" },
    { name: "Node.js", img: "/portfolio/node.jpg", width: "41%" },
    { name: "Express.js", img: "/portfolio/express.png", width: "52%" },
    { name: "MySQL", img: "/portfolio/mysql.jpg", width: "41%" },
    { name: "Java", img: "/portfolio/java.jpg", width: "31%" },
    { name: "MongoDB", img: "/portfolio/mongo.png", width: "55%" },
    { name: "Git & Github", img: "/portfolio/git-github.png", width: "33%" },
    { name: "VS Code", img: "/portfolio/vscode.png", width: "50%" },
    { name: "TailwindCSS", img: "/portfolio/tailwindCSS.webp", width: "38%" },
  ];

  return (
    <section
      id="skills"
      className="py-16"
      style={{ backgroundColor: "#f5c534" }}
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          My Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-xl transition-all duration-300 transform-gpu"
              style={{
                width: skill.width,
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="relative w-full h-full transition-transform duration-300 hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 hover: rounded-2xl overflow-hidden">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-full rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-bold text-center">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
