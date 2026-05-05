'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: 'Tự Động Hóa Công Việc',
    description: 'Giải phóng đôi tay của bạn. Hệ thống tự động làm nhiệm vụ, cày cuốc liên tục không ngừng nghỉ.',
  },
  {
    title: 'Tối Ưu Hóa Đa Luồng',
    description: 'Vận hành mượt mà, thuật toán tối ưu CPU và RAM tối đa để giảm tải cho dàn máy.',
  },
  {
    title: 'Quản Lý Cụm Dễ Dàng',
    description: 'Theo dõi tiến trình, nhận báo cáo lỗi tự động và điều khiển toàn bộ dàn máy farm của bạn một cách trực quan.',
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const previous = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
  }

  return (
    <section id="features" className="relative w-full min-h-[500px] flex items-center justify-center bg-gradient-to-b from-card to-background overflow-hidden">
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              {slides[current].title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance">
              {slides[current].description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={previous}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoPlay(false)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current
                ? 'bg-primary w-8'
                : 'bg-muted hover:bg-muted-foreground'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        :global(.animate-fade-in) {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  )
}
