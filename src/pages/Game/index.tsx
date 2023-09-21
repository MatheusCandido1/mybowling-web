import { Frame } from "../../components/Frame";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { cn } from "../../utils/cn";
import ProgressBar from "../../components/ProgressBar";
import { GiBowlingPin } from "react-icons/gi";
import * as Switch from '@radix-ui/react-switch';
import { GameContext, GameProvider } from "../../contexts/GameContext";
import { formatScore, formatPoints } from "../../utils/formatScore";

export function Game() {


  return(
    <GameProvider>
      <GameContext.Consumer>
        {({ frames }) => (
           <div className="justify-between h-full flex flex-col">
           <div className="p-4 ">
           <Swiper
             spaceBetween={16}
             slidesPerView={2.35}
           >
             {frames.map((frame) => (
               <SwiperSlide key={frame.frameNumber}>
                 <Frame data={frame} />
               </SwiperSlide>
             ))}
           </Swiper>
           </div>
           <div>
           <div className="flex items-center justify-end px-5">
           <label className="text-[15px] leading-none pr-[15px]" htmlFor="airplane-mode">
             Show Pins
           </label>
           <Switch.Root
             className="w-[42px] h-[25px] bg-blackA9 rounded-full border-teal-600 relative shadow-blackA7 focus:shadow-[0_0_0_2px]  data-[state=checked]:bg-teal-600 outline-none cursor-default"
             id="airplane-mode"
           >
             <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
           </Switch.Root>
         </div>
           </div>
           <div className="w-full h-full justify-center items-center mt-4 flex flex-col gap-1">
             <div className="flex justify-center w-full gap-4">
               <GiBowlingPin className="text-teal-600 h-16 w-16 hover:text-red-900" />
               <GiBowlingPin className="text-teal-600 h-16 w-16 -ml-8" />
               <GiBowlingPin className="text-teal-600 h-16 w-16 -mr-8 -ml-8" />
               <GiBowlingPin className="text-teal-600 h-16 w-16" />
             </div>
             <div className="flex justify-center w-full gap-4">
               <GiBowlingPin className="text-teal-600 h-16 w-16" />
               <GiBowlingPin className="text-teal-600 h-16 w-16 -mr-8 -ml-8" />
               <GiBowlingPin className="text-teal-600 h-16 w-16" />
             </div>
             <div className="flex justify-center w-full gap-4">
               <GiBowlingPin className="text-teal-600 h-16 w-16 -mr-4 -ml-4" />
               <GiBowlingPin className="text-teal-600 h-16 w-16 -mr-4 -ml-4" />
             </div>
             <div className="flex justify-center w-full">
               <GiBowlingPin className="text-teal-600 h-16 w-16" />
             </div>

           </div>
           <div className="flex flex-col-reverse gap-4 p-4">
             <footer className="w-full flex">
               {frames && frames.map((frame, index) => (
                 <div key={frame.frameNumber}
                   className={
                     cn(
                       "w-full centralize p-1 flex-col h-auto",
                       index !== 0 && "border-r",
                       index === 1 && "border-l",
                       index === 9 && "border-none",
                     )}
                 >
                   <header
                     className="w-full text-center font-bold"
                   >
                     {frame.frameNumber}
                   </header>
                   <span>{formatScore(frame)}</span>
                   <span>{formatPoints(frame.currentScore)}</span>
                 </div>
               ))}
             </footer>
             <div>
               <ProgressBar
                 value={50}
                 maxValue={100}
               />
             </div>
           </div>
         </div>
          )}
    </GameContext.Consumer>
    </GameProvider>
  )
}
