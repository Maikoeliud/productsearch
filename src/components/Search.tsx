interface SearchProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

export default function Search({ searchTerm, onSearchChange }:SearchProps) {
    return (
        <div className="mb-6">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
        </div>
    );
}
