// Navbar.jsx
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // lock scroll when mobile menu open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // detect scroll -> add shadow + blur + smaller height
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-20 md:h-20" />

      <header
        className={[
          "fixed left-0 top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/85 backdrop-blur-md shadow-sm"
            : "bg-white",
        ].join(" ")}
      >
        <div className="mx-auto container px-4">
          <div
            className={[
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "h-16" : "h-20",
            ].join(" ")}
          >
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div
                className={[
                  "transition-all duration-300",
                  scrolled ? "h-10 w-10" : "h-12 w-12",
                ].join(" ")}
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="leading-none">
                <div
                  className={[
                    "font-semibold tracking-wide text-[#9B1C1C] transition-all duration-300",
                    scrolled ? "text-xl" : "text-2xl",
                  ].join(" ")}
                >
                  Tifow
                </div>
                <div className="-mt-0.5 text-sm text-[#9B1C1C]/70">
                  creative
                </div>
              </div>
            </a>

            {/* Desktop links */}
            <nav className="hidden items-center gap-10 md:flex">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xl font-medium text-[#9B1C1C] hover:opacity-80"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className={[
                  "rounded-md bg-[#9B1C1C] text-white font-semibold hover:opacity-90 transition-all duration-300",
                  scrolled ? "px-5 py-2.5 text-sm" : "px-6 py-3 text-base",
                ].join(" ")}
              >
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#9B1C1C] hover:bg-[#9B1C1C]/10 md:hidden"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile overlay + drawer */}
        <div
          className={`fixed inset-0 z-50 md:hidden ${
            open ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-hidden={!open}
        >
          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Drawer */}
          <aside
            className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out
            ${open ? "translate-x-0" : "translate-x-full"}`}
            role="dialog"
            aria-modal="true"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between border-b border-black/10 p-4">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="font-semibold text-[#9B1C1C]">Tifow</div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-md p-2 text-[#9B1C1C] hover:bg-[#9B1C1C]/10"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Drawer content */}
            <div className="p-4 bg-white min-h-screen ">
              <nav className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-lg font-medium text-[#9B1C1C] hover:bg-[#9B1C1C]/10"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#9B1C1C] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Contact Us
              </a>
            </div>
          </aside>
        </div>
      </header>
    </>
  );
}
