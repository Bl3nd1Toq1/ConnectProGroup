import React, { memo, useState } from 'react';

export const AdBanner: React.FC = memo(() => {
  const [showLeaderboard, setShowLeaderboard] = useState(true);
  const [showRectangle, setShowRectangle] = useState(true);

  return (
    <>
      {/* 728x90 - Leaderboard (Sticky under navbar) */}
      {showLeaderboard && (
        <div className="sticky top-20 z-40 bg-gray-900/90 border-b border-white/10 text-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center">
            <div
              className="relative flex items-center justify-center bg-gray-800/80 border border-gray-700 rounded-md overflow-hidden w-full max-w-[728px] h-[50px] sm:h-[60px] md:h-[90px]"
            >
              <a
                href="https://imticker.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full h-full p-2"
                aria-label="Visit IMTicker"
              >
                <img
                  src="/imticker.png"
                  alt="IMTicker"
                  className="object-contain max-h-full max-w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = 'https://imticker.ch/wp-content/uploads/2024/04/cropped-imticker_logo_queer.png';
                  }}
                />
              </a>
              <button
                aria-label="Mbyll banerin 728x90"
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-700 text-gray-200 hover:bg-gray-600"
                onClick={() => setShowLeaderboard(false)}
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 300x250 - Medium Rectangle (Fixed bottom-right) */}
      {showRectangle && (
        <div className="fixed bottom-6 right-6 z-40">
          <div
            className="relative flex items-center justify-center bg-gray-900/90 border border-white/10 rounded-md shadow-lg backdrop-blur overflow-hidden"
            style={{ width: 300, height: 250 }}
          >
            <a
              href="https://imticker.ch/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full h-full"
              aria-label="Visit IMTicker"
            >
              <img
                src={"https://s.wordpress.com/mshots/v1/https%3A%2F%2Fimticker.ch?w=300&h=250"}
                alt="IMTicker Website Screenshot"
                className="object-cover w-full h-full"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = "https://imticker.ch/wp-content/uploads/2024/04/cropped-imticker_logo_queer.png";
                  target.className = "object-contain max-h-full";
                }}
              />
            </a>
            <button
              aria-label="Mbyll banerin 300x250"
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-700 text-gray-200 hover:bg-gray-600"
              onClick={() => setShowRectangle(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
});


