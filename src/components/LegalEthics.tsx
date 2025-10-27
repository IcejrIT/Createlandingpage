import { Scale, UserX, AlertCircle, FileText } from "lucide-react";
import { Card } from "./ui/card";

export function LegalEthics() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Legal and Ethical Obligations
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Navigating the laws and ethics of digital security
          </p>
        </div>

        {/* Personal Data Protection - GDPR */}
        <Card className="bg-slate-800/50 border-slate-700 p-8 backdrop-blur-sm mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Scale className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl text-white mb-2">Personal Data Protection</h3>
              <p className="text-slate-400">How is our data protected?</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-5 rounded-lg border border-blue-500/30">
                <h4 className="text-blue-400 mb-3">GDPR (General Data Protection Regulation)</h4>
                <p className="text-slate-300 text-sm mb-3">
                  The GDPR is a comprehensive data protection law enacted by the European Union in 2018 that has set the global standard for privacy rights. It fundamentally changed how organizations handle personal data.
                </p>
                
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <span className="text-white">Scope:</span> Applies to all organizations processing EU residents' data, regardless of company location
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <span className="text-white">Personal Data:</span> Includes name, email, IP address, location data, biometric data, and more
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <span className="text-white">Data Processing:</span> Requires explicit consent, clear purpose, and transparency
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <span className="text-white">Data Minimization:</span> Collect only necessary data and retain it only as long as needed
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700">
                <h4 className="text-blue-400 mb-3">Companies' Responsibilities</h4>
                <p className="text-slate-300 text-sm mb-3">
                  Organizations handling personal data have extensive obligations to protect user information and respect privacy rights.
                </p>
                
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>Implement appropriate technical and organizational security measures</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>Conduct Data Protection Impact Assessments for high-risk processing</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>Appoint Data Protection Officers when required</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>Report data breaches to authorities within 72 hours</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>Maintain detailed records of data processing activities</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>Ensure third-party processors also comply with GDPR</div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700">
                <h4 className="text-blue-400 mb-3">User Rights Under GDPR</h4>
                <p className="text-slate-300 text-sm mb-3">
                  GDPR grants individuals significant control over their personal data. These rights empower users to protect their privacy.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
                    <p className="text-white text-sm mb-1">Right to Access</p>
                    <p className="text-slate-400 text-xs">Request copies of your personal data and understand how it's being processed</p>
                  </div>
                  
                  <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
                    <p className="text-white text-sm mb-1">Right to Rectification</p>
                    <p className="text-slate-400 text-xs">Correct inaccurate or incomplete personal data</p>
                  </div>
                  
                  <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
                    <p className="text-white text-sm mb-1">Right to Erasure ("Right to be Forgotten")</p>
                    <p className="text-slate-400 text-xs">Request deletion of your personal data under certain circumstances</p>
                  </div>
                  
                  <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
                    <p className="text-white text-sm mb-1">Right to Data Portability</p>
                    <p className="text-slate-400 text-xs">Receive your data in a structured format and transfer it to another service</p>
                  </div>
                  
                  <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
                    <p className="text-white text-sm mb-1">Right to Object</p>
                    <p className="text-slate-400 text-xs">Object to processing for direct marketing or based on legitimate interests</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-500/10 p-5 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 mb-3">Consequences of Violations</h4>
                <p className="text-slate-300 text-sm mb-3">
                  GDPR violations can result in severe financial penalties designed to ensure compliance.
                </p>
                
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>Fines up to €20 million or 4% of global annual revenue (whichever is higher)</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>Severe reputational damage and loss of customer trust</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>Possible suspension of data processing operations</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>Legal action from affected individuals</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Right to be Forgotten */}
        <Card className="bg-slate-800/50 border-slate-700 p-8 backdrop-blur-sm mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <UserX className="w-8 h-8 text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">The Right to Be Forgotten</h3>
              <p className="text-slate-400">Control over your digital footprint</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-slate-300">
                The Right to Be Forgotten, formally known as the Right to Erasure under GDPR, allows individuals to request the removal of their personal data from search engine results, websites, or databases when certain criteria are met.
              </p>
              
              <div className="bg-slate-900/50 p-5 rounded-lg border border-purple-500/30">
                <h4 className="text-purple-400 mb-3">When Does It Apply?</h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>The data is no longer necessary for the purpose it was originally collected</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>You withdraw consent and there's no other legal basis for processing</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>The data has been processed unlawfully</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>The data was collected when you were a child</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>The information is outdated, irrelevant, or infringes on your privacy</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700">
                <h4 className="text-purple-400 mb-3">Balancing Privacy and Public Interest</h4>
                <p className="text-slate-300 text-sm mb-3">
                  The right to erasure is not absolute. It must be balanced against other rights and legitimate interests.
                </p>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>Freedom of expression and information</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>Legal obligations or public interest tasks</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>Scientific, historical, or statistical research</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>Legal claims and defense</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-orange-500/10 p-5 rounded-lg border border-orange-500/30">
                <h4 className="text-orange-400 mb-3">Limitations</h4>
                <p className="text-slate-300 text-sm mb-3">
                  The right cannot be used to erase all types of information:
                </p>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="bg-slate-900/50 p-2 rounded">
                    <p className="text-white mb-1">Public Figures</p>
                    <p className="text-slate-400">Information about public figures or matters of public interest may not be erasable</p>
                  </div>
                  <div className="bg-slate-900/50 p-2 rounded">
                    <p className="text-white mb-1">Criminal Records</p>
                    <p className="text-slate-400">Legitimate news about criminal activities typically cannot be removed</p>
                  </div>
                  <div className="bg-slate-900/50 p-2 rounded">
                    <p className="text-white mb-1">Professional Information</p>
                    <p className="text-slate-400">Professional misconduct or relevant business information may remain</p>
                  </div>
                  <div className="bg-slate-900/50 p-2 rounded">
                    <p className="text-white mb-1">Recent Events</p>
                    <p className="text-slate-400">Current, newsworthy events are generally protected</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <p className="text-green-400 text-xs mb-2">How to Exercise This Right:</p>
                <p className="text-slate-300 text-xs">
                  Contact the organization holding your data or use online forms provided by search engines. They must respond within 30 days.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Penalties for Cybercrimes */}
        <Card className="bg-gradient-to-br from-red-900/30 to-pink-900/30 border-red-500/50 p-8 backdrop-blur-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-red-500/20 rounded-lg">
              <FileText className="w-8 h-8 text-red-400" />
            </div>
            <div>
              <h3 className="text-2xl text-white mb-2">Penalties for Cybercrimes</h3>
              <p className="text-slate-400">Understanding the legal consequences</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 p-5 rounded-lg border border-red-500/30">
              <h4 className="text-red-400 mb-3">Why Such High Fines?</h4>
              <p className="text-slate-300 text-sm mb-3">
                Companies face substantial fines for cybersecurity violations to ensure accountability and deterrence.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div>Creates financial incentive to invest in proper security</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div>Reflects the potential harm to millions of affected users</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div>Deters negligent security practices</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div>Compensates for long-term damage to individuals</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div>Sets precedent for other organizations</div>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-900/50 p-5 rounded-lg border border-red-500/30">
              <h4 className="text-red-400 mb-3">Crimes Leading to Imprisonment</h4>
              <p className="text-slate-300 text-sm mb-3">
                Various cybercrimes can result in prison sentences depending on severity and jurisdiction.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div><span className="text-white">Hacking/Unauthorized Access:</span> 1-20 years depending on damage</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div><span className="text-white">Identity Theft:</span> 5-30 years plus substantial fines</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div><span className="text-white">Ransomware:</span> Up to life imprisonment in severe cases</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div><span className="text-white">Financial Fraud:</span> 5-30 years depending on amount stolen</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div><span className="text-white">DDoS Attacks:</span> Up to 10 years for severe disruptions</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div><span className="text-white">Child Exploitation:</span> Lengthy mandatory minimum sentences</div>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-900/50 p-5 rounded-lg border border-red-500/30">
              <h4 className="text-red-400 mb-3">Victim Compensation</h4>
              <p className="text-slate-300 text-sm mb-3">
                Legal systems aim to provide restitution to cybercrime victims through various mechanisms.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div><span className="text-white">Restitution Orders:</span> Courts can order criminals to pay victims directly</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div><span className="text-white">Civil Lawsuits:</span> Victims can sue for damages, lost income, and suffering</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div><span className="text-white">Insurance Claims:</span> Cyber insurance can cover financial losses</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div><span className="text-white">Victim Compensation Funds:</span> Government programs for crime victims</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div><span className="text-white">Class Actions:</span> Groups of victims can join together for larger settlements</div>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
