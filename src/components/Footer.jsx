// Footer.jsx
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  // ✅ your real links
  const socials = [
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@hussein.tifow?_r=1&_t=ZS-93iwBlVjjSZ",
      icon: <TikTokIcon />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hussein-tifow-60aa55315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <LinkedInIcon />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/josephkabila15/",
      icon: <InstagramIcon />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/josephkabila15",
      icon: <FacebookIcon />,
    },
  ];

  return (
    <footer className="relative w-full bg-white">
      {/* rich background visuals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#9B1C1C]/10 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[#9B1C1C]/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(155,28,28,0.08),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(155,28,28,0.06),transparent_55%)]" />
      </div>

      <div className="h-[1px] w-full bg-black/10" />

      <div className="mx-auto container relative p-4 pt-20">
        <div
          className={[
            "rounded-3xl border border-black/10 bg-white/80 backdrop-blur-md",
            "px-6 py-8 md:px-10 md:py-10",
            "transition-all duration-700",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr_1fr] lg:items-start">
            {/* brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-black/10 bg-white">
                  <img
                    src={logo}
                    alt="Tifow logo"
                    className="h-10 w-10 object-contain"
                  />
                  <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-[#9B1C1C]/10 blur-xl" />
                </div>

                <div className="leading-none">
                  <div className="text-2xl font-semibold tracking-wide text-[#9B1C1C]">
                    Tifow
                  </div>
                  <div className="-mt-0.5 text-sm text-[#9B1C1C]/70">
                    creative
                  </div>
                </div>
              </div>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/60">
                Multimedia specialist focused on video production, motion
                graphics, branding, and modern UI/UX.
              </p>

              {/* SOCIAL ICONS (modern) */}
              <div className="mt-5 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <SocialIcon
                    key={s.label}
                    href={s.href}
                    label={s.label}
                    icon={s.icon}
                  />
                ))}
              </div>
            </div>

            {/* quick links */}
            <div>
              <div className="text-sm font-extrabold tracking-wide text-black">
                QUICK LINKS
              </div>

              <div className="mt-4 grid grid-cols-2 gap-y-3">
                <FooterLink href="#about" label="About" />
                <FooterLink href="#skills" label="Skills" />
                <FooterLink href="#experience" label="Experience" />
                <FooterLink href="#projects" label="Projects" />
                <FooterLink href="#services" label="Services" />
                <FooterLink href="#contact" label="Contact" />
              </div>
            </div>

            {/* contact card */}
            <div className="rounded-2xl border border-black/10 bg-white px-5 py-5">
              <div className="text-sm font-extrabold tracking-wide text-black">
                CONTACT
              </div>

              <div className="mt-4 space-y-3">
                <ContactRow
                  label="Email"
                  value={
                    <a
                      href="mailto:tifowgoley@gmail.com"
                      className="font-semibold text-black/70 hover:text-[#9B1C1C]"
                    >
                      tifowgoley@gmail.com
                    </a>
                  }
                  icon={<MailIcon />}
                />

                <ContactRow
                  label="Phone"
                  value={
                    <a
                      href="tel:+252618971439"
                      className="font-semibold text-black/70 hover:text-[#9B1C1C]"
                    >
                      618971439
                    </a>
                  }
                  icon={<PhoneIcon />}
                />

                <ContactRow
                  label="Location"
                  value={
                    <span className="font-semibold text-black/70">
                      Mogadishu
                    </span>
                  }
                  icon={<PinIcon />}
                />
              </div>

              <a
                href="#contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#9B1C1C] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95 active:scale-[0.99]"
              >
                Let’s Talk
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          {/* bottom bar */}
          <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="text-xs text-black/45">
              © {year} Tifow Creative. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge text="Video Production" />
              <Badge text="Motion Graphics" />
              <Badge text="Brand Design" />
              <Badge text="UI/UX" />
            </div>

            <a
              href="#home"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/70 transition hover:border-[#9B1C1C]/25 hover:text-[#9B1C1C]"
            >
              Back to top
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6-6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-black/35">
          Built with love for design, motion, and storytelling.
        </div>
      </div>
    </footer>
  );
}

/* ---------- bits ---------- */

function FooterLink({ href, label }) {
  return (
    <a
      href={href}
      className="text-sm font-semibold text-black/60 transition hover:text-[#9B1C1C]"
    >
      {label}
    </a>
  );
}

function Badge({ text }) {
  return (
    <span className="rounded-full bg-[#9B1C1C]/10 px-3 py-1 text-[11px] font-semibold text-[#9B1C1C]">
      {text}
    </span>
  );
}

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className={[
        "group grid h-11 w-11 place-items-center rounded-2xl",
        "border border-black/10 bg-white text-black/70",
        "transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-[#9B1C1C]/25 hover:text-[#9B1C1C]",
      ].join(" ")}
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
    </a>
  );
}

function ContactRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#9B1C1C]/10 text-[#9B1C1C]">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-xs font-semibold text-black/45">{label}</div>
        <div className="mt-0.5 text-sm">{value}</div>
      </div>
    </div>
  );
}

/* ---------- modern icons (filled, clean) ---------- */

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M16.5 3c.6 2.8 2.4 4.7 5 4.9v3a8.3 8.3 0 0 1-4.9-1.7V16a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.3a2.7 2.7 0 1 0 2 2.6V3h2.9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 21h4V9H3v12ZM9 9h3.8v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6.1V21h-4v-5.2c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V21H9V9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" />
      <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      <path d="M17.6 6.8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M13.5 22v-8h2.7l.5-3h-3.2V9.1c0-.9.3-1.6 1.7-1.6h1.7V4.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V11H7.3v3h2.4v8h3.8Z" />
    </svg>
  );
}

/* ---------- contact icons ---------- */

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6 8-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.9v3a2 2 0 0 1-2.2 2c-9.2-.7-16.9-8.4-17.6-17.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.2 1.3.5 2.6 1 3.8a2 2 0 0 1-.5 2.1l-1.3 1.3a16 16 0 0 0 6.8 6.8l1.3-1.3a2 2 0 0 1 2.1-.5c1.2.5 2.5.8 3.8 1a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
    </svg>
  );
}
