import { useState, useEffect } from 'react';

export default function AnimatedText({ words = [], className = '' }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout);
  }, []);

  // Typing logic
  useEffect(() => {
    if (words.length === 0) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{words[index]?.substring(0, subIndex)}</span>
      <span
        className={`ml-1 inline-block w-[3px] h-[1.1em] bg-purple-500 rounded-full transition-opacity ${
          blink ? 'opacity-100' : 'opacity-0'
        }`}
      ></span>
    </span>
  );
}
