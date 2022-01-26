import {
  absentColor,
  CharStatus,
  correctColor,
  presentColor,
} from '../../lib/statuses'
import classnames from 'classnames'

type Props = {
  value?: string
  status?: CharStatus
  presentColor: string
  absentColor: string
  correctColor: string
}

export const getCellStyles = (
  value: string | undefined,
  status: CharStatus | undefined
) => {
  if (status === 'absent') {
    return {
      background: absentColor,
      border: absentColor,
      textColor: 'White',
    }
  }
  if (status === 'present') {
    return {
      background: presentColor,
      border: presentColor,
      textColor: 'White',
      textStroke: 'White',
    }
  }
  if (status === 'correct') {
    return {
      background: correctColor,
      border: correctColor,
      textColor: 'White',
    }
  }
}
export const Cell = ({
  value,
  status,
  presentColor,
  absentColor,
  correctColor,
}: Props) => {
  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded',
    {
      'bg-white border-slate-200': !status,
      'border-black': value && !status,
      'cell-animation': !!value,
    }
  )

  return (
    <div style={getCellStyles(value, status)} className={classes}>
      {value}
    </div>
  )
}
