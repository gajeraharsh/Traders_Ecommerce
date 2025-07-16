import SearchPage from "@/components/SearchPage";

export const dynamic = 'force-dynamic';

export default function page({ searchParams }: { searchParams: { q?: string } }) {
  
  return <SearchPage searchParams={searchParams} />
}
