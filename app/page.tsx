import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { PersonalLinkIcons } from "./components/personal-link-icons";

export default function Home() {
  return (
    <main className="space-y-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-medium pt-12">Francis Juson</h1>
      <PersonalLinkIcons />
      <p>
        I&apos;m a developer who enjoys building things, optimist 😀, and solving problems as they come. I currently work
        at{" "}
        <Link
          className={badgeVariants({ variant: "outline" })}
          href="https://kooapps.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-[#F3B23E]">Koo</span>
          <span className="text-[#EE8131] -ml-1">apps</span>
        </Link>{" "}
        as a server developer, I work across the stack, building and maintaining an internal analytics dashboard.
        I collaborate closely with our data analysts to support their
        needs and meet critical requirements, delivering reliable solutions in a
        fast-paced environment.
      </p>


      {/* <div className="space-y-4">
        <h2 className="text-lg font-medium">Writings</h2>
        <ul className="list-disc pl-6">
          <li>
            <Link
              href="/writing/my-stack"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              My Stack
            </Link>
          </li>
        </ul>
      </div> */}
    </main>
  );
}
