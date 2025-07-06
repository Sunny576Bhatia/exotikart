import { useState } from "react";
import { productsData } from "../data/products";
import { useRouter } from 'next/router';

export default function HomePage() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">ExotiKart</h1>
      <p className="text-center text-lg mb-8">
        Unique global products delivered straight from India & China to North America.
      </p>
      <input
        type="text"
        placeholder="Search furniture, kayaking, tandoors..."
        className="border p-2 mb-6 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md p-4">
            <img src={product.imageUrl} alt={product.name} className="rounded-xl mb-4 h-40 w-full object-cover" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.category}</p>
            <p className="text-lg font-bold mb-4">{product.price}</p>
            <button onClick={() => router.push(`/product/${product.id}`)} className="bg-blue-600 text-white py-2 px-4 rounded w-full">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
