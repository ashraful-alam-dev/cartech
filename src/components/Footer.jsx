function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-400 pt-8 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">

          <div className="w-full flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-amber-500/50 font-bold">
            <p>© {currentYear} CarTech Automotive Group</p>
            
            {/*Dummy button*/}
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Cookies</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer