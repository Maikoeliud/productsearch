import type { Product } from '../types/product';

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    if (products.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                No products found matching your search.
            </div>
        );
    }

    return (
        <div className="grid gap-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {product.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                        </div>
                        <span className="text-lg font-bold text-blue-600">
                            ${product.price}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}