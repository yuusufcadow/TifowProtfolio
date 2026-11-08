import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white px-4 py-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9B1C1C]">404</p>
        <h1 className="mt-4 text-4xl font-extrabold text-zinc-900 md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-[#9B1C1C] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
