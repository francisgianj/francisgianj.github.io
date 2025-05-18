import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CodeBlock } from "@/app/components/code-block";

export default function MyStack() {
  return (
    <main className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h1 className="text-xl font-medium pt-12">My Stack</h1>
        <Link
          href="/"
          className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
        >
          Francis Juson
        </Link>
      </div>

      <div className="space-y-4">
        <p>
          These are the technologies I&apos;m most actively working with right
          now:
        </p>
        <section>
          <h2 className="text-lg font-medium">Frontend</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Framework (React)</li>
            <p>
              I&apos;ve been working with React since I started my career as a
              web developer in 2021, so it&apos;s the stack I&apos;m most
              comfortable and productive with. I usually start off all my
              projects using React with TypeScript.
            </p>
            <p>For data fetching, I use newer React patterns:</p>
            <details>
              <summary>Tanstack Query</summary>
              <p>
                I use Tanstack Query for data fetching. It&apos;s a powerful
                library that allows me to fetch, cache, and invalidate data
                whenever needed.
              </p>
              <CodeBlock
                code={`const { data, isLoading, error } = useQuery({
  queryKey: ["todos"],
  queryFn: () => fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()),
});`}
              />
            </details>
            <Accordion type="single" collapsible>
              <AccordionItem value="tanstack-query">
                <AccordionTrigger>Majority: Tanstack Query</AccordionTrigger>
                <AccordionContent>
                  <p>
                    I use Tanstack Query for data fetching. It&apos;s a powerful
                    library that allows me to fetch, cache, and invalidate data
                    whenever needed.
                  </p>
                  <br />
                  <p className="text-xs">
                    I avoid useEffect as much as possible.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <li>Styling (Tailwind CSS and shadcn/ui, and mui/material)</li>
            <p>
              I was always going headless but building flexible and accessible
              components.
            </p>
            <Accordion type="single" collapsible>
              <AccordionItem value="tailwind-headless-ui">
                <AccordionTrigger>
                  My past with Tailwind + HeadlessUI
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    I used Tailwind CSS + HeadlessUI because they gave me
                    greater flexibility in building and customizing components.
                    Instead of being locked into predefined styles. I wanted a
                    system that allowed me to create interfaces more freely,
                    with full control over both design and behavior.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-medium">Backend</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Node.js - JavaScript runtime</li>
            <li>Express - Web framework</li>
            <li>PostgreSQL - Database</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium">Tools & Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Git - Version control</li>
            <li>GitHub - Code hosting and collaboration</li>
            <li>Vercel - Deployment and hosting</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
