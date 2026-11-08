
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowUp,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  MapPin,
} from "lucide-react";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    label: "TikTok",
    username: "@hussein.tifow",
    href: "https://www.tiktok.com/@hussein.tifow",
    type: "tiktok",
  },
  {
    label: "LinkedIn",
    username: "Hussein Tifow",
    href: "https://www.linkedin.com/in/hussein-tifow-60aa55315/",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    username: "@josephkabila15",
    href: "https://www.instagram.com/josephkabila15/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    username: "Joseph Kabila",
    href: "https://www.facebook.com/josephkabila15",
    Icon: Facebook,
  },
];

function TikTokIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.5 3c.6 2.8 2.4 4.7 5 4.9v3a8.3 8.3 0 0 1-4.9-1.7V16a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.3a2.7 2.7 0 1 0 2 2.6V3h2.9Z" />
    </svg>
  );
}

export default function Footer() {
  const { pathname } = useLocation();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="hero-grid relative isolate overflow-hidden border-t border-line bg-page">

      {/* Main footer content */}
      <div className="container relative z-10 mx-auto px-4 pt-16 pb-14 sm:px-6 sm:pt-20 lg:px-6 lg:pt-24 lg:pb-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_1.1fr] lg:gap-14 xl:gap-20">

          {/* LEFT COLUMN */}
          <div>
            {/* Brand */}
            <Link
              to="/"
              className="inline-flex items-center text-[20px] font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white"
            >
              Tifow Creatives
              <span className="text-brand">.</span>
            </Link>

            {/* About */}
            <p className="mt-7 max-w-md text-[14px] leading-8 text-zinc-600 dark:text-zinc-400">
              Multimedia specialist and visual storyteller
              based in Mogadishu, Somalia. Creating engaging
              video productions, motion graphics, and creative
              designs that connect brands with audiences.
            </p>

            {/* Professional information */}
            <div className="mt-9 border-t border-line">

              <a
                href="mailto:tifowgoley@gmail.com"
                className="group flex min-h-[60px] items-center justify-between gap-4 border-b border-line text-[14px] font-medium text-zinc-900 transition-colors hover:text-brand dark:text-white"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Mail
                    size={17}
                    strokeWidth={1.7}
                    className="shrink-0 text-brand"
                  />

                  <span className="break-all">
                    tifowgoley@gmail.com
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <div className="flex min-h-[60px] items-center justify-between gap-4 border-b border-line text-[14px] font-medium text-zinc-900 dark:text-white">
                <span className="flex items-center gap-3">
                  <MapPin
                    size={17}
                    strokeWidth={1.7}
                    className="text-brand"
                  />
                  Mogadishu, Somalia
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="text-zinc-400"
                />
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Navigation
            </p>

            <nav
              aria-label="Footer navigation"
              className="border-t border-line"
            >
              {navigation.map((item, index) => {
                const active =
                  pathname === item.path ||
                  (item.path !== "/" &&
                    pathname.startsWith(`${item.path}/`));

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`group flex min-h-[54px] items-center justify-between gap-3 border-b border-line text-[15px] font-medium transition-colors duration-200 ${
                      active
                        ? "text-brand"
                        : "text-zinc-800 hover:text-brand dark:text-zinc-300"
                    }`}
                  >
                    <span>{item.label}</span>

                    <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-2 lg:col-span-1">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Social
            </p>

            {/* Social grid */}
            <div className="grid grid-cols-2 border-l border-t border-line">
              {socialLinks.map((social) => {
                const Icon = social.Icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.label}`}
                    className="group flex min-h-[100px] min-w-0 items-start justify-between gap-2 border-r border-b border-line bg-page/60 p-3 transition-colors duration-200 hover:bg-surface sm:p-4"
                  >
                    <div className="flex min-w-0 items-start gap-3">

                      {/* Social icon */}
                      <span className="mt-1 shrink-0 text-zinc-400 transition-colors group-hover:text-brand dark:text-zinc-500">
                        {social.type === "tiktok" ? (
                          <TikTokIcon size={18} />
                        ) : (
                          <Icon
                            size={18}
                            strokeWidth={1.8}
                          />
                        )}
                      </span>

                      {/* Social details */}
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold text-zinc-900 dark:text-white">
                          {social.label}
                        </p>

                        <p className="mt-1 truncate text-[10px] text-zinc-500 dark:text-zinc-400">
                          {social.username}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.7}
                      className="mt-1 shrink-0 text-zinc-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Oversized brand name */}
      <div className="relative z-10 border-t border-line">
        <div className="container mx-auto overflow-hidden px-4 sm:px-6 lg:px-6">
          <Link
            to="/"
            aria-label="Tifow Creatives home"
            className="block overflow-hidden py-5 sm:py-8"
          >
            <span
              aria-hidden="true"
              className="block whitespace-nowrap text-center text-[clamp(45px,10.5vw,160px)] font-semibold uppercase leading-[1.05] tracking-[-0.075em] text-zinc-950/[0.045] dark:text-white/[0.055]"
            >
              TIFOW CREATIVES
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-line bg-page/70">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-6">
          <p className="text-[12px] text-zinc-500 dark:text-zinc-400">
            © {year} Tifow Creatives. All rights reserved.
          </p>

          <div className="flex items-center justify-between gap-6 sm:justify-end">
            <span className="text-[12px] text-zinc-500 dark:text-zinc-400">
              Designed with purpose.
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="group flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-page text-zinc-800 transition-colors hover:border-brand hover:text-brand dark:text-white"
            >
              <ArrowUp
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
