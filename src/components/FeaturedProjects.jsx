
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Play,
  Clapperboard,
} from "lucide-react";

import {
  getFeaturedProjects,
  getFeaturedVideo,
} from "../data/projects";

const ui = {
  eyebrow:
    "text-xs font-semibold uppercase tracking-[0.14em] text-brand",

  title:
    "text-[clamp(34px,4.5vw,58px)] font-semibold leading-[1.1] tracking-[-0.055em] text-zinc-950 dark:text-white",

  description:
    "text-[15px] leading-8 text-zinc-600 dark:text-zinc-400",

  outlineButton:
    "inline-flex min-h-12 items-center justify-center gap-3 border border-line bg-page px-5 text-sm font-semibold text-zinc-900 transition-colors duration-200 hover:border-brand hover:text-brand dark:text-white",

  primaryButton:
    "inline-flex min-h-12 items-center justify-center gap-3 bg-brand px-6 text-sm font-semibold !text-white transition-colors duration-200 hover:bg-[#B32626]",
};

function ProjectVisual({ project, featured = false }) {
  const video = getFeaturedVideo(project);

  const visual = (
    <>
      {/* Real project thumbnail */}
      {project.thumbnail ? (
        <>
          <img
            src={project.thumbnail}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transform-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
        </>
      ) : (
        <>
          {/* Minimal cinematic fallback */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 85% 20%, rgba(155,28,28,0.34), transparent 55%), linear-gradient(135deg, #21191C 0%, #151316 100%)",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center"
          >
            <Clapperboard
              strokeWidth={0.8}
              className={`text-white/15 ${
                featured ? "h-24 w-24" : "h-16 w-16"
              }`}
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full border-[36px] border-brand/15"
          />
        </>
      )}

      {/* Top labels */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-3 p-4 sm:p-5">
        <span className="border border-white/20 bg-black/20 px-3 py-2 text-[11px] font-medium text-white backdrop-blur-sm">
          {project.type}
        </span>

        <ArrowUpRight
          size={19}
          strokeWidth={1.7}
          className="text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>

      {/* Center play button */}
      {video && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition-colors duration-200 group-hover:border-brand group-hover:bg-brand sm:h-16 sm:w-16">
            <Play
              size={22}
              strokeWidth={1.8}
              fill="currentColor"
              className="ml-1"
            />
          </span>
        </div>
      )}

      {/* Lower project category */}
      <div className="absolute bottom-0 left-0 z-10 p-4 sm:p-5">
        <span className="text-xs font-medium text-white/80">
          {project.category}
        </span>
      </div>
    </>
  );

  const coverClass = `group relative block w-full overflow-hidden bg-[#171316] ${
    featured
      ? "aspect-[16/10] lg:min-h-[380px] lg:flex-1 lg:aspect-auto"
      : "aspect-[16/10]"
  }`;

  if (!video) {
    return (
      <div className={coverClass}>
        {visual}
      </div>
    );
  }

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch video for ${project.title} on Facebook`}
      className={coverClass}
    >
      {visual}
    </a>
  );
}

function ProjectCard({ project, featured = false }) {
  const video = getFeaturedVideo(project);

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden border border-line bg-page transition-colors duration-200 hover:border-brand/50">

      {/* Project thumbnail */}
      <ProjectVisual
        project={project}
        featured={featured}
      />

      {/* Details */}
      <div
        className={`flex flex-col ${
          featured ? "p-6 sm:p-7" : "p-5"
        }`}
      >
        <p className={ui.eyebrow}>
          {project.category}
        </p>

        <h3
          className={`mt-3 font-semibold leading-snug tracking-[-0.035em] text-zinc-950 dark:text-white ${
            featured
              ? "text-[clamp(23px,2.5vw,30px)]"
              : "text-[19px]"
          }`}
        >
          {project.title}
        </h3>

        {featured && (
          <p className={`${ui.description} mt-4 max-w-xl`}>
            {project.description}
          </p>
        )}

        {video && (
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-5 inline-flex min-h-10 items-center gap-2 self-start text-sm font-semibold text-brand transition-colors duration-200 hover:text-[#B32626]"
          >
            Watch Video

            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        )}
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects(5);

  const [mainProject, ...otherProjects] = featuredProjects;

  return (
    <section
      id="featured-projects"
      className="border-b border-line bg-page py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-6">

        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">

          <div className="max-w-2xl">
            <p className={ui.eyebrow}>
              Selected Work
            </p>

            <h2 className={`${ui.title} mt-4`}>
              Creative{" "}
              <span className="text-brand">
                Productions.
              </span>
            </h2>

            <p className={`${ui.description} mt-5 max-w-xl`}>
              A selection of multimedia projects,
              creative productions, and visual
              storytelling work for organizations
              and businesses.
            </p>
          </div>

          <Link
            to="/projects"
            className={ui.outlineButton}
          >
            View All Projects

            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
            />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        {mainProject ? (
          <div className="grid items-stretch gap-5 lg:grid-cols-[1.1fr_1fr]">

            {/* Main Featured Project */}
            <ProjectCard
              project={mainProject}
              featured
            />

            {/* Supporting Projects */}
            <div className="grid min-w-0 gap-5 sm:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="border border-line bg-surface p-8">
            <p className={ui.description}>
              Featured projects will appear here.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-start justify-end gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">

          

          <Link
            to="/projects"
            className={ui.primaryButton}
          >
            <span className="!text-white">
              Explore Portfolio
            </span>

            <ArrowRight
              size={18}
              strokeWidth={1.8}
              className="!text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
