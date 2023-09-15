import { Link } from "react-router-dom";
import { cn } from "../../utils/cn"

interface IconButtonProps {
  icon: React.ReactNode
  active: boolean
  onClick(): void;
  route: string;
}

export function IconButton({ icon, active, onClick, route }: IconButtonProps) {
  return (
    <Link to={route}>
      <button
        onClick={onClick}
        className={
          cn("h-14 w-14 rounded-xl text-teal-600 flex justify-center items-center transition-all duration-300",
          active && 'h-16 w-16 rounded-xl flex justify-center items-center bg-teal-600 text-white z-10 shadow-lg -mt-16 transition-all duration-300',
        )}
      >
        {icon}
      </button>
    </Link>
  )
}
