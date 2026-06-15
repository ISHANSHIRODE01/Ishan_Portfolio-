import { notFound } from "next/navigation";
import { projects } from "@/data";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCaseStudy({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <main className="min-h-screen bg-black-100 text-white pt-32 pb-20 px-5">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <Link href="/" className="text-neon-blue hover:text-white transition-colors mb-8 inline-block">
          ← Back to Portfolio
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
        {caseStudy && <p className="text-xl text-slate-400 mb-8">{caseStudy.overview.summary}</p>}
        
        <div className="flex flex-wrap gap-4 mb-12">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <FaGithub /> GitHub Repo
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-blue/10 border border-neon-blue/30 hover:bg-neon-blue/20 transition-colors text-neon-blue">
              <FaExternalLinkAlt /> Live Deployment
            </a>
          )}
        </div>

        {caseStudy ? (
          <div className="space-y-16">
            
            {/* Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-black-200 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                <h3 className="text-neon-purple font-bold mb-4 uppercase tracking-wider text-sm">Business Context</h3>
                <p className="text-slate-300 leading-relaxed">{caseStudy.overview.businessContext}</p>
              </div>
              <div className="p-8 rounded-2xl bg-black-200 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                <h3 className="text-neon-blue font-bold mb-4 uppercase tracking-wider text-sm">Technical Context</h3>
                <p className="text-slate-300 leading-relaxed">{caseStudy.overview.technicalContext}</p>
              </div>
            </div>

            {/* Architecture Pipeline Visualizer */}
            <div className="my-16">
              <h2 className="text-3xl font-bold mb-8 border-b border-white/10 pb-4">Architecture Flow</h2>
              <div className="flex flex-col md:flex-row items-center gap-4 w-full overflow-x-auto pb-8">
                {caseStudy.architecture.visualPipeline.split('→').map((node, i, arr) => (
                  <div key={i} className="flex items-center gap-4 shrink-0">
                    <div className="px-6 py-4 rounded-xl bg-black-100 border border-white/10 text-neon-blue font-mono text-sm shadow-[0_0_15px_rgba(0,243,255,0.1)] text-center min-w-[150px]">
                      {node.trim()}
                    </div>
                    {i !== arr.length - 1 && (
                      <div className="hidden md:block text-slate-500 text-xl font-bold">
                        →
                      </div>
                    )}
                    {i !== arr.length - 1 && (
                      <div className="md:hidden text-slate-500 text-xl font-bold rotate-90">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Component Breakdown</h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-300">
                    {caseStudy.architecture.componentBreakdown.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Data Flow</h3>
                  <ul className="list-decimal pl-5 space-y-2 text-slate-300">
                    {caseStudy.architecture.dataFlow.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-black-200 border border-white/10 p-6 rounded-2xl h-fit">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">Infrastructure</h3>
                <div className="space-y-4">
                  <div>
                    <span className="block text-xs uppercase text-slate-500 tracking-wider">Models</span>
                    <span className="text-sm font-semibold text-neon-blue">{caseStudy.architecture.infrastructure.models}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-slate-500 tracking-wider">Databases</span>
                    <span className="text-sm font-semibold text-neon-purple">{caseStudy.architecture.infrastructure.databases}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-slate-500 tracking-wider">Caching</span>
                    <span className="text-sm font-semibold text-matrix-100">{caseStudy.architecture.infrastructure.caching}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-slate-500 tracking-wider">APIs</span>
                    <span className="text-sm font-semibold text-white">{caseStudy.architecture.infrastructure.apis}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Deep Dive */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="text-3xl font-bold mb-8 border-b border-white/10 pb-4">Engineering Deep Dive</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-red-400">Challenges</h3>
                  <ul className="list-disc pl-5 space-y-4 text-slate-300">
                    {caseStudy.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-neon-blue">Technical Decisions</h3>
                  <div className="space-y-6">
                    {caseStudy.technicalDecisions.map((dec, i) => (
                      <div key={i} className="bg-black-200 p-4 rounded-xl border border-white/5 border-l-2 border-l-neon-blue">
                        <h4 className="font-bold text-white mb-2">{dec.decision}</h4>
                        <p className="text-sm text-slate-400">{dec.rationale}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                 <div>
                    <h3 className="text-xl font-bold text-white mb-4">Results & Metrics</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {caseStudy.results.map((res, i) => (
                        <div key={i} className="p-4 rounded-xl bg-black-200 border border-white/5">
                          <div className="text-2xl font-bold text-neon-purple mb-1">{res.value}</div>
                          <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">{res.metric}</div>
                          <div className="text-xs text-slate-500">{res.context}</div>
                        </div>
                      ))}
                    </div>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-4">Lessons Learned</h3>
                    <ul className="list-disc pl-5 space-y-3 text-slate-300">
                      {caseStudy.lessonsLearned.map((lesson, i) => (
                        <li key={i} className="text-sm">{lesson}</li>
                      ))}
                    </ul>
                 </div>
              </div>
            </div>

            {/* Recruiter Takeaways */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="text-3xl font-bold mb-8 text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Recruiter Takeaways</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-black-200 border border-white/5 hover:border-white/20 transition-colors">
                  <h4 className="font-bold text-white mb-3 text-lg">AI Engineer</h4>
                  <p className="text-sm text-slate-400">{caseStudy.recruiterTakeaways.aiEngineer}</p>
                </div>
                <div className="p-6 rounded-2xl bg-black-200 border border-white/5 hover:border-white/20 transition-colors">
                  <h4 className="font-bold text-white mb-3 text-lg">ML Engineer</h4>
                  <p className="text-sm text-slate-400">{caseStudy.recruiterTakeaways.mlEngineer}</p>
                </div>
                <div className="p-6 rounded-2xl bg-black-200 border border-white/5 hover:border-white/20 transition-colors">
                  <h4 className="font-bold text-white mb-3 text-lg">Startup Founder</h4>
                  <p className="text-sm text-slate-400">{caseStudy.recruiterTakeaways.startupFounder}</p>
                </div>
                <div className="p-6 rounded-2xl bg-black-200 border border-white/5 hover:border-white/20 transition-colors">
                  <h4 className="font-bold text-white mb-3 text-lg">Software Engineer</h4>
                  <p className="text-sm text-slate-400">{caseStudy.recruiterTakeaways.softwareEngineer}</p>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="py-20 text-center text-slate-500">
            <p className="text-xl">{project.des}</p>
            <p className="mt-4">Detailed case study coming soon.</p>
          </div>
        )}

      </div>
    </main>
  );
}
