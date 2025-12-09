import { useState } from "react";
import { products } from "../data/data";
import Search from "../components/Search";
import ProductList from "../components/productList";


export default function productSearchPage() {
    
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    Product Search
                </h1>

                <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />

                <div className="mb-4 text-sm text-gray-600">
                    Showing {filteredProducts.length} of {products.length} products
                </div>

                <ProductList products={filteredProducts} />
            </div>
        </div>
    );
}