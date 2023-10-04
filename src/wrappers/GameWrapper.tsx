import { Frames } from "../components/Game/Frames"
import { PinBoardHeader } from "../components/Game/PinBoardHeader"
import { PinBoard } from "../components/Game/PinBoard"
import { GameProvider } from "../contexts/GameContext"
import { Scores } from "../components/Game/Scores"

export function GameWrapper() {
  return (
    <div >
      <GameProvider>
        <div>
          <Frames />
          <PinBoardHeader />

          <PinBoard />
        </div>
        <div className="flex items-center justify-center w-full h-10 -mt-6 bg-green-300">

        </div>
        <Scores />
      </GameProvider>
    </div>
  )
}
