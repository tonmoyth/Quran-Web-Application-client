export interface Surah {
  id: number;
  name: string; // Arabic name
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: "Meccan" | "Medinan";
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface SurahsResponse {
  success: boolean;
  data: {
    items: Surah[];
    pagination: Pagination;
  };
}

export interface Ayah {
  number: number;
  numberInSurah: number;
  text: string;
  translation: string;
  juz: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

export interface SurahDetails extends Surah {
  ayahs: Ayah[];
}

export interface SurahDetailsResponse {
  success: boolean;
  data: SurahDetails & {
    pagination: Pagination;
  };
}
