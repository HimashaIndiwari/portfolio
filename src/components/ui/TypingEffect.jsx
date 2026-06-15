import { useTypingEffect } from "../../hooks/usePortfolioHooks";

/**
 * Animated typing effect displaying rotating role titles.
 */
export default function TypingEffect({ words }) {
  const displayText = useTypingEffect(words);

  return (
    <span className="typing-cursor gradient-text text-xl font-semibold md:text-2xl lg:text-3xl">
      {displayText}
    </span>
  );
}
