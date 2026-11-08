
import { Link } from "react-router-dom";
import { ArrowUpRight, Asterisk } from "lucide-react";

const hero = {
  badge: "Creative Multimedia Specialist",
  title: "Multimedia",
  highlight: "Specialist.",
  name: "Hussein Mohamednor Tifow",
  role: "Video Editor & Videographer",
  description:
    "I'm Hussein Mohamednor Tifow, a multimedia specialist creating engaging visual content through video editing, videography, motion graphics, and graphic design. I help brands and businesses bring their ideas to life through powerful visual storytelling.",
};

const marqueeItems = [
  "VIDEO EDITING",
  "VIDEOGRAPHY",
  "MOTION GRAPHICS",
  "GRAPHIC DESIGN",
  "CAMERA OPERATION",
  "VISUAL STORYTELLING",
];

function MarqueeGroup({ duplicate = false }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {marqueeItems.map((item) => (
        <div
          key={item}
          className="flex shrink-0 items-center"
        >
          <span className="shrink-0 whitespace-nowrap px-6 text-[19px] font-semibold uppercase tracking-[0.035em] text-white sm:px-9 sm:text-[25px] lg:px-11 lg:text-[30px]">
            {item}
          </span>

          <Asterisk
            aria-hidden="true"
            strokeWidth={4}
            className="h-7 w-7 shrink-0 text-white sm:h-9 sm:w-9 lg:h-11 lg:w-11"
          />
        </div>
      ))}
    </div>
  );
}

function CreativeMarquee() {
  return (
    <div
      className="tifow-marquee-section relative isolate w-full overflow-hidden py-8 sm:py-10"
      aria-label="Creative specialties"
    >
      <div className="tifow-marquee-ribbon relative overflow-hidden bg-brand">
        <div
          className="tifow-marquee-track flex w-max items-center py-5 sm:py-6"
        >
          <MarqueeGroup />
          <MarqueeGroup duplicate />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      {/* MAIN HERO */}
      <section className="hero-grid relative isolate overflow-hidden bg-page">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex min-h-[calc(100svh-76px-110px)] flex-col justify-center py-14 sm:py-16 lg:py-20">

            {/* Professional Badge */}
            <div className="mb-10">
              <span className="inline-flex min-h-9 items-center gap-2 border border-line bg-page px-3">
                <span className="h-2 w-2 bg-brand" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-300">
                  {hero.badge}
                </span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-full text-[clamp(48px,9vw,140px)] font-semibold leading-[0.98] tracking-[-0.075em] text-zinc-950 dark:text-white">
              <span className="block">
                {hero.title}
              </span>

              <span className="block text-brand">
                {hero.highlight}
              </span>
            </h1>

            {/* Name and Role */}
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {hero.name}
              </span>

              <span
                aria-hidden="true"
                className="h-px w-6 bg-line"
              />

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
                {hero.role}
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="text-brand"
                />
              </span>
            </div>

            {/* Divider */}
            <div className="mt-10 " />

            {/* Description & Buttons */}
            <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-[650px] text-[15px] leading-8 text-zinc-600 dark:text-zinc-400 sm:text-[17px]">
                {hero.description}
              </p>

              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex h-12 items-center justify-center gap-3 bg-brand px-6 text-sm font-semibold !text-white transition-colors hover:bg-[#B32626]"
                >
                  View Projects
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  to="/about"
                  className="group inline-flex h-12 items-center justify-center gap-3 border border-line bg-page px-6 text-sm font-semibold text-zinc-900 transition-colors hover:border-brand hover:text-brand dark:text-white"
                >
                  About Me
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATED MARQUEE */}
      <CreativeMarquee />
    </>
  );
}
