import React, { useEffect, useState, useRef } from 'react';
import confetti from 'canvas-confetti';

const TypeFlare = ({
  words = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
  startDelay = 0,
  loop = true,
  reverse = false,
  pauseOnHover = false,
  className = '',
  cursor = true,
  cursorChar = '|',
  cursorClassName = 'tf-cursor',
  confettiOnComplete = false,      
  onComplete = () => {},
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [paused, setPaused] = useState(false);
  const completeRef = useRef(false);
  const spanRef = useRef(null);

const triggerConfettiAtText = () => {
  if (!spanRef.current) {
    confetti({ particleCount: 50, spread: 20, origin: { y: 0.3 }, startVelocity: 30, gravity: 0.3 });
    return;
  }
  const rect = spanRef.current.getBoundingClientRect();
  const x = (rect.left + rect.right) / 2 / window.innerWidth;
  const y = (rect.top + rect.bottom) / 2 / window.innerHeight;

  confetti({
    particleCount: 50,
    spread: 20,
    origin: { x, y },
    startVelocity: 30,
    gravity: 0.3,
  });
};


  useEffect(() => {
    if (!words.length) return;

    let typingTimeout;
    const currentWord = words[wordIndex % words.length];

    const type = () => {
      if (paused) {
        typingTimeout = setTimeout(type, 200);
        return;
      }

      if (isDeleting) {
        setText(prev => prev.slice(0, -1));
      } else {
        setText(prev => currentWord.slice(0, prev.length + 1));
      }

      let nextDelay = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && text === currentWord) {
        if (confettiOnComplete) triggerConfettiAtText();
        nextDelay = delayBetweenWords;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex(prev => {
          if (!loop && prev + 1 >= words.length) {
            if (!completeRef.current) {
              completeRef.current = true;
              onComplete();
            }
            return prev;
          }
          return reverse
            ? (prev - 1 + words.length) % words.length
            : prev + 1;
        });
      }

      typingTimeout = setTimeout(type, nextDelay);
    };

    typingTimeout = setTimeout(type, startDelay || typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex, paused, words.length, confettiOnComplete]);

  return (
    <span
      ref={spanRef}
      className={className}
      aria-live="polite"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {text}
      {cursor && <span className={cursorClassName}>{cursorChar}</span>}
    </span>
  );
};

export default TypeFlare;