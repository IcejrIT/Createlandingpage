import { Lock, Shield, Fingerprint, Smartphone, Key, Globe } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function DataProtection() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Data Protection & Privacy Methods
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Essential techniques and tools for securing your digital information
          </p>
        </div>

        {/* Encryption Section */}
        <Card className="bg-slate-800/50 border-slate-700 p-8 backdrop-blur-sm mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Lock className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-2">Data Encryption & Secure Communication</h3>
                </div>
              </div>
              
              <div className="space-y-4 text-slate-300">
                <p>
                  Encryption is the cornerstone of modern data security, transforming readable information (plaintext) into an unreadable format (ciphertext) using sophisticated mathematical algorithms and cryptographic keys.
                </p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-cyan-400 mb-3">How Encryption Works:</h4>
                  <ol className="space-y-2 text-sm list-decimal list-inside">
                    <li>Data is converted using an encryption algorithm and a unique key</li>
                    <li>The encrypted data can only be read by someone with the correct decryption key</li>
                    <li>Modern encryption uses complex mathematical problems that would take thousands of years to crack</li>
                  </ol>
                </div>
                
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-cyan-400 mb-3">SSL/TLS and HTTPS:</h4>
                  <p className="text-sm mb-2">
                    When you see a padlock icon in your browser's address bar, it means the connection is secured with SSL/TLS encryption protocols.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>Protects data transmitted between your browser and websites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>Prevents eavesdropping and man-in-the-middle attacks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>Ensures data integrity and authenticity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758983308742-f4ba1f8c8cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzZWN1cml0eSUyMGxvY2t8ZW58MXx8fHwxNzYxNTg5NzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Data Encryption"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>

        {/* VPN vs TOR Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/50 p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-2">VPN (Virtual Private Network)</h3>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-300">
                A VPN creates an encrypted tunnel between your device and a VPN server, routing all your internet traffic through this secure connection. This masks your real IP address and encrypts your data.
              </p>
              
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="text-blue-400 mb-2">How It Works:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Connects to a VPN server in a location of your choice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Encrypts all traffic between your device and the VPN server</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Your IP address is replaced with the VPN server's IP</span>
                    </li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/30">
                    <h5 className="text-green-400 text-sm mb-2">Advantages:</h5>
                    <ul className="space-y-1 text-xs text-slate-300">
                      <li>• Secure on public Wi-Fi</li>
                      <li>• Access geo-restricted content</li>
                      <li>• Fast speeds</li>
                      <li>• Easy to use</li>
                      <li>• Suitable for streaming</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/30">
                    <h5 className="text-red-400 text-sm mb-2">Disadvantages:</h5>
                    <ul className="space-y-1 text-xs text-slate-300">
                      <li>• Must trust the provider</li>
                      <li>• Provider can see traffic</li>
                      <li>• Potential slight slowdown</li>
                      <li>• Requires subscription</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border-purple-500/50 p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-2">Tor (The Onion Router)</h3>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-300">
                Tor is an anonymous network that routes your traffic through multiple volunteer-operated nodes around the world, encrypting it in layers (like an onion) to conceal your identity.
              </p>
              
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="text-purple-400 mb-2">How It Works:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Traffic bounces through at least 3 random relay nodes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Each layer of encryption is removed at each node</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>No single node knows both source and destination</span>
                    </li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/30">
                    <h5 className="text-green-400 text-sm mb-2">Advantages:</h5>
                    <ul className="space-y-1 text-xs text-slate-300">
                      <li>• Very high anonymity</li>
                      <li>• No central control</li>
                      <li>• Free to use</li>
                      <li>• No provider to trust</li>
                      <li>• Access to .onion sites</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/30">
                    <h5 className="text-red-400 text-sm mb-2">Disadvantages:</h5>
                    <ul className="space-y-1 text-xs text-slate-300">
                      <li>• Very slow speeds</li>
                      <li>• Not for streaming</li>
                      <li>• Many sites block Tor</li>
                      <li>• Complex for beginners</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Multi-Factor Authentication */}
        <Card className="bg-slate-800/50 border-slate-700 p-8 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1616784260443-3b55583c4a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJpdmFjeXxlbnwxfHx8fDE3NjE1MDQ2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Multi-Factor Authentication"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-lg">
                  <Fingerprint className="w-8 h-8 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-2">Multi-Factor Authentication (MFA)</h3>
                </div>
              </div>
              
              <div className="space-y-4 text-slate-300">
                <p>
                  Multi-factor authentication adds layers of security by requiring two or more verification methods to access an account, dramatically reducing the risk of unauthorized access even if your password is compromised.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-start gap-3 mb-2">
                      <Key className="w-5 h-5 text-indigo-400 mt-0.5" />
                      <div>
                        <h4 className="text-indigo-400 mb-1">Something You Know</h4>
                        <p className="text-sm">
                          Passwords, PINs, or answers to security questions. This is information stored in your memory that only you should know.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-start gap-3 mb-2">
                      <Smartphone className="w-5 h-5 text-indigo-400 mt-0.5" />
                      <div>
                        <h4 className="text-indigo-400 mb-1">Something You Have</h4>
                        <p className="text-sm">
                          A physical device like a smartphone (for authentication apps or SMS codes), security token, smart card, or USB key.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-start gap-3 mb-2">
                      <Fingerprint className="w-5 h-5 text-indigo-400 mt-0.5" />
                      <div>
                        <h4 className="text-indigo-400 mb-1">Something You Are</h4>
                        <p className="text-sm">
                          Biometric data such as fingerprints, facial recognition, iris scans, or voice recognition. These are unique physical characteristics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30 mt-4">
                  <p className="text-sm">
                    <span className="text-green-400">Security Tip:</span> Enable MFA on all accounts that support it, especially for email, banking, and social media. Even if your password is stolen, attackers won't be able to access your account without the second factor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
