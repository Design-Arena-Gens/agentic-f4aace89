import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const scenes = [
    {
      text: "एक गाँव में मोहन नाम का एक गरीब कुम्हार रहता था।",
      image: "village",
      color: "#8B4513"
    },
    {
      text: "वह रोज़ सुबह नदी से मिट्टी लाता और अपने चाक पर घड़े बनाता।",
      image: "pottery",
      color: "#CD853F"
    },
    {
      text: "एक दिन उसने एक खास घड़ा बनाया, जिसमें उसने अपना सपना बसाया था।",
      image: "special-pot",
      color: "#DEB887"
    },
    {
      text: "वह घड़ा शहर भेज दिया गया।",
      image: "city",
      color: "#4682B4"
    },
    {
      text: "शहर में उसी घड़े ने एक बच्चे की प्यास बुझाई।",
      image: "child",
      color: "#87CEEB"
    },
    {
      text: "मोहन को पैसे कम मिले, पर उसे खुशी हुई कि उसकी मेहनत किसी के काम आई।",
      image: "happy",
      color: "#FFD700"
    }
  ];

  const nextScene = () => {
    if (currentScene < scenes.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentScene(currentScene + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevScene = () => {
    if (currentScene > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentScene(currentScene - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const restartStory = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScene(0);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      <Head>
        <title>मोहन की कहानी - एक कुम्हार की यात्रा</title>
        <meta name="description" content="मोहन कुम्हार की प्रेरणादायक कहानी" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <header>
          <h1>🏺 मोहन की कहानी 🏺</h1>
          <p className="subtitle">एक कुम्हार की प्रेरणादायक यात्रा</p>
        </header>

        <div className={`story-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
          <div className="scene" style={{ backgroundColor: scenes[currentScene].color }}>
            <div className="illustration">
              {scenes[currentScene].image === 'village' && (
                <svg viewBox="0 0 200 200" className="scene-svg">
                  <rect x="20" y="80" width="50" height="60" fill="#8B4513" />
                  <polygon points="45,50 20,80 70,80" fill="#654321" />
                  <rect x="35" y="100" width="15" height="20" fill="#4A4A4A" />
                  <circle cx="150" cy="60" r="30" fill="#FFD700" opacity="0.8" />
                  <rect x="0" y="140" width="200" height="60" fill="#228B22" />
                </svg>
              )}
              {scenes[currentScene].image === 'pottery' && (
                <svg viewBox="0 0 200 200" className="scene-svg">
                  <ellipse cx="100" cy="160" rx="30" ry="10" fill="#654321" />
                  <rect x="95" y="120" width="10" height="40" fill="#8B4513" />
                  <ellipse cx="100" cy="120" rx="35" ry="8" fill="#CD853F" />
                  <path d="M 75 90 Q 75 70 100 70 Q 125 70 125 90 L 115 120 L 85 120 Z" fill="#DEB887" stroke="#8B4513" strokeWidth="2" />
                  <circle cx="60" cy="60" r="8" fill="#87CEEB" />
                  <circle cx="80" cy="50" r="5" fill="#87CEEB" />
                </svg>
              )}
              {scenes[currentScene].image === 'special-pot' && (
                <svg viewBox="0 0 200 200" className="scene-svg">
                  <defs>
                    <radialGradient id="potGradient">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#DEB887" />
                    </radialGradient>
                  </defs>
                  <path d="M 80 80 Q 70 60 100 60 Q 130 60 120 80 L 115 140 Q 115 160 100 160 Q 85 160 85 140 Z" fill="url(#potGradient)" stroke="#8B4513" strokeWidth="2" />
                  <ellipse cx="100" cy="80" rx="22" ry="5" fill="#CD853F" />
                  <circle cx="100" cy="100" r="3" fill="#FFD700" />
                  <circle cx="90" cy="110" r="2" fill="#FFD700" />
                  <circle cx="110" cy="110" r="2" fill="#FFD700" />
                  <path d="M 85 120 Q 100 125 115 120" stroke="#FFD700" strokeWidth="2" fill="none" />
                </svg>
              )}
              {scenes[currentScene].image === 'city' && (
                <svg viewBox="0 0 200 200" className="scene-svg">
                  <rect x="20" y="80" width="30" height="100" fill="#708090" />
                  <rect x="60" y="60" width="35" height="120" fill="#778899" />
                  <rect x="105" y="70" width="28" height="110" fill="#696969" />
                  <rect x="143" y="50" width="37" height="130" fill="#708090" />
                  {[...Array(8)].map((_, i) => (
                    <rect key={i} x={25 + (i % 2) * 10} y={90 + Math.floor(i / 2) * 15} width="6" height="8" fill="#FFD700" />
                  ))}
                  <rect x="0" y="180" width="200" height="20" fill="#4A4A4A" />
                </svg>
              )}
              {scenes[currentScene].image === 'child' && (
                <svg viewBox="0 0 200 200" className="scene-svg">
                  <circle cx="100" cy="70" r="20" fill="#FDBCB4" />
                  <ellipse cx="100" cy="110" rx="25" ry="35" fill="#87CEEB" />
                  <line x1="75" y1="90" x2="60" y2="110" stroke="#FDBCB4" strokeWidth="5" strokeLinecap="round" />
                  <line x1="125" y1="90" x2="135" y2="95" stroke="#FDBCB4" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 125 95 Q 145 95 155 100 L 155 110 Q 155 120 145 120 Q 135 120 130 115" fill="#DEB887" stroke="#8B4513" strokeWidth="2" />
                  <circle cx="93" cy="67" r="2" fill="#000" />
                  <circle cx="107" cy="67" r="2" fill="#000" />
                  <path d="M 95 77 Q 100 80 105 77" stroke="#000" strokeWidth="1.5" fill="none" />
                  <line x1="145" y1="115" x2="140" y2="105" stroke="#87CEEB" strokeWidth="2" />
                  <circle cx="138" cy="100" r="2" fill="#87CEEB" />
                  <circle cx="142" cy="98" r="1.5" fill="#87CEEB" />
                </svg>
              )}
              {scenes[currentScene].image === 'happy' && (
                <svg viewBox="0 0 200 200" className="scene-svg">
                  <circle cx="100" cy="100" r="60" fill="#FDBCB4" />
                  <circle cx="85" cy="90" r="5" fill="#000" />
                  <circle cx="115" cy="90" r="5" fill="#000" />
                  <path d="M 75 110 Q 100 130 125 110" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M 70 70 Q 85 60 100 70" stroke="#000" strokeWidth="2" fill="none" />
                  <path d="M 100 70 Q 115 60 130 70" stroke="#000" strokeWidth="2" fill="none" />
                  <circle cx="50" cy="50" r="8" fill="#FFD700" opacity="0.8" />
                  <circle cx="150" cy="60" r="6" fill="#FFD700" opacity="0.8" />
                  <circle cx="140" cy="140" r="7" fill="#FFD700" opacity="0.8" />
                  <polygon points="100,170 95,180 100,175 105,180" fill="#FFD700" />
                </svg>
              )}
            </div>

            <div className="text-box">
              <p className="story-text">{scenes[currentScene].text}</p>
            </div>

            <div className="progress-indicator">
              {scenes.map((_, index) => (
                <div
                  key={index}
                  className={`progress-dot ${index === currentScene ? 'active' : ''} ${index < currentScene ? 'completed' : ''}`}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentScene(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="controls">
          <button
            onClick={prevScene}
            disabled={currentScene === 0}
            className="nav-button"
          >
            ← पिछला
          </button>

          <button
            onClick={restartStory}
            className="restart-button"
          >
            🔄 फिर से शुरू करें
          </button>

          <button
            onClick={nextScene}
            disabled={currentScene === scenes.length - 1}
            className="nav-button"
          >
            अगला →
          </button>
        </div>

        <footer>
          <p className="moral">
            सीख: मेहनत और ईमानदारी से किया गया काम हमेशा किसी न किसी के काम आता है।
          </p>
        </footer>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        header {
          text-align: center;
          color: white;
          margin-bottom: 30px;
          animation: fadeInDown 0.8s ease-out;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .story-container {
          max-width: 800px;
          margin: 0 auto;
          transition: opacity 0.3s ease;
        }

        .fade-out {
          opacity: 0;
        }

        .fade-in {
          opacity: 1;
        }

        .scene {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: background-color 0.5s ease;
        }

        .illustration {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .scene-svg {
          width: 100%;
          max-width: 300px;
          height: auto;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
          animation: scaleIn 0.5s ease-out;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .text-box {
          background: rgba(255, 255, 255, 0.9);
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .story-text {
          font-size: 1.4rem;
          line-height: 1.8;
          color: #333;
          text-align: center;
          font-weight: 500;
        }

        .progress-indicator {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 25px;
        }

        .progress-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .progress-dot:hover {
          transform: scale(1.3);
          background: rgba(255, 255, 255, 0.7);
        }

        .progress-dot.active {
          background: white;
          transform: scale(1.5);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }

        .progress-dot.completed {
          background: rgba(255, 255, 255, 0.8);
        }

        .controls {
          max-width: 800px;
          margin: 30px auto;
          display: flex;
          justify-content: space-between;
          gap: 15px;
        }

        button {
          padding: 15px 30px;
          font-size: 1.1rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .nav-button {
          background: white;
          color: #667eea;
          flex: 1;
        }

        .nav-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        .nav-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .restart-button {
          background: #FFD700;
          color: #333;
          flex: 1;
        }

        .restart-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        }

        footer {
          max-width: 800px;
          margin: 30px auto 0;
          text-align: center;
        }

        .moral {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 20px;
          border-radius: 15px;
          font-size: 1.2rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .scene {
            padding: 25px;
            min-height: 450px;
          }

          .story-text {
            font-size: 1.1rem;
          }

          .controls {
            flex-direction: column;
          }

          button {
            padding: 12px 20px;
            font-size: 1rem;
          }

          .moral {
            font-size: 1rem;
            padding: 15px;
          }
        }
      `}</style>
    </>
  );
}
