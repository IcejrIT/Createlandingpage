import { Bug, Radio, AlertOctagon, UserX, Lock, Mail } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function CyberThreats() {
  const threats = [
    {
      icon: Bug,
      name: "Spyware",
      severity: "High",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      description: "Spyware operates silently in the background, monitoring and recording user activities without their knowledge or consent.",
      details: [
        "Tracks browsing habits, keystrokes, and personal information",
        "Can capture login credentials, credit card numbers, and sensitive documents",
        "Often bundled with legitimate software or distributed through malicious websites",
        "May slow down system performance and cause stability issues",
        "Difficult to detect without specialized anti-spyware tools"
      ]
    },
    {
      icon: Radio,
      name: "Adware",
      severity: "Medium",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      description: "Adware automatically displays or downloads advertising material when a user is online, often collecting user data in the process.",
      details: [
        "Displays pop-up ads, banners, and redirects browser searches",
        "Collects browsing data to target specific advertisements",
        "Can track users across multiple websites and apps",
        "May degrade system performance and internet speed",
        "Sometimes serves as a gateway for more dangerous malware"
      ]
    },
    {
      icon: AlertOctagon,
      name: "Viruses & Worms",
      severity: "Critical",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      description: "Self-replicating malicious programs that can spread across networks, infecting files and devices rapidly.",
      details: [
        "Viruses attach to files and require user action to spread",
        "Worms self-replicate without user intervention across networks",
        "Can corrupt or delete files, consuming system resources",
        "May create backdoors for other types of malware",
        "Can spread through email attachments, USB drives, and network shares"
      ]
    },
    {
      icon: UserX,
      name: "Trojans",
      severity: "Critical",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      description: "Malicious software disguised as legitimate applications, creating unauthorized access points to your system.",
      details: [
        "Appears as useful software but contains hidden malicious code",
        "Creates backdoors allowing remote access to attackers",
        "Can steal sensitive information, modify files, or install additional malware",
        "Often distributed through software downloads, email attachments, or fake updates",
        "May disable security software to avoid detection"
      ]
    },
    {
      icon: Lock,
      name: "Ransomware",
      severity: "Critical",
      color: "text-rose-400",
      bgColor: "bg-rose-500/10",
      description: "Encrypts user data and demands payment for file restoration, causing severe disruption to individuals and organizations.",
      details: [
        "Encrypts files making them inaccessible without a decryption key",
        "Demands payment (usually in cryptocurrency) for file recovery",
        "No guarantee files will be restored even after payment",
        "Can spread across entire networks, affecting multiple systems",
        "Prevention through backups is the best defense"
      ]
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Types of Cyber Threats
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Understanding the various forms of malicious software and attacks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {threats.map((threat) => {
            const Icon = threat.icon;
            return (
              <Card key={threat.name} className="bg-slate-800/50 border-slate-700 p-6 backdrop-blur-sm hover:border-slate-600 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 ${threat.bgColor} rounded-lg`}>
                    <Icon className={`w-6 h-6 ${threat.color}`} />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${threat.severity === 'Critical' ? 'border-red-500 text-red-400' : threat.severity === 'High' ? 'border-orange-500 text-orange-400' : 'border-yellow-500 text-yellow-400'}`}
                  >
                    {threat.severity}
                  </Badge>
                </div>
                
                <h3 className={`text-xl text-white mb-3`}>{threat.name}</h3>
                
                <p className="text-slate-400 text-sm mb-4">
                  {threat.description}
                </p>
                
                <ul className="space-y-2">
                  {threat.details.map((detail, idx) => (
                    <li key={idx} className="text-slate-400 text-xs flex items-start gap-2">
                      <span className={`${threat.color} mt-1`}>•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Phishing - The Boss */}
        <Card className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-red-500/50 p-8 backdrop-blur-sm">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-red-500/20 rounded-lg">
              <Mail className="w-12 h-12 text-red-400" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl text-white">The Boss: Phishing</h3>
                <Badge variant="outline" className="border-red-500 text-red-400">Most Common</Badge>
              </div>
              
              <p className="text-slate-300 mb-6">
                Phishing is one of the most prevalent and effective cyber threats, using social engineering to trick users into revealing sensitive information.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-red-400">How Phishing Works:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Attackers impersonate trusted entities like banks, companies, or government agencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Sends emails or SMS messages with urgent or alarming content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Includes links to fake websites that look identical to legitimate ones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Requests sensitive information like passwords, credit card numbers, or Social Security numbers</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-red-400">Warning Signs:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Suspicious sender addresses or domain names</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Generic greetings instead of personalized messages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Urgent or threatening language creating pressure to act quickly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Poor grammar or spelling mistakes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Requests for personal information via email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Suspicious links or attachments</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-red-500/30">
                <p className="text-slate-300 text-sm">
                  <span className="text-red-400">Remember:</span> Legitimate organizations will never ask for sensitive information via email or text. Always verify the sender through official channels before clicking links or providing information.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
