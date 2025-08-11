declare module 'react-typeflare' {
  import { FC } from 'react';

  interface TypeFlareProps {
    words: string[];                    // Array of words to type
    typingSpeed?: number;                // Speed of typing (ms per character)
    deletingSpeed?: number;              // Speed of deleting (ms per character)
    delayBetweenWords?: number;          // Delay between words (ms)
    startDelay?: number;                 // Delay before starting the typing effect (ms)
    loop?: boolean;                      // Whether to loop the effect
    reverse?: boolean;                   // Whether to type in reverse
    pauseOnHover?: boolean;              // Pause typing when hovered
    className?: string;                  // Custom class name for styling
    cursor?: boolean;                    // Whether to show a cursor
    cursorChar?: string;                 // Character for the cursor
    cursorClassName?: string;            // Custom class name for the cursor
    confettiOnComplete?: boolean;        // Trigger confetti on completion
    onComplete?: () => void;             // Callback when typing is complete
    [key: string]: any;                  // Allow other arbitrary props
  }

  export const TypeFlare: FC<TypeFlareProps>;
}
