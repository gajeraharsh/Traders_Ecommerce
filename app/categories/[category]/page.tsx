import ClientCategoryPage from "@/components/ClientCategoryPage";

export default function CategoryPageWrapper({ params }: { params: { category: string } }) {
  return <ClientCategoryPage params={params} />;
}

export async function generateStaticParams() {
  const categories = ['electronics', 'fashion', 'beauty', 'home-living'];
  return categories.map((category) => ({ category }));
}
