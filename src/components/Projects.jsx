import { ArrowUpRight } from 'lucide-react'

const initiatives = [
  {
    title: 'Vaccine Program — CHAI',
    org: 'Clinton Health Access Initiative',
    description:
      'Led vaccine programme initiatives across Indonesia as Vaccine Program Officer (2024–2025), then promoted to Program Officer (2026–present). Contributed to impactful healthcare access and immunisation strategies at scale.',
    tags: ['Vaccine Access', 'Program Management', 'Health Policy'],
    color: '#eff6ff',
    darkColor: '#1e2d47',
  },
  {
    title: 'KnowledgeHub for Reproductive Health',
    org: 'United Nations Population Fund (UNFPA)',
    description:
      'Supported the national KnowledgeHub for Reproductive Health Indonesia. Managed project coordination, data analysis, survey design, budgeting, and community engagement. Funded by DFAT Australia, Japan, and Canada.',
    tags: ['Reproductive Health', 'Data Analysis', 'Community Engagement'],
    color: '#f0fdf4',
    darkColor: '#1a2e22',
  },
  {
    title: 'USAID Momentum Private Healthcare Delivery',
    org: 'Jhpiego',
    description:
      'Supported the USAID-funded Momentum Private Healthcare Delivery programme, assisting with programme implementation and monitoring activities across Indonesia.',
    tags: ['USAID', 'Private Sector Health', 'Maternal Health'],
    color: '#faf5ff',
    darkColor: '#271d3a',
  },
  {
    title: 'Primary Healthcare Service Delivery',
    org: 'Primary Health Care — Malang',
    description:
      'Delivered reproductive health, family planning, and maternal & neonatal healthcare services across a government hospital and public health centre. Managed cold-chain vaccine stocks and initiated a revitalised Integrated Service Post.',
    tags: ['Midwifery', 'MCH', 'Cold-chain Vaccines'],
    color: '#fff7ed',
    darkColor: '#2d2010',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-[#e5e7eb] dark:border-[#27272a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-[13px] font-semibold text-[#2563eb] uppercase tracking-widest mb-3">
              Key initiatives
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-[#111111] dark:text-white leading-tight">
              Programmes I've shaped
            </h2>
          </div>
          <a
            href="https://www.linkedin.com/in/intan-wahyu-cahyani"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-[14px] text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111111] dark:hover:text-white transition-colors"
          >
            Full profile <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {initiatives.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-[#e5e7eb] dark:border-[#27272a] bg-white dark:bg-[#1a1a1a] overflow-hidden hover:border-[#d1d5db] dark:hover:border-[#3f3f46] hover:shadow-sm transition-all duration-200"
            >
              <div
                className="h-32 w-full flex flex-col items-center justify-center gap-1 px-6 dark:hidden"
                style={{ backgroundColor: p.color }}
              >
                <p className="text-[12px] font-semibold text-[#9ca3af] uppercase tracking-wider text-center">
                  {p.org}
                </p>
              </div>
              <div
                className="h-32 w-full flex-col items-center justify-center gap-1 px-6 hidden dark:flex"
                style={{ backgroundColor: p.darkColor }}
              >
                <p className="text-[12px] font-semibold text-[#6b7280] uppercase tracking-wider text-center">
                  {p.org}
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-[#111111] dark:text-white group-hover:text-[#2563eb] transition-colors mb-3">
                  {p.title}
                </h3>
                <p className="text-[14px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed mb-5">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#f3f4f6] dark:bg-[#27272a] text-[12px] font-medium text-[#374151] dark:text-[#d1d5db]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
