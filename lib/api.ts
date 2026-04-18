import { SurahsResponse } from "@/types/surah";

export async function getSurahs(page: number = 1, limit: number = 10): Promise<SurahsResponse> {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/surahs?page=${page}&limit=${limit}`;

  try {
    const res = await fetch(url, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch surahs data.");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching surahs:", error);
    // Return a structured error response or rethrow
    throw new Error("Unable to fetch surahs at this time.");
  }
}
