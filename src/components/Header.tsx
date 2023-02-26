import { forwardRef } from "react";
import type { PropsWithChildren } from "react";
import cn from "classnames";

const Link = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>
>(({ children, ...props }, ref) => {
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const isActive = path === props.href;

  return (
    <a
      {...props}
      ref={ref}
      className={cn(
        isActive ? "bg-slate-200" : "",
        "font-bold text-slate-800 dark:text-slate-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
      )}
    >
      {children}
    </a>
  );
});

export default function Header() {
  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="flex items-center justify-between w-full relative max-w-2xl border-slate-200 dark:border-slate-700 mx-auto pt-8 pb-8 sm:pb-16 text-slate-900 bg-slate-50 dark:bg-slate-900 bg-opacity-60 dark:text-slate-100">
        <div>
          <Link href="/">Home</Link>
          {/* <Link href="#">Dashboard</Link> */}
          <Link href="/about">About</Link>
        </div>
      </nav>
    </div>
  );
}
