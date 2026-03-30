function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-400 pt-4 pb-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">

          <div className="w-full pt-8 border-t border-gray-800/40 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">
            <p>© {currentYear} CarTech Automotive Group</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-400">Privacy</a>
              <a href="#" className="hover:text-gray-400">Terms</a>
              <a href="#" className="hover:text-gray-400">Cookies</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer