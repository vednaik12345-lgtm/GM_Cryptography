import { useState, useMemo } from 'react';
import { AntiGravityVisualizer } from './components/AntiGravityVisualizer';
import { Shield, Terminal, Settings, User, Lock, Activity, Database, Book, Info, X } from 'lucide-react';
import './index.css';

// Robust utility function for formatting bits
const formatBits = (totalBits: number) => {
  if (totalBits === 0) return { value: '0', unit: 'Bits' };
  
  const bytes = totalBits / 8;
  if (bytes < 1) return { value: totalBits.toLocaleString(), unit: 'Bits' };
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  // If it's less than 1KB, we format as Bytes and show Bits below
  if (i === 0) {
    return { value: bytes.toLocaleString(), unit: 'Bytes' };
  }
  
  const formattedValue = parseFloat((bytes / Math.pow(k, i)).toFixed(2)).toLocaleString();
  return { value: formattedValue, unit: sizes[i] };
};

function App() {
  const [text, setText] = useState('');
  const [activeTab, setActiveTab] = useState<'encrypt' | 'analysis' | 'history'>('analysis');
  
  // 1. State Management & Core Math
  const plaintextBits = useMemo(() => text.length * 8, [text]);
  const ciphertextBits = useMemo(() => plaintextBits * 2048, [plaintextBits]);
  
  // 4. Cryptographic Polish - Active Bitstream
  const activeBitstream = useMemo(() => {
    if (text.length === 0) return '00000000';
    const lastChar = text.slice(-1);
    const binary = lastChar.charCodeAt(0).toString(2).padStart(8, '0');
    return binary;
  }, [text]);

  const plainFormat = formatBits(plaintextBits);
  const cipherFormat = formatBits(ciphertextBits);

  return (
    <div className="font-body-md text-on-background min-h-screen flex flex-col bg-background selection:bg-primary/30 selection:text-primary">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full bg-background border-b border-outline-variant flex justify-between items-center h-14 px-8 z-50">
        <div className="flex items-center gap-4">
          <span className="font-label-caps font-bold tracking-tighter text-primary text-sm uppercase">CRYPT_ENGINE</span>
          <div className="h-4 w-px bg-outline-variant hidden md:block"></div>
          <span className="font-data-mono tracking-wide text-on-surface-variant hidden md:block text-xs uppercase">GM_SYSTEM_ANALYSIS</span>
        </div>
        {/* Removed icons per request */}
      </header>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 flex-col pt-14 h-screen w-64 bg-surface-container-low border-r border-outline-variant z-40 hidden md:flex">
        <div className="px-6 py-6 border-b border-outline-variant">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 border border-primary rounded flex items-center justify-center text-primary">
              <Shield size={18} />
            </div>
            <div>
              <div className="font-data-mono tracking-wide text-primary font-semibold text-sm">CRYPT_OS</div>
              <div className="font-data-mono tracking-wide text-on-surface-variant text-xs">v2.4.0-stable</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-1">
          <button 
            onClick={() => setActiveTab('encrypt')}
            className={`w-full flex items-center gap-3 px-3 py-2 transition-colors duration-150 ease-in-out rounded-sm ${activeTab === 'encrypt' ? 'text-primary bg-surface-container border border-outline-variant font-semibold' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'}`}
          >
            <Lock size={18} />
            <span className="font-data-mono tracking-wide text-sm">ENCRYPT</span>
          </button>
          <button 
            onClick={() => setActiveTab('analysis')}
            className={`w-full flex items-center gap-3 px-3 py-2 transition-colors duration-150 ease-in-out rounded-sm ${activeTab === 'analysis' ? 'text-primary bg-surface-container border border-outline-variant font-semibold' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'}`}
          >
            <Activity size={18} />
            <span className="font-data-mono tracking-wide text-sm">ANALYSIS</span>
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`w-full flex items-center gap-3 px-3 py-2 transition-colors duration-150 ease-in-out rounded-sm ${activeTab === 'history' ? 'text-primary bg-surface-container border border-outline-variant font-semibold' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'}`}
          >
            <Database size={18} />
            <span className="font-data-mono tracking-wide text-sm">HISTORY</span>
          </button>
        </nav>
        <div className="p-4 border-t border-outline-variant">
          <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors duration-150 ease-in-out rounded-sm" href="#">
            <Book size={18} />
            <span className="font-data-mono tracking-wide text-sm uppercase">Docs</span>
          </a>
          <div className="mt-4 px-3 py-4 bg-background border border-outline-variant rounded-sm">
            <div className="font-label-caps text-primary mb-2 text-xs">SYSTEM LOAD</div>
            <div className="w-full bg-surface-container h-1.5 rounded-sm overflow-hidden">
              <div className="bg-primary h-full rounded-sm" style={{ width: '32%' }}></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 pt-14 flex-1">
        {activeTab === 'analysis' && (
          <div className="max-w-[1280px] mx-auto p-4 md:p-8 md:px-12">
            
            {/* Hero Header */}
            <div className="mb-8">
              <h1 className="font-headline-lg text-on-surface mb-2 font-bold">Goldwasser-Micali Cryptosystem</h1>
              <p className="text-on-surface-variant font-body-md max-w-3xl">
                Visualizing the massive storage overhead of the first probabilistic public-key encryption scheme. Security through Quadratic Residuosity.
              </p>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Input Block */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-surface-container-low border border-outline-variant rounded-sm security-glow transition-colors overflow-hidden flex flex-col">
                <div className="flex justify-between items-center px-5 py-3 bg-surface-container border-b border-outline-variant">
                  <div className="flex items-center gap-3">
                    <span className="font-label-caps text-on-surface-variant uppercase text-xs">Plaintext Entry (ASCII/Binary)</span>
                    <div className="flex items-center gap-1.5 bg-background border border-outline-variant px-2 py-0.5 rounded-sm">
                      <div className={`w-1.5 h-1.5 rounded-full ${text.length > 0 ? 'bg-primary animate-pulse' : 'bg-outline'}`}></div>
                      <span className="font-data-mono text-[10px] tracking-widest text-primary">
                        {activeBitstream}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setText('')}
                    className="font-label-caps text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 bg-surface-container px-2 py-1 rounded-sm border border-transparent hover:border-error-container"
                  >
                    <X size={14} /> CLEAR
                  </button>
                </div>
                <textarea 
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full h-56 bg-background p-5 font-data-mono tracking-wide text-primary border-none focus:outline-none focus:ring-0 resize-none placeholder:text-outline" 
                  placeholder="Type here to see the expansion cost..."
                ></textarea>
              </div>
              
              {/* Education Section */}
              <div className="bg-surface-container-low border border-outline-variant rounded-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-secondary/10 border border-secondary text-secondary rounded-sm">
                    <Info size={20} />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-on-surface mb-3 font-semibold">The Quadratic Residuosity Problem</h3>
                    <p className="text-on-surface-variant font-body-md leading-relaxed mb-5">
                      The GM cryptosystem was revolutionary because it was the first to achieve <span className="font-semibold text-secondary">semantic security</span>. However, this security comes at a high cost: it encrypts each single bit of plaintext into a large ciphertext element (typically 2048 bits). 
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-outline-variant bg-surface-container rounded-sm">
                        <div className="text-primary font-data-mono tracking-wide mb-1 font-bold">0 Bit</div>
                        <div className="text-on-surface-variant text-sm font-body-md">Encrypted as a random quadratic residue modulo n.</div>
                      </div>
                      <div className="p-4 border border-outline-variant bg-surface-container rounded-sm">
                        <div className="text-secondary font-data-mono tracking-wide mb-1 font-bold">1 Bit</div>
                        <div className="text-on-surface-variant text-sm font-body-md">Encrypted as a quadratic non-residue with Jacobi symbol 1.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats & Visualization */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-low border border-outline-variant rounded-sm p-5 transition-colors hover:border-primary">
                  <div className="font-label-caps text-outline mb-2 uppercase text-xs">Plaintext Size</div>
                  <div className="font-data-mono tracking-wide text-2xl text-primary font-bold flex items-baseline gap-1">
                    {plainFormat.value} <span className="text-sm font-normal text-on-surface-variant">{plainFormat.unit}</span>
                  </div>
                  <div className="font-data-mono tracking-wide text-on-surface-variant mt-2 text-xs bg-surface-container inline-block px-2 py-0.5 rounded-sm border border-outline-variant">
                    {plaintextBits.toLocaleString()} bits
                  </div>
                </div>
                <div className="bg-surface-container-low border border-outline-variant rounded-sm p-5 transition-colors hover:border-secondary">
                  <div className="font-label-caps text-outline mb-2 uppercase text-xs">Ciphertext Size</div>
                  <div className="font-data-mono tracking-wide text-2xl text-secondary font-bold flex items-baseline gap-1">
                    {cipherFormat.value} <span className="text-sm font-normal text-secondary/80">{cipherFormat.unit}</span>
                  </div>
                  <div className="font-data-mono tracking-wide text-secondary mt-2 text-xs bg-secondary/10 inline-block px-2 py-0.5 rounded-sm border border-secondary/30">
                    {ciphertextBits.toLocaleString()} bits
                  </div>
                </div>
              </div>

              {/* Expansion Visualization */}
              <div className="bg-surface-container-low border border-outline-variant rounded-sm overflow-hidden relative flex flex-col" style={{ height: "460px" }}>
                <div className="px-5 py-3 bg-surface-container border-b border-outline-variant flex justify-between items-center">
                  <span className="font-label-caps text-on-surface-variant uppercase text-xs">Expansion Viz (1:2048)</span>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-[1px] bg-primary border border-primary"></div>
                      <span className="font-label-caps text-on-surface-variant text-[10px] uppercase">Plain</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-[1px] bg-secondary border border-secondary"></div>
                      <span className="font-label-caps text-on-surface-variant text-[10px] uppercase">Cipher</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 relative flex overflow-hidden">
                  {/* Plaintext Side */}
                  <div className="w-1/4 border-r border-outline-variant grid-bg p-4 flex flex-col items-center gap-2 overflow-y-auto">
                    {Array.from({ length: Math.min(plaintextBits, 50) }).map((_, i) => (
                      <div key={i} className="w-4 h-4 rounded-[1px] bg-primary/20 flex-shrink-0 border border-primary"></div>
                    ))}
                  </div>
                  
                  {/* Ciphertext Side (Anti-Gravity Physics) */}
                  <div className="w-3/4 bg-surface-container overflow-hidden relative">
                    <AntiGravityVisualizer totalCiphertextBits={ciphertextBits} />
                  </div>
                </div>
                
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-background border border-outline-variant px-4 py-2 rounded-sm opacity-95">
                  <div className="font-data-mono tracking-wide text-xs whitespace-nowrap">
                    <span className="text-secondary font-semibold">
                      EXPANSION: 1 : 2048 <span className="text-outline-variant ml-1">|</span> <span className="text-primary ml-1">TOTAL: {plaintextBits > 0 ? 2048 : 0}x</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'encrypt' && (
          <div className="max-w-[1280px] mx-auto p-4 md:p-8 md:px-12">
            <div className="mb-8">
              <h1 className="font-headline-lg text-on-surface mb-2 font-bold">Encryption Module</h1>
              <p className="text-on-surface-variant font-body-md max-w-3xl">
                Securely encrypt messages using the probabilistic Goldwasser-Micali public key.
              </p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant rounded-sm p-6">
              <div className="font-data-mono tracking-wide text-outline opacity-80 flex items-center justify-center h-48">
                Encryption UI Placeholder
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="max-w-[1280px] mx-auto p-4 md:p-8 md:px-12">
            <div className="mb-8">
              <h1 className="font-headline-lg text-on-surface mb-2 font-bold">Ciphertext History</h1>
              <p className="text-on-surface-variant font-body-md max-w-3xl">
                View previously generated ciphertexts and performance metrics.
              </p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant rounded-sm p-6">
              <div className="font-data-mono tracking-wide text-outline opacity-80 flex items-center justify-center h-48">
                History UI Placeholder
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-outline-variant w-full py-5 px-8 flex justify-between items-center mt-auto">
        <div className="font-data-mono tracking-wide text-on-surface-variant text-xs">
          © 2024 CRYPT_ENGINE | SYSTEM STATUS: <span className="text-primary bg-primary/10 px-2 py-0.5 rounded-sm border border-primary/30">OPTIMAL</span>
        </div>
        <div className="flex gap-6">
          <a className="font-data-mono tracking-wide text-on-surface-variant hover:text-primary transition-colors text-xs uppercase" href="#">CRYPTO_101</a>
          <a className="font-data-mono tracking-wide text-on-surface-variant hover:text-primary transition-colors text-xs uppercase" href="#">SHA-256_GUIDE</a>
          <a className="font-data-mono tracking-wide text-on-surface-variant hover:text-primary transition-colors text-xs uppercase" href="#">ENTROPY_ANALYSIS</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
