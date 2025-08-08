import React, { useEffect, useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import Particles from 'react-tsparticles';

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
  starsOnWordChange = false,
  onComplete = () => {},
  onWordChange = () => {}
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [paused, setPaused] = useState(false);
  const [showStars, setShowStars] = useState(false);
  const completeRef = useRef(false);

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
        nextDelay = delayBetweenWords;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        const nextIndex = reverse
          ? (wordIndex - 1 + words.length) % words.length
          : wordIndex + 1;

        if (!loop && nextIndex >= words.length) {
          if (!completeRef.current) {
            completeRef.current = true;
            onComplete();
            if (confettiOnComplete) {
              confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } });
            }
          }
          return;
        }

        setWordIndex(nextIndex);
        onWordChange(nextIndex);

        if (starsOnWordChange) {
          setShowStars(true);
          setTimeout(() => setShowStars(false), 1500);
        }
      }

      typingTimeout = setTimeout(type, nextDelay);
    };

    typingTimeout = setTimeout(type, startDelay || typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex, paused, words.length]);

  return (
    <>
      <span
        className={className}
        aria-live="polite"
        onMouseEnter={() => pauseOnHover && setPaused(true)}
        onMouseLeave={() => pauseOnHover && setPaused(false)}
      >
        {text}
        {cursor && <span className={cursorClassName}>{cursorChar}</span>}
      </span>

      {showStars && (
        <Particles
          options={{
            particles: {
              number: { value: 30 },
              shape: { type: 'star' },
              size: { value: 5 },
              move: { speed: 3 },
              opacity: { value: 0.8 }
            }
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
          }}
        />
      )}
    </>
  );
};

export default TypeFlare;
