import { LabelListItem, Section } from "@/components"

export const Skills = () => {
  return (
    <Section title="Technical Skills">
      <LabelListItem label="Languages">
        JavaScript, Typescript, HTML5, CSS3, CSS preprocessors, Rust.
      </LabelListItem>

      <LabelListItem label="Frameworks">
        NextJS, GatsbyJS, React, React Native, Tailwind CSS.
      </LabelListItem>

      <LabelListItem label="Tools">
        Git, Vite, Figma, Docker, Cypress.
      </LabelListItem>
    </Section>
  )
}
