
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Linkedin,
  Instagram,
  Facebook,
  Video,
  Clapperboard,
  WandSparkles,
  Asterisk,
  Camera,
} from "lucide-react";

import image from "../assets/image.png";

const socialLinks = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@hussein.tifow",
    type: "tiktok",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hussein-tifow-60aa55315/",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/josephkabila15/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/josephkabila15",
    Icon: Facebook,
  },
];

const specialties = [
  { label: "Video Editing", Icon: Clapperboard },
  { label: "Videography", Icon: Video },
  { label: "Motion Graphics", Icon: WandSparkles },
];

const marqueeItems = [
  "VIDEO EDITING",
  "VIDEOGRAPHY",
  "MOTION GRAPHICS",
  "CAMERA OPERATION",
  "GRAPHIC DESIGN",
  "VISUAL STORYTELLING",
];

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M16.5 3c.6 2.8 2.4 4.7 5 4.9v3a8.3 8.3 0 0 1-4.9-1.7V16a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.3a2.7 2.7 0 1 0 2 2.6V3h2.9Z" />
    </svg>
  );
}

function SocialButton({ social }) {
  const Icon = social.Icon;

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      title={social.label}
      className="flex h-10 w-10 items-center justify-center border border-line bg-page text-zinc-600 transition-colors duration-200 hover:border-brand hover:text-brand dark:text-zinc-300"
    >
      {social.type === "tiktok" ? (
        <TikTokIcon />
      ) : (
        <Icon size={18} strokeWidth={1.8} />
      )}
    </a>
  );
}

function MarqueeItems({ duplicate = false }) {
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
          <span className="shrink-0 whitespace-nowrap px-5 text-[18px] font-semibold uppercase tracking-[0.045em] text-white sm:px-8 sm:text-[24px] lg:px-10 lg:text-[27px]">
            {item}
          </span>

          <Asterisk
            aria-hidden="true"
            strokeWidth={4}
            className="h-7 w-7 shrink-0 text-white sm:h-9 sm:w-9 lg:h-10 lg:w-10"
          />
        </div>
      ))}
    </div>
  );
}

function CreativeMarquee() {
  return (
    <div
      className="tifow-road-section relative isolate w-full overflow-hidden "
      aria-label="Creative specialties"
    >
      <div className="tifow-road-ribbon relative overflow-hidden bg-brand">
        <div
          className="tifow-road-marking"
          aria-hidden="true"
        />

        <div className="tifow-marquee-track relative z-10 flex w-max items-center py-5 sm:py-6">
          <MarqueeItems />
          <MarqueeItems duplicate />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <section className="hero-grid relative isolate overflow-hidden bg-page">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid min-h-[calc(100svh-76px-100px)] items-center gap-12 py-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-16">

            {/* Main introduction — first on mobile */}
            <div className="order-1 min-w-0">
              <div className="mb-7 inline-flex items-center gap-2 border border-line bg-page px-3 py-2">
                <span className="h-2 w-2 shrink-0 bg-brand" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-600 dark:text-zinc-300">
                  Creative Multimedia Professional
                </span>
              </div>

              <p className="text-[15px] font-medium text-zinc-500 dark:text-zinc-400 sm:text-[16px]">
                Hello, I'm Hussein
              </p>

              <h2 className="mt-2 text-[clamp(25px,3vw,38px)] font-semibold tracking-[-0.04em] text-zinc-900 dark:text-white">
                Mohamednor Tifow
              </h2>

              <h1 className="mt-5 text-[clamp(44px,5.5vw,82px)] font-semibold leading-[1.05] tracking-[-0.055em] text-zinc-950 dark:text-white">
                Multimedia
                <br />
                <span className="text-brand">
                  Specialist.
                </span>
              </h1>

              <p className="mt-7 max-w-[590px] text-[15px] leading-[1.85] text-zinc-600 dark:text-zinc-400 sm:text-[16px]">
                I'm a multimedia specialist with experience
                in video editing, videography, motion graphics,
                and graphic design. From documentaries and
                social media campaigns to commercial productions,
                I create visual stories that connect brands
                with their audiences.
              </p>

              {/* Expertise */}
              <div className="mt-7 flex flex-wrap gap-2">
                {specialties.map(({ label, Icon }) => (
                  <span
                    key={label}
                    className="inline-flex min-h-9 items-center gap-2 border border-line bg-page px-3 text-[12px] font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.8}
                      className="text-brand"
                    />
                    {label}
                  </span>
                ))}
              </div>

              {/* Main CTA buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#9B1C1C] pl-6 pr-2 text-[14px] font-semibold !text-white transition-colors duration-200 hover:bg-[#B32626] dark:!text-white"
                >
                  <span className="!text-white">
                    Explore My Work
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowUpRight size={17} strokeWidth={1.9} />
                  </span>
                </Link>

                <Link
                  to="/about"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-page px-6 text-[14px] font-semibold text-zinc-900 transition-colors duration-200 hover:border-brand dark:text-white"
                >
                  About Me
                  <ArrowRight size={17} strokeWidth={1.8} />
                </Link>
              </div>

              {/* Social links */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <span className="text-[12px] font-medium text-zinc-500 dark:text-zinc-400">
                  Connect with me
                </span>

                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <SocialButton
                      key={social.label}
                      social={social}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Profile portrait — second on mobile */}
            <div className="order-2 flex min-w-0 justify-center pb-7 lg:justify-end">
              <div className="relative w-full max-w-[320px] sm:max-w-[390px] lg:max-w-[470px]">

                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-3 h-full w-full border border-brand/40"
                />

                <div className="relative aspect-[4/4.7] overflow-hidden border border-line bg-surface">
                  <img
                    src={image}
                    alt="Hussein Mohamednor Tifow — Multimedia Specialist"
                    fetchPriority="high"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="absolute -bottom-5 left-2 flex max-w-[calc(100%-16px)] items-center gap-3 border border-line bg-page px-3 py-3 sm:-left-5 sm:px-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand text-white">
                    <Camera size={19} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-zinc-900 dark:text-white">
                      Multimedia Specialist
                    </p>
                    <p className="mt-0.5 text-[11px] leading-5 text-zinc-500 dark:text-zinc-400">
                      Video Production & Creative Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CreativeMarquee />
    </>
  );
}
