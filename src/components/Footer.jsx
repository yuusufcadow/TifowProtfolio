
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { siteData } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-page">
      <div className="site-container py-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Link
              to="/"
              className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white"
            >
              Tifow<span className="text-brand">.</span>
            </Link>

            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              {siteData.description}
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-brand dark:text-white"
          >
            Let's work together
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-line pt-6 text-xs text-zinc-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Tifow Creative.
            All rights reserved.
          </span>

          <span>Video · Design · Creative Direction</span>
        </div>
      </div>
    </footer>
  );
}
