import { FaLocationArrow, FaGithub, FaLinkedin } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { NeonButton } from "./ui/NeonButton";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 relative overflow-hidden"
      id="contact"
    >
      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[50vw]">
          Open to <span className="text-neon-blue">AI Engineer</span>, <span className="text-neon-purple">ML Engineer</span> and Backend Roles
        </h1>
        <p className="text-slate-400 md:mt-10 my-5 text-center max-w-lg text-lg">
          Available for full-time opportunities starting <span className="text-white font-bold">2026</span>.
        </p>
        <div className="flex flex-col items-center gap-2 mb-10">
          <NeonButton 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ishanshirode7679@gmail.com&su=AI%20Engineer%20Opportunity"
            external={true}
          >
            Let&apos;s get in touch <FaLocationArrow className="ml-2" />
          </NeonButton>
          <a
            href="https://wa.me/919307767804"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-200 text-sm md:text-base hover:text-neon-purple transition-colors mt-4"
          >
            Mobile: <span className="font-bold">+91 9307767804</span>
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center max-w-7xl mx-auto w-full px-5 relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
          Copyright © 2026 Ishan Shirode
        </p>

        <div className="flex items-center md:gap-4 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-neon-blue/50 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]"
            >
              {info.name === "GitHub" && <FaGithub size={32} />}
              {info.name === "LinkedIn" && <FaLinkedin size={32} />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
