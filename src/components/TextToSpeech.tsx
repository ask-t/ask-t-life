import React, { useState, useEffect, useCallback } from 'react';

interface TextToSpeechProps {
  text: string;
  lang?: string;
  rate?: number;
}

export default function TextToSpeech({
  text,
  lang = 'en-US',
  rate = 0.9,
}: TextToSpeechProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [currentRate, setCurrentRate] = useState(rate);

  useEffect(() => {
    setIsSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
  }, []);

  const speak = useCallback(() => {
    if (!isSupported) return;

    // Stop any current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = currentRate;
    utterance.pitch = 1;

    // Try to find a good English voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(
      (voice) =>
        voice.lang.startsWith('en') &&
        (voice.name.includes('Samantha') ||
          voice.name.includes('Daniel') ||
          voice.name.includes('Google') ||
          voice.name.includes('Microsoft'))
    );
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, [text, lang, currentRate, isSupported]);

  const stop = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }, [isSupported]);

  const handleRateChange = (newRate: number) => {
    setCurrentRate(newRate);
    if (isPlaying) {
      stop();
    }
  };

  if (!isSupported) {
    return (
      <div className="text-xs text-[var(--muted)] italic my-2">
        (音声読み上げはこのブラウザでサポートされていません)
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 my-3 p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
      <button
        onClick={isPlaying ? stop : speak}
        className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium transition-all ${
          isPlaying
            ? 'bg-red-500 text-white hover:bg-red-600'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        title={isPlaying ? 'Stop' : 'Play'}
      >
        {isPlaying ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
            Stop
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
            Listen
          </>
        )}
      </button>

      <div className="flex items-center gap-2 ml-2">
        <span className="text-xs text-[var(--muted)]">Speed:</span>
        <select
          value={currentRate}
          onChange={(e) => handleRateChange(parseFloat(e.target.value))}
          className="text-xs px-2 py-1 rounded border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)]"
        >
          <option value={0.5}>0.5x (Slow)</option>
          <option value={0.7}>0.7x</option>
          <option value={0.9}>0.9x (Normal)</option>
          <option value={1.0}>1.0x</option>
          <option value={1.2}>1.2x (Fast)</option>
        </select>
      </div>

      <div className="flex-1 text-xs text-[var(--muted)] truncate ml-2" title={text}>
        "{text.slice(0, 50)}{text.length > 50 ? '...' : ''}"
      </div>
    </div>
  );
}
