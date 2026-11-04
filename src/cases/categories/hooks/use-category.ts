import { useQuery } from '@tanstack/react-query';
import { CategoryService } from "../services/category.service.ts";

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: CategoryService.listAll
  })
}