import { useGame } from "../../hooks/useGame";
import { cn } from "../../utils/cn";
import { formatScore, formatPoints } from "../../utils/formatScore";

export function Scores() {
  const { frames } = useGame();

  return (
    <div className="flex flex-col gap-4">
      <footer className="w-full flex">
        {frames && frames.map((frame, index) => (
        <div key={frame.frameNumber}
          className={
            cn(
              "w-full centralize p-1 flex-col h-auto",
              index !== 0 && "border-r",
              index === 1 && "border-l",
              index === 9 && "border-none",
            )}
        >
          <header className="w-full text-center font-bold">
            {frame.frameNumber}
          </header>
          <span>{formatScore(frame)}</span>
          <span>{formatPoints(frame.currentScore)}</span>
        </div>
      ))}
      </footer>
    </div>
  )
}
