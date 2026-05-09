const categories = [
  {
    title: 'Health Domain',
    skills: [
      'Global Health',
      'Health System Strengthening',
      'Maternal, Child and Reproductive Health',,
      'Health Informatics',
      'Health Economics',
      'Epidemiology',
      'Health Policy',
    ],
  },
  {
    title: 'Analytics & Tools',
    skills: [
      'Tableau',
      'R (Statistical Computing)',
      'SPSS',
      'Microsoft Excel',
      // 'Python',
      // 'SQL',
      // 'Looker Studio',
      'Figma',
    ],
  },
  {
    title: 'Skills',
    skills: [
      'Health Data Analytics',
      'Data Visualization',
      'Research and Project Management',
      'Stakeholder Engagement',
      'Community Engagement',
      'Donor Reporting',
      'Report Writing',
      'Strategic Planning',
      'Government Relations',
      'Slide Deck Pitching',
      'Scientific Writing',
    ],
  },
]

const certifications = [
  { label: 'Registered Midwife', issuer: 'Indonesian Midwifery Board' },
  { label: 'Learning R', issuer: 'LinkedIn Learning' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[#e6d8cf] dark:border-[#3a2010] bg-[#f5ece5] dark:bg-[#1a1007]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[13px] font-semibold text-[#c45820] uppercase tracking-widest mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-[#344960] dark:text-white leading-tight">
            Skills &amp; Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-[#fbf3ee] dark:bg-[#241509] rounded-2xl border border-[#e6d8cf] dark:border-[#3a2010] p-7"
            >
              <h3 className="text-[15px] font-semibold text-[#344960] dark:text-white mb-5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg border border-[#e6d8cf] dark:border-[#3a2010] text-[13px] text-[#4a3b33] dark:text-[#d4c1b3] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#fbf3ee] dark:bg-[#241509] rounded-2xl border border-[#e6d8cf] dark:border-[#3a2010] p-7">
          <h3 className="text-[15px] font-semibold text-[#344960] dark:text-white mb-5">
            Certifications &amp; Credentials
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((c) => (
              <div key={c.label} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#c45820] shrink-0" />
                <div>
                  <p className="text-[14px] font-medium text-[#344960] dark:text-white">{c.label}</p>
                  <p className="text-[12px] text-[#a89587] mt-0.5">{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
