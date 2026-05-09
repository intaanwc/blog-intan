import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../lib/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-[#e6d8cf] dark:border-[#3a2010]">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-[13px] font-semibold text-[#c45820] uppercase tracking-widest mb-3">
              Key initiatives
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-[#344960] dark:text-white leading-tight">
              Portfolio Projects
            </h2>
          </div>
          <a
            href="https://www.linkedin.com/in/intan-wahyu-cahyani"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-[14px] text-[#8c7b6e] dark:text-[#a89587] hover:text-[#344960] dark:hover:text-white transition-colors"
          >
            Full profile <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map(({ slug, frontmatter: fm }) => (
            <Link
              key={slug}
              to={`/projects/${slug}`}
              className="group rounded-2xl border border-[#e6d8cf] dark:border-[#3a2010] bg-[#fbf3ee] dark:bg-[#241509] overflow-hidden hover:border-[#d4c1b3] dark:hover:border-[#4a2e18] hover:shadow-sm transition-all duration-200"
            >
              {fm.image && (
                <img
                  src={fm.image}
                  alt={fm.title}
                  className="h-40 w-full object-cover"
                />
              )}

              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-[#344960] dark:text-white group-hover:text-[#c45820] transition-colors mb-3">
                  {fm.title}
                </h3>
                <p className="text-[14px] text-[#8c7b6e] dark:text-[#a89587] leading-relaxed mb-5 line-clamp-3">
                  {fm.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(fm.tags ?? []).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#f0e6de] dark:bg-[#3a2010] text-[12px] font-medium text-[#4a3b33] dark:text-[#d4c1b3]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
