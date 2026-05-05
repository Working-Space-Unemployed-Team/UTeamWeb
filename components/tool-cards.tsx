import { tools } from '@/lib/tools-data'
import { ProductCard } from './product-card'

export function ToolCards() {
  return (
    <section id="tools" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Sản Phẩm Tự Động Hóa Nổi Bật
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Khám phá các công cụ tự động hóa cao cấp giúp bạn tiết kiệm thời gian và tối đa hóa hiệu suất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <ProductCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  )
}
