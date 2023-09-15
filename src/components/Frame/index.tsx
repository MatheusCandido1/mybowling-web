import { useEffect, useState } from 'react'
import { IFrame } from '../../entities/Frame'
import { useGame } from '../../hooks/useGame';
import { cn } from '../../utils/cn';

interface FrameProps {
  data: IFrame;
}

export function Frame({ data }: FrameProps) {

  const {
    frameNumber,
    status,
  } = data;

  const {
    updateFrame,
  } = useGame();

  const [currentScore, setCurrentScore] = useState('')
  const [firstBall, setFirstBall] = useState(null)
  const [secondBall, setSecondBall] = useState(null)
  const [allowSecondBall, setAllowSecondBall] = useState(false)

  const handleFirstBallKeyDown = (e: any) => {
    if (
      e.key !== 'Backspace' &&
      e.key !== 'X' &&
      e.key !== 'x' &&
      (isNaN(parseInt(e.key, 10)) || !Number.isInteger(Number(e.key)))
    ) {
      e.preventDefault();
    }
  }

  const handleSecondBallKeyDown = (e: any) => {
    if (
      e.key !== 'Backspace' &&
      e.key !== '/' &&
      (isNaN(parseInt(e.key, 10)) || !Number.isInteger(Number(e.key)))
    ) {
      e.preventDefault();
    }
  };

  const handleFirstBall = (e: any) => {
    setAllowSecondBall(e.target.value !== 'X' && e.target.value !== 'x');
    setFirstBall(e.target.value);
  }

  const handleSecondBall = (e: any) => {
    setSecondBall(e.target.value);
  }

  function calculateScore() {
    if(!firstBall && !secondBall) {
      return;
    }

    let frame: IFrame;

    if(firstBall === 'X' || firstBall === 'x') {
      frame = {
        frameNumber: frameNumber,
        isStrike: true,
        isSpare: false,
        currentScore: 10,
        firstBall: {
          thrown: true,
          pins: 10,
        },
        secondBall: {
          pins: 0,
          thrown: false,
        },
        status: 'COMPLETED',
      }

      setCurrentScore('X')
      updateFrame(frame);
      return;
    }

    if(secondBall === '/') {
      frame = {
        frameNumber,
        isStrike: false,
        isSpare: true,
        currentScore: 10,
        firstBall: {
          pins: Number(firstBall),
          thrown: true,
        },
        secondBall: {
          pins: 10 - Number(firstBall),
          thrown: false,
        },
        status: 'COMPLETED',
      }

      setCurrentScore('/')
      updateFrame(frame);
      return;
    }

    if(firstBall) {
      frame = {
        frameNumber,
        isStrike: false,
        isSpare: false,
        currentScore: Number(firstBall),
        firstBall: {
          thrown: true,
          pins: Number(firstBall),
        },
        secondBall: {
          pins: 0,
          thrown: false,
        },
        status: 'IN_PROGRESS',
      }
      setCurrentScore(firstBall)
      updateFrame(frame);
      return
    }

    if(firstBall && secondBall) {
      const score = Number(firstBall) + Number(secondBall)

      frame = {
        frameNumber,
        isStrike: false,
        isSpare: false,
        currentScore: score,
        firstBall: {
          thrown: true,
          pins: Number(firstBall),
        },
        secondBall: {
          pins: Number(secondBall),
          thrown: true,
        },
        status: 'COMPLETED',
      }
      setCurrentScore(score ? String(score) : '')

      updateFrame(frame);
    }
  }

  useEffect(() => {
    calculateScore()
  }, [firstBall, secondBall, setFirstBall, setSecondBall])

  return (
    <>
      <div
        className={
          cn("flex flex-col w-full max-w-[150px] h-[112px] items-center justify-between p-2 rounded",
          status === 'IN_PROGRESS' && ' border-blue-500 border-2 ',
          status === 'WAITING' && ' bg-blue-200 ',
          status === 'COMPLETED' && ' border-2 border-green-500',
        )}
      >
        <header className="w-full centralize">
          <span>Frame {frameNumber}</span>
        </header>
        <div className="flex gap-2 w-full ">
          <input
            className="w-1/2 text-center border-b border-r uppercase"
            onChange={handleFirstBall}
            tabIndex={1}
            onKeyDown={handleFirstBallKeyDown}
            disabled={status === 'COMPLETED'}
          />
          <input
            className="border w-1/2 text-center rounded uppercase"
            onChange={handleSecondBall}
            disabled={!allowSecondBall || status === 'COMPLETED'}
            tabIndex={2}
            onKeyDown={handleSecondBallKeyDown}
          />
        </div>
        <footer className="flex flex-col w-full items-center justify-center h-[24px]">
          <span>{currentScore}</span>
        </footer>
      </div>
    </>
  )
}
