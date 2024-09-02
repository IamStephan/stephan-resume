import { Image, type ImageProps } from "@react-pdf/renderer"

import BrandGithubIcon from "@/assets/icons/brand-github.png"
import BrandLinkinIcon from "@/assets/icons/brand-linkedin.png"
import MailIcon from "@/assets/icons/mail.png"
import PhoneIcon from "@/assets/icons/phone.png"
import WorldWebIcon from "@/assets/icons/world-www.png"
import ExternalLinkIcon from "@/assets/icons/external-link.png"

import HelpIcon from "@/assets/icons/help.png"

const IconMap = {
  Github: BrandGithubIcon,
  LinkedIn: BrandLinkinIcon,
  Mail: MailIcon,
  Phone: PhoneIcon,
  WorldWeb: WorldWebIcon,
  ExternalLink: ExternalLinkIcon,
  Unknown: HelpIcon,
}

export interface IconProps extends Omit<ImageProps, "src" | "source"> {
  icon: keyof typeof IconMap
}

export const Icon = ({ icon = "Unknown", ...rest }: IconProps) => {
  const iconSrc = IconMap[icon]

  return <Image src={iconSrc} {...rest} />
}
