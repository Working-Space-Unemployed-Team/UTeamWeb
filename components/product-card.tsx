import Image from 'next/image'
import Link from 'next/link'
import { Tool, getLowestPrice } from '@/lib/tools-data'

interface ProductCardProps {
  tool: Tool
}

export function ProductCard({ tool }: ProductCardProps) {
  const lowestPrice = getLowestPrice(tool.pricing)

  return (
    <Link href={`/tools/${tool.slug}`}>
      <div className="group cursor-pointer h-full">
        <div className="relative overflow-hidden rounded-lg bg-card border border-muted/20 transition-all duration-300 hover:border-muted/40 hover:shadow-lg hover:scale-105">
          {/* Product Image */}
          <div className="relative w-full h-48 overflow-hidden bg-muted">
            <img
              src={tool.image}
              alt={tool.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Product Info */}
          <div className="p-5 space-y-4">
            {/* Title */}
            <div>
              <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
                {tool.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                {tool.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pt-4 border-t border-muted/20">
              <div>
                <p className="text-xs text-muted-foreground">Giá từ</p>
                <p className="text-2xl font-bold text-foreground">
                  ${lowestPrice.toFixed(2)}
                </p>
              </div>

              {/* View Details Button */}
              <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm group-hover:bg-primary/90 transition-colors duration-300">
                Xem chi tiết
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
