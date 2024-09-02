import { createTw } from "react-pdf-tailwind"
import { twMerge as twMergeOriginal } from "tailwind-merge"
import clsx, { type ClassValue } from "clsx"

const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Inter"],
      mono: ["Roboto Mono"],
    },
  },
})

export const cn = (...args: ClassValue[]) => {
  const mergedStyles = twMergeOriginal(clsx(args))

  // prevent empty strings since the tw function
  // does not support it.
  if (mergedStyles === "") {
    return {}
  }

  return tw(mergedStyles)
}
