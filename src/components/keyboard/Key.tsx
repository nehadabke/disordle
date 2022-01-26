import { ReactNode } from 'react'
import classnames from 'classnames'
import { KeyValue } from '../../lib/keyboard'
import {
  absentColor,
  CharStatus,
  correctColor,
  presentColor,
} from '../../lib/statuses'

type Props = {
  children?: ReactNode
  value: KeyValue
  width?: number
  status?: CharStatus
  onClick: (value: KeyValue) => void
  absentColor: string
  correctColor: string
  presentColor: string
}

export const getKeyStyles = (
  value: string | undefined,
  status: CharStatus | undefined,
  width: number
) => {
  if (!status) {
    return {
      width: `${width}px`,
      height: '58px',
    }
  }
  if (status === 'absent') {
    return {
      width: `${width}px`,
      height: '58px',
      background: absentColor,
      border: absentColor,
      textColor: 'White',
    }
  }
  if (status === 'present') {
    return {
      width: `${width}px`,
      height: '58px',
      background: presentColor,
      border: presentColor,
      textColor: 'White',
    }
  }
  if (status === 'correct') {
    return {
      width: `${width}px`,
      height: '58px',
      background: correctColor,
      border: correctColor,
      textColor: 'White',
    }
  }
}

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
}: Props) => {
  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none',
    {
      'bg-slate-200 hover:bg-slate-300 active:bg-slate-400': !status,
    }
  )

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button
      style={getKeyStyles(value, status, width)}
      className={classes}
      onClick={handleClick}
    >
      {children || value}
    </button>
  )
}
