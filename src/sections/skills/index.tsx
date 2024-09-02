import { View, Text } from "@react-pdf/renderer"

import { LabelListItem, Section } from "@/components"
import { cn } from "@/helpers"

export const Skills = () => {
  return (
    <Section title="Technical Skills">
      <LabelListItem label="Languages">
        JavaScript, Typescript, HTML5, CSS3, CSS preprocessors, PHP, Rust.
      </LabelListItem>

      <LabelListItem label="Frameworks">
        NextJS, GatsbyJS, React, React Native, Tailwind CSS, Strapi.
      </LabelListItem>

      <LabelListItem label="Tools">
        Git, Github, NPM, Vite Babel, Lerna, Figma, Linux, Docker, Cypress, IIS.
      </LabelListItem>

      <LabelListItem label="Services">
        Digital Ocean, Netlify, Vercel, Firebase.
      </LabelListItem>
    </Section>
  )
}
