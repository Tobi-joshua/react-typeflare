import React, { useEffect, useState } from 'react';

const TypeFlare = ({
  words = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
  loop = true,
  className = '',
  cursor = true,
  onComplete = () => {},
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;
    const currentWord = words[wordIndex % words.length];

    const type = () => {
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
        setWordIndex(prev => prev + 1);
        if (!loop && wordIndex + 1 >= words.length) {
          onComplete();
          return;
        }
      }

      typingTimeout = setTimeout(type, nextDelay);
    };

    typingTimeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className={className}>
      {text}
      {cursor && <span className="tf-cursor">|</span>}
    </span>
  );
};

export default TypeFlare;