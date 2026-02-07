// Experience.jsx
import React, { useEffect, useState } from "react";

export default function Experience() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  const experience = [
    {
      period: "2022–2023",
      company: "Infinity Media Solution",
      role: "Designer & Video Editor",
    },
    {
      period: "2023–2024",
      company: "Turkey Studio",
      role: "Videographer & Designer",
    },
    {
      period: "2024 – Present",
      company: "Voice Up Creative",
      role: "Multimedia Specialist",
    },
  ];

  return (
    <section id="experience" className="w-full bg-[#EFE9EA]">
      <div className="mx-auto container px-4 py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* LEFT: Experience */}
          <div>
            <div
              className={[
                "flex items-center gap-4 transition-all duration-700",
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
            >
              <ExpIcon />
              <h2
                className="font-extrabold tracking-wide text-[#7A1A25]"
                style={{ fontSize: "clamp(22px, 2.6vw, 34px)" }}
              >
                MY EXPERIENCE
              </h2>
            </div>

            <div className="mt-8 space-y-10">
              {experience.map((item, idx) => (
                <FadeUp key={idx} show={show} delay={140 + idx * 120}>
                  <div className="w-full max-w-xl rounded-xl bg-white px-6 py-4">
                    <div className="text-sm font-extrabold text-[#7A1A25]">
                      {item.period}
                    </div>
                    <div className="mt-1 text-sm text-[#7A1A25]">
                      {item.company} <span className="text-[#7A1A25]/70">–</span>{" "}
                      {item.role}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* RIGHT: Education */}
          <div>
            <div
              className={[
                "flex items-center justify-center gap-4 transition-all duration-700 lg:justify-start",
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
              style={{ transitionDelay: "120ms" }}
            >
              <CapIcon />
              <h2
                className="font-extrabold tracking-wide text-[#7A1A25]"
                style={{ fontSize: "clamp(22px, 2.6vw, 34px)" }}
              >
                MY EDUCATION
              </h2>
            </div>

            <FadeUp show={show} delay={220}>
              <div className="mt-8 w-full max-w-md rounded-2xl bg-white p-8">
                <h3
                  className="font-extrabold text-[#7A1A25]"
                  style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
                >
                  Bachelor’s Degree in <br />
                  Journalism &amp; Communication
                </h3>

                <p className="mt-3 text-sm font-semibold text-[#7A1A25]/80">
                  Mogadishu University
                </p>

                <p className="mt-10 max-w-sm text-sm leading-relaxed text-[#7A1A25]/70">
                  Strong background in media, communication, storytelling, and
                  content strategy.
                </p>

                <div className="mt-10 flex items-end justify-between">
                  <div className="text-sm text-[#7A1A25]/80">
                    <div>Beging 2023</div>
                    <div>Ending 2027</div>
                  </div>

                  <div className="opacity-25">
                    <CapIconSmall />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */

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

/* ---------------- icons (match screenshot style) ---------------- */

function ExpIcon() {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#7A1A25]/25 bg-white">
      <svg
        viewBox="0 0 64 64"
        className="h-7 w-7 text-[#C01B2D]"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <circle cx="32" cy="32" r="18" />
        <circle cx="32" cy="32" r="6" />
        <path d="M32 14v6M32 44v6M14 32h6M44 32h6" />
      </svg>
    </div>
  );
}

function CapIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12 text-[#C01B2D]"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M6 24l26-12 26 12-26 12L6 24Z" />
      <path d="M16 30v12c0 6 8 10 16 10s16-4 16-10V30" />
      <path d="M58 24v16" />
    </svg>
  );
}

function CapIconSmall() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12 text-[#C01B2D]"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M6 24l26-12 26 12-26 12L6 24Z" />
      <path d="M16 30v12c0 6 8 10 16 10s16-4 16-10V30" />
    </svg>
  );
}
