import { useCategories } from "@/cases/categories/hooks/use-category";
import { useSearchParams } from "react-router-dom";

export function ProductPage() {

const [searchParams] = useSearchParams();
     const CategoryId = searchParams.get('categoryId');

     const { data: categories = [] } = useCategories();

     const selectedCategory = categories.find((category) => category.id === CategoryId); 

    return (
        <div className="flex flex-col gap-6">
            {selectedCategory && (
                <>
                    <h2 className="text-2xl font-semibold uppercase">Categoria</h2>
                    <span>{selectedCategory.name}</span>
                </>
            )}
        </div>
    )
}