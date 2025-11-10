import React, { FC, useState } from 'react';

// --- SVG Illustrations (with Light Theme Colors) ---

const Character: FC<{x?: number, y?: number, scale?: number}> = ({x=0, y=0, scale=1}) => (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
        <path d="M20,30 C0,30 0,50 10,60 C20,70 30,70 40,60 C50,50 50,30 30,30 C25,30 22,30 20,30" fill="white" stroke="#D1D5DB" strokeWidth="1.5" />
        <circle cx="18" cy="45" r="2.5" fill="#1F2937"/>
        <circle cx="32" cy="45" r="2.5" fill="#1F2937"/>
        <path d="M10,20 Q12,15 15,18" stroke="#00D1FF" fill="none" strokeWidth="3" strokeLinecap="round" />
    </g>
);

const TryItIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200">
        <defs>
            <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A3E635" />
                <stop offset="25%" stopColor="#22D3EE" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="75%" stopColor="#F43F5E" />
                <stop offset="100%" stopColor="#FACC15" />
            </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="rgba(0,0,0,0.03)" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="#E5E7EB" strokeWidth="20" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="url(#timerGradient)" strokeWidth="20"
                strokeDasharray="502.65" strokeDashoffset="100" strokeLinecap="round"
                transform="rotate(-90 100 100)" />
        <text x="100" y="95" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#1F2937">14:52</text>
        <text x="100" y="125" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#6B7280">MINS</text>
        <g transform="translate(130, 20) rotate(15)">
            <Character scale={0.6}/>
        </g>
    </svg>
);

const ModesIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200">
      <text x="100" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#9CA3AF">Focus modes.</text>
      <circle cx="100" cy="110" r="70" fill="rgba(0,0,0,0.03)" stroke="#E5E7EB" strokeWidth="2" />
      <circle cx="100" cy="110" r="30" fill="#60A5FA" />
      <path d="M90 110 Q 95 100, 100 110 T 110 110" stroke="#93C5FD" fill="none" strokeWidth="3" />
      <circle cx="70" cy="80" r="20" fill="#FBBF24" />
      <circle cx="130" cy="80" r="20" fill="#F472B6" />
      <circle cx="70" cy="140" r="20" fill="#C4B5FD" />
      <circle cx="130" cy="140" r="20" fill="#4ADE80" />
      <g transform="translate(10, 100) rotate(-15)">
        <Character scale={0.6} />
      </g>
    </svg>
);

const FocusIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200">
        <text x="100" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#9CA3AF">Focus challenges.</text>
        <g transform="translate(75 80)">
            <Character scale={1} />
        </g>
        <circle cx="40" cy="80" r="15" fill="#A78BFA" />
        <rect x="140" y="110" width="30" height="30" rx="8" fill="#3B82F6" />
        <path d="M150 60 L160 80 L140 80 Z" fill="#4ADE80" />
        <circle cx="100" cy="50" r="12" fill="#FACC15" />
        <path d="M40 130 C 50 140, 60 140, 70 130" stroke="#F87171" fill="none" strokeWidth="4" strokeLinecap="round" />
    </svg>
);

const StreakIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200">
        <g transform="translate(65, 0)">
            <rect x="0" y="140" width="70" height="30" rx="8" fill="#38BDF8"><animate attributeName="y" from="200" to="140" dur="0.5s" fill="freeze" begin="0.4s" /></rect>
            <text x="35" y="162" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="bold">1</text>
            <rect x="0" y="105" width="70" height="30" rx="8" fill="#4ADE80"><animate attributeName="y" from="200" to="105" dur="0.5s" fill="freeze" begin="0.3s" /></rect>
            <text x="35" y="127" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="bold">2</text>
            <rect x="0" y="70" width="70" height="30" rx="8" fill="#FACC15"><animate attributeName="y" from="200" to="70" dur="0.5s" fill="freeze" begin="0.2s" /></rect>
            <text x="35" y="92" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="bold">4</text>
            <rect x="0" y="35" width="70" height="30" rx="8" fill="#F87171"><animate attributeName="y" from="200" to="35" dur="0.5s" fill="freeze" begin="0.1s" /></rect>
            <text x="35" y="57" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">5</text>
        </g>
        <g transform="translate(100, 120)">
            <Character scale={0.7} />
        </g>
    </svg>
);

const SessionsIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="70" fill="rgba(0,0,0,0.03)" stroke="#E5E7EB" strokeWidth="2"/>
        <g transform="translate(75, 75)">
            <Character scale={1} />
        </g>
        <text x="100" y="160" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1F2937">30 DAYS</text>
        {/* Confetti */}
        <circle cx="50" cy="60" r="5" fill="#38BDF8" />
        <circle cx="150" cy="60" r="5" fill="#F87171" />
        <circle cx="60" cy="140" r="5" fill="#4ADE80" />
        <circle cx="140" cy="140" r="5" fill="#FACC15" />
        <rect x="70" y="40" width="10" height="10" rx="3" fill="#A78BFA" transform="rotate(45 75 45)" />
        <rect x="120" y="50" width="10" height="10" rx="3" fill="#38BDF8" transform="rotate(-30 125 55)" />
    </svg>
);

const ProofIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200">
        <defs>
             <linearGradient id="swirlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ADE80" />
                <stop offset="25%" stopColor="#22D3EE" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="75%" stopColor="#F87171" />
                <stop offset="100%" stopColor="#FACC15" />
            </linearGradient>
        </defs>
        <text x="100" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#9CA3AF">PROOF.</text>
        <path d="M100 40 L170 160 L30 160 Z" fill="none" stroke="#E5E7EB" strokeWidth="4" />
        <path d="M100,120 C 80,140 60,110 80,90 C 100,70 120,100 100,120 C 80,140 120,140 100,120"
              stroke="url(#swirlGradient)" strokeWidth="10" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 100 110" to="360 100 110" dur="5s" repeatCount="indefinite" />
        </path>
        <g transform="translate(75, 80)">
             <Character scale={1} />
        </g>
    </svg>
);


// --- Components ---

const FeatureCard: FC<{ illustration: React.ReactNode, title: string, description: string }> = ({ illustration, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-gray-100/50 backdrop-blur-md rounded-4xl p-6 w-full aspect-[4/3] flex items-center justify-center border border-gray-200/80 shadow-lg transition-all duration-300 hover:border-brain-cyan">
        {illustration}
    </div>
    <h3 className="text-2xl font-bold mt-6 text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600 font-medium max-w-xs">{description}</p>
  </div>
);

const Modal: FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode; title: string; }> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white border border-gray-200 rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] relative flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 flex-shrink-0">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <button 
                onClick={onClose} 
                className="text-gray-400 hover:text-gray-800 transition-colors"
                aria-label="Close modal"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <div className="p-2 sm:p-4 flex-grow bg-gray-50 rounded-b-xl">
            {children}
        </div>
      </div>
    </div>
  );
};


// --- Page ---

const LandingPage: FC = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showHowToUse, setShowHowToUse] = useState(false);

  const NavLink: FC<{children: React.ReactNode, active?: boolean}> = ({ children, active }) => (
    <span className={`px-5 py-2 rounded-full font-bold transition-colors cursor-pointer ${active ? 'bg-brain-cyan text-gray-900' : 'hover:bg-gray-200'}`}>
      {children}
    </span>
  );

  const NavButton: FC<{children: React.ReactNode; onClick: () => void;}> = ({ children, onClick }) => (
    <button onClick={onClick} className="px-5 py-2 rounded-full font-bold transition-colors hover:bg-gray-200">
        {children}
    </button>
  );

  const waveConfigs = [
    {
        className: 'animate-wave-pulse',
        initialPath: "M0 10 Q 25 0, 50 10 T 100 10",
    },
    {
        className: 'animate-wave-swell',
        initialPath: "M0 10 Q 25 15, 50 10 T 100 10",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-5xl font-extrabold text-brain-cyan">Brain</h1>
          <nav className="hidden md:flex items-center space-x-2 bg-gray-100/60 backdrop-blur-sm p-1 rounded-full border border-gray-200/80">
            <NavLink active>Home</NavLink>
            <NavButton onClick={() => setShowAbout(true)}>About</NavButton>
            <NavButton onClick={() => setShowHowToUse(true)}>How to use</NavButton>
          </nav>
          <a href="https://brain23.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-brain-cyan text-gray-900 px-6 py-3 rounded-full font-bold text-lg hover:bg-cyan-400 transition-colors transform hover:scale-105">
            Use it for free
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative text-center pt-16 pb-24 px-4 overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 grid-rows-6 opacity-20 z-0">
            {Array.from({ length: 48 }).map((_, i) => {
              const config = waveConfigs[i % waveConfigs.length];
              const duration = Math.random() * 3 + 2; // 2s to 5s
              const delay = Math.random() * 3;      // 0s to 3s
              return (
                <div key={i} className="border-r border-b border-cyan-500/10 flex items-center justify-center">
                  <svg width="100%" height="40%" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path
                        d={config.initialPath}
                        stroke="#00D1FF"
                        fill="none"
                        strokeWidth="2"
                        className={config.className}
                        style={{
                            animationDuration: `${duration}s`,
                            animationDelay: `${delay}s`,
                        }}
                      />
                  </svg>
                </div>
              );
            })}
          </div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold max-w-3xl mx-auto leading-tight text-gray-900">Focus faster with personalized binaural sound</h2>
            <p className="text-2xl md:text-3xl font-bold text-brain-cyan mt-4 max-w-3xl mx-auto">What this really means is fewer clicks to your flow state.</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <FeatureCard
              illustration={<TryItIllustration />}
              title="Try it in 15 Mins."
              description="Slide to set frequency. Press Play. Visual scope updates live."
            />
            <FeatureCard
              illustration={<ModesIllustration />}
              title="Modes"
              description="Alpha Beta Theta presets that work every time."
            />
            <FeatureCard
              illustration={<FocusIllustration />}
              title="Focus"
              description="Solve math, patterns, and vocab to boost focus."
            />
            <FeatureCard
              illustration={<StreakIllustration />}
              title="Build a streak."
              description="Track minutes and wins effortlessly."
            />
            <FeatureCard
              illustration={<SessionsIllustration />}
              title="Sessions completed."
              description="Last 30 days visualized with one metric tile."
            />
            <FeatureCard
              illustration={<ProofIllustration />}
              title="Proof."
              description='"I get into flow in under five minutes." — A.J. "Perfect for deep work blocks." — KN.'
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-20">
          <h2 className="text-5xl font-extrabold text-gray-900">Ready to focus</h2>
          <p className="text-2xl text-gray-500 mt-2">Start your journey.</p>
          <a href="https://brain23.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-brain-cyan text-gray-900 px-8 py-4 rounded-full font-bold text-xl hover:bg-cyan-400 transition-colors transform hover:scale-105">
            Use it for free
          </a>
        </section>
      </main>
      
      {/* Modals */}
      <Modal isOpen={showAbout} onClose={() => setShowAbout(false)} title="About Brain">
        <iframe 
            src="https://gamma.app/embed/sliefyp1v2vptwc" 
            className="w-full h-full border-0 rounded-lg" 
            allow="fullscreen" 
            title="Brain">
        </iframe>
      </Modal>

      <Modal isOpen={showHowToUse} onClose={() => setShowHowToUse(false)} title="How to use Brain">
        <iframe 
            src="https://gamma.app/embed/86dp0ycgea4mqae" 
            className="w-full h-full border-0 rounded-lg" 
            allow="fullscreen" 
            title="Neon Binaural ">
        </iframe>
      </Modal>

    </div>
  );
};

export default LandingPage;
