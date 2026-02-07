// Skills.jsx
import React, { useEffect, useState } from "react";

export default function Skills() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="skills" className="relative w-full bg-white">
      <div className="mx-auto container relative px-4 py-12 md:py-20">
        <div className="pointer-events-none absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2">
          <div className="h-28 w-28 rounded-full bg-[#9B1C1C]/35 blur-3xl" />
        </div>

        <div className="text-center">
          <h2
            className={[
              "font-extrabold tracking-wide text-[#9B1C1C] transition-all duration-700",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ fontSize: "clamp(28px, 3.3vw, 44px)" }}
          >
            MY SKILLS
          </h2>

          <p
            className={[
              "mx-auto mt-3 max-w-xl text-black/60 transition-all duration-700",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{
              fontSize: "clamp(14px, 1.6vw, 18px)",
              transitionDelay: "120ms",
            }}
          >
            A collection of my technical skills and expertise <br />
            honed through various projects and experiences
          </p>
        </div>

        <div className="mt-12 grid gap-10">
          <FadeUp show={show} delay={180}>
            <SkillBox
              leftItems={[
                { icon: <MiniIcon kind="cam" />, text: "Cameraman & Videography" },
                { icon: <MiniIcon kind="edit" />, text: "Video Editing & Motion Graphics" },
                { icon: <MiniIcon kind="design" />, text: "Graphic Design & Branding" },
              ]}
              tools={<ToolsTop />}
            />
          </FadeUp>

          <FadeUp show={show} delay={260}>
            <SkillBox
              leftItems={[
                { icon: <MiniIcon kind="marketing" />, text: "Digital Marketing Strategy" },
                {
                  icon: <MiniIcon kind="figma" />,
                  text: "UI/UX & Figma Design\nMobile App & Website Design",
                },
                { icon: <MiniIcon kind="web" />, text: "Website & development" },
              ]}
              tools={<ToolsBottom />}
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function SkillBox({ leftItems, tools }) {
  return (
    <div className="rounded-2xl border border-[#9B1C1C]/55 bg-white px-6 py-8 md:px-12 md:py-12">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h3
            className="font-extrabold text-[#9B1C1C]"
            style={{ fontSize: "clamp(22px, 2.6vw, 36px)" }}
          >
            MY SKILLS
          </h3>

          <div className="mt-6 space-y-5">
            {leftItems.map((it, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0">{it.icon}</div>

                <p
                  className="whitespace-pre-line pt-2 text-black/75"
                  style={{ fontSize: "clamp(14px, 1.5vw, 18px)" }}
                >
                  {it.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3
            className="text-center font-extrabold text-[#9B1C1C]"
            style={{ fontSize: "clamp(22px, 2.6vw, 36px)" }}
          >
            TOOLS &amp; SOFTWARE
          </h3>

          <div className="mt-10 w-full">{tools}</div>
        </div>
      </div>
    </div>
  );
}

function FadeUp({ show, delay = 0, children }) {
  return (
    <div
      className={[
        "transition-all duration-700",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* mini icons */
function MiniIcon({ kind }) {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-lg border border-[#9B1C1C]/55 bg-white text-[#9B1C1C]">
      {kind === "cam" && (
        <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M14 22h10l6-6h12l6 6h10v26H14V22z" />
          <circle cx="32" cy="35" r="10" />
        </svg>
      )}
      {kind === "edit" && (
        <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="3">
          <rect x="12" y="16" width="40" height="32" rx="4" />
          <path d="M22 40l8-8 6 6 10-10" />
        </svg>
      )}
      {kind === "design" && (
        <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M18 46l14-28 14 28" />
          <path d="M24 34h16" />
        </svg>
      )}
      {kind === "marketing" && (
        <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M14 34h10l18 10V20L24 30H14v4z" />
          <path d="M14 30v8" />
        </svg>
      )}
      {kind === "figma" && (
        <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M32 10c-6 0-10 4-10 10s4 10 10 10h10c6 0 10-4 10-10s-4-10-10-10H32z" />
          <path d="M32 30H22c-6 0-10 4-10 10s4 10 10 10h10V30z" />
        </svg>
      )}
      {kind === "web" && (
        <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="3">
          <rect x="12" y="16" width="40" height="32" rx="4" />
          <path d="M12 26h40" />
          <path d="M20 36h10" />
          <path d="M20 42h18" />
        </svg>
      )}
    </div>
  );
}

/* tools */
function ToolsTop() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      <BorderBox className="h-20 w-24 rounded-2xl">
        <svg
          viewBox="0 0 64 64"
          className="h-14 w-14 text-[#9B1C1C]"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path d="M14 22h10l6-6h12l6 6h10v26H14V22z" />
          <circle cx="32" cy="35" r="10" />
        </svg>
      </BorderBox>

      <BorderBox className="h-20 w-20 rounded-2xl">
        <span className="font-extrabold text-[#9B1C1C]" style={{ fontSize: "clamp(18px, 2vw, 28px)" }}>
          Pr
        </span>
      </BorderBox>

      <BorderBox className="h-20 w-20 rounded-2xl">
        <span className="font-extrabold text-[#9B1C1C]" style={{ fontSize: "clamp(18px, 2vw, 28px)" }}>
          Ae
        </span>
      </BorderBox>

      <BorderBox className="h-20 w-20 rounded-2xl">
        <span className="font-extrabold text-[#9B1C1C]" style={{ fontSize: "clamp(18px, 2vw, 28px)" }}>
          Ai
        </span>
      </BorderBox>
    </div>
  );
}

function ToolsBottom() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
      {/* NOW BORDERS FOR ALL 3, SAME STYLE */}
      <BorderBox className="h-24 w-24 rounded-2xl">
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-[#9B1C1C]" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M18 14h22v36H18z" />
          <path d="M40 20h6v24h-6z" />
          <path d="M22 22h14" />
          <path d="M22 30h10" />
          <rect x="22" y="36" width="14" height="10" rx="2" />
        </svg>
      </BorderBox>

      <BorderBox className="h-24 w-24 rounded-2xl">
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-[#9B1C1C]" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M26 10h12a10 10 0 0 1 0 20H26a10 10 0 0 1 0-20Z" />
          <path d="M26 30h12a10 10 0 0 1 0 20H26a10 10 0 0 1 0-20Z" />
          <path d="M38 30a10 10 0 1 0 0 20" />
        </svg>
      </BorderBox>

      <BorderBox className="h-24 w-24 rounded-2xl">
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-[#9B1C1C]" fill="none" stroke="currentColor" strokeWidth="3">
          <rect x="14" y="14" width="36" height="36" rx="8" />
          <circle cx="32" cy="32" r="7" />
          <path d="M32 19v6M32 39v6M19 32h6M39 32h6" />
          <circle cx="22" cy="22" r="1.5" />
          <circle cx="42" cy="22" r="1.5" />
          <circle cx="22" cy="42" r="1.5" />
          <circle cx="42" cy="42" r="1.5" />
        </svg>
      </BorderBox>
    </div>
  );
}

function BorderBox({ children, className = "" }) {
  return (
    <div
      className={[
        "grid place-items-center bg-white",
        "border border-[#9B1C1C]", // stronger border so you can see it 100%
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
