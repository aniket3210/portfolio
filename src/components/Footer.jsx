import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-blue-900 text-white text-center py-6">
      <section id="contactMe" className="py-10 px-5 text-center">
        <h2 className="text-3xl font-bold text-[#26C6DA] mb-6">Contact Me</h2>
        <p className="text-lg text-[#000] mb-6">
          Let's connect! Follow me on my social media platforms.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/aniket3210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000] hover:text-[#f5c534] text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anik2711/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1DA1F2] hover:text-[#f5c534] text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Anik3t_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1DA1F2] hover:text-[#f5c534] text-3xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/michal.one8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E4405F] hover:text-[#f5c534] text-3xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anikethedau27@gmail.com"
            target="_blank"
            className="text-[#D44638] hover:text-[#f5c534] text-3xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/aniket.hedau.568/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1877F2] hover:text-[#f5c534] text-3xl"
          >
            <FaFacebook />
          </a>
        </div>
      </section>

      <p> &copy; Made with ❤️ Aniket Hedau - {year}</p>
    </footer>
  );
}

export default Footer;
