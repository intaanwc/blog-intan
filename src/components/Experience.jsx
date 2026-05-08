const experiences = [
  {
    role: 'Program Officer',
    company: 'Clinton Health Access Initiative, Inc.',
    period: 'Jan 2026 — Present',
    location: 'Jakarta, Indonesia',
    description:
      'Contributing to impactful healthcare access initiatives across Indonesia, building on vaccine programme expertise to advance broader health systems strengthening goals.',
    tags: ['Full-time', 'Current'],
  },
  {
    role: 'Vaccine Program Officer',
    company: 'Clinton Health Access Initiative, Inc.',
    period: 'Jan 2024 — Dec 2025',
    location: 'Jakarta, Indonesia',
    description:
      'Led vaccine programme work supporting immunisation access and coverage across Indonesia, working with government and private-sector partners to strengthen vaccine delivery systems.',
    tags: ['Full-time'],
  },
  {
    role: 'Clinical Assessment Service — Temporary',
    company: 'Homerton Healthcare NHS Foundation Trust',
    period: 'Sep 2023 — Dec 2023',
    location: 'Greater London, United Kingdom',
    description:
      "Provided clinical assessment and referral services within the NHS, gaining exposure to the UK health system's triage and patient management workflows.",
    tags: ['Temporary'],
  },
  {
    role: 'Student Ambassador',
    company: 'University College London Global Business School for Health',
    period: 'Nov 2022 — Aug 2023',
    location: 'London, United Kingdom',
    description:
      'Represented the MSc Global Healthcare Management programme, engaging prospective students and supporting faculty events during postgraduate studies at University College London.',
    tags: ['Part-time'],
  },
  {
    role: 'Project Assistant — USAID Momentum',
    company: 'Jhpiego',
    period: 'May 2022 — Aug 2022',
    location: 'Indonesia',
    description:
      'Supported the USAID-funded Momentum Private Healthcare Delivery project, assisting with programme implementation and monitoring activities across Indonesia.',
    tags: ['Contract'],
  },
  {
    role: 'Project Management Officer',
    company: 'United Nations Population Fund (UNFPA)',
    period: 'Nov 2020 — Apr 2022',
    location: 'Indonesia',
    description:
      'Supported KnowledgeHub for Reproductive Health Indonesia. Responsibilities spanned project management, data analysis, report writing, survey design, knowledge management, hiring, budgeting, and community engagement. Donors included DFAT Australia, Government of Japan, and Canada.',
    tags: ['Full-time'],
  },
  {
    role: 'Midwife',
    company: 'Primary Health Care',
    period: 'Aug 2019 — Mar 2020',
    location: 'Malang, East Java, Indonesia',
    description:
      'Delivered reproductive health, family planning, and maternal & neonatal healthcare services across a government hospital, public health centre, and private practice. Managed cold-chain vaccine stocks and initiated a revitalised Integrated Service Post.',
    tags: ['Full-time'],
  },
]

const education = [
  {
    degree: 'MSc Global Healthcare Management (Analytics)',
    school: 'University College London',
    period: 'Sep 2022 — Sep 2023',
  },
  {
    degree: 'Postgraduate Clinical Study of Midwifery — Maternal & Child Health',
    school: 'University of Brawijaya',
    period: 'Sep 2019 — Mar 2021',
  },
  {
    degree: 'Bachelor of Midwifery — Nurse Midwife / Nursing Midwifery',
    school: 'University of Brawijaya',
    period: 'Sep 2015 — Jun 2019',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-[#e5e7eb] dark:border-[#27272a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[13px] font-semibold text-[#2563eb] uppercase tracking-widest mb-3">
            Career
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-[#111111] dark:text-white leading-tight">
            Experience
          </h2>
        </div>

        <div className="relative mb-20">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#e5e7eb] dark:bg-[#27272a] hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="md:pl-10 relative">
                <div className="hidden md:block absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#2563eb] bg-white dark:bg-[#0f0f0f]" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#111111] dark:text-white">{exp.role}</h3>
                    <p className="text-[14px] text-[#6b7280] dark:text-[#9ca3af] mt-0.5">{exp.company}</p>
                    <p className="text-[13px] text-[#9ca3af] dark:text-[#6b7280] mt-0.5">{exp.location}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:shrink-0 sm:items-center">
                    <span className="text-[13px] text-[#9ca3af] dark:text-[#6b7280] whitespace-nowrap">{exp.period}</span>
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-0.5 rounded-full text-[12px] font-medium ${
                          t === 'Current'
                            ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                            : 'bg-[#eff6ff] dark:bg-[#1e2d47] text-[#2563eb] dark:text-[#60a5fa]'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[15px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed max-w-2xl mt-3">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[13px] font-semibold text-[#2563eb] uppercase tracking-widest mb-8">
            Education
          </p>
          <div className="flex flex-col gap-5">
            {education.map((e, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-5 rounded-2xl border border-[#e5e7eb] dark:border-[#27272a] bg-[#fafafa] dark:bg-[#1a1a1a]"
              >
                <div>
                  <p className="text-[15px] font-semibold text-[#111111] dark:text-white">{e.degree}</p>
                  <p className="text-[14px] text-[#6b7280] dark:text-[#9ca3af] mt-0.5">{e.school}</p>
                </div>
                <span className="text-[13px] text-[#9ca3af] dark:text-[#6b7280] shrink-0">{e.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
