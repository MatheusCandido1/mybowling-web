import { GiBowlingPin } from "react-icons/gi";
import { cn } from "../utils/cn";

interface PinProps {
  className?: string;
  onClick?: () => void;
}

export function Pin({ className, onClick }: PinProps) {
  return (
    <GiBowlingPin
      onClick={onClick}
      className={
        cn("text-teal-600 h-16 w-16",
        className
      )}
    />
  )
}
