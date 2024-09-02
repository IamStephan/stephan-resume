import { View, Text, Link } from "@react-pdf/renderer"

import { Icon } from "@/components"
import { cn, PersonalDetails } from "@/helpers"

export const Overview = () => {
  return (
    <View style={cn("mb-8")}>
      <View style={cn("flex mb-4 flex-row")}>
        <View style={cn("flex-1")}>
          <Text style={cn("text-4xl leading-none mb-2 font-bold")}>
            Stephan Burger
          </Text>
          <Text style={cn("text-base font-mono text-neutral-500")}>
            Front-end Developer
          </Text>
        </View>

        <View style={cn("items-end font-mono text-xs")}>
          {PersonalDetails.map(({ icon, label, url }, i) => (
            <View key={i} style={cn("flex-row mb-1.5")}>
              <Icon style={cn("w-3 h-3 mt-0.5 mr-1.5")} icon={icon} />
              <Link src={url} style={cn("text-neutral-600 no-underline")}>
                {label}
              </Link>
            </View>
          ))}
        </View>
      </View>

      <View style={cn("text-neutral-600")}>
        <Text style={cn("mb-2")}>
          I am an experienced front-end developer who plans, builds, and deploys
          production-ready websites and applications using modern best practices
          and scalable architectures.
        </Text>

        <View style={cn("flex-row")}>
          <Text style={cn("font-bold mr-1.5")}>Specializing in:</Text>
          <Text>Typescript, CSS, React, Vite and NextJS.</Text>
        </View>
      </View>
    </View>
  )
}
