import { Shield, Github, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-cyan-400" />
              <span className="text-xl text-white">Cyber Security Guide</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              A comprehensive resource for understanding threats and protection on the network. Stay informed, stay secure.
            </p>
            <p className="text-slate-500 text-sm">
              Created by Kacper Barański & Jakub Daniel
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#introduction" className="hover:text-cyan-400 transition-colors">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#threats" className="hover:text-cyan-400 transition-colors">
                  Cyber Threats
                </a>
              </li>
              <li>
                <a href="#protection" className="hover:text-cyan-400 transition-colors">
                  Data Protection
                </a>
              </li>
              <li>
                <a href="#transactions" className="hover:text-cyan-400 transition-colors">
                  Online Transactions
                </a>
              </li>
              <li>
                <a href="#legal" className="hover:text-cyan-400 transition-colors">
                  Legal & Ethics
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  GDPR Official Site
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.cisa.gov/cybersecurity" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  CISA Cybersecurity
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://haveibeenpwned.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Check Data Breaches
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.eff.org/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Electronic Frontier Foundation
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 Cyber Security Guide. Educational purposes only.
          </p>
          
          <div className="flex gap-4">
            <a href="mailto:contact@example.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
          <p className="text-slate-400 text-xs text-center">
            <span className="text-yellow-400">Disclaimer:</span> This guide is for educational purposes only. While we strive for accuracy, cybersecurity is a rapidly evolving field. Always consult with cybersecurity professionals for specific security implementations and stay updated with the latest security practices.
          </p>
        </div>
      </div>
    </footer>
  );
}
