
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Clapperboard,
} from "lucide-react";

import {
  experiences,
  formatExperiencePeriod,
  getExperienceDuration,
} from "../data/experience";

export default function Experience() {
  const sortedExperiences = [...experiences].sort(
    (a, b) => b.startYear - a.startYear
  );

  return (
    <section className="hero-grid min-h-screen bg-page">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-6 lg:py-24">

        {/* Page Heading */}
        <div className="mb-14 max-w-[750px]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            Professional Journey
          </p>

          <h1 className="text-[clamp(38px,5vw,64px)] font-semibold leading-tight tracking-[-0.05em] text-zinc-950 dark:text-white">
            Work Experience<span className="text-brand">.</span>
          </h1>

          <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-zinc-600 dark:text-zinc-400">
            My professional journey across media production,
            video editing, cinematography, and creative
            storytelling, collaborating with teams to produce
            engaging visual content.
          </p>
        </div>

        {/* Career Timeline */}
        <div className="relative ml-2 border-l border-line pl-7 sm:ml-4 sm:pl-10">
          {sortedExperiences.map((job) => {
            const duration = getExperienceDuration(job);

            return (
              <article
                key={job.id}
                className="relative pb-8 last:pb-0"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[35px] top-8 flex h-[15px] w-[15px] items-center justify-center border-[3px] border-brand bg-page sm:-left-[47px]">
                  <div className="h-[3px] w-[3px] bg-brand" />
                </div>

                {/* Company Card */}
                <div className="border border-line bg-page p-5 sm:p-7 lg:p-8">
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-line bg-surface text-brand">
                        {job.logo ? (
                          <img
                            src={job.logo}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-contain p-2"
                          />
                        ) : (
                          <Clapperboard
                            size={22}
                            strokeWidth={1.6}
                          />
                        )}
                      </div>

                      <div>
                        <h2 className="text-[20px] font-semibold tracking-tight text-zinc-950 dark:text-white">
                          {job.role}
                        </h2>

                        <p className="mt-1 text-[15px] font-medium text-brand">
                          {job.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 border border-line bg-surface px-3 py-2">
                      <CalendarDays
                        size={15}
                        className="text-brand"
                      />
                      <span className="text-[12px] font-medium text-zinc-700 dark:text-zinc-300">
                        {formatExperiencePeriod(job)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                    {job.location && (
                      <span className="inline-flex items-center gap-2">
                        <MapPin size={15} />
                        {job.location}
                      </span>
                    )}

                    {job.employmentType && (
                      <span className="inline-flex items-center gap-2">
                        <BriefcaseBusiness size={15} />
                        {job.employmentType}
                      </span>
                    )}

                    {duration && (
                      <span>{duration}</span>
                    )}
                  </div>

                  <p className="mt-6 max-w-3xl text-[14px] leading-7 text-zinc-600 dark:text-zinc-400 sm:text-[15px]">
                    {job.description}
                  </p>

                  {job.responsibilities?.length > 0 && (
                    <div className="mt-6 grid gap-x-8 gap-y-3 border-t border-line pt-6 sm:grid-cols-2">
                      {job.responsibilities.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.8}
                            className="mt-1 shrink-0 text-brand"
                          />

                          <span className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {job.tools?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.tools.map((tool) => (
                        <span
                          key={tool}
                          className="border border-line bg-surface px-3 py-2 text-xs text-zinc-600 dark:text-zinc-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
