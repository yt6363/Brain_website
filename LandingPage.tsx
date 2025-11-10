import React, { FC, useState } from 'react';

// --- SVG Illustrations (with Light Theme Colors) ---

const Character: FC<{x?: number, y?: number, scale?: number}> = ({x=0, y=0, scale=1}) => (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
        {/* Character body with thick border */}
        <path d="M20,30 C0,30 0,50 10,60 C20,70 30,70 40,60 C50,50 50,30 30,30 C25,30 22,30 20,30" fill="white" stroke="#000000" strokeWidth="3" />
        {/* Eyes - bigger and bolder */}
        <circle cx="18" cy="45" r="3" fill="#000000"/>
        <circle cx="32" cy="45" r="3" fill="#000000"/>
        {/* Hair tuft - thicker */}
        <path d="M10,20 Q12,15 15,18" stroke="#00D1FF" fill="none" strokeWidth="4" strokeLinecap="round" />
    </g>
);

const TryItIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Background circle */}
        <circle cx="100" cy="100" r="80" fill="#FFD93D" stroke="#000000" strokeWidth="4" />
        {/* Progress arc - solid cyan */}
        <circle cx="100" cy="100" r="80" fill="none" stroke="#00D1FF" strokeWidth="20"
                strokeDasharray="502.65" strokeDashoffset="100" strokeLinecap="butt"
                transform="rotate(-90 100 100)" />
        {/* Inner white circle with border */}
        <circle cx="100" cy="100" r="60" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />
        {/* Time text */}
        <text x="100" y="95" textAnchor="middle" fontSize="48" fontWeight="800" fill="#000000">14:52</text>
        <text x="100" y="125" textAnchor="middle" fontSize="16" fontWeight="800" fill="#000000" letterSpacing="2">MINS</text>
        <g transform="translate(130, 20) rotate(15)">
            <Character scale={0.6}/>
        </g>
    </svg>
);

const ModesIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200">
      <text x="100" y="30" textAnchor="middle" fontSize="16" fontWeight="800" fill="#000000" letterSpacing="1">FOCUS MODES</text>
      {/* Main center circle */}
      <circle cx="100" cy="110" r="70" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />
      <circle cx="100" cy="110" r="30" fill="#00D1FF" stroke="#000000" strokeWidth="4" />
      {/* Surrounding mode circles */}
      <circle cx="70" cy="80" r="20" fill="#FFD93D" stroke="#000000" strokeWidth="4" />
      <circle cx="130" cy="80" r="20" fill="#FF6B9D" stroke="#000000" strokeWidth="4" />
      <circle cx="70" cy="140" r="20" fill="#7C3AED" stroke="#000000" strokeWidth="4" />
      <circle cx="130" cy="140" r="20" fill="#6BCF7F" stroke="#000000" strokeWidth="4" />
      <g transform="translate(10, 100) rotate(-15)">
        <Character scale={0.6} />
      </g>
    </svg>
);

const FocusIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200">
        <text x="100" y="30" textAnchor="middle" fontSize="16" fontWeight="800" fill="#000000" letterSpacing="1">CHALLENGES</text>
        <g transform="translate(75 80)">
            <Character scale={1} />
        </g>
        {/* Floating shapes with borders */}
        <circle cx="40" cy="80" r="15" fill="#7C3AED" stroke="#000000" strokeWidth="3" />
        <rect x="140" y="110" width="30" height="30" rx="8" fill="#00D1FF" stroke="#000000" strokeWidth="3" />
        <path d="M150 60 L160 80 L140 80 Z" fill="#6BCF7F" stroke="#000000" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="100" cy="50" r="12" fill="#FFD93D" stroke="#000000" strokeWidth="3" />
        <path d="M40 130 C 50 140, 60 140, 70 130" stroke="#FF6B9D" fill="none" strokeWidth="4" strokeLinecap="round" />
    </svg>
);

const StreakIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200">
        <g transform="translate(65, 0)">
            {/* Stack of blocks with borders */}
            <rect x="0" y="140" width="70" height="30" rx="8" fill="#00D1FF" stroke="#000000" strokeWidth="4"><animate attributeName="y" from="200" to="140" dur="0.5s" fill="freeze" begin="0.4s" /></rect>
            <text x="35" y="162" textAnchor="middle" fill="#000000" fontSize="18" fontWeight="800">1</text>
            <rect x="0" y="105" width="70" height="30" rx="8" fill="#6BCF7F" stroke="#000000" strokeWidth="4"><animate attributeName="y" from="200" to="105" dur="0.5s" fill="freeze" begin="0.3s" /></rect>
            <text x="35" y="127" textAnchor="middle" fill="#000000" fontSize="18" fontWeight="800">2</text>
            <rect x="0" y="70" width="70" height="30" rx="8" fill="#FFD93D" stroke="#000000" strokeWidth="4"><animate attributeName="y" from="200" to="70" dur="0.5s" fill="freeze" begin="0.2s" /></rect>
            <text x="35" y="92" textAnchor="middle" fill="#000000" fontSize="18" fontWeight="800">4</text>
            <rect x="0" y="35" width="70" height="30" rx="8" fill="#FF6B9D" stroke="#000000" strokeWidth="4"><animate attributeName="y" from="200" to="35" dur="0.5s" fill="freeze" begin="0.1s" /></rect>
            <text x="35" y="57" textAnchor="middle" fill="#000000" fontSize="18" fontWeight="800">5</text>
        </g>
        <g transform="translate(100, 120)">
            <Character scale={0.7} />
        </g>
    </svg>
);

const SessionsIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="70" fill="#FFFFFF" stroke="#000000" strokeWidth="4"/>
        <g transform="translate(75, 75)">
            <Character scale={1} />
        </g>
        <text x="100" y="160" textAnchor="middle" fontSize="18" fontWeight="800" fill="#000000" letterSpacing="2">30 DAYS</text>
        {/* Confetti - solid colors with borders */}
        <circle cx="50" cy="60" r="8" fill="#00D1FF" stroke="#000000" strokeWidth="2" />
        <circle cx="150" cy="60" r="8" fill="#FF6B9D" stroke="#000000" strokeWidth="2" />
        <circle cx="60" cy="140" r="8" fill="#6BCF7F" stroke="#000000" strokeWidth="2" />
        <circle cx="140" cy="140" r="8" fill="#FFD93D" stroke="#000000" strokeWidth="2" />
        <rect x="70" y="40" width="12" height="12" rx="3" fill="#7C3AED" stroke="#000000" strokeWidth="2" transform="rotate(45 76 46)" />
        <rect x="120" y="50" width="12" height="12" rx="3" fill="#00D1FF" stroke="#000000" strokeWidth="2" transform="rotate(-30 126 56)" />
    </svg>
);

const ProofIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200">
        <text x="100" y="30" textAnchor="middle" fontSize="16" fontWeight="800" fill="#000000" letterSpacing="1">PROOF</text>
        {/* Triangle badge */}
        <path d="M100 40 L170 160 L30 160 Z" fill="#FFD93D" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
        {/* Star in center */}
        <path d="M100 90 L108 110 L130 110 L112 124 L120 144 L100 130 L80 144 L88 124 L70 110 L92 110 Z" fill="#00D1FF" stroke="#000000" strokeWidth="3" strokeLinejoin="round">
            <animateTransform attributeName="transform" type="rotate" from="0 100 120" to="360 100 120" dur="5s" repeatCount="indefinite" />
        </path>
        <g transform="translate(75, 80)">
             <Character scale={1} />
        </g>
    </svg>
);


// --- Components ---

const FeatureCard: FC<{ illustration: React.ReactNode, title: string, description: string }> = ({ illustration, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-white rounded-3xl p-6 w-full aspect-[4/3] flex items-center justify-center border-4 border-black shadow-comic-lg transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_rgba(0,0,0,1)]">
        {illustration}
    </div>
    <h3 className="text-2xl font-extrabold mt-6 text-black uppercase tracking-tight">{title}</h3>
    <p className="mt-2 text-black font-semibold max-w-xs text-sm">{description}</p>
  </div>
);

const Modal: FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode; title: string; }> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white border-4 border-black rounded-2xl shadow-comic-lg w-full max-w-6xl h-[90vh] relative flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b-4 border-black flex-shrink-0">
            <h2 className="text-xl font-extrabold text-black uppercase tracking-tight">{title}</h2>
            <button
                onClick={onClose}
                className="w-10 h-10 bg-brain-pink border-4 border-black rounded-full shadow-comic-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-comic-md transition-all flex items-center justify-center"
                aria-label="Close modal"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <div className="p-2 sm:p-4 flex-grow bg-white rounded-b-xl">
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
    <span className={`px-5 py-2 rounded-full font-extrabold uppercase text-sm transition-all cursor-pointer border-4 border-black shadow-comic-sm ${active ? 'bg-brain-cyan text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-comic-md' : 'bg-white text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-comic-md'}`}>
      {children}
    </span>
  );

  const NavButton: FC<{children: React.ReactNode; onClick: () => void;}> = ({ children, onClick }) => (
    <button onClick={onClick} className="px-5 py-2 rounded-full font-extrabold uppercase text-sm transition-all border-4 border-black shadow-comic-sm bg-white text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-comic-md">
        {children}
    </button>
  );


  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-5xl font-black text-brain-cyan uppercase tracking-tight" style={{textShadow: '4px 4px 0 #000'}}>Brain</h1>
          <nav className="hidden md:flex items-center space-x-2 bg-brain-yellow p-2 rounded-full border-4 border-black shadow-comic-md">
            <NavLink active>Home</NavLink>
            <NavButton onClick={() => setShowAbout(true)}>About</NavButton>
            <NavButton onClick={() => setShowHowToUse(true)}>How to use</NavButton>
          </nav>
          <a href="https://brain23.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-brain-cyan text-black px-6 py-3 rounded-full font-extrabold text-lg uppercase border-4 border-black shadow-comic-md hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_rgba(0,0,0,1)] transition-all">
            Use it for free
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative text-center pt-16 pb-24 px-4">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-black max-w-3xl mx-auto leading-tight text-black uppercase tracking-tight">Focus faster with personalized binaural sound</h2>
            <div className="inline-block mt-6 bg-brain-cyan px-8 py-4 rounded-3xl border-4 border-black shadow-comic-lg">
              <p className="text-xl md:text-2xl font-extrabold text-black uppercase">Fewer clicks to your flow state.</p>
            </div>
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
          <h2 className="text-5xl font-black text-black uppercase tracking-tight">Ready to focus</h2>
          <p className="text-2xl text-black font-bold mt-2 uppercase">Start your journey.</p>
          <a href="https://brain23.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-brain-green text-black px-8 py-4 rounded-full font-extrabold text-xl uppercase border-4 border-black shadow-comic-lg hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_rgba(0,0,0,1)] transition-all">
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
