import { useState, useCallback, useRef } from 'react';

export function useAudio() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioCtxRef = useRef(null);

  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtxRef.current = new AudioContext();
      }
    }
  }, []);

  const playClick = useCallback(() => {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtxRef.current) return;
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtxRef.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, audioCtxRef.current.currentTime + 0.04);

      gain.gain.setValueAtTime(0.05, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);

      osc.start();
      osc.stop(audioCtxRef.current.currentTime + 0.04);
    } catch {
      // Audio fallback silent fail
    }
  }, [soundEnabled, initAudio]);

  const toggleSound = () => setSoundEnabled(prev => !prev);

  return { soundEnabled, toggleSound, playClick };
}
