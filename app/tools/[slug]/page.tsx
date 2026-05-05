import { getToolBySlug } from '@/lib/tools-data'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { PricingCard } from '@/components/pricing-card'

interface ToolDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ToolDetailPageProps) {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  
  if (!tool) {
    return {
      title: 'Không tìm thấy sản phẩm',
    }
  }

  return {
    title: `${tool.name} | Unemployed Team`,
    description: tool.fullDescription,
  }
}

export default async function ToolDetailPage({ params }: ToolDetailPageProps) {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    notFound()
  }

  return (
    <div className="w-full">
      {/* Back Button */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/#tools">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Quay lại danh sách sản phẩm
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Video Section */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              {tool.name}
            </h1>
            <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${tool.demoVideoId}?autoplay=1&controls=1`}
                title={`${tool.name} Demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Về Sản Phẩm Này</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {tool.fullDescription}
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="max-w-xl mx-auto w-full">
            <PricingCard tool={tool} />
          </div>

          {/* Setup Guides Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Hướng Dẫn Cài Đặt</h2>
              <p className="text-muted-foreground">
                Làm theo các hướng dẫn sau để bắt đầu với {tool.name}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tool.setupGuides.map((guide, guideIndex) => (
                <div
                  key={guide.id}
                  className="group p-6 rounded-lg bg-card border border-muted/20 hover:border-muted/40 transition-all duration-300 hover:shadow-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary">{guideIndex + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {guide.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {guide.description}
                    </p>
                    <a
                      href={guide.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors pt-2"
                    >
                      Xem trên YouTube
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
