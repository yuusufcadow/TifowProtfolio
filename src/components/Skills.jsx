
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Camera,
  Clapperboard,
  WandSparkles,
  Video,
  Palette,
  Megaphone,
} from "lucide-react";

/* ---------------------------------------
   MULTIMEDIA EXPERTISE
--------------------------------------- */

const skills = [
  {
    id: "digital-camera",
    title: "Digital Camera Operation",
    description:
      "Professional digital camera operation, framing, composition, lighting, camera movement, and shooting techniques for high-quality video production.",
    Icon: Camera,
  },
  {
    id: "video-editing",
    title: "Video Editing & Post-Production",
    description:
      "Editing documentaries, commercials, short films, and social media reels, including color correction, transitions, audio synchronization, and visual storytelling.",
    Icon: Clapperboard,
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics & Animation",
    description:
      "Creating advertising videos, character animation, animated titles, logo animations, motion design, and visual effects for engaging digital content.",
    Icon: WandSparkles,
  },
  {
    id: "videography",
    title: "Videography & Film Production",
    description:
      "Producing professional video content, interviews, event coverage, documentaries, corporate productions, and creative visual stories.",
    Icon: Video,
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Branding",
    description:
      "Creating promotional posters, branding materials, social media graphics, marketing visuals, and professional digital designs.",
    Icon: Palette,
  },
  {
    id: "digital-content",
    title: "Digital Content Production",
    description:
      "Developing branded social media advertisements, promotional reels, digital campaigns, and engaging multimedia content.",
    Icon: Megaphone,
  },
];

/* ---------------------------------------
   SOFTWARE & CREATIVE TOOLS
--------------------------------------- */

const software = [
  {
    id: "premiere-pro",
    name: "Adobe Premiere Pro",
    abbreviation: "Pr",
    category: "Video Editing",
  },
  {
    id: "after-effects",
    name: "Adobe After Effects",
    abbreviation: "Ae",
    category: "Motion Graphics",
  },
  {
    id: "final-cut",
    name: "Final Cut Pro",
    abbreviation: "Fc",
    category: "Video Editing",
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    abbreviation: "Ps",
    category: "Image Editing",
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    abbreviation: "Ai",
    category: "Vector Design",
  },
  {
    id: "canva",
    name: "Canva",
    abbreviation: "Ca",
    category: "Digital Design",
  },
];

/* ---------------------------------------
   SHARED DESIGN TOKENS
--------------------------------------- */

const ui = {
  section:
    "bg-page py-16 sm:py-20 lg:py-24",

  container:
    "container mx-auto px-4 sm:px-6 lg:px-6",

  eyebrow:
    "text-[11px] font-semibold uppercase tracking-[0.15em] text-brand",

  heading:
    "text-[clamp(34px,4.5vw,56px)] font-semibold leading-[1.12] tracking-[-0.055em] text-zinc-950 dark:text-white",

  description:
    "text-[14px] leading-7 text-zinc-600 dark:text-zinc-400 sm:text-[15px] sm:leading-8",

  rowTitle:
    "text-[18px] font-semibold leading-snug tracking-[-0.025em] text-zinc-950 dark:text-white sm:text-[20px]",

  iconBox:
    "flex h-12 w-12 shrink-0 items-center justify-center border border-line bg-surface text-brand transition-colors duration-200 group-hover:border-brand/40 group-hover:bg-brand/5",

  button:
    "group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-brand px-6 text-[14px] font-semibold !text-white transition-colors duration-200 hover:bg-[#B32626] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
};

/* ---------------------------------------
   SKILL ROW
--------------------------------------- */

function SkillRow({ skill, isLast }) {
  const Icon = skill.Icon;

  return (
    <article
      className={`group grid gap-5 py-7 transition-colors duration-200 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-10 sm:py-9 lg:gap-16 ${
        isLast ? "" : "border-b border-line"
      }`}
    >
      {/* Icon and skill name */}
      <div className="flex min-w-0 items-start gap-4 sm:gap-5">
        <span className={ui.iconBox}>
          <Icon
            size={22}
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </span>

        <h3 className={`${ui.rowTitle} pt-2.5`}>
          {skill.title}
        </h3>
      </div>

      {/* Description */}
      <div className="min-w-0 sm:pt-2">
        <p className={ui.description}>
          {skill.description}
        </p>
      </div>
    </article>
  );
}

/* ---------------------------------------
   SOFTWARE ENTRY
--------------------------------------- */

function SoftwareItem({ tool }) {
  return (
    <div className="group flex min-w-0 items-center gap-4 border-b border-line py-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-line bg-surface text-[15px] font-semibold tracking-tight text-brand transition-colors duration-200 group-hover:border-brand/40">
        {tool.abbreviation}
      </span>

      <div className="min-w-0">
        <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-zinc-950 dark:text-white">
          {tool.name}
        </h3>

        <p className="mt-1 text-[12px] text-zinc-500 dark:text-zinc-400">
          {tool.category}
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------------
   MAIN COMPONENT
--------------------------------------- */

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={ui.section}
    >
      <div className={ui.container}>

        {/* SECTION HEADER */}
        <div className="mb-10 flex flex-col justify-between gap-7 lg:mb-12 lg:flex-row lg:items-end lg:gap-12">

          <div className="max-w-2xl">
            <p className={ui.eyebrow}>
              Professional Capabilities
            </p>

            <h2
              id="skills-heading"
              className={`${ui.heading} mt-4`}
            >
              Multimedia{" "}
              <span className="text-brand">
                Expertise.
              </span>
            </h2>

            <p className={`${ui.description} mt-5 max-w-xl`}>
              Combining digital camera operation,
              professional video editing, motion graphics,
              and creative storytelling to deliver
              impactful multimedia productions.
            </p>
          </div>

          <Link
            to="/projects"
            className={`${ui.button} self-start lg:self-end`}
          >
            <span className="!text-white">
              Explore My Work
            </span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
              className="!text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
            />
          </Link>
        </div>

        {/* CLEAN SKILLS LIST */}
        <div>
          {skills.map((skill, index) => (
            <SkillRow
              key={skill.id}
              skill={skill}
              isLast={index === skills.length - 1}
            />
          ))}
        </div>

        {/* SOFTWARE & TOOLS */}
        <div className="mt-16 sm:mt-20 lg:mt-24">

          {/* Software Heading */}
          <div className="max-w-2xl">
            <p className={ui.eyebrow}>
              Creative Workflow
            </p>

            <h2 className={`${ui.heading} mt-4`}>
              Tools &{" "}
              <span className="text-brand">
                Software.
              </span>
            </h2>

            <p className={`${ui.description} mt-5 max-w-xl`}>
              Professional creative tools supporting
              video editing, motion graphics,
              post-production, and visual design.
            </p>
          </div>

          {/* Software List */}
          <div className="mt-9 grid gap-x-12 sm:grid-cols-2 lg:gap-x-20">
            {software.map((tool) => (
              <SoftwareItem
                key={tool.id}
                tool={tool}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
