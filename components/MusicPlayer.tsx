"use client";

type Props = {
  playing: boolean;
  onToggle: () => void;
};

export default function MusicPlayer({ playing, onToggle }: Props) {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onToggle}
        className="w-12 h-12 rounded-full bg-[#E8B4B8] text-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label={playing ? "Pause musik" : "Play musik"}
      >
        {playing ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z" />
        </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18 3v10.55A4 4 0 1 0 20 17V7h2V3h-4zM8 7v10.55A4 4 0 1 0 10 21V7H8z" />
          </svg>
        )}
      </button>
    </div>
  );
}