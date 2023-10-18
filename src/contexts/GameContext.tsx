import { createContext, useState } from 'react';
import { IFrame } from '../entities/Frame';

interface GameContextData {
  frames: IFrame[];
  currentFrame?: IFrame;
  updateFrame: (frame: IFrame) => void;
  setStrikeForCurrentFrame: () => void;
  setSpareForCurrentFrame: () => void;
  calculateFrame(currentFrame: IFrame, frameIndex: number): number | undefined;
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
  thirdBall: {
    pins: undefined,
    thrown: false,
  },
  points: 0,
  status: i === 0 ? 'IN_PROGRESS':'WAITING',
}));

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [frames, setFrames] = useState<IFrame[]>(initialFrames);
  const currentFrame = frames.find(f => f.status === 'IN_PROGRESS');

  function updateFrame(frame: IFrame) {
    let existingFrame = frames.find(f => f.frameNumber === frame.frameNumber);

    if(existingFrame) {

      const index = frames.indexOf(existingFrame);
      frames[index] = frame;


      if (index < frames.length - 1 && frames[index].secondBall.thrown) {
        frames[index + 1].status = 'IN_PROGRESS';
      }

      setFrames([...frames]);
      //setCurrentScore(existingFrame, index)
      // recalculateScore();

    }
  }
  /*
  function recalculateScore() {
    const updatedFrames = frames.map((frame: IFrame, index) => {
      const prevFrame = frames[index - 1];
      const val = prevFrame ? prevFrame.currentScore : 0;

      if (frame.isStrike) {
        return { ...frame, currentScore: val + 10 + calculateFrame(frame, index + 1) };
      } else if (frame.isSpare) {
        return { ...frame, currentScore: val + 10 + calculateFrame(frame, index + 1) };
      } else {
        return { ...frame, currentScore: val + calculateFrame(frame, index + 1) };
      }
    });

    // Update the frames array with the updatedFrames
    setFrames(updatedFrames);
  }*/



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

  function calculateFrame(currentFrame: IFrame | undefined, frameIndex: number | undefined) {
    if(currentFrame !== undefined && frameIndex !== undefined) {
      if(currentFrame.frameNumber === 10) {
          if(currentFrame.firstBall.pins === 10) {
              return 10 + currentFrame.firstBall.pins + (currentFrame.thirdBall?.pins || 0);
          }

          let semiTotal = (currentFrame.firstBall?.pins || 0) + (currentFrame.secondBall?.pins || 0);
          if(semiTotal === 10) {
              return semiTotal + (currentFrame.thirdBall?.pins || 0)
          }

          if(semiTotal <= 9) {
              return semiTotal
          }
      }

      const nextFrame = frames[frameIndex]
      const nextNextFrame = frames[frameIndex+1]

      if(currentFrame.isStrike) {
          if(nextFrame.isStrike) {
              if(nextNextFrame.isStrike) {
                  return 20;
              }
              if(nextNextFrame.isSpare) {
                  return 10 + (nextNextFrame.firstBall.pins || 0)
              }
          }
          if(nextFrame.isSpare) {
              return 10
          }
      }
      if (currentFrame.isSpare) {
          if(!nextFrame.isSpare) {
              return nextFrame.firstBall.pins
          }
      }
      if(!currentFrame.isSpare && !currentFrame.isStrike) {
          return currentFrame.points
      }
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
        calculateFrame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
