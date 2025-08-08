import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function TypeFlare({
  words = [],
  typingSpeed = 100,      
  deletingSpeed = 50,
  delayBetweenWords = 1000,
  loop = true,
  reverse = false,
  startDelay = 500,
  cursor = true,
  cursorChar = "|",
  className = "",
  style = {},
  allowInput = false,
  confettiOnComplete = false,
  starsOnWordChange = false,
  onComplete = () => {},
  onWordChange = () => {},
}) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [showStars, setShowStars] = useState(false);
  const completeRef = useRef(false);

  const textRef = useRef(null);

  const textValueRef = useRef(text);
  textValueRef.current = text;

  useEffect(() => {
    if (allowInput || !words.length) return;

    let typingTimeout;

    const tick = () => {
      const currentWord = words[wordIndex % words.length];
      const currentText = textValueRef.current;

      if (isDeleting) {
        setText(currentText.slice(0, -1));
      } else {
        setText(currentWord.slice(0, currentText.length + 1));
      }

      let nextDelay = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && currentText === currentWord) {
        nextDelay = delayBetweenWords;
        setIsDeleting(true);

        if (confettiOnComplete) {
          triggerConfettiAtText();
        }
        if (starsOnWordChange) {
          setShowStars(true);
          setTimeout(() => setShowStars(false), 1500);
        }
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        let nextIndex = reverse
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

    typingTimeout = setTimeout(tick, startDelay);

    return () => clearTimeout(typingTimeout);
  }, [
    wordIndex,
    isDeleting,
    allowInput,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
    loop,
    reverse,
    confettiOnComplete,
    starsOnWordChange,
    onComplete,
    onWordChange,
    startDelay,
  ]);

  const triggerConfettiAtText = () => {
    if (!textRef.current) {
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.3 } });
      return;
    }

    const rect = textRef.current.getBoundingClientRect();
    const x = (rect.left + rect.right) / 2 / window.innerWidth; 
    const y = rect.top / window.innerHeight; 

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { x, y },
    });
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (confettiOnComplete && e.key === "Enter") {
      triggerConfettiAtText();
    }
    if (starsOnWordChange && e.key === " ") {
      setShowStars(true);
      setTimeout(() => setShowStars(false), 1500);
    }
  };

  const combinedStyle = {
    display: "inline-flex",
    alignItems: "center",
    position: "relative",
    ...style,
  };

  return (
    <div style={{ position: "relative" }}>
      {allowInput ? (
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={`tf-input ${className}`}
          style={combinedStyle}
          placeholder="Type something..."
        />
      ) : (
        <span className={className} style={combinedStyle} ref={textRef}>
          {text}
          {cursor && <span style={{ marginLeft: "2px" }}>{cursorChar}</span>}
        </span>
      )}

      {showStars && (
        <span
          style={{
            position: "absolute",
            top: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "1.2rem",
            color: "gold",
            animation: "fadeUp 1.5s ease-out",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          ✨
        </span>
      )}

      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 1; transform: translateY(0) scale(1); }
            100% { opacity: 0; transform: translateY(-20px) scale(1.5); }
          }
        `}
      </style>
    </div>
  );
}
