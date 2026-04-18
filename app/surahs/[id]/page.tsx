import { Metadata } from "next";
import { getSurah } from "@/lib/api";
import { SurahHeader } from "@/components/surah-details/surah-header";
import { SearchBar } from "@/components/surah-details/search-bar";
import { AyahList } from "@/components/surah-details/ayah-list";
import { DetailsPagination } from "@/components/surah-details/pagination";

export async function generateStaticParams() {
  // Generate static pages for all 114 Surahs
  return Array.from({ length: 114 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  try {
    const surahResponse = await getSurah(id, 1, 1); // minimal fetch for metadata
    const surah = surahResponse.data;
    return {
      title: `${surah.englishName} (${surah.name}) | Quran Explorer`,
      description: `Read and explore Surah ${surah.englishName} online with translation.`,
    };
  } catch {
    return {
      title: "Surah Details | Quran Explorer",
    };
  }
}

export default async function SurahDetailsPage(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const page = typeof searchParams.page === "string" ? parseInt(searchParams.page, 10) : 1;
  const q = typeof searchParams.q === "string" ? searchParams.q : undefined;
  
  // Hardcoded limit for pagination as per design requirements
  const limit = 10;

  const response = await getSurah(params.id, page, limit, q);
  const surah = response.data;
  const ayahs = surah.ayahs;
  const pagination = response.data.pagination;

  return (
    <div className="relative min-h-screen bg-background">
      <SurahHeader surah={surah} />
      
      <div className="container mx-auto px-4 pb-16">
        <SearchBar />
        
        <AyahList ayahs={ayahs} searchQuery={q} />
        
        <DetailsPagination 
          pagination={pagination} 
          surahId={params.id} 
          searchQuery={q} 
        />
      </div>
    </div>
  );
}
