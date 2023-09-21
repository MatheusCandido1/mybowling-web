import { IFrame } from "../entities/Frame";

export function formatScore(frame: IFrame): string {
  if(frame.status === 'COMPLETED') {
    if(frame.isStrike) {
      return 'X';
    } else if(frame.isSpare) {
      return `${frame?.firstBall?.pins} /`
    } else {
      return `${frame?.firstBall?.pins} ${frame?.secondBall?.pins}`
    }
  }
  return '-';
}

export function formatPoints(points: Number): string {
  if(Number.isNaN(points)) {
    return '-';
  }
  return points.toString();
}
