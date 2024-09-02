import { Document, Page, type DocumentProps } from "@react-pdf/renderer"

import { cn } from "@/helpers"

export interface DocumentShellProps
  extends React.PropsWithChildren<DocumentProps> {}

export const DocumentShell = ({ children, ...rest }: DocumentShellProps) => {
  return (
    <Document style={cn("font-sans text-sm")} {...rest}>
      <Page size="A4" style={cn("p-12")}>
        {children}
      </Page>
    </Document>
  )
}
