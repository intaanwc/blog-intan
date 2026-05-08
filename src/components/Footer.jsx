export default function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] dark:border-[#27272a] py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p style={{ fontFamily: "'Playwrite US Trad', cursive" }} className="text-[18px] italic text-[#111111] dark:text-white">ic</p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a
            href="https://www.linkedin.com/in/intan-wahyu-cahyani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#9ca3af] dark:text-[#6b7280] hover:text-[#111111] dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:intaanwc@gmail.com"
            className="text-[13px] text-[#9ca3af] dark:text-[#6b7280] hover:text-[#111111] dark:hover:text-white transition-colors"
          >
            intaanwc@gmail.com
          </a>
        </div>

        <p className="text-[13px] text-[#9ca3af] dark:text-[#6b7280]">
          © {new Date().getFullYear()} Intan Cahyani
        </p>
      </div>
    </footer>
  )
}
