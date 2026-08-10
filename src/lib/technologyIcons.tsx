import React from "react";
import Image from "next/image";
import { Key, Lock, Shield, Award } from "lucide-react";
import {
  PythonLogo,
  ReactLogo,
  NextjsLogo,
  DockerLogo,
  KubernetesLogo,
  TerraformLogo,
  PostgresLogo,
  MongoDBLogo,
  RedisLogo,
  SupabaseLogo,
  TypeScriptLogo,
  TailwindLogo,
  FramerMotionLogo,
  FastAPILogo,
  DjangoLogo,
  ExpressLogo,
  JavaLogo,
  GoLogo,
  NodeLogo,
} from "@/components/TechLogos";

interface TechIconProps {
  name: string;
  size?: number;
}

// Dedicated Public SVG File Registry (/public/logos/)
const dedicatedPublicSvgs: Record<string, { src: string; alt: string }> = {
  aws: { src: "/logos/aws.svg", alt: "AWS Cloud" },
  amazon: { src: "/logos/aws.svg", alt: "AWS Cloud" },
  azure: { src: "/logos/azure.svg", alt: "Microsoft Azure" },
  microsoft: { src: "/logos/azure.svg", alt: "Microsoft Azure" },
  "google cloud": { src: "/logos/google-cloud.svg", alt: "Google Cloud" },
  gcp: { src: "/logos/google-cloud.svg", alt: "Google Cloud" },
  claude: { src: "/logos/anthropic.svg", alt: "Anthropic Claude" },
  anthropic: { src: "/logos/anthropic.svg", alt: "Anthropic Claude" },
  gemini: { src: "/logos/gemini.svg", alt: "Google Gemini" },
  langchain: { src: "/logos/langchain.svg", alt: "LangChain" },
  llama: { src: "/logos/llama.svg", alt: "Meta Llama 3" },
  mistral: { src: "/logos/mistral.svg", alt: "Mistral AI" },
  openai: { src: "/logos/openai.svg", alt: "OpenAI" },
};

export const GetTechIcon: React.FC<TechIconProps> = ({ name, size = 24 }) => {
  const lowered = name.toLowerCase();

  // Priority 1: Check Dedicated Public SVG File Registry (/public/logos/)
  for (const key of Object.keys(dedicatedPublicSvgs)) {
    if (lowered.includes(key)) {
      const svgInfo = dedicatedPublicSvgs[key];
      return (
        <Image
          src={svgInfo.src}
          alt={svgInfo.alt}
          width={size}
          height={size}
          className="object-contain flex-shrink-0"
        />
      );
    }
  }

  // Priority 2: Vector Brand SVG Component Registry
  if (lowered.includes("python")) return <PythonLogo size={size} />;
  if (lowered.includes("react")) return <ReactLogo size={size} />;
  if (lowered.includes("next")) return <NextjsLogo size={size} />;
  if (lowered.includes("typescript")) return <TypeScriptLogo size={size} />;
  if (lowered.includes("tailwind")) return <TailwindLogo size={size} />;
  if (lowered.includes("framer")) return <FramerMotionLogo size={size} />;
  if (lowered.includes("docker")) return <DockerLogo size={size} />;
  if (lowered.includes("kubernetes") || lowered.includes("k8s")) return <KubernetesLogo size={size} />;
  if (lowered.includes("terraform")) return <TerraformLogo size={size} />;
  if (lowered.includes("postgres")) return <PostgresLogo size={size} />;
  if (lowered.includes("mongo")) return <MongoDBLogo size={size} />;
  if (lowered.includes("redis")) return <RedisLogo size={size} />;
  if (lowered.includes("supabase")) return <SupabaseLogo size={size} />;
  if (lowered.includes("node")) return <NodeLogo size={size} />;
  if (lowered.includes("express")) return <ExpressLogo size={size} />;
  if (lowered.includes("django")) return <DjangoLogo size={size} />;
  if (lowered.includes("fastapi")) return <FastAPILogo size={size} />;
  if (lowered.includes("java")) return <JavaLogo size={size} />;
  if (lowered.includes("go")) return <GoLogo size={size} />;

  // Priority 3: Clean Security & Protocol Lucide Icons
  if (lowered.includes("jwt") || lowered.includes("token")) return <Key size={size} className="text-[#0B6E4F]" />;
  if (lowered.includes("oauth") || lowered.includes("auth")) return <Lock size={size} className="text-[#C9A227]" />;
  if (lowered.includes("zero trust") || lowered.includes("security")) return <Shield size={size} className="text-[#0B6E4F]" />;
  if (lowered.includes("iso")) return <Award size={size} className="text-[#C9A227]" />;

  return (
    <div
      style={{ width: size, height: size }}
      className="rounded bg-[#0B6E4F]15 flex items-center justify-center text-[10px] font-bold text-[#0B6E4F] flex-shrink-0"
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
};
