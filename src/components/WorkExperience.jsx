import React from "react";

const WorkExperience = () => {
  return (
    <section id="workExperience" className="py-10 px-5 rounded-lg shadow-md">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#f5c534] mb-6">
          Work Experience
        </h2>
        <div className="bg-[#26C6DA] p-6 rounded-lg shadow-lg text-left">
          <h3 className="text-xl font-semibold text-white">Infra Engineer</h3>
          <p className="text-white">
            NexGen Digital Infrastructures, Chandrapur
          </p>
          <p className="text-white text-sm">Oct 2023 – June 2024</p>
          <ul className="list-disc list-inside text-white mt-4">
            <li>
              Conducted real-time BSC System monitoring, promptly escalating
              critical issues for resolution to ensure seamless operations.
            </li>
            <li>
              Generated and analyzed monthly OMC reports, focusing on key
              performance indicators (KPIs) such as call drop rates, handover
              success, and traffic statistics, to aid in network optimization
              and capacity planning.
            </li>
            <li>
              Contributed to fault management and resource utilization tracking,
              assisting telecommunications operators in improving network
              quality and user experience.
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-[#26C6DA] mt-10 mb-6">
          Internship
        </h2>
        <div className="bg-[#f5c534] p-6 rounded-lg shadow-lg text-left">
          <h3 className="text-xl font-semibold text-[#333]">
            Web Developer Intern
          </h3>
          <p className="text-[#444]">Flourisense Technology, Pune</p>
          <p className="text-sm text-[#666]">July 2022 – Jan 2023</p>
          <ul className="list-disc list-inside text-[#333] mt-4">
            <li>
              Developed web solutions using NodeJS, ExpressJS, RESTful APIs, and
              MongoDB, streamlining backend processes to enhance system
              efficiency.
            </li>
            <li>
              Tested and validated APIs with Postman to ensure reliable and
              smooth integration.
            </li>
            <li>
              Collaborated with a cross-functional team to design and integrate
              API features, improving data handling and system responsiveness.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
