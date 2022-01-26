import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { presentColor, absentColor, correctColor } from '../../lib/statuses'

type Props = {
  guess: string
}

export const CompletedRow = ({ guess }: Props) => {
  const statuses = getGuessStatuses(guess)

  return (
    <div className="flex justify-center mb-1">
      {guess.split('').map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
      ))}
    </div>
  )
}
