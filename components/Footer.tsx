import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 relative overflow-hidden"
      id="contact"
    >
      {/* background grid */}
      <div className="w-full absolute left-0 top-0 h-full min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="Footer background grid pattern"
          fill
          className="opacity-50 object-cover"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s Build Something{" "}
          <span className="text-purple">Intelligent</span>.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="flex flex-col items-center gap-2 mb-10">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvpZxLNvjclHxlTDsnpPDGXdQLLpJJWSlsBMgmSPbdzngmFdXVnPJClfZqnmTVsFsCPftL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a
            href="https://wa.me/919307767804"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-200 text-sm md:text-base hover:text-purple transition-colors"
          >
            Mobile: <span className="font-bold">+91 9307767804</span>
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center max-w-7xl mx-auto w-full px-5 relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
          Copyright © 2025 Ishan Shirode
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt={`${info.id} social media icon`} width={20} height={20} />
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/your-resume-id/view"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-purple/20 transition-colors"
            title="Download Resume"
            aria-label="Download Resume"
          >
            <span className="text-xs font-bold text-white">CV</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
