import { Text, View, type ViewProps } from "@react-pdf/renderer"

import { Expander } from "@/components"
import { cn } from "@/helpers"

export interface ListItemProps extends ViewProps {
  children: string
}

export const ListItem = ({ style, children, ...rest }: ListItemProps) => {
  return (
    <View
      style={cn("flex-row text-xs text-neutral-600 my-0.5", style)}
      {...rest}
    >
      <Text style={cn("mx-2")}>{"\u2022"}</Text>
      <Text style={cn("flex-1 leading-5")}>{children}</Text>
    </View>
  )
}

export interface LabelListItemProps extends ViewProps {
  label: string
  children: string
}

export const LabelListItem = ({
  label,
  style,
  children,
  ...rest
}: LabelListItemProps) => {
  return (
    <View
      style={cn("flex-row text-xs text-neutral-600 my-0.5 flex-wrap", style)}
      {...rest}
    >
      <Text style={cn("font-bold mr-2 w-20")}>{label}:</Text>
      <Text style={cn("flex-1 leading-5")}>{children}</Text>
    </View>
  )
}

export interface ListBlockProps extends ViewProps {
  title: string
  subTitle?: string
  date?: string
  noGap?: boolean
  children?: React.ReactNode
}

export const ListBlock = ({
  title,
  subTitle,

  date,
  style,
  noGap,
  children,
  ...rest
}: ListBlockProps) => {
  const showComma = typeof subTitle === "string" && subTitle
  const showSubTitle = typeof subTitle === "string" && subTitle
  const showDate = typeof date === "string" && date

  return (
    <View style={cn(!noGap && "mb-6", style)} {...rest} wrap={false}>
      <View style={cn("flex-row items-baseline mb-1")}>
        <Text style={cn("font-bold mr-1.5")}>
          {title}
          {showComma && ","}
        </Text>

        {showSubTitle ? (
          <Text style={cn("flex-1 text-neutral-600")}>{subTitle}</Text>
        ) : (
          <Expander />
        )}

        {showDate && <Text style={cn("text-xs text-neutral-600")}>{date}</Text>}
      </View>

      <View>{children}</View>
    </View>
  )
}
