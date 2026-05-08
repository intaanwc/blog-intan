import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const links = [
  { label: 'Initiatives', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, onToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className={`max-w-4xl mx-auto rounded-2xl border transition-all duration-300 ${scrolled
            ? 'bg-white/55 dark:bg-black/45 backdrop-blur-xl border-white/50 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
            : 'bg-white/25 dark:bg-black/15 backdrop-blur-md border-white/40 dark:border-white/10'
          }`}
      >
        <div className="px-5 h-14 flex items-center justify-between">
          <a
            href="#"
            style={{ fontFamily: "'Playwrite US Trad', cursive" }}
            className="text-[18px] italic text-[#111111] dark:text-white"
          >
            ic
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111111] dark:hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onToggle}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111111] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-[#2563eb] text-white text-[14px] font-medium hover:bg-[#1d4ed8] transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onToggle}
              aria-label="Toggle dark mode"
              className="p-2 text-[#6b7280] dark:text-[#9ca3af]"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              className="p-2 text-[#6b7280] dark:text-[#9ca3af]"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <div className={`w-5 h-0.5 bg-current mb-1.5 transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-5 h-0.5 bg-current mb-1.5 transition-opacity ${open ? 'opacity-0' : ''}`} />
              <div className={`w-5 h-0.5 bg-current transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/40 dark:border-white/10 px-5 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[15px] text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111111] dark:hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#2563eb] text-white text-[14px] font-medium"
            >
              Get in touch
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
