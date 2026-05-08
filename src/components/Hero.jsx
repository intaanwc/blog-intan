import { ArrowRight, MapPin, Briefcase, GraduationCap, Sparkles } from 'lucide-react'
import profileImg from '../assets/profile.jpeg'

const skills = ['Health Informatics', 'Health Policy', 'Health Economics']

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 w-full">

        {/* Top — two columns */}
        <div className="grid md:grid-cols-[1fr_320px] gap-12 items-center mb-8">

          {/* Left — intro */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e5e7eb] dark:border-[#27272a] bg-white dark:bg-[#1a1a1a] mb-7">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[13px] text-[#6b7280] dark:text-[#9ca3af]">Open to new opportunities</span>
            </div>

            <h1 className="text-4xl md:text-[52px] font-bold leading-[1.1] tracking-tight text-[#111111] dark:text-white mb-3">
              Intan Cahyani
            </h1>

            <p className="text-[15px] text-[#2563eb] font-semibold mb-5">
              Program Officer · Health Informatics · Health Policy
            </p>

            <p className="text-[15px] md:text-[16px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed mb-3">
              MSc Global Healthcare Management (Analytics) from University
              College London. Currently a Program Officer at the{' '}
              <span className="text-[#111111] dark:text-white font-medium">
                Clinton Health Access Initiative
              </span>
              , advancing healthcare access through data-driven insights and
              evidence-based strategies.
            </p>

            <p className="text-[15px] md:text-[16px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed mb-6">
              With a background in midwifery and maternal and child health, my
              work sits at the intersection of healthcare management, health
              informatics, and health economics — particularly across Indonesia
              and global settings.
            </p>

            <div className="flex items-center gap-1.5 text-[14px] text-[#9ca3af] dark:text-[#6b7280] mb-10">
              <MapPin size={14} />
              Jakarta, Indonesia
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563eb] text-white text-[15px] font-medium hover:bg-[#1d4ed8] transition-colors"
              >
                View experience <ArrowRight size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/intan-wahyu-cahyani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#e5e7eb] dark:border-[#27272a] text-[#111111] dark:text-white text-[15px] font-medium hover:border-[#d1d5db] dark:hover:border-[#3f3f46] hover:bg-[#f9fafb] dark:hover:bg-[#1a1a1a] transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right — photo only */}
          <div className="hidden md:block w-full rounded-2xl overflow-hidden border border-[#e5e7eb] dark:border-[#27272a] aspect-[3/4]">
            <img
              src={profileImg}
              alt="Intan Cahyani"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>

        {/* Bottom — horizontal info strip */}
        <div className="rounded-2xl border border-[#e5e7eb] dark:border-[#27272a] bg-white dark:bg-[#1a1a1a] grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e7eb] dark:divide-[#27272a]">
          <div className="p-5 flex gap-3">
            <Briefcase size={15} className="text-[#2563eb] mt-0.5 shrink-0" />
            <div>
              <p className="text-[11px] font-semibold text-[#9ca3af] dark:text-[#6b7280] uppercase tracking-widest mb-1">Current Role</p>
              <p className="text-[13px] font-semibold text-[#111111] dark:text-white leading-snug">Program Officer</p>
              <p className="text-[12px] text-[#6b7280] dark:text-[#9ca3af] mt-0.5">Clinton Health Access Initiative</p>
              <p className="text-[11px] text-[#9ca3af] dark:text-[#6b7280] mt-0.5">Jakarta · Jan 2026 – Present</p>
            </div>
          </div>

          <div className="p-5 flex gap-3">
            <GraduationCap size={15} className="text-[#2563eb] mt-0.5 shrink-0" />
            <div>
              <p className="text-[11px] font-semibold text-[#9ca3af] dark:text-[#6b7280] uppercase tracking-widest mb-1">Education</p>
              <p className="text-[13px] font-semibold text-[#111111] dark:text-white leading-snug">MSc Global Healthcare Management (Analytics)</p>
              <p className="text-[12px] text-[#6b7280] dark:text-[#9ca3af] mt-0.5">University College London · 2022 – 2023</p>
            </div>
          </div>

          <div className="p-5 flex gap-3">
            <Sparkles size={15} className="text-[#2563eb] mt-0.5 shrink-0" />
            <div>
              <p className="text-[11px] font-semibold text-[#9ca3af] dark:text-[#6b7280] uppercase tracking-widest mb-3">Top Skills</p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-md bg-[#eff6ff] dark:bg-[#1e2d47] text-[11px] font-medium text-[#2563eb] dark:text-[#60a5fa]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
