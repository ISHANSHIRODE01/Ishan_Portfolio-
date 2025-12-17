import React from "react";

const certifications = [
    {
        name: "AWS Academy Graduate — Cloud Architecting",
        link: "https://drive.google.com/file/d/14gSOqSQfMAplvRGQQqG50nJs3u6PgOyi/view?usp=drive_link",
    },
    {
        name: "Accenture Technology Apprenticeship — Forage",
        link: "https://drive.google.com/file/d/1zLsJwZsWYYpa4X-gzk4OUFt3Bt_LuoCQ/view?usp=sharing",
    },
    {
        name: "Tata GenAI Powered Data Analytics — Forage",
        link: "https://drive.google.com/file/d/18tno60SEOms2kFCTKH6RTe_6uJbOotdA/view?usp=drive_link",
    },
    {
        name: "Deloitte Data Analytics Virtual Experience — Forage",
        link: "https://drive.google.com/file/d/1t4mBgwP8BFtlBoc6ptn8jMxoUQKpD1ha/view?usp=drive_link",
    },
];

const Certificates = () => {
    return (
        <div className="py-20 w-full" id="certificates">
            <h1 className="heading mb-10">
                My <span className="text-purple">Certifications</span>
            </h1>
            <div className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto px-5">
                <ul className="list-none w-full space-y-4">
                    {certifications.map((cert, idx) => (
                        <a
                            key={idx}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <li
                                className="bg-black-200 border border-white/[0.1] rounded-xl p-4 text-center md:text-left hover:border-purple transition duration-200 text-lg md:text-xl font-medium cursor-pointer"
                            >
                                {cert.name}
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default Certificates;
