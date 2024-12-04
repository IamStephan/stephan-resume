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
          Architected and developed six web applications independently,
          overseeing the entire front-end design, development, and deployment
          processes.
        </ListItem>
        <ListItem>
          Revamped the front-end architecture of the company's flagship web
          application, reducing its size by 50% and enhancing modularity within
          a tight deadline.
        </ListItem>
        <ListItem>
          Optimized front-end performance using techniques such as lazy loading,
          code splitting, and asset optimization.
        </ListItem>
        <ListItem>
          Designed and implemented scalable, maintainable, and testable
          applications by employing modular architecture and reusable
          components.
        </ListItem>
        <ListItem>
          Played a key role in the maintenance and expansion of a COVID
          screening app with 10,000 daily active users during the pandemic.
        </ListItem>
        <ListItem>
          Introduced integration tests for the COVID screening app to ensure
          consistent user flows across all updates.
        </ListItem>
        <ListItem>
          Standardized the use of React, TypeScript, and TailwindCSS across all
          projects to deliver high-quality, responsive, and modern web
          applications.
        </ListItem>
        <ListItem>
          Collaborated closely with a small, cross-functional development team
          of two (front-end and back-end), ensuring alignment and seamless
          integration.
        </ListItem>
      </ListBlock>

      <ListBlock
        title="Front-end web developer"
        subTitle="Leverage BPO"
        date="May 2021 - Mar 2022"
      >
        <ListItem>
          Translated high-fidelity wireframes into responsive, production-ready
          websites, ensuring consistent user experience across devices.
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
          Improved website performance by reducing page download sizes by 60%,
          leading to faster load times and higher user satisfaction.
        </ListItem>
        <ListItem>
          Designed and implemented a reusable template project for A/B testing,
          accelerating campaign development.
        </ListItem>
      </ListBlock>

      <ListBlock
        title="Freelance Developer"
        subTitle="Various"
        date="Oct 2018 - Mar 2021"
        noGap
      >
        <ListItem>
          Collaborated directly with business owners to design and deliver
          customized websites and mobile applications that met unique business
          goals.
        </ListItem>
        <ListItem>
          Built scalable and maintainable codebases using Typescript, React and
          GatsbyJS.
        </ListItem>
        <ListItem>
          Developed a mobile application for transactional document management,
          allowing users to view, generate, and share documents efficiently.
        </ListItem>
        <ListItem>
          Designed and developed an e-commerce solution from the ground up using
          React and Strapi.
        </ListItem>
      </ListBlock>
    </Section>
  )
}
