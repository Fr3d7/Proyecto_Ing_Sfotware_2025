import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'link'
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base = "rounded-md px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"

  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    link: "text-gray-600 hover:underline"
  }

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    />
  )
}
