import type { ProductDTO } from "../dtos/product.dto";
import { useProducts } from "../hooks/use-product"
import { ProductCard } from "./product-card";

type ProductListProps ={
    categoryId?: string
}

export function ProductList({categoryId}:ProductListProps){
    const {data: products = [], isLoading} = useProducts(categoryId);
    
    return(
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product: ProductDTO) => (
                <li key={product.id}>
                    {isLoading ? (
                        <span>
                            Carregando
                        </span>
                    ) : (
                        <ProductCard product={product} />
                    )}
                    
                </li>
            ))}

        </ul>
    )
}