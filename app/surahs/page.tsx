import { getSurahs } from "@/lib/api";
import { SurahList } from "@/components/surah/surah-list";
import { Pagination } from "@/components/surah/pagination";

export const revalidate = 3600;

export default async function SurahsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const page = typeof params.page === "string" ? parseInt(params.page, 10) : 1;
  const limit = 20;

  const response = await getSurahs(page, limit);

  if (!response?.success) {
    throw new Error("Failed to load surahs data.");
  }

  const { items, pagination } = response.data;

  return (
    <div className=" mx-auto px-4 py-12 md:py-16 max-w-screen-2xl">
      <header className="mb-12 text-center md:text-left space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
          Surah Overview
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Explore the chapters of the Holy Quran, featuring translations, transliterations, and detailed context.
        </p>
      </header>

      <SurahList surahs={items} />

      {pagination.totalPages > 1 && (
        <div className="mt-8">
          <Pagination pagination={pagination} />
        </div>
      )}
    </div>
  );
}
