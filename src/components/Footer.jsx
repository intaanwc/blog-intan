export default function Footer() {
  return (
    <footer className="border-t border-[#e6d8cf] dark:border-[#3a2010] py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p style={{ fontFamily: "'Playwrite US Trad', cursive" }} className="text-[18px] italic text-[#344960] dark:text-white">ic</p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a
            href="https://www.linkedin.com/in/intan-wahyu-cahyani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#a89587] dark:text-[#8c7b6e] hover:text-[#344960] dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:intaanwc@gmail.com"
            className="text-[13px] text-[#a89587] dark:text-[#8c7b6e] hover:text-[#344960] dark:hover:text-white transition-colors"
          >
            intaanwc@gmail.com
          </a>
        </div>

        <p className="text-[13px] text-[#a89587] dark:text-[#8c7b6e]">
          © {new Date().getFullYear()} Intan Cahyani
        </p>
      </div>
    </footer>
  )
}
