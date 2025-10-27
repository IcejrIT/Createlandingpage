import { Shield, Lock, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjE0OTE4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cybersecurity"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="text-center space-y-8">
          <div className="flex justify-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-cyan-400" />
            <Lock className="w-12 h-12 text-blue-400" />
            <Eye className="w-12 h-12 text-indigo-400" />
          </div>
          
          <h1 className="text-5xl lg:text-7xl text-white tracking-tight">
            CYBER SECURITY
          </h1>
          
          <p className="text-2xl lg:text-3xl text-cyan-300">
            Threats and Protection on the Network
          </p>
          
          <div className="pt-6">
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              A comprehensive guide to understanding digital threats, protecting your data, and navigating the complex landscape of online security in the modern age.
            </p>
          </div>
          
          <div className="pt-8 text-slate-400">
            <p>Authored by: <span className="text-cyan-400">Kacper Barański</span> & <span className="text-cyan-400">Jakub Daniel</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
