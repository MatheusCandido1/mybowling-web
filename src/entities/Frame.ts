export interface IFrame {
  frameNumber: number,
  isStrike: boolean,
  isSpare: boolean,
  currentScore: number,
  firstBall: {
    pins: number | undefined,
    thrown: boolean,
  },
  secondBall: {
    pins: number | undefined,
    thrown: boolean,
  },
  thirdBall?: {
    pins: number | undefined,
    thrown: boolean,
  },
  points: number,
  status: 'WAITING' | 'IN_PROGRESS' | 'COMPLETED',
}
