import { CSSProperties, ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className: string
  style: CSSProperties
}

export const Card = ({ children, className, style }: CardProps) => (
  <div
    className={`rounded-lg bg-white shadow-2xl p-5 ${className}`}
    style={style}
  >
    {children}
  </div>
)
