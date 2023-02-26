import type { PropsWithChildren } from "react";

export default function LinkButton({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className="flex w-full border border-slate-200 dark:border-slate-800 rounded-lg p-4 no-underline items-center text-slate-800 dark:text-slate-200 hover:dark:bg-slate-800 hover:bg-slate-100 transition-all justify-between font-medium"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
        />
      </svg>
    </a>
  );
}
