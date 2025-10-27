import { CreditCard, DollarSign, AlertTriangle, Shield } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function OnlineTransactions() {
  return (
    <section className="relative py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Online Transactions
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Protecting financial data in the digital age
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Attacks on Banks */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-red-500/10 rounded-lg">
                <CreditCard className="w-8 h-8 text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-white mb-2">Attacks on Banks and Their Users</h3>
                <Badge variant="outline" className="border-red-500 text-red-400">High Risk</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-slate-300">
                Financial institutions and their customers are prime targets for cybercriminals due to the direct monetary gain. Understanding these attack vectors is crucial for protecting your financial assets.
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-red-500/30">
                  <div className="flex items-start gap-3 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-red-400 mb-2">Keyloggers</h4>
                      <p className="text-slate-300 text-sm mb-2">
                        Malicious software that records every keystroke you make on your keyboard, capturing passwords, credit card numbers, and other sensitive information.
                      </p>
                      <ul className="space-y-1 text-xs text-slate-400">
                        <li>• Can be hardware devices or software programs</li>
                        <li>• Often installed through malicious downloads or email attachments</li>
                        <li>• Operates silently in the background</li>
                        <li>• Sends recorded data to attackers remotely</li>
                        <li>• Can bypass basic antivirus protection</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 p-4 rounded-lg border border-red-500/30">
                  <div className="flex items-start gap-3 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-red-400 mb-2">Banking Trojans</h4>
                      <p className="text-slate-300 text-sm mb-2">
                        Sophisticated malware specifically designed to steal banking credentials and manipulate online banking sessions.
                      </p>
                      <ul className="space-y-1 text-xs text-slate-400">
                        <li>• Can intercept and modify banking transactions in real-time</li>
                        <li>• May display fake login pages to capture credentials</li>
                        <li>• Can steal two-factor authentication codes</li>
                        <li>• Often spread through infected websites or malicious ads</li>
                        <li>• Examples include Zeus, Emotet, and TrickBot</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 p-4 rounded-lg border border-red-500/30">
                  <div className="flex items-start gap-3 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-red-400 mb-2">Banking Phishing</h4>
                      <p className="text-slate-300 text-sm mb-2">
                        Targeted phishing attacks specifically designed to steal banking credentials by impersonating financial institutions.
                      </p>
                      <ul className="space-y-1 text-xs text-slate-400">
                        <li>• Emails or SMS appearing to be from your bank</li>
                        <li>• Creates urgency (account suspension, security alerts)</li>
                        <li>• Links to fake websites that look identical to real bank sites</li>
                        <li>• May request account verification or password reset</li>
                        <li>• Can lead to complete account takeover</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <h4 className="text-green-400 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Protection Measures:
                </h4>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Use official banking apps instead of browser access when possible</li>
                  <li>• Enable transaction notifications and alerts</li>
                  <li>• Verify URLs before entering credentials (check for HTTPS and correct domain)</li>
                  <li>• Never click links in emails claiming to be from your bank</li>
                  <li>• Use a dedicated device for online banking if possible</li>
                  <li>• Keep antivirus and operating system updated</li>
                  <li>• Monitor account activity regularly for suspicious transactions</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Cryptocurrency Scams */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-500/10 rounded-lg">
                <DollarSign className="w-8 h-8 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-white mb-2">Cryptocurrency Scams</h3>
                <Badge variant="outline" className="border-orange-500 text-orange-400">Growing Threat</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-slate-300">
                The decentralized and often unregulated nature of cryptocurrencies makes them an attractive target for scammers. The irreversible nature of blockchain transactions means losses are often permanent.
              </p>
              
              <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1547190027-9156686aa2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcHJvdGVjdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzYxNTg5NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cryptocurrency Security"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="text-orange-400 mb-3">Common Cryptocurrency Scams:</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-white text-sm mb-1">Fake ICOs and Token Sales</p>
                      <p className="text-slate-400 text-xs">
                        Fraudulent Initial Coin Offerings promise revolutionary projects but disappear after collecting investor funds. They often use fake whitepapers, team profiles, and partnerships.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-white text-sm mb-1">Rug Pulls</p>
                      <p className="text-slate-400 text-xs">
                        Developers create a token, generate hype, attract investors, then suddenly withdraw all liquidity from the project, leaving investors with worthless tokens. This is especially common in DeFi projects.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-white text-sm mb-1">Fake NFT Projects</p>
                      <p className="text-slate-400 text-xs">
                        Scammers create fake NFT collections, promise high returns or exclusive benefits, build hype through social media, then disappear with the money after the mint.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-white text-sm mb-1">Ponzi Schemes</p>
                      <p className="text-slate-400 text-xs">
                        Promise unrealistic returns (e.g., "double your Bitcoin in 30 days") and pay early investors with funds from new investors. Eventually collapse when new investment stops.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-white text-sm mb-1">Phishing Attacks</p>
                      <p className="text-slate-400 text-xs">
                        Fake wallet websites, malicious browser extensions, or emails impersonating exchanges to steal private keys and seed phrases.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-white text-sm mb-1">Pump and Dump Schemes</p>
                      <p className="text-slate-400 text-xs">
                        Groups artificially inflate a coin's price through coordinated buying and hype, then sell their holdings at the peak, leaving others with losses.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                  <h4 className="text-green-400 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    How to Protect Yourself:
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• Research thoroughly before investing (team, code audits, community)</li>
                    <li>• Be skeptical of guaranteed returns or "get rich quick" promises</li>
                    <li>• Use hardware wallets for storing significant amounts</li>
                    <li>• Never share your private keys or seed phrases</li>
                    <li>• Verify URLs carefully before connecting wallets</li>
                    <li>• Use reputable exchanges with strong security measures</li>
                    <li>• Be wary of social media hype and celebrity endorsements</li>
                    <li>• If it sounds too good to be true, it probably is</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <p className="text-sm text-slate-300">
                  <span className="text-red-400">Warning:</span> Cryptocurrency transactions are irreversible. Once your crypto is sent to a scammer, it cannot be recovered. The decentralized nature that makes crypto attractive also means there's no central authority to help recover lost funds.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
