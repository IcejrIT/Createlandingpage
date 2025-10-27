import { Shield, TrendingUp, Lock } from "lucide-react";
import { Card } from "./ui/card";

export function Introduction() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Introduction to Cyber Security
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Understanding the fundamentals of protecting our digital lives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* What is Cyber Security */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-2">What is Cyber Security?</h3>
              </div>
            </div>
            
            <div className="space-y-4 text-slate-300">
              <p>
                Cyber security is the practice of protecting computer systems, networks, and data from digital attacks, unauthorized access, and damage. It encompasses a comprehensive set of technologies, processes, and practices designed to safeguard our digital assets.
              </p>
              
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-cyan-400 mb-3">The CIA Triad - Core Principles:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Lock className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white">Confidentiality:</span> Ensuring that information is accessible only to authorized individuals and entities.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white">Integrity:</span> Maintaining the accuracy and completeness of data, protecting it from unauthorized modifications.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white">Availability:</span> Ensuring that authorized users have reliable access to information and resources when needed.
                    </div>
                  </li>
                </ul>
              </div>
              
              <p>
                Modern cyber security involves multiple layers of protection, including network security, application security, endpoint security, data security, and identity management. It requires constant vigilance and adaptation to evolving threats.
              </p>
            </div>
          </Card>

          {/* Why is Online Protection Important */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-2">Why is Online Protection Important?</h3>
              </div>
            </div>
            
            <div className="space-y-4 text-slate-300">
              <p>
                In our increasingly connected world, cyber security has become essential for individuals, businesses, and governments alike. The stakes have never been higher as we conduct more of our lives online.
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-blue-400 mb-2">Personal Privacy Protection</h4>
                  <p className="text-sm">
                    Your personal information, including financial records, health data, photos, and communications, deserves protection. Identity theft can devastate lives, with victims spending years recovering their reputation and finances. Strong cyber security prevents unauthorized access to your most sensitive information.
                  </p>
                </div>
                
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-blue-400 mb-2">Financial Security</h4>
                  <p className="text-sm">
                    Cyber attacks can result in direct financial losses through theft, fraud, or ransomware. Businesses face additional costs from operational disruptions, legal liabilities, and regulatory fines. The average cost of a data breach now exceeds millions of dollars for organizations.
                  </p>
                </div>
                
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-blue-400 mb-2">Trust and Reputation</h4>
                  <p className="text-sm">
                    For businesses, a security breach can permanently damage customer trust and brand reputation. Companies must demonstrate their commitment to protecting user data to maintain confidence in their services and ensure business continuity.
                  </p>
                </div>
                
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-blue-400 mb-2">National Security</h4>
                  <p className="text-sm">
                    Critical infrastructure, government systems, and defense networks are constant targets. Protecting these systems is vital for national security, public safety, and the functioning of essential services.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
