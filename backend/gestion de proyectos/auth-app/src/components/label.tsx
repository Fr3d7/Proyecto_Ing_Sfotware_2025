import React from "react"
import { cn } from "../lib/utils"

export const Label = ({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label
    className={cn("block text-sm font-medium text-gray-700", className)}
    {...props}
  />
)

