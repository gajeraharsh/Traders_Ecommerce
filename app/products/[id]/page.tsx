// app/products/[id]/page.tsx

import ProductDetailPage from "@/components/ProductDetailPage";

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetailPage params={params} />;
}

export async function generateStaticParams() {
  const productIds = ['1', '2', '3', '4', '5'];

  return productIds.map((id) => ({
    id,
  }));
}
