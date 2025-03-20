import React from 'react'

interface TitleProps {
  text: string | React.ReactNode;
  variant?: "default" | "extra";
  className?: string;
}

export default function Title({text, variant = "default", className}: TitleProps) {
  const isExtra = variant == "extra";

  return (
    <div
      className={`
        uppercase
        font-bold 
        ${isExtra 
          ? "text-[36px] leading-[40px] tracking-[1.29px] md:text-[56px] md:leading-[58px] md:tracking-[2px]" 
          : "text-[28px] tracking-[2px]"
        }
        ${className || ""}  
      `}
    >
      {text}
    </div>
  )
}
