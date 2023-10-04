import { useState } from "react";
import { Pin } from "../Pin";

const frameToString = (frame: number[]) => {
  return frame.length > 0 ? frame.join(" - ") : "";
};

const defaultFrame = [1,2,3,4,5,6,7,8,9,10]

export function PinBoard() {
  const [selectedPins, setSelectedPins] = useState<number[]>([]);

  const rows : number[][] = [
    [10, 9, 8, 7],
    [6, 5, 4],
    [3, 2],
    [1],
  ];

  const frame = [...selectedPins].sort((a, b) => a - b);

  //onst remainingFrame = defaultFrame.filter((pin) => !frame.includes(pin));

  function handlePinSelection(pin: number) {
    setSelectedPins((prevSelectedPins) =>
    prevSelectedPins.includes(pin)
      ? prevSelectedPins.filter((selectedPin) => selectedPin !== pin)
      : [...prevSelectedPins, pin]
  );
  }

  return (
    <>
      <div className="flex flex-col w-full mb-8 mt-4">
        {rows.map((row, index) => (
          <section className="flex justify-center w-full" key={index}>
            {row.map((pin, index) => (
              <Pin
                onClick={() => handlePinSelection(pin)}
                className={!selectedPins.includes(pin) ? "text-teal-600" : "text-red-800"}
                key={index}
              />
          ))}
        </section>
      ))}
    </div>
  </>
  );
}

/*
  <div className="flex justify-center w-full">
    <p className="text-black text-sm">
      Current Split:
    </p>
  </div>
*/
