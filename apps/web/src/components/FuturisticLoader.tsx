"use client";

import { motion } from "framer-motion";

interface FuturisticLoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  variant?: "spinner" | "bars" | "pulse" | "orbital";
}

export function FuturisticLoader({ 
  size = "md", 
  text,
  variant = "spinner" 
}: FuturisticLoaderProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  if (variant === "bars") {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-end gap-1 h-8">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 rounded-full bg-gradient-to-t from-cyan-500 to-purple-500"
              animate={{
                height: ["8px", "24px", "12px", "28px", "8px"],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
              style={{
                boxShadow: "0 0 10px rgba(0, 245, 255, 0.5)",
              }}
            />
          ))}
        </div>
        {text && (
          <span className={`${textSizes[size]} text-gray-400 font-mono tracking-wider`}>
            {text}
          </span>
        )}
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <motion.div
            className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-cyan-500 to-purple-500`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-gradient-to-r from-cyan-500 to-purple-500`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
        </div>
        {text && (
          <span className={`${textSizes[size]} text-gray-400 font-mono tracking-wider`}>
            {text}
          </span>
        )}
      </div>
    );
  }

  if (variant === "orbital") {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className={`relative ${sizeClasses[size]}`}>
          {/* Orbiting particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: i === 0 ? "#00f5ff" : i === 1 ? "#a855f7" : "#ff00ff",
                  top: "0%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: `0 0 10px ${i === 0 ? "#00f5ff" : i === 1 ? "#a855f7" : "#ff00ff"}`,
                }}
              />
            </motion.div>
          ))}
          {/* Center */}
          <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30" />
        </div>
        {text && (
          <span className={`${textSizes[size]} text-gray-400 font-mono tracking-wider`}>
            {text}
          </span>
        )}
      </div>
    );
  }

  // Default spinner
  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: "#00f5ff",
            borderRightColor: "#a855f7",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Inner ring */}
        <motion.div
          className="absolute inset-1 rounded-full border-2 border-transparent"
          style={{
            borderBottomColor: "#ff00ff",
            borderLeftColor: "#00f5ff",
          }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Center glow */}
        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
        
        {/* Glow effect */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: "0 0 20px rgba(0, 245, 255, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.2)",
          }}
        />
      </div>
      {text && (
        <motion.span 
          className={`${textSizes[size]} text-gray-400 font-mono tracking-wider`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {text}
        </motion.span>
      )}
    </div>
  );
}

/**
 * Skeleton loader for content placeholders
 */
export function SkeletonLoader({ 
  className = "",
  variant = "default" 
}: { 
  className?: string;
  variant?: "default" | "station" | "text";
}) {
  if (variant === "station") {
    return (
      <div className={`flex items-center gap-3 p-3 ${className}`}>
        <div className="w-10 h-10 rounded-lg skeleton" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded skeleton" />
          <div className="h-3 w-1/2 rounded skeleton" />
        </div>
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="h-4 w-full rounded skeleton" />
        <div className="h-4 w-5/6 rounded skeleton" />
        <div className="h-4 w-4/6 rounded skeleton" />
      </div>
    );
  }

  return <div className={`skeleton rounded ${className}`} />;
}

/**
 * Glitch text effect for futuristic UI
 */
export function GlitchText({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={{
        textShadow: [
          "0 0 0 transparent",
          "2px 0 #00f5ff, -2px 0 #ff00ff",
          "0 0 0 transparent",
        ],
      }}
      transition={{
        duration: 0.1,
        repeat: Infinity,
        repeatDelay: 5,
      }}
    >
      {children}
    </motion.span>
  );
}

/**
 * Typing effect for terminal-style text
 */
export function TypingText({ 
  text, 
  speed = 50,
  className = "" 
}: { 
  text: string;
  speed?: number;
  className?: string;
}) {
  return (
    <motion.span
      className={`font-mono ${className}`}
      initial={{ opacity: 1 }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * (speed / 1000) }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-2 h-4 bg-cyan-400 ml-0.5"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </motion.span>
  );
}
