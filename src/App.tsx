import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { CyberThreats } from "./components/CyberThreats";
import { DataProtection } from "./components/DataProtection";
import { OnlineTransactions } from "./components/OnlineTransactions";
import { LegalEthics } from "./components/LegalEthics";
import { Conclusion } from "./components/Conclusion";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <Introduction />
      <CyberThreats />
      <DataProtection />
      <OnlineTransactions />
      <LegalEthics />
      <Conclusion />
      <Footer />
    </div>
  );
}
