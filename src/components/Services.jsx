// Services.jsx
import React, { useEffect, useState } from "react";

export default function Services() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  const services = [
    {
      num: "01.",
      title: "Video Production & Videography",
      desc: "Professional videography, cinematography, and video editing for commercials, social media, events, and brand storytelling.",
    },
    {
      num: "02.",
      title: "Motion Graphics & Animation",
      desc: "Creative motion graphics, animated intros, reels, and promotional videos using modern animation techniques.",
    },
    {
      num: "03.",
      title: "Graphic & Brand Design",
      desc: "Visual branding, posters, social media designs, layouts, and marketing materials that communicate clearly and creatively.",
    },
    {
      num: "04.",
      title: "UI/UX & Figma Design",
      desc: "User-focused mobile app and website designs using Figma, with clean layouts and modern UI/UX principles.",
    },
    {
      num: "05.",
      title: "Website & Mobile App Design",
      desc: "Designing responsive, visually appealing websites and mobile app interfaces that deliver great user experiences.",
    },
    {
      num: "06.",
      title: "Social Media Marketing",
      desc: "Content creation, visual strategy, and digital marketing support to help brands grow and engage online.",
    },
  ];

  return (
    <section id="services" className="w-full bg-[#EEE9EA]">
      <div className="mx-auto container p-4 py-20">
        {/* Top bar */}
        <div
          className={[
            "relative overflow-hidden rounded-none transition-all duration-700",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <div className="relative border border-black/10 bg-gradient-to-r from-[#B0162A] via-[#8E0F20] to-[#2A050A] px-6 py-8 md:px-10">
            <h2
              className="text-center font-extrabold tracking-wide text-white"
              style={{ fontSize: "clamp(22px, 3vw, 40px)" }}
            >
              MY QUALITY SERVICES
            </h2>

            {/* arrow in header */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="mt-8 border-t border-black/10">
          {services.map((s, i) => (
            <ServiceRow key={s.num} s={s} show={show} delay={140 + i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ s, show, delay }) {
  return (
    <div
      className={[
        "grid items-center gap-6 border-b border-black/10 py-8 transition-all duration-700 md:grid-cols-[380px_1fr_60px]",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Left title */}
      <div className="font-extrabold text-black">
        <span className="mr-1">{s.num}</span>
        <span style={{ fontSize: "clamp(16px, 1.8vw, 22px)" }}>{s.title}</span>
      </div>

      {/* Description */}
      <p
        className="max-w-2xl text-black/70"
        style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}
      >
        {s.desc}
      </p>

      {/* Arrow */}
      <div className="flex justify-start md:justify-end">
        <span className="text-black/40">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M9 7h8v8" />
          </svg>
        </span>
      </div>
    </div>
  );
}
