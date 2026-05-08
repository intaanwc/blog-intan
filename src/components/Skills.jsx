const categories = [
  {
    title: 'Health Domain',
    skills: [
      'Health Informatics',
      'Health Economics',
      'Health Policy',
      'Maternal & Child Health',
      'Reproductive Health',
      'Epidemiology',
      'Cold-chain Vaccines',
    ],
  },
  {
    title: 'Analytics & Tools',
    skills: [
      'R (Statistical Computing)',
      'Tableau',
      'Data Analysis',
      'Health Data Analytics',
      'Survey Design',
      'Report Writing',
      'Knowledge Management',
    ],
  },
  {
    title: 'Programme Management',
    skills: [
      'Project Management',
      'Budgeting',
      'Stakeholder Engagement',
      'Community Engagement',
      'Hiring & HR',
      'Donor Reporting',
    ],
  },
]

const certifications = [
  { label: 'Registered Midwife', issuer: 'Indonesian Midwifery Board' },
  { label: 'Learning R', issuer: 'LinkedIn Learning' },
  { label: 'MSc Global Healthcare Management (Analytics)', issuer: 'University College London' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[#e5e7eb] dark:border-[#27272a] bg-[#fafafa] dark:bg-[#111111]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[13px] font-semibold text-[#2563eb] uppercase tracking-widest mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-[#111111] dark:text-white leading-tight">
            Skills &amp; expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-[#e5e7eb] dark:border-[#27272a] p-7"
            >
              <h3 className="text-[15px] font-semibold text-[#111111] dark:text-white mb-5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg border border-[#e5e7eb] dark:border-[#27272a] text-[13px] text-[#374151] dark:text-[#d1d5db] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-[#e5e7eb] dark:border-[#27272a] p-7">
          <h3 className="text-[15px] font-semibold text-[#111111] dark:text-white mb-5">
            Certifications &amp; Credentials
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((c) => (
              <div key={c.label} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#2563eb] shrink-0" />
                <div>
                  <p className="text-[14px] font-medium text-[#111111] dark:text-white">{c.label}</p>
                  <p className="text-[12px] text-[#9ca3af] mt-0.5">{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
