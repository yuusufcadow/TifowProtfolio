// Contactus.jsx
import React, { useEffect, useState } from "react";

export default function Contactus() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: "", name: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });

  const PHONE_DISPLAY = "618971439";
  const PHONE_TEL = "+252618971439"; // change if you want another country code
  const EMAIL = "tifowgoley@gmail.com";

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (status.msg) setStatus({ type: "", msg: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.name || !form.subject || !form.message) {
      setStatus({ type: "error", msg: "Please fill all fields." });
      return;
    }
    setStatus({ type: "success", msg: "Message sent! I will reply soon." });
    setForm({ email: "", name: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative w-full bg-white">
      <div className="mx-auto container px-4 py-14 md:py-20">
        {/* subtle background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-52 w-52 rounded-full bg-[#9B1C1C]/15 blur-3xl" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div
            className={[
              "transition-all duration-700",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <h2
              className="font-extrabold text-black leading-tight"
              style={{ fontSize: "clamp(26px, 3.2vw, 46px)" }}
            >
              Let’s discuss on something <br />
              <span className="text-[#9B1C1C]">cool together</span>
            </h2>

            <p className="mt-4 max-w-lg text-black/60">
              Send me your project idea or any question. I’ll reply quickly and we can start.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <InfoCard
                label="Email"
                value={
                  <a
                    href={`mailto:${EMAIL}`}
                    className="underline decoration-black/20 underline-offset-4 hover:text-[#9B1C1C]"
                  >
                    {EMAIL}
                  </a>
                }
              />
              <InfoCard
                label="Phone"
                value={
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="underline decoration-black/20 underline-offset-4 hover:text-[#9B1C1C]"
                  >
                    {PHONE_DISPLAY}
                  </a>
                }
              />
              <InfoCard label="Location" value="Mogadishu" />
              <InfoCard label="Availability" value="Open for work" />
            </div>
          </div>

          {/* Form */}
          <div
            className={[
              "transition-all duration-700",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ transitionDelay: "140ms" }}
          >
            <div className="mx-auto w-full max-w-md rounded-2xl border border-black/10 bg-white p-6 md:p-7">
              <div className="text-center text-sm font-extrabold tracking-wide text-[#9B1C1C]">
                CONTACT WITH ME
              </div>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <Field label="Your Email">
                  <Input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="example@email.com"
                    type="email"
                  />
                </Field>

                <Field label="Your Name">
                  <Input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your full name"
                  />
                </Field>

                <Field label="Subjects">
                  <Input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="Project / Question"
                  />
                </Field>

                <Field label="Message">
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Write your message..."
                  />
                </Field>

                {status.msg ? (
                  <div
                    className={[
                      "rounded-xl px-3 py-2 text-sm transition-all duration-300",
                      status.type === "success"
                        ? "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20"
                        : "bg-red-500/10 text-red-700 border border-red-500/20",
                      show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
                    ].join(" ")}
                  >
                    {status.msg}
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#9B1C1C] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-95 active:scale-[0.99]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Submit
                </button>

                <p className="text-center text-xs text-black/45">
                  I’ll respond as soon as possible.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- components ---------- */

function Field({ label, children }) {
  return (
    <div>
      <div className="mb-2 text-xs font-semibold text-black/70">{label}</div>
      {children}
    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 outline-none transition-all duration-300 focus:border-[#9B1C1C]/60 focus:ring-4 focus:ring-[#9B1C1C]/10"
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      rows={5}
      className="w-full resize-none rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 outline-none transition-all duration-300 focus:border-[#9B1C1C]/60 focus:ring-4 focus:ring-[#9B1C1C]/10"
    />
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9B1C1C]/25">
      <div className="text-xs font-semibold text-black/55">{label}</div>
      <div className="mt-1 text-sm font-semibold text-black">{value}</div>
    </div>
  );
}
