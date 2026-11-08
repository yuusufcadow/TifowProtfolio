import { Link, useParams } from "react-router-dom";

const projectMap = {
  "abyan-beauty": {
    title: "ABYAN Beauty",
    description: "Brand storytelling and visual content for a beauty-focused identity.",
  },
  anuug: {
    title: "ANUUG",
    description: "Creative project showcase combining storytelling, motion, and design.",
  },
  "somgas-promo": {
    title: "SomGas Promo",
    description: "Short-form promotional video crafted to elevate brand visibility and engagement.",
  },
  "business-tips": {
    title: "Business Tips",
    description: "Educational visual content designed to communicate ideas clearly and efficiently.",
  },
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projectMap[slug] ?? {
    title: "Project",
    description: "This project detail is currently being updated.",
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <Link to="/projects" className="mb-8 inline-block text-sm font-medium text-[#9B1C1C] hover:underline">
          ← Back to projects
        </Link>

        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9B1C1C]">
            Project Details
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-zinc-900 md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-700">{project.description}</p>
        </div>
      </div>
    </section>
  );
}
