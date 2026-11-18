import { useQuery } from "@tanstack/react-query";
import { ProductService } from "../services/product.service";

export function useProducts(categoryId?: string) {
  return useQuery({
    queryKey: ['products', categoryId],

    queryFn: () => ProductService.listAll(),

    // a API não filtra por categoria, então o filtro é feito aqui
    select: (products) =>
      categoryId
        ? products.filter((product) => product.category?.id === categoryId)
        : products
  })
}
