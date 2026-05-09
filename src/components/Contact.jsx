import { Mail, Send, ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-[#e6d8cf] dark:border-[#3a2010] bg-[#f5ece5] dark:bg-[#1a1007]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[13px] font-semibold text-[#c45820] uppercase tracking-widest mb-4">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-[#344960] dark:text-white leading-tight mb-5">
            Let's connect
          </h2>
          <p className="text-[16px] text-[#8c7b6e] dark:text-[#a89587] leading-relaxed mb-10">
            Interested in collaborating on health programmes, research, or
            policy work? I'd love to hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <a
              href="mailto:intaanwc@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#c45820] text-white text-[15px] font-medium hover:bg-[#a84818] transition-colors"
            >
              <Mail size={17} /> intaanwc@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/intan-wahyu-cahyani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#e6d8cf] dark:border-[#3a2010] bg-[#fbf3ee] dark:bg-[#241509] text-[#344960] dark:text-white text-[15px] font-medium hover:border-[#d4c1b3] dark:hover:border-[#4a2e18] transition-colors"
            >
              <ExternalLink size={17} /> LinkedIn
            </a>
          </div>

          <div className="border-t border-[#e6d8cf] dark:border-[#3a2010] pt-10">
            <p className="text-[14px] text-[#a89587] dark:text-[#8c7b6e] mb-5">Or send a quick message</p>

            <form className="flex flex-col gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-[#e6d8cf] dark:border-[#3a2010] bg-[#fbf3ee] dark:bg-[#241509] text-[14px] text-[#344960] dark:text-white placeholder:text-[#a89587] focus:outline-none focus:border-[#c45820] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl border border-[#e6d8cf] dark:border-[#3a2010] bg-[#fbf3ee] dark:bg-[#241509] text-[14px] text-[#344960] dark:text-white placeholder:text-[#a89587] focus:outline-none focus:border-[#c45820] transition-colors"
                />
              </div>
              <textarea
                rows={4}
                placeholder="What would you like to discuss?"
                className="w-full px-4 py-3 rounded-xl border border-[#e6d8cf] dark:border-[#3a2010] bg-[#fbf3ee] dark:bg-[#241509] text-[14px] text-[#344960] dark:text-white placeholder:text-[#a89587] focus:outline-none focus:border-[#c45820] transition-colors resize-none"
              />
              <button
                type="submit"
                className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#344960] dark:bg-[#fbf3ee] text-white dark:text-[#344960] text-[14px] font-medium hover:bg-[#263748] dark:hover:bg-[#f0e6de] transition-colors"
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
