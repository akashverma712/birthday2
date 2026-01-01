import React, { useState, useEffect } from 'react';
import {
  Gift,
  Heart,
  Cake,
  Camera,
  PartyPopper,
  Sparkles,
  Star,
  Smile,
  Music,
  ChevronRight,
} from 'lucide-react';

// Import images from assets
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';

// Floating Balloon Component
const Balloon = ({ color, delay }) => (
  <div
    className="absolute bottom-[-100px] animate-float opacity-70 pointer-events-none"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${Math.random() * 5 + 5}s`,
    }}
  >
    <div className={`w-12 h-16 rounded-full ${color} relative`}>
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-8 bg-gray-300/40"></div>
    </div>
    <style>{`
      @keyframes float {
        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
        20% { opacity: 0.7; }
        100% { transform: translateY(-120vh) rotate(20deg); opacity: 0; }
      }
      .animate-float { animation: float linear infinite; }
    `}</style>
  </div>
);

const Confetti = () => (
  <div className="fixed inset-0 pointer-events-none z-50">
    {[...Array(60)].map((_, i) => (
      <div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `-10%`,
          backgroundColor: ['#FF69B4', '#FFD700', '#00E5FF', '#7C4DFF', '#FF5252'][
            Math.floor(Math.random() * 5)
          ],
          width: Math.random() * 8 + 4 + 'px',
          height: Math.random() * 8 + 4 + 'px',
          borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          animation: `fall ${Math.random() * 3 + 2}s linear infinite`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
    <style>{`
      @keyframes fall {
        to { transform: translateY(110vh) rotate(720deg); }
      }
    `}</style>
  </div>
);

const App = () => {
  const [step, setStep] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [isCandleLit, setIsCandleLit] = useState(true);

  useEffect(() => {
    if (step === 1 && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (step === 1 && countdown === 0) {
      setTimeout(() => setStep(2), 500);
    }
  }, [step, countdown]);

  const nextStep = () => setStep((prev) => prev + 1);

  const MemoryCollage = () => (
    <div className="space-y-6 animate-in fade-in zoom-in duration-1000">
      <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-1 rounded-full text-pink-600 font-bold mb-2">
        <Camera size={18} />
        <span>OUR BEST MOMENTS</span>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <div className="row-span-2 group relative overflow-hidden rounded-2xl border-4 border-white shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform">
          <img
            src={image1}
            alt="Memory 1"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-2 left-2 bg-white/80 px-2 py-1 rounded text-xs font-bold">
            Best Times ✨
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border-4 border-white shadow-lg rotate-[3deg] hover:rotate-0 transition-transform h-32 md:h-40">
          <img
            src={image2}
            alt="Memory 2"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="group relative overflow-hidden rounded-2xl border-4 border-white shadow-lg rotate-[-1deg] hover:rotate-0 transition-transform h-32 md:h-40">
          <img
            src={image3}
            alt="Memory 3"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border-4 border-white shadow-lg hover:scale-[1.02] transition-transform h-48">
        <img
          src={image4}
          alt="Memory 4"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
          <p className="text-white font-medium text-sm">
            Every moment with you is a celebration! ❤️
          </p>
        </div>
      </div>

      <div className="pt-6">
        <button
          onClick={() => setStep(0)}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center mx-auto space-x-2"
        >
          <span>Restart the Magic</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-4 font-sans relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <Balloon color="bg-pink-500" delay={0} />
        <Balloon color="bg-yellow-400" delay={2} />
        <Balloon color="bg-blue-400" delay={4} />
        <Balloon color="bg-purple-500" delay={1} />
        <Balloon color="bg-red-400" delay={3} />
        <div className="absolute top-10 left-10 text-pink-500/20 animate-pulse">
          <Heart size={100} />
        </div>
        <div className="absolute bottom-10 right-10 text-purple-500/20 animate-bounce">
          <Star size={100} />
        </div>
      </div>

      {step >= 2 && <Confetti />}

      <div className="max-w-xl w-full z-10">
        <div className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/20 text-center relative overflow-hidden">
          {step === 0 && (
            <div className="space-y-8">
              <Gift size={100} className="mx-auto text-pink-400 animate-bounce" />
              <h1 className="text-5xl font-black">Hey You!</h1>
              <p className="text-xl text-gray-300">
                Something legendary is waiting for you...
              </p>
              <button
                onClick={nextStep}
                className="px-10 py-4 bg-white text-black font-black text-xl rounded-2xl hover:bg-pink-500 hover:text-white transition"
              >
                OPEN MY SURPRISE 🎁
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="h-64 flex flex-col items-center justify-center space-y-6">
              <h2 className="text-2xl font-bold text-pink-400 uppercase">
                Brace Yourself...
              </h2>
              <div className="text-9xl font-black animate-ping">
                {countdown}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <h2 className="text-6xl font-black bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400 text-transparent bg-clip-text">
                HAPPY BIRTHDAY!
              </h2>
              <p className="text-2xl italic">
                “May your day be as awesome as you are!”
              </p>
              <button
                onClick={nextStep}
                className="bg-white/20 p-4 rounded-full"
              >
                <ChevronRight />
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-10">
              <h2 className="text-3xl font-bold">Make a Wish 🕯️</h2>
              <div className="relative flex justify-center py-12">
                <div className="relative">
                  <div className="w-56 h-28 bg-pink-400 rounded-t-3xl border-b-8 border-pink-700"></div>
                  {isCandleLit && (
                    <div
                      className="absolute -top-14 left-1/2 -translate-x-1/2 cursor-pointer"
                      onClick={() => {
                        setIsCandleLit(false);
                        setTimeout(nextStep, 1500);
                      }}
                    >
                      <div className="w-3 h-14 bg-indigo-200 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 4 && <MemoryCollage />}
        </div>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 10s linear infinite; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default App;
