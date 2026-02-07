// Works.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

import abyanvideo from "../assets/abyanvideo.mp4";
import anuugvideo from "../assets/anuugvideo.mp4";
import gasvideo from "../assets/gasvideo.mp4";

import abyan from "../assets/abyan.png";
import anug from "../assets/anug.png";
import gas from "../assets/gas.png";
import diyar from "../assets/diyar.png";

import client from "../assets/client.mp4";
import qatar from "../assets/qatar.mp4";
import voicer from "../assets/voicer-animation.mp4";
import loago from "../assets/loago-animation.mp4";

export default function Works() {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const [open, setOpen] = useState(false);
  const [activeWork, setActiveWork] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  // ESC closes modal
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const works = useMemo(
    () => [
      { id: 1, title: "ABYAN Beauty", category: "Portfolio", thumb: abyan, video: abyanvideo, useVideoThumb: false },
      { id: 2, title: "ANUUG", category: "Experience", thumb: anug, video: anuugvideo, useVideoThumb: false },
      { id: 3, title: "SomGas Promo", category: "Portfolio", thumb: gas, video: gasvideo, useVideoThumb: false },
      { id: 4, title: "Business Tips", category: "Skills", thumb: diyar, video: voicer, useVideoThumb: false },

      // video thumb items (still NOT auto-play)
      { id: 5, title: "Chairman", category: "Experience", thumb: null, video: client, useVideoThumb: true },
      { id: 6, title: "Modern Video", category: "Skills", thumb: null, video: qatar, useVideoThumb: true },

      // extra (optional)
      { id: 7, title: "Voice Up Animation", category: "Portfolio", thumb: null, video: voicer, useVideoThumb: true },
      { id: 8, title: "Logo Animation", category: "Portfolio", thumb: null, video: loago, useVideoThumb: true },
    ],
    []
  );

  const tabs = ["All", "Portfolio", "Experience", "Skills"];

  const filtered = useMemo(() => {
    if (activeTab === "All") return works;
    return works.filter((w) => w.category === activeTab);
  }, [activeTab, works]);

  const onPlay = (work) => {
    setActiveWork(work);
    setOpen(true);
  };

  return (
    <section id="projects" className="relative w-full bg-white">
      <div className="mx-auto container px-4 py-12 md:py-16">
        {/* Title */}
        <div className="text-center">
          <h2
            className={[
              "font-extrabold tracking-wide text-[#9B1C1C] transition-all duration-700",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ fontSize: "clamp(26px, 3.2vw, 44px)" }}
          >
            MY RECENT WORKS
          </h2>

          {/* Tabs */}
          <div
            className={[
              "mt-6 flex justify-center transition-all duration-700",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ transitionDelay: "120ms" }}
          >
            <div className="flex items-center gap-2 rounded-full bg-[#E9DADD] p-2">
              {tabs.map((t) => {
                const active = t === activeTab;
                return (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={[
                      "rounded-full px-6 py-2 text-sm font-semibold transition",
                      active ? "bg-[#8E0F20] text-white" : "text-[#8E0F20] hover:bg-white/60",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2">
          <div className="h-36 w-36 rounded-full bg-[#9B1C1C]/30 blur-3xl" />
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((w, idx) => (
            <WorkCard
              key={w.id}
              work={w}
              show={show}
              delay={160 + idx * 80}
              onPlay={() => onPlay(w)}
            />
          ))}
        </div>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} work={activeWork} />
    </section>
  );
}

/* ---------------- Card ---------------- */
/* ✅ No hover autoplay. Video plays ONLY in modal after clicking play button. */

function WorkCard({ work, onPlay, show, delay }) {
  const thumbVideoRef = useRef(null);

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border border-black/10 bg-[#F4F1F2] transition-all duration-700",
        "hover:-translate-y-1 hover:border-[#9B1C1C]/20",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[4/3] w-full">
        {/* THUMB (image OR paused video frame) */}
        {!work.useVideoThumb ? (
          <img
            src={work.thumb}
            alt={work.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <video
            ref={thumbVideoRef}
            src={work.video}
            muted
            playsInline
            preload="metadata"
            onLoadedMetadata={(e) => {
              // show a clean "poster-like" frame (no play)
              try {
                e.currentTarget.currentTime = 0.15;
                e.currentTarget.pause();
              } catch {}
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* modern overlay (always, more premium) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-90" />

        {/* title */}
        <div className="absolute bottom-3 left-3 rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-[#8E0F20] backdrop-blur">
          {work.title}
        </div>

        {/* PLAY (ONLY action that plays video) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPlay();
          }}
          className={[
            "absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full",
            "bg-[#9B1C1C] text-white transition-all duration-300",
            "opacity-85 hover:opacity-100 hover:scale-105 active:scale-[0.98]",
            "shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
          ].join(" ")}
          aria-label={`Play ${work.title}`}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
            <path d="M8 5v14l12-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ---------------- Modal ---------------- */

function VideoModal({ open, onClose, work }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open || !work) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* modal */}
      <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl bg-black">
        {/* top bar */}
        <div className="absolute left-0 top-0 z-20 flex w-full items-center justify-between gap-3 p-3">
          <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
            {work.title}
          </div>

          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ✅ plays only here */}
        <video
          key={work.video}
          src={work.video}
          controls
          autoPlay
          playsInline
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
