import { LiaBowlingBallSolid } from "react-icons/lia";
import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";

export function LoadingOverlay() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 250);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-40">
      <LiaBowlingBallSolid
        className={cn(
          "h-14 w-14 text-teal-800 -ml-[150px] transitions-all duration-1000 animate-spin",
          animate && 'ml-[150px]',
        )}
      />
      <div className="h-1 w-1/2 bg-teal-800 rounded-full"></div>
    </div>
  );
}
