import { View, type ViewProps } from "@react-pdf/renderer"
import { cn } from "@/helpers"

export interface ExpanderProps extends ViewProps {}

export const Expander = ({ style, ...rest }: ExpanderProps) => {
  return <View style={cn("flex-1", style)} {...rest} />
}
