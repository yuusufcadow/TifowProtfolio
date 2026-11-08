import Skills from "../components/Skills";

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9B1C1C]">
            About Me
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
            Creative storyteller with a sharp eye for visuals.
          </h1>
        </div>

        <div className="grid gap-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-lg leading-8 text-zinc-700">
              I’m Hussein Mohamednor Tifow, a multimedia creative focused on videography,
              motion design, branding, and digital storytelling. I build visuals that help brands
              connect with people in meaningful ways.
            </p>
          </div>

          <div>
            <p className="text-lg leading-8 text-zinc-700">
              Over the years, I’ve worked across photography, video editing, design, and marketing,
              partnering with businesses and creators to turn ideas into polished content that feels
              authentic and persuasive.
            </p>
          </div>
        </div>
      </div>

      <Skills />
    </section>
  );
}
