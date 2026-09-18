import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "@/page.module.css";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 pb-16 pt-8 sm:px-10 sm:pb-20 sm:pt-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 xl:gap-16">
          
          {/* LEFT */}
          <div>
            <ScrollReveal>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-cyan-50 px-5 py-2 text-sm font-medium text-cyan-700">
                  99.8% Uptime
                </span>

                <span className="rounded-full bg-cyan-50 px-5 py-2 text-sm font-medium text-cyan-700">
                  5,000+ Users
                </span>

                <span className="rounded-full bg-slate-100 px-5 py-2 text-sm font-medium text-slate-700">
                  MSME Registered
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className={`${styles.heroTitle} mt-7 max-w-[760px] font-bold leading-none tracking-[-0.045em] text-slate-800`}>
                Custom Software,
                <br />

                <span className="text-cyan-500">
                  HRMS & AI
                </span>

                <br />

                Development
                <br />

                Company
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <p className="mt-7 max-w-[700px] text-base leading-relaxed text-slate-500 sm:text-lg lg:text-xl">
                We build scalable web apps, HRMS platforms, AI tools, and
                enterprise solutions for startups and companies across India.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={260}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    gap-4
                    rounded-xl
                    bg-cyan-600
                    px-7
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-cyan-500/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-cyan-700
                    active:bg-cyan-800
                  "
                >
                  Get Free Consultation

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    rounded-xl
                    border-2
                    border-cyan-300
                    bg-white
                    px-8
                    font-medium
                    text-cyan-700
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-500
                    hover:bg-cyan-50
                  "
                >
                  Book Demo
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT — LAPTOP/DESKTOP ONLY */}
          <div className="relative hidden lg:block">
            <ScrollReveal
              direction="right"
              delay={150}
            >
              <div className="relative mx-auto max-w-[760px]">
                
                {/* Soft glow */}
                <div className="absolute -inset-8 rounded-[40px] bg-cyan-100/40 blur-3xl" />

                {/* Video */}
                <div className="relative overflow-visible rounded-[32px] border border-slate-200 bg-white p-2 shadow-2xl">
                  <video
                    src="/videos/vornhr_video-C1yqt6XA.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="aspect-video w-full rounded-[24px] object-cover"
                  />

                  {/* Explore badge */}
                  <div
                    className="
                      explore-more-badge
                      absolute
                      -right-5
                      top-1/2
                      z-10
                      rounded-2xl
                      bg-white
                      px-5
                      py-4
                      text-sm
                      font-medium
                      text-slate-500
                      shadow-xl
                    "
                  >
                    Explore More
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}