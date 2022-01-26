import { Cell } from './Cell'
import { presentColor, absentColor, correctColor } from '../../lib/statuses'

type Props = {
  guess: string
}

export const CurrentRow = ({ guess }: Props) => {
  const splitGuess = guess.split('')
  const emptyCells = Array.from(Array(5 - splitGuess.length))

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
      ))}
      {emptyCells.map((_, i) => (
        <Cell
          key={i}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
      ))}
    </div>
  )
}
