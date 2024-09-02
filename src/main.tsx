import { DocumentShell } from "@/layout"
import { Overview, Experience, Projects, Skills } from "@/sections"

export const Resume = () => {
  return (
    <DocumentShell>
      <Overview />
      <Experience />
      <Skills />
      <Projects />
    </DocumentShell>
  )
}
