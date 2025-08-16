'use client'

import { Button } from '../ui/button'

type ButtonMainProps = {
  children: React.ReactNode
  icon?: React.ReactNode
}

export function ShimmerButton({ children, icon }: ButtonMainProps) {
  return (
    <Button
      variant="outline"
      className="before:mask before:mask-composite-exclude relative mt-2 overflow-hidden border-none bg-gradient-to-r from-sky-600 to-emerald-600 py-5 font-bold text-white transition-all duration-200 before:absolute before:inset-0 before:animate-[shimmer_3s_linear_infinite] before:rounded-sm before:bg-[length:200%_100%] before:bg-[linear-gradient(120deg,transparent,#ffffff,transparent)] before:p-[2px] before:content-[''] hover:text-white hover:brightness-90 md:mt-0"
    >
      {icon}
      {children}
    </Button>
  )
}
