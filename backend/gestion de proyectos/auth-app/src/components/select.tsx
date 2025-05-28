import React from "react"
import { cn } from "../lib/utils"

export const Select = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("relative", className)} {...props} />
)

export const SelectTrigger = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("w-full border rounded-md px-3 py-2 bg-white cursor-pointer", className)}
      {...props}
    />
  )
)
SelectTrigger.displayName = "SelectTrigger"

export const SelectContent = ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className={cn("absolute mt-1 w-full bg-white border rounded shadow", className)} {...props} />
)

export const SelectItem = ({
  children,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) => (
  <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer" {...props}>
    {children}
  </li>
)

export const SelectValue = ({ children }: { children?: React.ReactNode }) => (
  <span>{children}</span>
)
