import { Swiper, SwiperSlide } from 'swiper/react';
import { Frame } from "../../components/Frame";
import { useGame } from '../../hooks/useGame';
import 'swiper/css';

export function Frames() {
  const { frames } = useGame();

  return (
    <>
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
    </>
  )
}
