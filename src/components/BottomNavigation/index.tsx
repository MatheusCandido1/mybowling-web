import { useState } from "react";
import { IconButton } from "./IconButton";
import { RiHomeLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { BowlingIcon } from "../BowlingIcon";
import { GiGymBag } from "react-icons/gi";
import { BiBowlingBall } from "react-icons/bi";

export function BottomNavigation() {
  const [active, setActive] = useState(2);

  function handleActive(active: number) {
    setActive(active);
  }

  return (
    <div className="h-20 shadow-lg w-full border-2 flex justify-between items-center rounded-t-xl px-5">
      <IconButton
        icon={<RiHomeLine className="h-8 w-8" />}
        active={active === 0}
        onClick={() => handleActive(0)}
        route={'/'}
      />
      <IconButton
        icon={<BowlingIcon />}
        active={active === 1}
        onClick={() => handleActive(1)}
        route={'/'}
      />
      <IconButton
        icon={<BiBowlingBall className="h-8 w-8" />}
        active={active === 2}
        onClick={() => handleActive(2)}
        route={'/game'}
      />
      <IconButton
        icon={<GiGymBag className="h-8 w-8" />}
        active={active === 3}
        onClick={() => handleActive(3)}
        route={'/equipments'}
      />
      <IconButton
        icon={<LuUser2 className="h-8 w-8" />}
        active={active === 4}
        onClick={() => handleActive(4)}
        route={'/'}
      />
    </div>
  )
}
