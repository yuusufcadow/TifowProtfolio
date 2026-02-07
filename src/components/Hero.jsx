// Hero.jsx
import React, { useEffect, useState } from "react";
import image from "../assets/image.png";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  // ✅ your real social links
  const SOCIAL = {
    tiktok: "https://www.tiktok.com/@hussein.tifow?_r=1&_t=ZS-93iwBlVjjSZ",
    linkedin:
      "https://www.linkedin.com/in/hussein-tifow-60aa55315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/josephkabila15/",
    facebook: "https://www.facebook.com/josephkabila15",
  };

  return (
    <section id="home" className="w-full bg-white">
      <div className="mx-auto container px-4 py-10 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <p
              className={[
                "text-black/70 transition-all duration-700",
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
              style={{ fontSize: "clamp(16px, 1.6vw, 18px)" }}
            >
              Hi I’m <span className="text-black">Hussein</span>
            </p>

            <h1
              className={[
                "mt-1 font-extrabold leading-[1.05] text-black transition-all duration-700",
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
              style={{
                fontSize: "clamp(34px, 4.2vw, 56px)",
                transitionDelay: "80ms",
              }}
            >
              Mohamednor <span className="text-black">Tifow</span>
            </h1>

            <h2
              className={[
                "mt-5 font-extrabold text-black transition-all duration-700",
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
              style={{
                fontSize: "clamp(22px, 2.8vw, 40px)",
                transitionDelay: "140ms",
              }}
            >
              Cameroperator Videographer{" "}
              <span className="whitespace-nowrap">Designer</span>
            </h2>

            <p
              className={[
                "mt-5 max-w-xl leading-relaxed text-black/60 transition-all duration-700",
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
              style={{
                fontSize: "clamp(15px, 1.7vw, 18px)",
                transitionDelay: "200ms",
              }}
            >
              I’m a creative multimedia professional with 3+ years of experience
              in video production, motion graphics, design, and digital marketing.
              I help brands, businesses, and creators tell powerful stories through
              visuals that connect, engage, and convert.
            </p>

            {/* CTA + Social */}
            <div
              className={[
                "mt-7 flex flex-wrap items-center gap-4 transition-all duration-700",
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
              style={{ transitionDelay: "260ms" }}
            >
              <a
                href="#projects"
                className="rounded-full border border-[#9B1C1C]/40 px-6 py-3 text-sm font-semibold text-black transition hover:border-[#9B1C1C] hover:bg-[#9B1C1C]/5 active:scale-[0.99]"
              >
                Explore for you
              </a>

              <div className="flex items-center gap-3">
                <SocialIcon href={SOCIAL.linkedin} label="LinkedIn">
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 21h4V9H3v12ZM9 9h3.8v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6.1V21h-4v-5.2c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V21H9V9Z" />
                </SocialIcon>

                <SocialIcon href={SOCIAL.facebook} label="Facebook">
                  <path d="M13.5 22v-8h2.7l.5-3h-3.2V9.1c0-.9.3-1.6 1.7-1.6h1.7V4.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V11H7.3v3h2.4v8h3.8Z" />
                </SocialIcon>

                <SocialIcon href={SOCIAL.instagram} label="Instagram">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" />
                  <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                  <path d="M17.6 6.8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                </SocialIcon>

                <SocialIcon href={SOCIAL.tiktok} label="TikTok">
                  <path d="M16.5 3c.6 2.8 2.4 4.7 5 4.9v3a8.3 8.3 0 0 1-4.9-1.7V16a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.3a2.7 2.7 0 1 0 2 2.6V3h2.9Z" />
                </SocialIcon>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div
              className={[
                "relative transition-all duration-700 ease-out",
                show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-[0.98]",
              ].join(" ")}
              style={{ transitionDelay: "180ms" }}
            >
              <div className="h-[240px] w-[240px] overflow-hidden rounded-full border border-black/10 bg-white shadow-sm sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px]">
                <img
                  src={image}
                  alt="Profile"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="pointer-events-none absolute -inset-3 rounded-full border border-[#9B1C1C]/20" />
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-12 border-t border-black/10 pt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FadeUp show={show} delay={320}>
              <Stat value="3+" label="Years Experience" />
            </FadeUp>
            <FadeUp show={show} delay={380}>
              <Stat value="150+" label="Projects Completed" />
            </FadeUp>
            <FadeUp show={show} delay={440}>
              <Stat value="75+" label="Happy Clients" />
            </FadeUp>
            <FadeUp show={show} delay={500}>
              <Stat value="35+" label="Creative Skills" />
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
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

function Stat({ value, label }) {
  return (
    <div className="flex items-end gap-3 rounded-xl p-2">
      <div className="font-extrabold text-black" style={{ fontSize: "clamp(36px, 4.2vw, 56px)" }}>
        {value}
      </div>
      <div className="pb-1 text-sm font-semibold leading-tight text-black/70">
        {label}
      </div>
    </div>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-[#9B1C1C]/25 text-[#9B1C1C] transition hover:bg-[#9B1C1C]/10 hover:scale-[1.03] active:scale-[0.98]"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
