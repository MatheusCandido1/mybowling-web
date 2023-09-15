import { createContext, useState } from 'react';
import { IFrame } from '../entities/Frame';

interface GameContextData {
  frames: IFrame[];
  currentFrame?: IFrame;
  updateFrame: (frame: IFrame) => void;
  setStrikeForCurrentFrame: () => void;
  setSpareForCurrentFrame: () => void;
}

export const GameContext = createContext({} as GameContextData);

const initialFrames: IFrame[ ] = Array.from({ length: 10 }, (_, i) => ({
  frameNumber: i + 1,
  isStrike: false,
  isSpare: false,
  currentScore: 0,
  firstBall: {
    pins: undefined,
    thrown: false
  },
  secondBall: {
    pins: undefined,
    thrown: false,
  },
  status: i === 0 ? 'IN_PROGRESS':'WAITING',
}));

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [frames, setFrames] = useState<IFrame[]>(initialFrames);
  const currentFrame = frames.find(f => f.status === 'IN_PROGRESS');

  function updateFrame(frame: IFrame) {
    // Find the frame in the array
    let existingFrame = frames.find(f => f.frameNumber === frame.frameNumber);

    if(existingFrame) {
      const index = frames.indexOf(existingFrame);
      frames[index] = frame;

      if (index < frames.length - 1 && frames[index].secondBall.thrown) {
        frames[index + 1].status = 'IN_PROGRESS';
      }

      setFrames([...frames]);
    }
  }

  function setStrikeForCurrentFrame() {
    if (currentFrame) {
      currentFrame.isStrike = true;
      currentFrame.currentScore = 10;
      currentFrame.firstBall.pins = 10;
      currentFrame.status = 'COMPLETED';
      updateFrame(currentFrame);
    }
  }

  function setSpareForCurrentFrame() {
    if (currentFrame) {
      currentFrame.isSpare = true;
      currentFrame.currentScore = 10;
      currentFrame.secondBall.pins = 10 - Number(currentFrame.firstBall.pins);
      currentFrame.status = 'COMPLETED';
      updateFrame(currentFrame);
    }
  }

  return (
    <GameContext.Provider
      value={{
        updateFrame,
        frames,
        setStrikeForCurrentFrame,
        setSpareForCurrentFrame,
        currentFrame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
