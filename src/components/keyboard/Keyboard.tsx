import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { presentColor, absentColor, correctColor } from '../../lib/statuses'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key
          value="Q"
          onClick={onClick}
          status={charStatuses['Q']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="W"
          onClick={onClick}
          status={charStatuses['W']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="E"
          onClick={onClick}
          status={charStatuses['E']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="R"
          onClick={onClick}
          status={charStatuses['R']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="T"
          onClick={onClick}
          status={charStatuses['T']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="Y"
          onClick={onClick}
          status={charStatuses['Y']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="U"
          onClick={onClick}
          status={charStatuses['U']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="I"
          onClick={onClick}
          status={charStatuses['I']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="O"
          onClick={onClick}
          status={charStatuses['O']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="P"
          onClick={onClick}
          status={charStatuses['P']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
      </div>
      <div className="flex justify-center mb-1">
        <Key
          value="A"
          onClick={onClick}
          status={charStatuses['A']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="S"
          onClick={onClick}
          status={charStatuses['S']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="D"
          onClick={onClick}
          status={charStatuses['D']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="F"
          onClick={onClick}
          status={charStatuses['F']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="G"
          onClick={onClick}
          status={charStatuses['G']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="H"
          onClick={onClick}
          status={charStatuses['H']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="J"
          onClick={onClick}
          status={charStatuses['J']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="K"
          onClick={onClick}
          status={charStatuses['K']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="L"
          onClick={onClick}
          status={charStatuses['L']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
      </div>
      <div className="flex justify-center">
        <Key
          width={65.4}
          value="ENTER"
          onClick={onClick}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        >
          Enter
        </Key>
        <Key
          value="Z"
          onClick={onClick}
          status={charStatuses['Z']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="X"
          onClick={onClick}
          status={charStatuses['X']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="C"
          onClick={onClick}
          status={charStatuses['C']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="V"
          onClick={onClick}
          status={charStatuses['V']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="B"
          onClick={onClick}
          status={charStatuses['B']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="N"
          onClick={onClick}
          status={charStatuses['N']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          value="M"
          onClick={onClick}
          status={charStatuses['M']}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        />
        <Key
          width={65.4}
          value="DELETE"
          onClick={onClick}
          presentColor={presentColor}
          absentColor={absentColor}
          correctColor={correctColor}
        >
          Delete
        </Key>
      </div>
    </div>
  )
}
