import { View, Text } from "@react-pdf/renderer"

import { cn } from "@/helpers"
import { Section, ListItem, ListBlock } from "@/components"

export const Experience = () => {
  return (
    <Section title="Experience">
      <ListBlock
        title="Front-end developer"
        subTitle="Icon Health"
        date="Mar 2022 - Present"
      >
        <ListItem>
          Developed 6 web applications independently, managing the entire
          front-end design, development, and deployment process.
        </ListItem>
        <ListItem>
          Reworked the company's flagship web application, reducing its size by
          50% and enhancing modularity within a short timeframe.
        </ListItem>
        <ListItem>
          Optimized front-end performance through techniques such as lazy
          loading, code splitting, and asset optimization.
        </ListItem>
        <ListItem>
          Built scalable, maintainable, and testable applications using modular
          architecture.
        </ListItem>
        <ListItem>
          Maintained a COVID screening app with 10,000 daily active users during
          the pandemic.
        </ListItem>
        <ListItem>
          Introduced integration tests for the COVID screening app, ensuring all
          user flows remained consistent during updates.
        </ListItem>
        <ListItem>
          Leveraged React, TypeScript, and TailwindCSS across all projects to
          deliver high-quality, responsive web applications.
        </ListItem>
        <ListItem>
          Collaborated in a small, cross-functional development team of 2 people
          (back-end and front-end).
        </ListItem>
      </ListBlock>

      <ListBlock
        title="Front-end web developer"
        subTitle="Leverage BPO"
        date="May 2021 - Mar 2022"
      >
        <ListItem>
          Converted high-fidelity wireframes into production-ready websites.
        </ListItem>
        <ListItem>
          Introduced modern development tools to more efficiently create and
          deploy websites.
        </ListItem>
        <ListItem>
          Developed custom scripts using Javascript and Typescript to streamline
          repetitive tasks.
        </ListItem>
        <ListItem>
          Improved load times of websites by reducing download size by 60%.
        </ListItem>
        <ListItem>
          Built a template project to generate HTML and CSS components for A/B
          testing.
        </ListItem>
      </ListBlock>

      <ListBlock
        title="Freelance Developer"
        subTitle="Various"
        date="Oct 2018 - Mar 2021"
        noGap
      >
        <ListItem>
          Worked directly with business owners to create and deploy performant
          websites and mobile applications.
        </ListItem>
        <ListItem>
          Built stable and maintainable codebases using Typescript, React and
          GatsbyJS.
        </ListItem>
        <ListItem>
          Developed a mobile application with React Native for viewing,
          generating and sending transactional documents.
        </ListItem>
        <ListItem>
          Designed and developed an e-commerce solution from the ground up using
          React and Strapi.
        </ListItem>
      </ListBlock>
    </Section>
  )
}
