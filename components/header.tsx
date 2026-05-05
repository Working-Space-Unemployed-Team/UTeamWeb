'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navLinks = [
  { label: 'Tính năng', hash: 'features' },
  { label: 'Sản phẩm', hash: 'tools' },
  { label: 'Chính sách', hash: 'policies' },
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    // If we're on the homepage, do smooth scroll
    if (pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    // Otherwise, let the browser navigate to /#hash
  }

  const renderNav = () => (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <a
          key={link.hash}
          href={`/#${link.hash}`}
          onClick={(e) => handleNavClick(e, link.hash)}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <img 
              src="https://res.cloudinary.com/dkrrib3mb/image/upload/v1775490962/logo_remove_background_fl6k7i.png" 
              alt="Unemployed Team Logo" 
              className="w-8 h-8 object-contain"
            />
            Unemployed Team
          </Link>
          {renderNav()}
          <div className="w-10 h-10" />
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          <img 
            src="https://res.cloudinary.com/dkrrib3mb/image/upload/v1775490962/logo_remove_background_fl6k7i.png" 
            alt="Unemployed Team Logo" 
            className="w-8 h-8 object-contain"
          />
          Unemployed Team
        </Link>
        {renderNav()}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-card hover:bg-muted transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  )
}
