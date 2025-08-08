import React, { useEffect, useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import Particles from 'react-tsparticles';
import './styles.css';


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
  style = {},                 
  cursor = true,
  cursorChar = '',
  cursorClassName = 'tf-cursor',
  confettiOnComplete = false,
  starsOnWordChange = false,
  // optional helpers:
  wordColors = [],          
  wordStyles = [],          
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

    const tick = () => {
      if (paused) {
        typingTimeout = setTimeout(tick, 200);
        return;
      }

      if (isDeleting) {
        setText(prev => prev.slice(0, -1));
      } else {
        setText(prev => currentWord.slice(0, prev.length + 1));
      }

      let nextDelay = isDeleting ? deletingSpeed : typingSpeed;

      // word fully typed
      if (!isDeleting && text === currentWord) {
        nextDelay = delayBetweenWords;
        setIsDeleting(true);

        if (confettiOnComplete) {
          confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 }
          });
        }

        if (starsOnWordChange) {
          setShowStars(true);
          setTimeout(() => setShowStars(false), 1500);
        }
      }
      else if (isDeleting && text === '') {
        setIsDeleting(false);
        const nextIndex = reverse
          ? (wordIndex - 1 + words.length) % words.length
          : wordIndex + 1;

        if (!loop && nextIndex >= words.length) {
          if (!completeRef.current) {
            completeRef.current = true;
            onComplete();
          }
          return;
        }

        setWordIndex(nextIndex);
        onWordChange(nextIndex);
      }

      typingTimeout = setTimeout(tick, nextDelay);
    };

    typingTimeout = setTimeout(tick, startDelay || typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex, paused, words.length]);

  const appliedWordStyle =
    wordStyles && wordStyles.length ? wordStyles[wordIndex % wordStyles.length] : {};
  const appliedColor =
    wordColors && wordColors.length ? { color: wordColors[wordIndex % wordColors.length] } : {};
  const combinedStyle = { ...style, ...appliedColor, ...appliedWordStyle };

  return (
    <span className="tf-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
      <span
        className={`tf-text ${className}`}
        style={{ ...combinedStyle, position: 'relative', zIndex: 2 }}
        aria-live="polite"
        onMouseEnter={() => pauseOnHover && setPaused(true)}
        onMouseLeave={() => pauseOnHover && setPaused(false)}
      >
        {text}
        {cursor && <span className={cursorClassName}>{cursorChar}</span>}
      </span>

      {showStars && (
        <div className="tf-stars-container" aria-hidden>
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
           
          />
        </div>
      )}
    </span>
  );
};

export default TypeFlare;
