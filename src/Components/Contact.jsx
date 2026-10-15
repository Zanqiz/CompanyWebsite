import { useState } from "react";
import { ArrowRight, Clock, Mail, Building2, Code2, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { GlowBackground, Reveal, Eyebrow, container } from "./ui";

const fieldCls =
  "mt-2 w-full rounded-2xl border border-ink/15 bg-mist px-4 py-3.5 text-sm text-ink placeholder:text-slate/60 transition focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/15";

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setStatus({ state: "sending", message: "" });

    try {
      const formData = new FormData(form);
      formData.append("access_key", "39247057-d808-411f-80c1-8aa37115858a");

      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();

      if (data.success) {
        setStatus({ state: "success", message: "Message sent successfully. We'll reply within 24 hours." });
        form.reset();
      } else {
        setStatus({ state: "error", message: data.message || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ state: "error", message: "Network error. Please try again or email us directly." });
    }
  };

  return (
    <>
      <section className="relative isolate overflow-hidden pb-24 pt-40 text-white sm:pt-44">
        <GlowBackground />
        <div className={`${container} grid items-start gap-14 lg:grid-cols-[1fr_1.05fr]`}>
          <Reveal>
            <Eyebrow dark>Connect with us</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
              Let&rsquo;s build something <span className="text-gradient">great together</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
              Whether you need custom software, accessible digital content, digital publishing, or
              business process support, our team is ready to help.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/15 shadow-xl">
              <iframe
                title="Zanqiz location: Nagercoil, Tamil Nadu"
                src="https://www.google.com/maps?q=Nagercoil,Tamil+Nadu,India&z=12&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-44 w-full border-0 grayscale-[0.4] transition duration-500 hover:grayscale-0 sm:h-48"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Nagercoil,Tamil+Nadu,India"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-ink shadow-lg transition hover:bg-accent"
              >
                <MapPin size={14} /> Open in Maps
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <MapPin className="text-accent" size={22} />
                <div>
                  <div className="text-xs text-white/50">India</div>
                  <div className="font-semibold">Nagercoil, Tamil Nadu</div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <Clock className="text-accent" size={22} />
                <div>
                  <div className="text-xs text-white/50">Response time</div>
                  <div className="font-semibold">Under 24 hours</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="rounded-[2rem] bg-white p-7 text-ink shadow-2xl shadow-black/30 sm:p-10">
              <h2 className="text-2xl font-bold">Tell us about your project</h2>
              <p className="mt-1 text-sm text-slate">We reply to every message personally.</p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold">
                  Full name
                  <input type="text" name="name" placeholder="Jane Cooper" required className={fieldCls} />
                </label>
                <label className="text-sm font-semibold">
                  Email address
                  <input type="email" name="email" placeholder="jane@company.com" required className={fieldCls} />
                </label>
              </div>

              <label className="mt-5 block text-sm font-semibold">
                Project type
                <select name="projectType" required defaultValue="" className={fieldCls}>
                  <option value="" disabled>Select service</option>
                  <option>Web Development</option>
                  <option>Software Development</option>
                  <option>UI / UX Design</option>
                  <option>E-Commerce</option>
                  <option>Accessibility</option>
                  <option>Digital Publishing (EPUB / XML)</option>
                  <option>Business Process Services</option>
                </select>
              </label>

              <label className="mt-5 block text-sm font-semibold">
                Your message
                <textarea rows="5" name="message" placeholder="Briefly describe your project..." required className={`${fieldCls} resize-none`} />
              </label>

              <button
                type="submit"
                disabled={status.state === "sending"}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark disabled:opacity-70"
              >
                {status.state === "sending" ? (
                  <>Sending <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Send proposal <ArrowRight size={18} className="transition group-hover:translate-x-1" /></>
                )}
              </button>

              <div aria-live="polite">
                {status.state === "success" && (
                  <p className="mt-4 flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                    <CheckCircle2 size={18} /> {status.message}
                  </p>
                )}
                {status.state === "error" && (
                  <p className="mt-4 flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    <AlertCircle size={18} /> {status.message}
                  </p>
                )}
              </div>

              <p className="mt-5 text-center text-xs text-slate">
                By submitting this form, you agree to our{" "}
                <a href="#" className="font-semibold text-brand underline-offset-2 hover:underline">Privacy Policy</a>
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className={`${container} grid gap-5 md:grid-cols-3`}>
          {[
            { Icon: Mail, title: "Say hello", body: "For general inquiries, partnerships, and project discussions.", extra: <a href="mailto:zanqiztech@gmail.com" className="font-semibold text-brand hover:underline">zanqiztech@gmail.com</a> },
            { Icon: Building2, title: "Our office", body: "Visit our office for a consultation and coffee.", extra: <span className="font-semibold text-ink">Nagercoil, Tamil Nadu, India</span> },
            { Icon: Code2, title: "Support", body: "Technical support and developer resources.", extra: (
              <div className="flex flex-wrap gap-2">
                {["WhatsApp", "Documentation", "LinkedIn"].map((t) => (
                  <span key={t} className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{t}</span>
                ))}
              </div>
            ) },
          ].map(({ Icon, title, body, extra }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand">
                  <Icon size={22} />
                </span>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mb-4 mt-2 text-sm text-slate">{body}</p>
                {extra}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
