import React from 'react'

interface NumberPickerProps {
  value: number;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export default function NumberPicker(props: NumberPickerProps) {
  const {
    value,
    setValue,
    min,
    max,
    className,
  } = props;

  return (
    <div className='w-fit flex items-center bg-gray gap-[5px] py-[15px] font-bold text-[13px] tracking-[1px]'>
      <div 
        className='cursor-pointer px-[15.5px] opacity-25 hover:opacity-100 hover:text-brown'
      >
        -
      </div>
      <div>
        {value}
      </div>
      <div 
        className='cursor-pointer px-[15.5px] opacity-25 hover:opacity-100 hover:text-brown'
      >
        +
      </div>
    </div>
  )
}
