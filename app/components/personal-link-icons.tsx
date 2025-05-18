import { LinkedinIcon, GithubIcon, Mail } from "lucide-react";
import { PersonalLinkIcon } from "./personal-link-icon";

const personalLinkIcons = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/francisgianj",
    icon: <LinkedinIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/francisgianj",
    icon: <GithubIcon />,
  },
  {
    label: "Email",
    href: "mailto:francisgian.fgm@gmail.com",
    icon: <Mail />,
  },
];

export function PersonalLinkIcons() {
  return (
    <div className="flex gap-4">
      {personalLinkIcons.map((icon) => (
        <PersonalLinkIcon key={icon.label} {...icon} />
      ))}
    </div>
  );
}