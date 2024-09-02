import { Section, ListBlock, ListItem } from "@/components"

export const Projects = () => {
  return (
    <Section title="Projects">
      <ListBlock
        title="InHealth Suite"
        subTitle="Several web applications"
        date="Apr 2024 - Present"
      >
        <ListItem>
          Developed and maintained a suite of applications for both internal and
          external use, handling all front-end development and deployment
          independently.
        </ListItem>

        <ListItem>
          Architected each application with a modular design, ensuring
          scalability, maintainability, and ease of updates.
        </ListItem>

        <ListItem>
          Built the entire suite using React, TypeScript, and TailwindCSS,
          ensuring consistent performance and user experience across all
          applications.
        </ListItem>
      </ListBlock>

      <ListBlock
        title="InHealth Wellness"
        subTitle="Icon employee wellness"
        date="Jul 2024 - Sep 2024"
      >
        <ListItem>
          A progressive web app (PWA) designed for employers to assess employee
          wellness through health sessions.
        </ListItem>

        <ListItem>
          Integrated an external SDK to implement facial scanning features,
          enabling real-time readings of biomarkers such as blood pressure,
          heart rate, and hemoglobin using AI and remote photoplethysmography
          (r-PPG).
        </ListItem>

        <ListItem>
          Designed and built the app using React, TypeScript, and TailwindCSS,
          ensuring a responsive and intuitive user interface.
        </ListItem>

        <ListItem>
          Enabled the app to be installed locally on devices as a PWA, providing
          users with a seamless experience.
        </ListItem>
      </ListBlock>

      <ListBlock
        title="Specd"
        subTitle="Live website testing"
        date="Jun 2021 - Oct 2021"
      >
        <ListItem>
          Implemented Cypress test runners using Github Actions.
        </ListItem>

        <ListItem>
          Used Firebase for storing test recordings, triggering test runners,
          collecting results and authentication.
        </ListItem>

        <ListItem>
          Developed an admin dashboard to view test results using NextJS and
          TailwindCSS.
        </ListItem>
      </ListBlock>

      <ListBlock
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
      </ListBlock>
    </Section>
  )
}
