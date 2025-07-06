import { useRouter } from 'next/router';
import { productsData } from '../../data/products';

export default function ProductPage() {
  const { query } = useRouter();
  const product = productsData.find(p => p.id === query.id);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className="rounded-xl mb-4 w-full max-h-[400px] object-cover" />
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-xl font-bold mb-4">Price: {product.price}</p>
      <a href={product.supplierUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
        View Supplier Info
      </a>
      <br />
      import Link from 'next/link';
      <Link href="/checkout/">Order Now</Link> className="mt-4 inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
        Order Now
      </a>
    </div>
  );
}
