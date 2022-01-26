import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { presentColor, absentColor, correctColor } from '../../lib/statuses'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Guess the WORDLE in 6 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          value="W"
          status="correct"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Cell
          value="E"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Cell
          value="A"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Cell
          value="R"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Cell
          value="Y"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
      </div>
      <p className="text-sm text-gray-500">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          value="P"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Cell
          value="I"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Cell
          value="L"
          status="present"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Cell
          value="O"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Cell
          value="T"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
      </div>
      <p className="text-sm text-gray-500">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          value="V"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Cell
          value="A"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Cell
          value="G"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Cell
          value="U"
          status="absent"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Cell
          value="E"
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
      </div>
      <p className="text-sm text-gray-500">
        The letter U is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
