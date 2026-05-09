import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Sun, Moon } from 'lucide-react'
import { getProjectBySlug } from '../lib/projects'

export default function ProjectPost({ dark, toggle }) {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/" replace />

  const { frontmatter: fm, Content } = project

  return (
    <div className="bg-[#fbf3ee] dark:bg-[#150d07] min-h-screen transition-colors duration-300">

      {/* Minimal top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-[#fbf3ee]/80 dark:bg-[#150d07]/80 backdrop-blur-md border-b border-[#e6d8cf]/60 dark:border-[#3a2010]/60">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#8c7b6e] dark:text-[#a89587] hover:text-[#344960] dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={15} />
          Back
        </Link>

        <a
          href="/"
          style={{ fontFamily: "'Playwrite US Trad', cursive" }}
          className="text-[18px] italic text-[#344960] dark:text-white"
        >
          ic
        </a>

        <button
          onClick={toggle}
          aria-label="Toggle dark mode"
          className="p-2 rounded-lg text-[#8c7b6e] dark:text-[#a89587] hover:text-[#344960] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </header>

      {/* Cover banner */}
      <div className="pt-[57px]">
        {fm.image && (
          <img
            src={fm.image}
            alt={fm.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        )}
      </div>

      {/* Article */}
      <article className="max-w-[680px] mx-auto px-6 pt-12 pb-28">

        {/* Label */}
        <p className="text-[13px] font-semibold text-[#c45820] uppercase tracking-widest mb-5">
          {fm.org}
        </p>

        {/* Title */}
        <h1 className="text-[32px] md:text-[44px] font-bold tracking-tight text-[#344960] dark:text-white leading-[1.15] mb-6">
          {fm.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {(fm.tags ?? []).map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-[#f0e6de] dark:bg-[#3a2010] text-[12px] font-medium text-[#4a3b33] dark:text-[#d4c1b3]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="border-t border-[#e6d8cf] dark:border-[#3a2010] mb-10" />

        {/* MDX body */}
        <div className="post-prose">
          <Content />
        </div>

        {/* Footer nav */}
        <div className="border-t border-[#e6d8cf] dark:border-[#3a2010] mt-16 pt-8 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#c45820] hover:text-[#a84818] transition-colors"
          >
            <ArrowLeft size={15} /> Back to portfolio
          </Link>
          <span
            style={{ fontFamily: "'Playwrite US Trad', cursive" }}
            className="text-[16px] italic text-[#a89587] dark:text-[#8c7b6e]"
          >
            ic
          </span>
        </div>

      </article>
    </div>
  )
}
