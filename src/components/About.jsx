const awards = [
  'First Winner — Most Outstanding Student, Universitas Brawijaya',
  'Top 10 Indonesian Most Outstanding Student',
  'Oral Presenter, International Health Congress',
  'Winner, APRU International Population Aging Conference',
  'Oral Presenter, International Conference on Medical and Health Sciences',
]

const languages = [
  { lang: 'Indonesian', level: 'Native' },
  { lang: 'Javanese', level: 'Native' },
  { lang: 'English', level: 'Professional' },
  { lang: 'Japanese', level: 'Elementary' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-[#e6d8cf] dark:border-[#3a2010]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[13px] font-semibold text-[#c45820] uppercase tracking-widest mb-4">
              About me
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight tracking-tight text-[#344960] dark:text-white mb-6">
              Bridging healthcare &amp; data for real-world impact
            </h2>
            <p className="text-[16px] text-[#8c7b6e] dark:text-[#a89587] leading-relaxed mb-4">
              With a Master of Science in Global Healthcare Management
              (Analytics) from University College London and a background in midwifery and maternal
              and child health, I bring a strong foundation in healthcare
              management, health informatics, health economics, and health data
              analytics.
            </p>
            <p className="text-[16px] text-[#8c7b6e] dark:text-[#a89587] leading-relaxed mb-10">
              My academic and professional journey reflects a commitment to
              advancing healthcare solutions through data-driven insights and
              evidence-based strategies — particularly in maternal and child
              health across Indonesia and globally.
            </p>

            <div className="pt-8 border-t border-[#e6d8cf] dark:border-[#3a2010]">
              <p className="text-[13px] font-semibold text-[#344960] dark:text-white uppercase tracking-widest mb-4">
                Languages
              </p>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((l) => (
                  <div key={l.lang} className="flex items-center justify-between px-4 py-3 rounded-xl border border-[#e6d8cf] dark:border-[#3a2010] bg-[#f5ece5] dark:bg-[#241509]">
                    <span className="text-[14px] font-medium text-[#344960] dark:text-white">{l.lang}</span>
                    <span className="text-[12px] text-[#a89587] dark:text-[#8c7b6e]">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="aspect-[4/3] rounded-2xl bg-[#f0e6de] dark:bg-[#241509] border border-[#e6d8cf] dark:border-[#3a2010] overflow-hidden flex items-center justify-center text-[#d4c1b3] dark:text-[#4a2e18]">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <div className="rounded-2xl border border-[#e6d8cf] dark:border-[#3a2010] bg-[#fbf3ee] dark:bg-[#241509] p-6">
              <p className="text-[13px] font-semibold text-[#344960] dark:text-white uppercase tracking-widest mb-4">
                Honours &amp; Awards
              </p>
              <ul className="flex flex-col gap-3">
                {awards.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[14px] text-[#8c7b6e] dark:text-[#a89587] leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c45820] shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
