import { useGame } from "../hooks/useGame";

interface ScoreButtonProps {
  scoreType: 'strike' | 'spare';
}

export function ScoreButton({ scoreType }: ScoreButtonProps) {
  const {
    setSpareForCurrentFrame,
    setStrikeForCurrentFrame
  } = useGame();

  function handleClick() {
    if (scoreType === 'strike') {
      setStrikeForCurrentFrame();
    } else {
      setSpareForCurrentFrame();
    }
  }

  return (
    <button
      className="fixed z-10 bottom-20 right-4 bg-blue-500 hover:bg-blue-600 text-white p-3 w-10 h-10 centralize rounded-full shadow-lg"
      onClick={() => handleClick()}
    >
      {scoreType === 'strike' ? 'X' : '/'}
    </button>
  )
}
