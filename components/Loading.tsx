"use client";

import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-100">
      <div className="flex flex-col items-center space-y-8">
        <motion.div
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-20 h-20 border-4 border-purple/30 rounded-full" />
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-purple rounded-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-purple mb-2">ISHAN SHIRODE</h2>
          <p className="text-white-200">Loading Portfolio...</p>
        </motion.div>
        
        <motion.div
          className="flex space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-purple rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;