import { SurahsResponse, SurahDetailsResponse } from "@/types/surah";

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

export async function getSurah(
  id: string,
  page: number = 1,
  limit: number = 10,
  q: string = ""
): Promise<SurahDetailsResponse> {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/surahs/${id}?page=${page}&limit=${limit}${q ? `&q=${encodeURIComponent(q)}` : ""}`;

  try {
    const res = await fetch(url, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch surah ${id} data.`);
    }

    return await res.json();
  } catch (error) {
    console.error(`Error fetching surah ${id}:`, error);
    throw new Error(`Unable to fetch surah ${id} at this time.`);
  }
}
