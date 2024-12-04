import { Section, ListBlock, ListItem } from "@/components"

export const Projects = () => {
  return (
    <Section title="Projects" break>
      <ListBlock
        title="InHealth Suite"
        subTitle="Several web applications"
        date="Apr 2024 - Present"
      >
        <ListItem>
          Developed and maintained a suite of applications for internal and
          external use, independently managing all front-end development and
          deployment.
        </ListItem>

        <ListItem>
          Architected each application with a modular design, ensuring
          scalability, maintainability, and ease of updates.
        </ListItem>

        <ListItem>
          Standardized design and development workflows using React, TypeScript,
          and TailwindCSS, ensuring consistent performance and a seamless user
          experience across the suite.
        </ListItem>
      </ListBlock>

      <ListBlock
        title="InHealth Wellness"
        subTitle="Icon employee wellness"
        date="Jul 2024 - Sep 2024"
      >
        <ListItem>
          Developed a progressive web app (PWA) enabling employers to assess
          employee wellness through interactive health sessions.
        </ListItem>

        <ListItem>
          Integrated an external SDK to implement advanced facial scanning
          features, enabling real-time biomarker readings such as blood
          pressure, heart rate, and hemoglobin via AI and remote
          photoplethysmography (r-PPG).
        </ListItem>

        <ListItem>
          Conducted research on the inner workings of facial scanning technology
          and real-time biomarker detection, presenting findings to executives
          to guide decision-making.
        </ListItem>

        <ListItem>
          Added functionality to allow third parties to seamlessly integrate
          into the system using iframes.
        </ListItem>

        <ListItem>
          Enabled local installation of the app as a PWA to provide a seamless,
          device-native experience.
        </ListItem>
      </ListBlock>

      <ListBlock
        title="Specd"
        subTitle="Live website testing"
        date="Jun 2021 - Oct 2021"
      >
        <ListItem>
          Implemented automated test runners using Cypress and integrated them
          with GitHub Actions for continuous testing.
        </ListItem>

        <ListItem>
          Leveraged Firebase for managing test recordings, triggering test
          executions, storing results, and authentication.
        </ListItem>

        <ListItem>
          Developed an admin dashboard with Next.js and TailwindCSS, providing a
          centralized platform for viewing and managing test results.
        </ListItem>
      </ListBlock>

      {/* <ListBlock
        title="Gerimed Mobility"
        subTitle="E-commerce storefront"
        date="Jun 2020 - Nov 2020"
        noGap
      >
        <ListItem>
          Implemented predictable and reliable state management on the front end
          using finite state machines (xState).
        </ListItem>

        <ListItem>
          Created an order management system using custom Stapi plugins.
        </ListItem>

        <ListItem>
          Used GraphQL API to declaratively fetch and submit data to Strapi.
        </ListItem>
      </ListBlock> */}
    </Section>
  )
}
