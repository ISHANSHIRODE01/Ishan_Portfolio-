import React from "react";
import { motion } from "framer-motion";

const nodes = {
  rag: [
    { id: "1", label: "Unstructured Data (PDF/Text)", type: "input" },
    { id: "2", label: "Semantic Chunker", type: "process" },
    { id: "3", label: "Embedding Model", type: "model" },
    { id: "4", label: "FAISS Vector DB", type: "db" },
    { id: "5", label: "User Query", type: "input" },
    { id: "6", label: "Retriever", type: "process" },
    { id: "7", label: "LLM Generation", type: "model" },
    { id: "8", label: "Final Output", type: "output" }
  ],
  mlops: [
    { id: "1", label: "Live Data Ingestion", type: "input" },
    { id: "2", label: "FastAPI Inference", type: "process" },
    { id: "3", label: "Prometheus Metrics", type: "db" },
    { id: "4", label: "Drift Detector (KS-Test)", type: "model" },
    { id: "5", label: "Alert Trigger", type: "process" },
    { id: "6", label: "Airflow Retraining", type: "process" }
  ],
  council: [
    { id: "1", label: "User Prompt", type: "input" },
    { id: "2", label: "LangChain Router", type: "process" },
    { id: "3", label: "GPT-4 Node", type: "model" },
    { id: "4", label: "Claude Node", type: "model" },
    { id: "5", label: "Llama-3 Node", type: "model" },
    { id: "6", label: "Evaluator/Consensus", type: "process" },
    { id: "7", label: "Verified Answer", type: "output" }
  ],
  fastapi: [
    { id: "1", label: "Client Request", type: "input" },
    { id: "2", label: "Load Balancer", type: "process" },
    { id: "3", label: "FastAPI Async Worker", type: "process" },
    { id: "4", label: "Redis Cache", type: "db" },
    { id: "5", label: "PyTorch Inference", type: "model" }
  ]
};

const NodeCard = ({ label, type, tooltip }: { label: string; type: string; tooltip?: string }) => {
  const getColors = () => {
    switch (type) {
      case "input": return "border-blue-500/50 bg-blue-500/10 text-blue-200";
      case "process": return "border-purple-500/50 bg-purple-500/10 text-purple-200";
      case "model": return "border-neon-blue/50 bg-neon-blue/10 text-neon-blue";
      case "db": return "border-matrix-100/50 bg-matrix-100/10 text-matrix-100";
      case "output": return "border-green-500/50 bg-green-500/10 text-green-200";
      default: return "border-white/20 bg-white/5 text-white";
    }
  };

  return (
    <div className={`relative group px-4 py-3 rounded-lg border backdrop-blur-sm text-sm font-medium text-center cursor-default ${getColors()}`}>
      {label}
      {tooltip && (
        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 text-xs bg-black-100 border border-white/20 rounded-md text-slate-300 z-50 pointer-events-none shadow-xl font-normal text-left">
          {tooltip}
        </div>
      )}
    </div>
  );
};

const SystemsArchitecture = () => {
  return (
    <section className="py-20 w-full relative z-10" id="architecture">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="heading mb-16">
          How I Build <span className="text-neon-purple">AI Systems</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* RAG Pipeline */}
          <div className="p-8 rounded-2xl bg-black-200 border border-white/[0.1] relative overflow-hidden group">
            <h3 className="text-2xl font-bold text-white mb-6">1. Enterprise RAG Pipeline</h3>
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex gap-4 items-center justify-center">
                <NodeCard label="Documents" type="input" />
                <span className="text-white/50">→</span>
                <NodeCard label="Semantic Chunker" type="process" />
              </div>
              <div className="flex gap-4 items-center justify-center">
                <NodeCard label="Embedding Model" type="model" tooltip="Uses BGE-large-en-v1.5 for dense representations, scoring top marks on MTEB benchmarks." />
                <span className="text-white/50">→</span>
                <NodeCard label="FAISS Vector DB" type="db" tooltip="Chose FAISS for its optimized C++ backend, enabling <50ms nearest-neighbor search on 1M+ vectors." />
              </div>
              <div className="flex gap-4 items-center justify-center border-t border-white/10 pt-4 mt-2">
                <NodeCard label="User Query" type="input" />
                <span className="text-white/50">→</span>
                <NodeCard label="Retriever" type="process" />
              </div>
              <div className="flex gap-4 items-center justify-center">
                <span className="text-white/50">↓</span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <NodeCard label="LLM Generation" type="model" />
                <span className="text-white/50">→</span>
                <NodeCard label="Final Output" type="output" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* MLOps Pipeline */}
          <div className="p-8 rounded-2xl bg-black-200 border border-white/[0.1] relative overflow-hidden group">
            <h3 className="text-2xl font-bold text-white mb-6">2. Automated MLOps (DriftGuard)</h3>
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex gap-4 items-center justify-center">
                <NodeCard label="Live Ingestion" type="input" />
                <span className="text-white/50">→</span>
                <NodeCard label="FastAPI Inference" type="process" />
              </div>
              <div className="flex gap-4 items-center justify-center">
                <span className="text-white/50">↓</span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <NodeCard label="Prometheus Metrics" type="db" tooltip="Time-series DB tracking confidence scores, latency, and input distributions." />
                <span className="text-white/50">→</span>
                <NodeCard label="Drift Detector" type="model" tooltip="Calculates KS-Statistic on incoming feature batches. Triggers if p-value < 0.05." />
              </div>
              <div className="flex gap-4 items-center justify-center">
                <span className="text-white/50">↓</span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <NodeCard label="Alert Trigger" type="process" />
                <span className="text-white/50">→</span>
                <NodeCard label="Airflow Retraining" type="process" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-matrix-100/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Multi-LLM Council */}
          <div className="p-8 rounded-2xl bg-black-200 border border-white/[0.1] relative overflow-hidden group">
            <h3 className="text-2xl font-bold text-white mb-6">3. Multi-LLM Council</h3>
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex gap-4 items-center justify-center">
                <NodeCard label="User Prompt" type="input" />
                <span className="text-white/50">→</span>
                <NodeCard label="LangChain Router" type="process" tooltip="Uses semantic routing to determine if the query requires standard retrieval, or multi-model consensus." />
              </div>
              <div className="grid grid-cols-3 gap-2 my-2">
                <NodeCard label="GPT-4" type="model" />
                <NodeCard label="Claude" type="model" />
                <NodeCard label="Llama-3" type="model" />
              </div>
              <div className="flex gap-4 items-center justify-center">
                <span className="text-white/50">↓</span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <NodeCard label="Evaluator (Consensus)" type="process" tooltip="A smaller, fast model (like Llama-3-8B) that acts purely as a judge to merge and verify the multi-node outputs." />
                <span className="text-white/50">→</span>
                <NodeCard label="Verified Answer" type="output" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* FastAPI Backend */}
          <div className="p-8 rounded-2xl bg-black-200 border border-white/[0.1] relative overflow-hidden group">
            <h3 className="text-2xl font-bold text-white mb-6">4. Scalable Inference API</h3>
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex gap-4 items-center justify-center">
                <NodeCard label="Client Request" type="input" />
                <span className="text-white/50">→</span>
                <NodeCard label="Load Balancer" type="process" />
              </div>
              <div className="flex gap-4 items-center justify-center">
                <span className="text-white/50">↓</span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <NodeCard label="FastAPI Async Worker" type="process" />
                <span className="text-white/50">↔</span>
                <NodeCard label="Redis Cache" type="db" />
              </div>
              <div className="flex gap-4 items-center justify-center">
                <span className="text-white/50">↓</span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <NodeCard label="PyTorch Engine" type="model" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SystemsArchitecture;
