import { View, Text, type ViewProps } from "@react-pdf/renderer"
import { cn } from "@/helpers"

export interface SectionProps extends ViewProps {
  title: string
  noGap?: boolean
  children?: React.ReactNode
}

export const Section = ({
  title,
  noGap,
  children,
  style,
  ...rest
}: SectionProps) => {
  return (
    <View style={cn(!noGap && "mb-8", style)} {...rest}>
      <Text style={cn("text-xl font-bold")}>{title}</Text>
      {children}
    </View>
  )
}
