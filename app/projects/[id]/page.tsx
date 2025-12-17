import { projects } from "@/data";
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

const ProjectDetail = ({ params }: { params: { id: string } }) => {
    const project = projects.find((p) => p.id.toString() === params.id);

    if (!project) {
        notFound();
    }

    const techStackItems = project.detailedTechStack
        ? project.detailedTechStack.split("|").map((s) => s.trim())
        : [];

    return (
        <main className="bg-black-100 min-h-screen flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 text-white">
            <div className="max-w-4xl w-full py-20">
                <Link href="/#projects">
                    <div className="inline-block mb-10">
                        <MagicButton
                            title="Back to Projects"
                            icon={<FaLocationArrow className="rotate-[225deg]" />}
                            position="left"
                            otherClasses="!bg-[#161A31]"
                        />
                    </div>
                </Link>

                <h1 className="heading text-purple mb-10 text-center md:text-left">
                    {project.title}
                </h1>

                <div className="relative w-full h-[40vh] md:h-[50vh] rounded-2xl overflow-hidden mb-12 border border-white/[0.1] shadow-2xl">
                    <Image
                        src={project.img}
                        alt={`${project.title} - Detailed project view`}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-purple mb-4">Overview</h2>
                        <p className="text-white-100 text-lg md:text-xl leading-relaxed font-light">
                            {project.fullDescription || project.des}
                        </p>
                    </div>

                    <div className="bg-[#10132E] p-6 rounded-2xl border border-white/[0.1]">
                        <h2 className="text-2xl font-bold text-purple mb-6">
                            Tech Stack & Key Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {techStackItems.map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                    <span className="mr-3 text-purple text-xl mt-1">•</span>
                                    <span className="text-white-200 text-base md:text-lg">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center md:justify-start">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <MagicButton
                                title="View Source Code"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProjectDetail;
