import { formatCurrency } from "@/lib/fomat"
import type { ProductDTO } from "../dtos/product.dto"
import noProduct from '@/assets/no-product.svg'

type ProductCardProps = {
    product: ProductDTO
}

export function ProductCard({product}: ProductCardProps) {

    return (
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 transition-colors hover:border-[#d86a2c]">

            <div className="aspect-4/3 overflow-hidden bg-muted">
                <img src={product.picture ?? noProduct}
                className="size-full object-cover"/>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="font-menu text-lg font-semibold uppercase leading-tight tracking-tight ">
                    {product.name}
                </h3>
            </div>

            {product.description && (
                <p className="line-clamp-2 text-sm text-muted-foreground">
                    {product.description}
                </p>
            )}

            <span className="mt-auto font-menu text-lg font-bold text-[#b86a2c]">
                {formatCurrency(product.price)}
            </span>
            
        </div>
    )
}