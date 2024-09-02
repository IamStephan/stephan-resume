import ReactPDF from "@react-pdf/renderer"

import { registerFonts } from "@/helpers"
import { Resume } from "./src/main"

registerFonts()

ReactPDF.render(<Resume />, `${__dirname}/dist/stephan-burger-resume.pdf`)
