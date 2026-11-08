
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Menu,
  X,
  Sun,
  Moon,
  Linkedin,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";

// Navigation routes
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
];

// Official social profile links
const socialLinks = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@hussein.tifow",
    icon: "tiktok",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hussein-tifow-60aa55315/",
    icon: "linkedin",
  },
];

// TikTok icon (Lucide does not provide a brand TikTok icon)
function TikTokIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.525 0h4.082c.067 2.396 1.293 4.16 3.707 4.416v4.13c-1.43.132-2.682-.33-3.707-1.13v8.488c0 4.26-3.498 7.096-7.438 6.936-3.5-.142-6.44-3.106-6.45-6.61-.012-4.04 3.128-7.224 7.137-7.224.393 0 .786.03 1.175.09v4.22c-2.11-.68-4.115.828-4.1 2.882.01 1.55 1.278 2.79 2.828 2.79 1.69 0 2.766-1.15 2.766-2.95V0Z" />
    </svg>
  );
}

// Social icon renderer
function SocialIcon({ type, size = 18 }) {
  if (type === "tiktok") {
    return <TikTokIcon size={size} />;
  }

  return <Linkedin size={size} strokeWidth={1.8} />;
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);

  const closeButtonRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Allow smooth closing animation
  useEffect(() => {
    if (menuOpen) {
      setMenuMounted(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setMenuMounted(false);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [menuOpen]);

  // Lock body scrolling and handle keyboard
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = (event) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Main navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-line bg-page/95 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid h-[72px] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">

            {/* Logo + brand */}
            <Link
              to="/"
              onClick={closeMenu}
              aria-label="Tifow Creatives home"
              className="flex min-w-0 items-center gap-3 justify-self-start"
            >
              <img
                src={logo}
                alt=""
                className="h-10 w-10 shrink-0 object-contain"
              />

              <span className="truncate text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                Tifow{" "}
                <span className="text-brand">Creatives</span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden h-full items-center justify-center gap-7 lg:flex xl:gap-9"
            >
              {navLinks.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `group relative flex h-full items-center whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-brand"
                        : "text-zinc-600 hover:text-brand dark:text-zinc-400 dark:hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}

                      <span
                        className={`absolute bottom-0 left-0 h-[2px] w-full bg-brand transition-transform duration-200 ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center justify-end gap-2 justify-self-end">

              {/* Desktop social icons */}
              <div className="hidden items-center gap-1 xl:flex">
                {socialLinks.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Tifow on ${label}`}
                    title={label}
                    className="flex h-10 w-10 items-center justify-center text-zinc-500 transition-colors duration-200 hover:text-brand dark:text-zinc-400 dark:hover:text-white"
                  >
                    <SocialIcon type={icon} size={18} />
                  </a>
                ))}
              </div>

              {/* Separator */}
              <span
                aria-hidden="true"
                className="mx-1 hidden h-5 w-px bg-line xl:block"
              />

              {/* Global theme button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                title={isDark ? "Light mode" : "Dark mode"}
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-zinc-800 transition-colors hover:border-brand hover:text-brand dark:text-zinc-200"
              >
                {isDark ? (
                  <Sun size={18} strokeWidth={1.8} />
                ) : (
                  <Moon size={18} strokeWidth={1.8} />
                )}
              </button>

              {/* Mobile menu trigger */}
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation"
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                className="flex h-10 w-10 items-center justify-center border border-line text-zinc-900 transition-colors hover:border-brand dark:text-white lg:hidden"
              >
                <Menu size={21} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      {menuMounted && (
        <div className="fixed inset-0 z-[100] lg:hidden">

          {/* Backdrop */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation overlay"
            tabIndex={menuOpen ? 0 : -1}
            className={`absolute inset-0 w-full bg-black/65 transition-opacity duration-300 ${
              menuOpen
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          />

          {/* Drawer */}
          <aside
            id="mobile-navigation"
            role="dialog"
            aria-modal={menuOpen ? "true" : undefined}
            aria-label="Mobile navigation"
            className={`absolute right-0 top-0 flex h-full w-[86%] max-w-[380px] flex-col border-l border-line bg-page transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              menuOpen
                ? "translate-x-0"
                : "pointer-events-none translate-x-full"
            }`}
          >

            {/* Drawer heading */}
            <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-line px-5 sm:px-6">
              <Link
                to="/"
                onClick={closeMenu}
                className="flex items-center gap-2"
              >
                <img
                  src={logo}
                  alt=""
                  className="h-9 w-9 object-contain"
                />

                <span className="text-base font-semibold text-zinc-900 dark:text-white">
                  Tifow{" "}
                  <span className="text-brand">
                    Creatives
                  </span>
                </span>
              </Link>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => {
                  closeMenu();
                  menuButtonRef.current?.focus();
                }}
                aria-label="Close navigation"
                className="flex h-10 w-10 items-center justify-center border border-line text-zinc-800 transition-colors hover:border-brand dark:text-white"
              >
                <X size={20} strokeWidth={1.8} />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex-1 overflow-y-auto px-5 py-7 sm:px-6">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                Navigation
              </p>

              <nav aria-label="Mobile navigation">
                {navLinks.map(({ label, path }, index) => (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `group flex min-h-[60px] items-center justify-between border-b border-line transition-colors ${
                        isActive
                          ? "text-brand"
                          : "text-zinc-800 hover:text-brand dark:text-zinc-300"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="flex items-center gap-4">
                          <span
                            className={`w-6 text-xs ${
                              isActive
                                ? "text-brand"
                                : "text-zinc-400 dark:text-zinc-500"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-[16px] font-medium">
                            {label}
                          </span>
                        </span>

                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.8}
                          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* Contact CTA */}
              <Link
                to="/contact"
                onClick={closeMenu}
                className="btn-primary mt-8 flex w-full items-center justify-center gap-2"
              >
                Let's Work Together
                <ArrowUpRight size={17} strokeWidth={1.8} />
              </Link>
            </div>

            {/* Drawer footer */}
            <div className="shrink-0 border-t border-line px-5 py-6 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  Follow Tifow
                </span>

                <div className="flex items-center gap-2">
                  {socialLinks.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit Tifow on ${label}`}
                      className="flex h-10 w-10 items-center justify-center border border-line text-zinc-600 transition-colors hover:border-brand hover:text-brand dark:text-zinc-300"
                    >
                      <SocialIcon type={icon} size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <p className="mt-6 border-t border-line pt-5 text-xs text-zinc-500 dark:text-zinc-400">
                © {new Date().getFullYear()} Tifow Creatives
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
