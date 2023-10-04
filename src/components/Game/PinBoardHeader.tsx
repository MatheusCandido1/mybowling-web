import { GiBowlingPin } from 'react-icons/gi';

export function PinBoardHeader() {
  return (
    <>
    <div className="flex items-center justify-center gap-4 mt-6 w-full">
      <div className="flex items-center border rounded-lg p-4 w-8/12 h-16 shadow-lg">
        <section className="flex items-center justify-center">
          <GiBowlingPin className="text-teal-600 h-8 w-8" />
          <span className="font-bold">Pin Up</span>
        </section>
        <section className="flex items-center justify-center">
          <GiBowlingPin className="text-red-800 h-8 w-8" />
          <span className="font-bold">Pin Down</span>
        </section>
      </div>
      <div className="flex items-center justify-center border rounded-lg p-2 w-4/12 h-16 shadow-lg">
        <section className="flex flex-col items-end justify-center w-full px-0.5">
          <div className="flex justify-between items-center w-full">
            <div className="font-bold">Score:</div>
            <div className="text-teal-600 font-bold">300</div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="font-bold">Max:</div>
            <div className="text-teal-600 font-bold">300</div>
          </div>
        </section>
      </div>
    </div>
    <div className="flex flex-col w-full mt-4">
      <div className="self-end">
        <span className="p-1.5 bg-teal-600 text-white rounded-lg text-lg">Ball 1</span>
      </div>
    </div>
    </>
  )
}
