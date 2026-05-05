import { Header } from '@/components/header'
import { HeroCarousel } from '@/components/hero-carousel'
import { ToolCards } from '@/components/tool-cards'
import { PoliciesSection } from '@/components/policies-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <ToolCards />
        <PoliciesSection />
      </main>
      <Footer />
    </div>
  )
}
