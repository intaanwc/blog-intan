import { Mail, Send, ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-[#e5e7eb] dark:border-[#27272a] bg-[#fafafa] dark:bg-[#111111]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[13px] font-semibold text-[#2563eb] uppercase tracking-widest mb-4">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-[#111111] dark:text-white leading-tight mb-5">
            Let's connect
          </h2>
          <p className="text-[16px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed mb-10">
            Interested in collaborating on health programmes, research, or
            policy work? I'd love to hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <a
              href="mailto:intaanwc@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2563eb] text-white text-[15px] font-medium hover:bg-[#1d4ed8] transition-colors"
            >
              <Mail size={17} /> intaanwc@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/intan-wahyu-cahyani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#e5e7eb] dark:border-[#27272a] bg-white dark:bg-[#1a1a1a] text-[#111111] dark:text-white text-[15px] font-medium hover:border-[#d1d5db] dark:hover:border-[#3f3f46] transition-colors"
            >
              <ExternalLink size={17} /> LinkedIn
            </a>
          </div>

          <div className="border-t border-[#e5e7eb] dark:border-[#27272a] pt-10">
            <p className="text-[14px] text-[#9ca3af] dark:text-[#6b7280] mb-5">Or send a quick message</p>

            <form className="flex flex-col gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] dark:border-[#27272a] bg-white dark:bg-[#1a1a1a] text-[14px] text-[#111111] dark:text-white placeholder:text-[#9ca3af] focus:outline-none focus:border-[#2563eb] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] dark:border-[#27272a] bg-white dark:bg-[#1a1a1a] text-[14px] text-[#111111] dark:text-white placeholder:text-[#9ca3af] focus:outline-none focus:border-[#2563eb] transition-colors"
                />
              </div>
              <textarea
                rows={4}
                placeholder="What would you like to discuss?"
                className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] dark:border-[#27272a] bg-white dark:bg-[#1a1a1a] text-[14px] text-[#111111] dark:text-white placeholder:text-[#9ca3af] focus:outline-none focus:border-[#2563eb] transition-colors resize-none"
              />
              <button
                type="submit"
                className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-[14px] font-medium hover:bg-[#1f2937] dark:hover:bg-[#f3f4f6] transition-colors"
              >
                <Send size={15} /> Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
