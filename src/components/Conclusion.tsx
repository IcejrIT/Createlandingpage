import { Shield, CheckCircle, AlertTriangle, Lock } from "lucide-react";
import { Card } from "./ui/card";

export function Conclusion() {
  const keyTakeaways = [
    {
      icon: Shield,
      title: "Stay Informed",
      description: "Cyber threats are constantly evolving. Keep yourself updated on the latest security trends and emerging threats to stay one step ahead of attackers."
    },
    {
      icon: Lock,
      title: "Use Strong Security Measures",
      description: "Implement multi-factor authentication, use strong unique passwords, keep software updated, and encrypt sensitive data to protect your digital assets."
    },
    {
      icon: CheckCircle,
      title: "Practice Safe Online Behavior",
      description: "Be cautious with emails and links, verify website authenticity, use secure networks, and think before sharing personal information online."
    },
    {
      icon: AlertTriangle,
      title: "Be Prepared",
      description: "Maintain regular backups, have an incident response plan, know your rights under data protection laws, and understand how to report cybercrime."
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Conclusion
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Key takeaways for cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {keyTakeaways.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-cyan-500/50 p-8 lg:p-12 backdrop-blur-sm text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyan-500/20 rounded-full">
                <Shield className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            
            <h3 className="text-3xl text-white mb-4">
              The Future of Cybersecurity
            </h3>
            
            <p className="text-slate-300 text-lg mb-6">
              As cyberattacks grow more sophisticated, understanding digital threats has become essential for everyone. The increasing interconnectedness of our world means that cybersecurity is no longer just an IT concern—it's a fundamental aspect of modern life.
            </p>
            
            <div className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/30 mb-6">
              <p className="text-slate-300 mb-4">
                Secure payment systems, strong authentication methods, and user awareness are critical defenses against financial losses and identity theft. Legal frameworks like GDPR provide important protections, but they work best when users understand and exercise their rights.
              </p>
              
              <p className="text-slate-300">
                Technology alone cannot solve all security problems. The human element remains both the weakest link and the strongest defense in cybersecurity. Education, vigilance, and responsible digital citizenship are essential.
              </p>
            </div>
            
            <div className="bg-cyan-500/10 p-6 rounded-lg border border-cyan-500/50">
              <p className="text-white text-xl mb-3">
                Remember: YOU play a crucial role in cybersecurity
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 text-left mt-6">
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mb-2" />
                  <p className="text-slate-300 text-sm">
                    Stay cautious online and question suspicious communications
                  </p>
                </div>
                
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mb-2" />
                  <p className="text-slate-300 text-sm">
                    Use strong, unique passwords and enable MFA everywhere possible
                  </p>
                </div>
                
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mb-2" />
                  <p className="text-slate-300 text-sm">
                    Keep your software updated and maintain regular backups
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <p className="text-slate-400 text-sm">
                Cybersecurity is not a destination but a continuous journey of learning, adaptation, and vigilance. By staying informed and practicing good security habits, we can all contribute to a safer digital world.
              </p>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-slate-800/50 border-slate-700 p-8 backdrop-blur-sm inline-block">
            <h3 className="text-2xl text-white mb-4">Ready to Test Your Knowledge?</h3>
            <p className="text-slate-400 mb-6">
              Take our cybersecurity quiz to see how much you've learned!
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                Start Quiz
              </button>
              <a
                href="https://www.canva.com/design/DAG3Al0rogY/qWX5Ky2SyVsxMIcCH-9RYA/view?utm_content=DAG3Al0rogY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h66d5e6a652"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors inline-block"
              >
                Check Out Presentation
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
