import React from "react";
import { Key, Lock, Shield, Award } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: number;
}

export const PythonLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M11.91 2C6.91 2 7.23 4.18 7.23 4.18V6.4H12.08V7.07H5.32C5.32 7.07 2 6.7 2 11.75C2 16.8 4.9 16.53 4.9 16.53H6.55V14.16C6.55 11.51 8.84 11.56 8.84 11.56H13.88C13.88 11.56 16.03 11.51 16.03 9.25V4.28C16.03 4.28 16.39 2 11.91 2ZM9.41 3.51C9.9 3.51 10.3 3.9 10.3 4.39C10.3 4.88 9.9 5.28 9.41 5.28C8.92 5.28 8.52 4.88 8.52 4.39C8.52 3.9 8.92 3.51 9.41 3.51Z" fill="#3776AB" />
    <path d="M12.09 22C17.09 22 16.77 19.82 16.77 19.82V17.6H11.92V16.93H18.68C18.68 16.93 22 17.3 22 12.25C22 7.2 19.1 7.47 19.1 7.47H17.45V9.84C17.45 12.49 15.16 14.44 15.16 14.44H10.12C10.12 14.44 7.97 14.49 7.97 16.75V21.72C7.97 21.72 7.61 22 12.09 22ZM14.59 20.49C14.1 20.49 13.7 20.1 13.7 19.61C13.7 19.12 14.1 18.72 14.59 18.72C15.08 18.72 15.48 19.12 15.48 19.61C15.48 20.1 15.08 20.49 14.59 20.49Z" fill="#FFD43B" />
  </svg>
);

export const OpenAILogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M22.28 9.77a6 6 0 00-.53-5.06 6.07 6.07 0 00-6.55-2.8 6.06 6.06 0 00-4.88-2.4 6.07 6.07 0 00-5.78 4.14A6.06 6.06 0 001 7.03a6.07 6.07 0 00.77 7.2 6 6 0 00.53 5.06 6.07 6.07 0 006.55 2.8 6.06 6.06 0 004.88 2.4 6.07 6.07 0 005.78-4.14 6.06 6.06 0 003.57-3.38 6.07 6.07 0 00-.8-7.2zm-9.08 12.2a4.54 4.54 0 01-2.44-.7l.14-.24 2.89-1.67a.76.76 0 00.38-.66v-4.08l1.22.7v3.42a4.57 4.57 0 01-2.19 2.53zM4.1 18.23a4.54 4.54 0 01-.62-2.46l.27.16 2.89 1.67a.76.76 0 00.76 0l3.53-2.04v1.41l-2.96 1.71a4.57 4.57 0 01-3.87-.45zm-1.57-9.5a4.54 4.54 0 011.82-1.77l.13.25 2.89 1.67a.76.76 0 00.38.66v4.08l-1.22-.7V9.5a4.57 4.57 0 01-2-3.77zm15.7 6.04l-2.89-1.67a.76.76 0 00-.76 0l-3.53 2.04v-1.41l2.96-1.71a4.57 4.57 0 014.49 7.42zm1.57-5.54a4.54 4.54 0 01-1.82 1.77l-.13-.25-2.89-1.67a.76.76 0 00-.38-.66V4.34l1.22.7v3.42a4.57 4.57 0 012 3.77zm-8.8-6.73a4.54 4.54 0 012.44.7l-.14.24-2.89 1.67a.76.76 0 00-.38.66v4.08l-1.22-.7V4.5a4.57 4.57 0 012.19-2.53zm-1.04 7.21l1.83-1.06 1.83 1.06v2.12l-1.83 1.06-1.83-1.06v-2.12z" fill="#10A37F" />
  </svg>
);

export const ClaudeLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#D97706" />
    <circle cx="12" cy="12" r="5" fill="#D97706" />
  </svg>
);

export const GeminiLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#geminiGrad)" />
    <defs>
      <linearGradient id="geminiGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1A73E8" />
        <stop offset="0.5" stopColor="#8AB4F8" />
        <stop offset="1" stopColor="#C58AF9" />
      </linearGradient>
    </defs>
  </svg>
);

export const LangChainLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="5" fill="#0052CC" />
    <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LlamaLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="12" cy="12" r="10" fill="#047857" />
    <path d="M9 16V9l3-3 3 3v7M9 13h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const MistralLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <rect x="2" y="4" width="4" height="4" fill="#FF7000" />
    <rect x="18" y="4" width="4" height="4" fill="#FF7000" />
    <rect x="6" y="8" width="4" height="4" fill="#FF7000" />
    <rect x="14" y="8" width="4" height="4" fill="#FF7000" />
    <rect x="10" y="12" width="4" height="4" fill="#FF7000" />
    <rect x="6" y="16" width="4" height="4" fill="#FF7000" />
    <rect x="14" y="16" width="4" height="4" fill="#FF7000" />
  </svg>
);

export const ReactLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
  </svg>
);

export const NextjsLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="black" />
    <path d="M18.8 19.35L10.3 8.4V16.8H8.4V7.2H10.2L17.7 16.95V7.2H19.6V19.35H18.8Z" fill="white" />
  </svg>
);

export const AWSLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M7.4 12.5c0-.9.4-1.4 1.2-1.4.7 0 1.1.4 1.1 1.2v2.5H8.6v-2.3c0-.4-.2-.6-.5-.6s-.6.2-.7.6v2.3H6.3V10.1h1.1v2.4zm4.4-2.4l.8 3.5.8-3.5h1.3l.9 3.5.8-3.5h1.2l-1.4 4.8h-1.3l-.8-3.2-.8 3.2h-1.3l-1.4-4.8h1.2zm7.6 2.6c0-1.5 1-2.6 2.5-2.6.9 0 1.6.4 2 1.1l-.9.6c-.3-.4-.7-.6-1.1-.6-.8 0-1.3.6-1.3 1.5 0 .9.5 1.5 1.3 1.5.4 0 .8-.2 1.1-.6l.9.6c-.4.7-1.1 1.1-2 1.1-1.5 0-2.5-1.1-2.5-2.6z" fill="#FF9900" />
    <path d="M5.5 17.5c5.3 2.2 12.2 2.2 17.1-1" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const AzureLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12.5 3L4 16.2H9.5L12.5 3Z" fill="#0078D4" />
    <path d="M5.8 16.2L2 21H18L22 14.5H13.8L5.8 16.2Z" fill="#0078D4" />
  </svg>
);

export const GCPLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" />
  </svg>
);

export const DockerLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M1.5 13.5C2.5 17.5 6.5 20.5 12 20.5C18.5 20.5 22.5 15.5 22.5 13.5C20.5 13.5 18 14.5 15.5 14.5C12.5 14.5 10 13.5 7.5 13.5C5 13.5 3 14 1.5 13.5Z" fill="#2496ED" />
    <rect x="5" y="10" width="2" height="2" rx="0.5" fill="#2496ED" />
    <rect x="8" y="10" width="2" height="2" rx="0.5" fill="#2496ED" />
    <rect x="11" y="10" width="2" height="2" rx="0.5" fill="#2496ED" />
    <rect x="8" y="7" width="2" height="2" rx="0.5" fill="#2496ED" />
    <rect x="11" y="7" width="2" height="2" rx="0.5" fill="#2496ED" />
    <rect x="11" y="4" width="2" height="2" rx="0.5" fill="#2496ED" />
  </svg>
);

export const KubernetesLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="#326CE5" />
    <circle cx="12" cy="12" r="4" fill="white" />
  </svg>
);

export const TerraformLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <polygon points="3,3 9,3 9,9 3,9" fill="#7B42BC" />
    <polygon points="10,3 16,3 16,9 10,9" fill="#7B42BC" />
    <polygon points="10,10 16,10 16,16 10,16" fill="#7B42BC" />
    <polygon points="17,10 23,10 23,16 17,16" fill="#5C2D91" />
  </svg>
);

export const PostgresLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 15C15 16 13.5 16.5 12 16.5C9.5 16.5 8 14.5 8 12.5C8 10 10 8 12.5 8C14.5 8 16 9.5 16 11.5H14C14 10.5 13.2 9.8 12.2 9.8C11 9.8 9.8 10.8 9.8 12.2C9.8 13.6 11 14.7 12.2 14.7C13.2 14.7 14 14 14.2 13.2H12V11.5H16V15Z" fill="#336791" />
  </svg>
);

export const MongoDBLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 2C11.5 4 6 9.5 6 15c0 3.3 2.7 6 6 6s6-2.7 6-6c0-5.5-5.5-11-6-13z" fill="#47A248" />
  </svg>
);

export const RedisLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="4" fill="#DC382D" />
    <path d="M6 8l6-3 6 3-6 3-6-3zm0 4l6 3 6-3v2l-6 3-6-3v-2z" fill="white" />
  </svg>
);

export const SupabaseLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M13.4 2.1L3.9 14.7c-.4.5-.1 1.3.6 1.3H11v5.9c0 .8 1 .1 1.4-.4l9.5-12.6c.4-.5.1-1.3-.6-1.3H13v-5.5c.4-.8-.6-1.1-1-.6z" fill="#3ECF8E" />
  </svg>
);

export const TypeScriptLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M11.5 11.5H8.5V13H10V18.5H11.5V11.5ZM16.8 13.8C16.2 13.3 15.3 13 14.4 13C13.7 13 13.2 13.2 13.2 13.6C13.2 14 13.6 14.2 14.5 14.5L15.3 14.8C16.6 15.2 17.2 16 17.2 17.1C17.2 18.5 15.9 19.3 14.2 19.3C13.1 19.3 12 18.9 11.2 18.3L12 17C12.7 17.5 13.5 17.8 14.3 17.8C15 17.8 15.5 17.5 15.5 17.1C15.5 16.7 15.1 16.5 14.2 16.2L13.4 15.9C12.2 15.5 11.6 14.7 11.6 13.6C11.6 12.2 12.8 11.4 14.5 11.4C15.4 11.4 16.3 11.7 17 12.1L16.8 13.8Z" fill="white" />
  </svg>
);

export const TailwindLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 6C9.33333 6 7.66667 7.33333 7 10C8 8.66667 9.16667 8.16667 10.5 8.5C11.4 8.725 12.045 9.37833 12.755 10.095C13.9133 11.265 15.24 12.6 19 12.6C21.6667 12.6 23.3333 11.2667 24 8.6%)" fill="#06B6D4" />
    <path d="M7 12.6C4.33333 12.6 2.66667 13.9333 2 16.6C3 15.2667 4.16667 14.7667 5.5 15.1C6.4 15.325 7.045 15.9783 7.755 16.695C8.91333 17.865 10.24 19.2 14 19.2C16.6667 19.2 18.3333 17.8667 19 15.2C18 16.5333 16.8333 17.0333 15.5 16.7C14.6 16.475 13.955 15.8217 13.245 15.105C12.0867 13.935 10.76 12.6 7 12.6Z" fill="#06B6D4" />
  </svg>
);

export const FramerMotionLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
  </svg>
);

export const DjangoLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="4" fill="#092E20" />
    <text x="5" y="17" fill="#44B78B" fontSize="13" fontWeight="bold" fontFamily="sans-serif">dj</text>
  </svg>
);

export const ExpressLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="4" fill="#303030" />
    <text x="4" y="16" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">ex</text>
  </svg>
);

export const JavaLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 2a4 4 0 0 0-4 4c0 2 2 3 4 3s4-1 4-3a4 4 0 0 0-4-4zm-6 9c0 3 3 5 6 5s6-2 6-5H6zm0 7c0 2 3 4 6 4s6-2 6-4H6z" fill="#ED8B00" />
  </svg>
);

export const GoLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="4" fill="#00ADD8" />
    <text x="4" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">GO</text>
  </svg>
);

export const FastAPILogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="12" cy="12" r="10" fill="#059669" />
    <path d="M13 5L6 13H12L11 19L18 11H12L13 5Z" fill="white" />
  </svg>
);

export const NodeLogo: React.FC<LogoProps> = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 2L2 7.78V16.22L12 22L22 16.22V7.78L12 2Z" fill="#339933" />
    <path d="M12 12V22M12 12L2 7.78M12 12L22 7.78" stroke="white" strokeWidth="1" />
  </svg>
);

export const DefaultTechLogo: React.FC<{ name: string; size?: number }> = ({ name, size = 22 }) => {
  const lowered = name.toLowerCase();

  if (lowered.includes("python")) return <PythonLogo size={size} />;
  if (lowered.includes("openai")) return <OpenAILogo size={size} />;
  if (lowered.includes("claude")) return <ClaudeLogo size={size} />;
  if (lowered.includes("gemini")) return <GeminiLogo size={size} />;
  if (lowered.includes("langchain")) return <LangChainLogo size={size} />;
  if (lowered.includes("llama")) return <LlamaLogo size={size} />;
  if (lowered.includes("mistral")) return <MistralLogo size={size} />;
  if (lowered.includes("react")) return <ReactLogo size={size} />;
  if (lowered.includes("next")) return <NextjsLogo size={size} />;
  if (lowered.includes("aws")) return <AWSLogo size={size} />;
  if (lowered.includes("azure")) return <AzureLogo size={size} />;
  if (lowered.includes("google cloud") || lowered.includes("gcp")) return <GCPLogo size={size} />;
  if (lowered.includes("docker")) return <DockerLogo size={size} />;
  if (lowered.includes("kubernetes")) return <KubernetesLogo size={size} />;
  if (lowered.includes("terraform")) return <TerraformLogo size={size} />;
  if (lowered.includes("postgres")) return <PostgresLogo size={size} />;
  if (lowered.includes("mongo")) return <MongoDBLogo size={size} />;
  if (lowered.includes("redis")) return <RedisLogo size={size} />;
  if (lowered.includes("supabase")) return <SupabaseLogo size={size} />;
  if (lowered.includes("typescript")) return <TypeScriptLogo size={size} />;
  if (lowered.includes("tailwind")) return <TailwindLogo size={size} />;
  if (lowered.includes("framer")) return <FramerMotionLogo size={size} />;
  if (lowered.includes("fastapi")) return <FastAPILogo size={size} />;
  if (lowered.includes("django")) return <DjangoLogo size={size} />;
  if (lowered.includes("express")) return <ExpressLogo size={size} />;
  if (lowered.includes("java")) return <JavaLogo size={size} />;
  if (lowered.includes("go")) return <GoLogo size={size} />;
  if (lowered.includes("node")) return <NodeLogo size={size} />;

  // Professional security icon fallbacks
  if (lowered.includes("jwt") || lowered.includes("token")) return <Key size={size} className="text-[#0B6E4F]" />;
  if (lowered.includes("oauth") || lowered.includes("auth")) return <Lock size={size} className="text-[#C9A227]" />;
  if (lowered.includes("zero trust") || lowered.includes("security")) return <Shield size={size} className="text-[#0B6E4F]" />;
  if (lowered.includes("iso")) return <Award size={size} className="text-[#C9A227]" />;

  return (
    <div className="w-5 h-5 rounded bg-[#0B6E4F]15 flex items-center justify-center text-[10px] font-bold text-[#0B6E4F]">
      {name.charAt(0).toUpperCase()}
    </div>
  );
};
