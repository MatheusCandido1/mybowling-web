import { GiBowlingPin } from 'react-icons/gi';

export function BowlingIcon() {
  return (
    <div className="flex items-center">
      <GiBowlingPin className="h-8 w-8" />
      <GiBowlingPin className="h-8 w-8 -ml-5 mt-2" />
      <GiBowlingPin className="h-8 w-8 -ml-5" />
    </div>
  )
}
