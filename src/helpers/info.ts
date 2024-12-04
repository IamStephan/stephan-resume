import { type IconProps } from "@/components"

export interface PersonalDetail {
  url: string
  label: string
  icon: IconProps["icon"]
}

export const PersonalDetails: PersonalDetail[] = [
  {
    icon: "Mail",
    label: "stephanburger54@gmail.com",
    url: "mailto:stephanburger54@gmail.com",
  },
  {
    icon: "Phone",
    label: "(+27) 62 909 8820",
    url: "tel:(+27) 62 909 8820",
  },
  {
    icon: "LinkedIn",
    label: "LinkedIn: stephan-burger",
    url: "https://www.linkedin.com/in/stephan-burger/",
  },
]
